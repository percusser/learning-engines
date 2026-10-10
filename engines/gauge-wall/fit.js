// How a commitment would have fared against the months already on the chart.
// Reads history only. The months still to run stay hidden until the commitment is locked.
export function pastFit(L, commit) {
  let overMonths = 0, maxOver = 0, underMonths = 0, unusedTotal = 0;
  for (const u of L.history) {
    if (u > commit) { overMonths++; maxOver = Math.max(maxOver, u - commit); }
    else if (u < commit) { underMonths++; unusedTotal += commit - u; }
  }
  return { overMonths, maxOver, underMonths, avgUnused: underMonths ? Math.round(unusedTotal / underMonths) : 0 };
}
