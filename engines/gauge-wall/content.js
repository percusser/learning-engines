// Default content pack — the only place a company, a plan or a price appears.
// Real money is on the table in this engine, so money words are allowed here.
export default {
  id: 'default',
  title: 'The Gauge Wall',
  version: '1.0.0',
  company: 'Splunk',            // the vendor whose contract is being billed
  months: 12, known: 7,           // chart columns, and how many are already inked
  overage: 1.5,                   // overage rate as a multiple of the committed rate
  levers: [
    { id:'volume',   name:'Volume',   unit:'GB/day', rate:9,  ink:'#0070F3', range:[400,2600], step:50,
      history:[720,760,790,810,850,870,900], future:[930,1080,2300,2000,1120],
      unitMeans:'GB/day: gigabytes of data indexed per day',
      meters:'Gigabytes indexed per day, averaged over the month.',
      ignores:'Searches, host count, and what the data is for.',
      catch:'Every gigabyte counts, including one-time loads of old data.',
      say:'Volume is steady until the migration. Then old logs more than double the data for two months. Every gigabyte bills.' },
    { id:'workload', name:'Workload', unit:'SVC', rate:80, ink:'#E20082', range:[40,260], step:5,
      history:[92,88,97,90,101,95,100], future:[103,111,125,122,178],
      unitMeans:'SVC: Splunk Virtual Compute, a unit of search and indexing compute',
      meters:'Search and indexing compute, in SVC, averaged over the month.',
      ignores:'Data stored and host count. Old data loads count only for the compute they use.',
      catch:'Scheduled reports, audits and dashboards all use compute.',
      say:'Workload rises slowly. The migration adds a little compute. The audit raises it for one month only.' },
    { id:'entity',   name:'Entity',   unit:'hosts', rate:6,  ink:'#EF8A00', range:[800,2600], step:50,
      history:[1180,1200,1230,1250,1270,1290,1300], future:[1310,1920,1930,1940,1950],
      unitMeans:'hosts: separate machines sending data',
      meters:'Distinct hosts sending data in the month.',
      ignores:'How much each host sends and how much search runs.',
      catch:'A new host counts from the day it connects, every month after.',
      say:'Entity is steady until the new site adds 600 hosts. Those hosts count every month after that. Commit at the old level and every month bills overage.' },
  ],
  // The clipboard. Month is the chart column the plan lands in.
  plans: [
    { month:9,  title:'New site',        note:'A second data center goes live. About 600 new hosts start sending data.' },
    { month:10, until:11, title:'Log migration', note:'They load old logs from their last SIEM. About 1.2 TB a day extra, for two months.' },
    { month:12, title:'Year-end audit',  note:'Reports run every day on every index, for one month.' },
  ],
};
