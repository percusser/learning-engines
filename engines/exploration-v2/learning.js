// ../../layers/learning/attempt.ts
var sequence = 0;
var defaultId = () => `attempt-${Date.now().toString(36)}-${(++sequence).toString(36)}`;
var clone = (value) => structuredClone(value);
var deepFreeze = (value) => {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value)) deepFreeze(child);
  }
  return value;
};
var freeze = (value) => deepFreeze(clone(value));
var emit = (attempt, record) => {
  try {
    const pending = attempt.observer?.(freeze(record));
    if (pending && typeof pending.catch === "function") pending.catch(() => {
    });
  } catch {
  }
};
function createAttempt(input) {
  const attempt = {
    attemptId: input.attemptId || (input.idFactory ?? defaultId)(),
    engineId: input.engineId,
    mode: input.mode,
    scenarioId: input.scenarioId,
    scenarioVersion: input.scenarioVersion,
    records: [],
    observer: input.observer
  };
  emit(attempt, { type: "attempt-started", attemptId: attempt.attemptId, engineId: attempt.engineId, mode: attempt.mode, scenarioId: attempt.scenarioId, scenarioVersion: attempt.scenarioVersion });
  return attempt;
}
function recordDecision(state, record) {
  const attempt = state;
  if (attempt.result) throw new Error("attempt is finalized");
  const key = `${record.decisionId}:${record.revision}`;
  const existing = attempt.records.find((entry) => `${entry.decisionId}:${entry.revision}` === key);
  const ordinal = record.ordinal ?? existing?.ordinal ?? attempt.records.length + 1;
  const candidate = { ...clone(record), attemptId: attempt.attemptId, ordinal };
  if (existing) {
    if (JSON.stringify(existing) === JSON.stringify(candidate)) return existing;
    throw new Error(`conflicting decision record: ${key}`);
  }
  if (ordinal !== attempt.records.length + 1) throw new Error("ordinal must be sequential");
  const committed = freeze(candidate);
  attempt.records.push(committed);
  emit(attempt, { type: "decision-recorded", record: committed });
  return committed;
}
function finishAttempt(state, input) {
  const attempt = state;
  if (attempt.result) return attempt.result;
  const result = {
    attemptId: attempt.attemptId,
    engineId: attempt.engineId,
    mode: attempt.mode,
    scenarioId: attempt.scenarioId,
    scenarioVersion: attempt.scenarioVersion,
    rubricVersion: input.rubricVersion,
    skills: clone(input.skills),
    completion: input.completion,
    missingEvidenceIds: [...input.missingEvidenceIds ?? []],
    followUpRecommendationIds: [...input.followUpRecommendationIds ?? []],
    assistance: input.assistance ?? (attempt.records.some((record) => record.assistance === "coached") ? "coached" : attempt.records.some((record) => record.assistance === "hint") ? "hint" : "none")
  };
  attempt.result = freeze(result);
  emit(attempt, { type: "attempt-finished", result: attempt.result });
  return attempt.result;
}

// ../../layers/learning/review.ts
function buildReview(records, evidence = [], alternatives = []) {
  const evidenceById = new Map(evidence.map((item) => [item.id, item]));
  const chronology = [...records].sort((a, b) => a.ordinal - b.ordinal).map((record) => {
    const describe = (id) => {
      const found = evidenceById.get(id);
      return { id, label: found ? found.claim : "Unknown evidence", known: Boolean(found) };
    };
    const authored = alternatives.find((item) => item.decisionId === record.decisionId);
    return {
      ordinal: record.ordinal,
      decisionId: record.decisionId,
      revision: record.revision,
      actionId: record.selectedActionId,
      assistance: record.assistance,
      evidenceAvailable: record.availableEvidenceIds.map(describe),
      evidenceUsed: record.selectedEvidenceIds.map(describe),
      consequence: record.observedOutcome.consequence ?? null,
      explanation: record.observedOutcome.explanation ?? null,
      nextPracticeId: record.observedOutcome.nextPracticeId ?? null,
      status: record.observedOutcome.status,
      critical: Boolean(record.observedOutcome.critical),
      ...authored ? { alternative: { label: "Authored alternative", actionId: authored.actionId, explanation: authored.explanation } } : {}
    };
  });
  const priority = [...chronology].sort((a, b) => Number(b.critical) - Number(a.critical) || a.ordinal - b.ordinal);
  return { priority, chronology };
}

