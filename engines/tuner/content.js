/*═══════════════════════════════════════════════════════════════════════════
  CONTENT PACK — the only place a product, a vendor or a person is named.
  Engine, HUD and mechanics are generic.
    stations : who can be on the dial. `f` is the position along the glass, 0 to 1.
    phrases  : what the customer says. `src` is the true source. Exactly one
               reframe per phrase has answers:true — the one that answers the
               source rather than the sentence.
    hidden   : the competitor actually in the account.
    theme    : optional. See layers/theme/registry.ts for the pack contract;
               tuner/index.html has its own tiny registry (no build step to
               import that .ts from), following the same shape.
═══════════════════════════════════════════════════════════════════════════*/
export default {
  id: 'default',
  title: 'The Tuner',
  version: '1.1.0',
  stations: [
    { id:'own', name:"Customer's Own", short:"CUSTOMER'S OWN", f:.045,
      points:'Not a sales pitch. Their own situation: team size, a deadline, an audit, a recent outage.',
      tells:'Specific details. A team name, a measured number, a date, an incident. No vendor words.',
      leaves:'Nothing. These words are theirs.' },
    { id:'dd', name:'Datadog', short:'DATADOG', f:.335,
      points:'Security is one more view of the operations data, moved out of fast search after a short window. Store everything in one place and let any tool look at it there. Detection is a feature any vendor can supply, so choose the monitoring tool your engineers watch every day and let security follow it.',
      tells:'Platform, single pane of glass, commodity SIEM, data lake, a few days of fast search. Putting the operations team in charge of a security choice.',
      leaves:'Detection rules and how analysts work. Data the operations team never collects: logins, factory systems, door access, outside SaaS apps.' },
    { id:'ms', name:'Microsoft Sentinel', short:'MS SENTINEL', f:.615,
      points:'Security comes bundled with the cloud and office software deal the customer has with them. It runs as a hosted service, so there are no servers to look after. Buy everything from one vendor.',
      tells:'Included, native, already licensed, standardize, no infrastructure to manage.',
      leaves:'Which data gets billed once it comes from outside Microsoft. Everything that runs outside their cloud.' },
    { id:'cs', name:'CrowdStrike Falcon Next-Gen SIEM', short:'FALCON NG SIEM', f:.875,
      points:'Their sensor is on every laptop and server already, so security should come from that same sensor under the same contract. Bringing its data in carries no extra charge. SIEM is just a feature of the endpoint product.',
      tells:'One agent, one bill, the endpoint already sees it, no ingest charge, why send it anywhere else.',
      leaves:'Everything the agent cannot see: network, logins, cloud accounts, factory systems, and machines without the agent.' },
  ],
  hidden: 'dd',
  phrases: [
    { text:'Our data lake should be the SIEM. We are already landing everything there, so the tool should just read it.',
      src:'dd', why:'Keeping storage apart from detection is how Datadog builds its product. Listen for "data lake" and "should just read it."',
      reframes:[
        { label:'Name the frame, then test it', line:'That split between storage and detection is a vendor’s design. Which detection mattered most last quarter?', answers:true },
        { label:'Answer the technical point', line:'We can search the lake where it sits, so none of your data has to move anywhere.', answers:false },
        { label:'Agree and work around it', line:'Agreed, the lake is your main record. We can fit our tool around it without changes.', answers:false } ] },
    { text:'We want one agent and one bill.',
      src:'cs', why:'"One agent, one bill" is CrowdStrike’s pitch in five words.',
      reframes:[
        { label:'Ask what the agent cannot see', line:'Who sells that agent? Ask what it can’t see: network, logins, cloud accounts and factory systems.', answers:true },
        { label:'Match on agent count', line:'Our forwarder is one agent too, and we can fold everything into a single contract for you.', answers:false },
        { label:'Follow the biggest footprint', line:'Consolidating makes sense. The vendor with the most agents already installed should probably lead it.', answers:false } ] },
    { text:'SIEM is a commodity now. The platform is what matters.',
      src:'dd', why:'Calling SIEM a commodity makes the weakest part of Datadog’s platform sound unimportant.',
      reframes:[
        { label:'Test the word commodity', line:'Who told you SIEM is a commodity? Name three detections that mattered last quarter, and let’s compare.', answers:true },
        { label:'Argue the differentiators', line:'Our correlation engine and our library of detection content are what set one SIEM apart from another.', answers:false },
        { label:'Let the platform decide', line:'Fair enough. Choose the platform first, and the security tool can simply follow along after that.', answers:false } ] },
    { text:'Our analysts put more hours into tuning rules than into investigating anything.',
      src:'own', why:'A real complaint about their own analysts. No vendor words.',
      reframes:[
        { label:'Stay on their problem', line:'That sounds painful. Walk me through the last rule you tuned and how long it took.', answers:true },
        { label:'Pitch a capability', line:'Our machine learning tools cut most of that tuning work, so your analysts can investigate more.', answers:false },
        { label:'Normalise it', line:'Every SIEM has that problem. Tuning rules is simply part of running any security tool well.', answers:false } ] },
    { text:'Security data is effectively included in the agreement we already signed.',
      src:'ms', why:'"Included" and "already signed" are how Microsoft sells its bundle.',
      reframes:[
        { label:'Unpack the word included', line:'Included for which sources? Which of yours come from that vendor, and who bills for the rest?', answers:true },
        { label:'Correct the licensing detail', line:'The free part covers some built-in connectors. Every other source is billed per gigabyte of data.', answers:false },
        { label:'Accept the agreement', line:'If it is already part of the agreement you signed, that is hard to argue against.', answers:false } ] },
    { text:'We only need the security data hot for a few days. The rest can tier down.',
      src:'dd', why:'A few days of fast search suits a vendor that bills by storage. Real investigations reach further back.',
      reframes:[
        { label:'Ask where the number came from', line:'Who picked a few days? How far back did your last real investigation need to search?', answers:true },
        { label:'Match the tiering story', line:'Our older storage stays searchable too, so moving data down a tier loses you nothing at all.', answers:false },
        { label:'Design to the window', line:'A short window of fast search is standard practice. We can design the whole setup around it.', answers:false } ] },
    { text:'If it shows up in the dashboards our reliability team already lives in, adoption looks after itself.',
      src:'dd', why:'Putting the operations team’s dashboards at the center of a security choice is Datadog’s pitch.',
      reframes:[
        { label:'Ask whose screen it is', line:'The reliability team doesn’t get paged for an attack. What do your security analysts need to see?', answers:true },
        { label:'Offer the integration', line:'We can show the same views inside that tool, so the reliability team keeps its own dashboards.', answers:false },
        { label:'Meet them where they are', line:'Meeting a team where it already works is the safest way to get people to use a tool.', answers:false } ] },
    { text:'The board wants an answer on ransomware readiness by the end of the quarter.',
      src:'own', why:'A board, a quarter, a specific request. Nobody sells a customer their own deadline.',
      reframes:[
        { label:'Work back from their date', line:'That’s a firm date. What does the board need to see, and which answers do you have today?', answers:true },
        { label:'Pitch a capability', line:'Our risk scoring can give the board one readiness number for ransomware before the quarter ends.', answers:false },
        { label:'Reassure and phase it', line:'Everyone is behind on ransomware. A plan in phases over the next year will be fine.', answers:false } ] },
  ],
};
