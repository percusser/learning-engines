// CONTENT PACK — the only place a product or a source name appears.
// Engine, HUD and mechanics are generic. See ../../content-packs/README.md.
export default {
  id: 'default',
  title: 'The Valve Room',
  version: '1.0.0',
  // The source system whose data volume the customer is cutting (shown on the intro screen).
  product: 'Splunk',
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
  // `reads` is what the output uses from each source, shown on its card before the run.
  // It is evidence, never the answer: it must not name a setting. Keys match `needs`.
  lamps: [
    { id: 'brute',   name: 'Brute-force login',  needs: { vpn: ['full', 'filter'],   win: ['full', 'filter'] },
      reads: {
        vpn: 'Counts failed VPN logins per user over five minutes, and alerts while the attack is still running.',
        win: 'Counts failed Windows logons per user and host over five minutes, and alerts within minutes.',
      } },
    { id: 'lateral', name: 'Lateral movement',   needs: { win: ['full'],            edr: ['full', 'filter'] },
      reads: {
        win: 'Matches the logon type and the full detail fields of every Windows logon event, as it happens.',
        edr: 'Checks which host and user opened each new remote session, within minutes.',
      } },
    { id: 'exfil',   name: 'Data exfiltration',  needs: { proxy: ['full', 'filter'], cloud: ['full', 'filter'] },
      reads: {
        proxy: 'Links every upload from one host to the same outside address across a day. Flags it within the hour.',
        cloud: 'Matches each cloud file share or download to the user who made it, within the hour.',
      } },
    { id: 'beacon',  name: 'Malware beacon',     needs: { proxy: ['full', 'filter'], edr: ['full', 'filter'] },
      reads: {
        proxy: 'Measures the time between repeated connections from one host to one address, and alerts within the hour.',
        edr: 'Checks the host behind each repeating connection for new activity, within the hour.',
      } },
    { id: 'tail',    name: 'Tailgating',         needs: { badge: ['full', 'filter'], vpn: ['full', 'filter'] },
      reads: {
        badge: 'Matches each badge-in, by user and time, against VPN logins in the same few minutes, while the person is still on site.',
        vpn: 'Looks for a VPN login by the same user within minutes of each badge-in, and alerts at once.',
      } },
  ],
  board: { id: 'board', name: 'Operations board', needs: { fw: ['full', 'filter', 'sample'], app: ['full', 'filter', 'sample'] },
    reads: {
      fw: 'Charts firewall traffic per hour on a live screen. The trend line matters, not each event.',
      app: 'Charts app error rates per hour on the same live screen. A steady share of events shows the trend.',
    } },
  tank:  { id: 'tank',  name: 'Retention tank',   needs: { fw: ['full', 'filter', 'cold'], cloud: ['full', 'filter', 'cold'], badge: ['full', 'filter', 'cold'] },
    reads: {
      fw: 'Holds a year of firewall connections for audits. An auditor asks which host talked to an address on a given day. Answers can take hours.',
      cloud: 'Holds a year of cloud audit records. An auditor asks which user changed a setting on a given day. Answers can take hours.',
      badge: 'Holds a year of badge records. An auditor asks who came in on a given day. Answers can take hours.',
    } },
  target: -0.30,
  // The customer's own cut plan. Round one: the learner calls what it breaks before it runs.
  plan: { fw: 'filter', proxy: 'filter', vpn: 'drop', badge: 'drop' },
  turns: 6,
  // `say`: what an SE says in the room, per output; shown after a run (round 1 results and the debrief).
  // `stops`: what each setting does; shown on the output cards, the key plate, Help and the debrief.
  say: {
    brute:   'VPN auth is only 40 GB a day. Dropping it saves little and blinds brute-force alerts. Keep it full and filter a big source instead.',
    lateral: 'Lateral movement needs every Windows event field. Filtering removes fields its search uses. Cut volume somewhere else.',
    exfil:   'Proxy and DNS can be filtered. Sampling leaves gaps an exfiltration search cannot see across.',
    beacon:  'Malware beacons repeat on a timer. Sampling hides the timing. Filter the proxy feed, never sample it.',
    tail:    'Badge readers are only 12 GB a day. Dropping them kills the one alert that matches a badge-in with a VPN login.',
    board:   'The operations board shows trends, so sampled data works. Cold storage is too slow for it.',
    tank:    'Retention needs complete records, not fast ones. Cold storage fits firewall, cloud audit and badge data. Never drop them.',
  },
  stops: {
    full:   'Indexes every event with every field.',
    filter: 'Cuts noise events and extra fields. Kept events still have time, host, user and the address they reached; other detail fields may be gone.',
    sample: 'Keeps 1 event in 4, picked at random.',
    cold:   'Moves data to cold storage. Every event is kept and searchable, but a search takes hours.',
    drop:   'Stops collecting it. Nothing is kept.',
  },
  theme: { pack: 'default' },
};