// ../../layers/learning/retry.ts
function selectRetry(input) {
  const weak = input.outcomes.filter((outcome) => outcome.status === "needs-practice");
  const critical = weak.find((outcome) => outcome.criticalErrorCodes.length > 0) ?? weak[0];
  if (!critical) return { variant: null, reason: "none-available", skillId: null };
  const used = new Set(input.usedVariantIds);
  const variant = input.variants.find((candidate) => candidate.approved && !used.has(candidate.id) && candidate.scenarioVersion === input.scenarioVersion && candidate.productVersion.min <= input.productVersion && (!candidate.productVersion.max || candidate.productVersion.max >= input.productVersion) && candidate.difficulty === input.difficulty && candidate.skillIds.includes(critical.skillId));
  if (variant) return { variant: structuredClone(variant), reason: "approved-variant", skillId: critical.skillId };
  return { variant: null, reason: input.allowIdenticalPractice ? "identical-practice" : "none-available", skillId: critical.skillId };
}

// src/learning.ts
function buildInspectionLearning(input) {
  const mode = input.mode ?? "assessment";
  const assistance = input.assistance ?? "none";
  const version = input.contentVersion ?? "legacy";
  const attempt = createAttempt({
    attemptId: input.attemptId,
    engineId: "exploration-v2",
    mode,
    scenarioId: input.scenarioId ?? "receiving-bay-inspection",
    scenarioVersion: version
  });
  const evidence = input.sites.map((site) => ({
    id: `${site.id}:evidence`,
    sourceId: site.source ?? "legacy-site-observation",
    applicableVersion: { min: site.version ?? version, max: site.version ?? version },
    claim: site.evidence ?? site.name,
    excerpt: site.configuration ? `${site.evidence ?? site.name} Configuration: ${site.configuration}` : site.evidence ?? site.name
  }));
  for (const site of input.sites) {
    if (!site.answered) continue;
    const correct = site.answered === site.correct;
    const falsePositive = Boolean(site.fine && site.answered !== "none");
    const criticalMiss = Boolean(!site.fine && site.correct === "stop" && site.answered !== "stop");
    recordDecision(attempt, {
      decisionId: site.id,
      revision: 0,
      selectedActionId: site.answered,
      availableEvidenceIds: [`${site.id}:evidence`],
      selectedEvidenceIds: [`${site.id}:evidence`],
      skillIds: [site.fine ? "recognize-acceptable-condition" : "proportionate-inspection-response"],
      rubricVersion: "1",
      assistance,
      observedOutcome: {
        id: correct ? "proportionate-response" : falsePositive ? "unnecessary-intervention" : criticalMiss ? "critical-blocker-missed" : "incorrect-response",
        status: correct ? "successful" : "failed",
        critical: criticalMiss,
        consequence: correct ? site.why : falsePositive ? "A safe condition was escalated without need." : criticalMiss ? "Work can continue under a critical blocker." : "The response does not match the authored authority and urgency.",
        explanation: site.why,
        nextPracticeId: correct ? void 0 : "receiving-bay-inspection-variant"
      }
    });
  }
  const skillIds = ["recognize-acceptable-condition", "proportionate-inspection-response"];
  const skills = skillIds.map((skillId) => {
    const records = attempt.records.filter((record) => record.skillIds.includes(skillId));
    const failed = records.filter((record) => record.observedOutcome.status === "failed");
    return {
      skillId,
      status: records.length === 0 ? "unknown" : failed.length ? "needs-practice" : "demonstrated",
      rubricVersion: "1",
      decisionIds: records.map((record) => record.decisionId),
      criticalErrorCodes: failed.filter((record) => record.observedOutcome.critical).map(() => "critical-blocker-missed")
    };
  });
  const result = finishAttempt(attempt, {
    rubricVersion: "1",
    completion: input.sites.every((site) => site.answered) ? "complete" : "partial",
    assistance,
    skills,
    missingEvidenceIds: input.sites.filter((site) => !site.answered).map((site) => `${site.id}:evidence`),
    followUpRecommendationIds: skills.some((skill) => skill.status === "needs-practice") ? ["receiving-bay-inspection-variant"] : []
  });
  const retry = selectRetry({
    variants: input.retryVariants ?? [],
    outcomes: result.skills,
    usedVariantIds: input.usedVariantIds ?? [],
    scenarioVersion: version,
    productVersion: input.sites[0]?.version ?? version,
    difficulty: "standard"
  });
  return { attempt, result, review: buildReview(attempt.records, evidence), retry };
}
export {
  buildInspectionLearning
};
