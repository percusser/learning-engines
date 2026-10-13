// CONTENT PACK — the only place a product or a source name appears.
// Engine, HUD and mechanics are generic. See ../../content-packs/README.md.
export default {
  id: 'default',
  title: 'The Valve Room',
  version: '1.0.0',
  // The source system whose data volume the customer is cutting (shown on the intro screen).
  product: 'Splunk',
  // Writing rules (Simplified Technical English, see README "Words"): one name for each thing, short sentences,
  // say who does what. Use "works" and "fails", never break/broke/broken. Use the setting names exactly.
  // Volume each mode lets through, as a fraction of a source's full GB/day.
  // Keys must cover every mode id the engine uses: full, filter, sample, cold, drop.
  modeVolume: { full: 1, filter: .55, sample: .25, cold: .15, drop: 0 },
  sources: [
    { id: 'fw',    name: 'Firewall syslog',  gb: 420 },
    { id: 'win',   name: 'Windows events',   gb: 310 },
    { id: 'edr',   name: 'EDR telemetry',    gb: 260 },
    { id: 'cloud', name: 'Cloud audit',      gb: 90  },
    { id: 'vpn',   name: 'VPN auth',         gb: 40  },
    { id: 'proxy', name: 'Proxy / DNS',      gb: 380 },
    { id: 'app',   name: 'App logs',         gb: 210 },
    { id: 'badge', name: 'Badge readers',    gb: 12  },
  ],
  // Consumers. `needs` is what each source must still deliver for the consumer to stay up.
  // `reads` is how it uses the data from each source, shown on its card before the run.
  // It is evidence, never the answer: it must not name a setting. Keys match `needs`.
  lamps: [
    { id: 'brute',   name: 'Brute-force login',  needs: { vpn: ['full', 'filter'],   win: ['full', 'filter'] },
      reads: {
        vpn: 'Counts failed VPN logins for each user over five minutes. It alerts while the attack runs.',
        win: 'Counts failed Windows logons for each user and host over five minutes. It alerts within minutes.',
      } },
    { id: 'lateral', name: 'Lateral movement',   needs: { win: ['full'],            edr: ['full', 'filter'] },
      reads: {
        win: 'Uses the logon type and all detail fields of each Windows logon event. It alerts at once.',
        edr: 'Finds the host and user that opened each new remote session. It alerts within minutes.',
      } },
    { id: 'exfil',   name: 'Data exfiltration',  needs: { proxy: ['full', 'filter'], cloud: ['full', 'filter'] },
      reads: {
        proxy: 'Links each upload from one host to the same destination address over one day. It alerts within one hour.',
        cloud: 'Links each cloud file share or download to the user who did it. It alerts within one hour.',
      } },
    { id: 'beacon',  name: 'Malware beacon',     needs: { proxy: ['full', 'filter'], edr: ['full', 'filter'] },
      reads: {
        proxy: 'Measures the time between repeated connections from one host to one destination address. It alerts within one hour.',
        edr: 'Finds the host behind each repeated connection and checks it for new activity. It alerts within one hour.',
      } },
    { id: 'tail',    name: 'Tailgating',         needs: { badge: ['full', 'filter'], vpn: ['full', 'filter'] },
      reads: {
        badge: 'Compares each badge-in, by user and time, to VPN logins in the same few minutes. It alerts while the person is on site.',
        vpn: 'Finds a VPN login by the same user within minutes of each badge-in. It alerts at once.',
      } },
  ],
  board: { id: 'board', name: 'Operations dashboard', needs: { fw: ['full', 'filter', 'sample'], app: ['full', 'filter', 'sample'] },
    reads: {
      fw: 'Shows firewall traffic per hour on a live chart. It needs the trend, not each event.',
      app: 'Shows app error rates per hour on the same live chart. A steady share of events is enough to show the trend.',
    } },
  tank:  { id: 'tank',  name: 'Audit archive',   needs: { fw: ['full', 'filter', 'cold'], cloud: ['full', 'filter', 'cold'], badge: ['full', 'filter', 'cold'] },
    reads: {
      fw: 'Keeps one year of firewall connections for audits. An auditor asks which host connected to an address on a given day. The answer can take hours.',
      cloud: 'Keeps one year of cloud audit records. An auditor asks which user changed a setting on a given day. The answer can take hours.',
      badge: 'Keeps one year of badge records. An auditor asks who came in on a given day. The answer can take hours.',
    } },
  target: -0.30,
  // The customer's own cut plan. Round one: the learner says what fails before it runs.
  plan: { fw: 'filter', proxy: 'filter', vpn: 'drop', badge: 'drop' },
  turns: 6,
  // `say`: what an SE says in the room, for each alert, the dashboard and the archive; shown after a run (round 1 results and the debrief).
  // `stops`: what each setting does; shown on the cards, the key plate, Help and the debrief.
  say: {
    brute:   'VPN auth is only 40 GB a day. If you drop it, you save little data and this alert fails. Keep it at full. Filter a large source.',
    lateral: 'This alert needs all detail fields of each Windows event. Filter removes detail fields. Keep Windows events at full. Cut data from a different source.',
    exfil:   'You can filter Proxy / DNS. Sample removes 3 of 4 events, so this alert cannot link the uploads.',
    beacon:  'Malware beacons repeat on a timer. Sample removes events, so this alert cannot measure the time. Filter Proxy / DNS. Do not sample it.',
    tail:    'Badge readers are only 12 GB a day. If you drop them, this alert fails. It is the only alert that compares a badge-in to a VPN login.',
    board:   'The dashboard shows trends, so sampled data is enough. Cold storage is too slow for a live chart.',
    tank:    'The archive needs every record, but it does not need them fast. Cold storage is correct for firewall, cloud audit and badge data. Never drop these sources.',
  },
  stops: {
    full:   'Keeps every event and every field.',
    filter: 'Removes noise events and detail fields. Keeps time, host, user and destination address.',
    sample: 'Keeps 1 event in 4, at random.',
    cold:   'Keeps every event in cold storage. A search takes hours.',
    drop:   'Keeps nothing.',
  },
  theme: { pack: 'default' },
};
