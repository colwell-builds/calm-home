// ── Package config — update content here, everything else picks it up ──────

export const SITE_NAME = 'Calm Home';
export const SITE_TAGLINE = 'Your home, handled.';
export const SITE_DOMAIN = 'calmhome.io';
export const SITE_DESCRIPTION =
  'Home automation kits built around the moments that matter. Every package includes the hardware, the setup guide, and everything in between.';

export interface Product {
  name: string;
  brand: string;
  spec: string;       // one-line key spec
  price: number;      // retail
  amazonUrl?: string; // affiliate link (add tag once registered)
}

export interface Package {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  price: number;       // total retail value of products
  priceLabel: string;
  hero: string;
  products: Product[];
  includes: string[];  // short bullets for the card
  guideTopics: string[];
  faq: { q: string; a: string }[];
  badge?: string;
  savings?: number;    // bundle savings (Full Calm only)
  featured?: boolean;  // false = explore-only, not shown on homepage
}

export const PACKAGES: Package[] = [
  {
    slug: 'good-neighbor',
    name: 'Good Neighbor',
    tagline: 'Be the neighbor you always meant to be.',
    icon: '🚪',
    price: 479,
    priceLabel: '$479',
    hero: 'Garage closed. Porch light on at the right time. No porch pirates. Door locked. You\'re a good neighbor — and you didn\'t have to think about any of it.',
    products: [
      { name: 'Arlo Video Doorbell 2nd Gen', amazonUrl: 'https://www.amazon.com/s?k=Arlo+Essential+Video+Doorbell+2K+2nd+Generation&tag=calmhome02-20', brand: 'Arlo', spec: '2K HDR · 180° view · wired or battery · Google Home & Alexa', price: 130 },
      { name: 'Schlage Encode Plus Smart WiFi Deadbolt', amazonUrl: 'https://www.amazon.com/s?k=Schlage+Encode+Plus+Smart+WiFi+Deadbolt&tag=calmhome02-20', brand: 'Schlage', spec: 'ANSI Grade 1 · built-in Wi-Fi · 100 access codes · Google, Alexa & HomeKit', price: 250 },
      { name: 'Ring Chime Pro 2nd Gen', amazonUrl: 'https://www.amazon.com/s?k=Ring+Chime+Pro+2nd+Generation&tag=calmhome02-20', brand: 'Ring', spec: 'Indoor doorbell chime · Wi-Fi range extender built in', price: 35 },
      { name: 'Kasa Smart Plug EP25 (2-pack)', amazonUrl: 'https://www.amazon.com/s?k=Kasa+Smart+Plug+EP25+2+pack+energy+monitoring&tag=calmhome02-20', brand: 'Kasa / TP-Link', spec: 'Energy monitoring · porch & exterior light scheduling · Google Home & Alexa', price: 25 },
      { name: 'Calm Home Setup Guide', brand: 'Calm Home', spec: 'Step-by-step install, access codes, automations & app setup', price: 0 },
    ],
    includes: [
      'Arlo Video Doorbell 2K — 2K HDR, 180° view, night vision, two-way audio',
      'Schlage Encode Plus — ANSI Grade 1, 100 access codes, no hub needed',
      'Ring Chime Pro — indoor chime + Wi-Fi extender for the doorbell',
      'Kasa EP25 Smart Plugs (×2) — porch light scheduling & energy monitoring',
      'Calm Home setup guide',
    ],
    guideTopics: [
      'Installing the Arlo doorbell — wired and battery options covered',
      'Replacing your deadbolt with the Schlage Encode Plus',
      'Setting up family, guest, and one-time access codes',
      'Connecting everything to Google Home or Alexa',
      'Automations: porch light on at sunset, auto-lock at 10 PM',
      'Visitor notifications on every phone in the household',
    ],
    faq: [
      { q: 'Does this work with my existing deadbolt?', a: 'The Schlage Encode Plus replaces your existing deadbolt and fits most standard door preps (ANSI/BHMA). The guide includes a door compatibility checklist before you start wrenching anything.' },
      { q: 'Do I need professional installation?', a: 'No. The Arlo doorbell installs in 15 minutes wired or battery. The Schlage lock takes a screwdriver and about 20 minutes. Every step is in the guide.' },
      { q: 'Can I give the dog walker a code without using our main code?', a: 'Yes. The Schlage Encode Plus supports 100 individual access codes with scheduled access windows — so the dog walker can get in at 2 PM weekdays only. The guide covers all of this.' },
      { q: 'Which smart home systems does it support?', a: 'The Arlo doorbell works with Google Home and Alexa. The Schlage Encode Plus adds Apple HomeKit. Full instructions for all three ecosystems included.' },
    ],
  },
  {
    slug: 'safe-kids',
    name: 'Safe Kids',
    tagline: 'Every room. Every kid. Every moment.',
    icon: '🛡️',
    price: 349,
    priceLabel: '$349',
    hero: 'The quiet confidence of knowing where the kids are, what\'s happening at home, and that you\'ll hear about it the second something doesn\'t look right.',
    products: [
      { name: 'TP-Link Tapo C210P2 2K Indoor Camera (2-pack)', amazonUrl: 'https://www.amazon.com/s?k=TP-Link+Tapo+C210P2+2K+Pan+Tilt+Indoor+Security+Camera+2+Pack&tag=calmhome02-20', brand: 'TP-Link Tapo', spec: '2K pan/tilt · local microSD storage · Google Home & Alexa · no subscription needed', price: 65 },
      { name: 'TP-Link Tapo C120 Indoor/Outdoor Camera', amazonUrl: 'https://www.amazon.com/s?k=TP-Link+Tapo+C120+2K+Indoor+Outdoor+Security+Camera&tag=calmhome02-20', brand: 'TP-Link Tapo', spec: '2K · color night vision · motion zones · third room, hallway, or garage', price: 30 },
      { name: 'Aqara Door & Window Sensor P2 (4-pack)', amazonUrl: 'https://www.amazon.com/s?k=Aqara+Door+Window+Sensor+P2+4+pack+Matter&tag=calmhome02-20', brand: 'Aqara', spec: 'Matter certified · instant alerts · front door, back door, garage, windows', price: 80 },
      { name: 'TP-Link Tapo T100 Motion Sensor (2-pack)', amazonUrl: 'https://www.amazon.com/s?k=TP-Link+Tapo+T100+Motion+Sensor+2+pack&tag=calmhome02-20', brand: 'TP-Link Tapo', spec: 'Living areas & hallways · triggers camera recording and phone alerts', price: 30 },
      { name: '64GB SanDisk microSD Card', amazonUrl: 'https://www.amazon.com/s?k=SanDisk+64GB+microSD+card+Class+10&tag=calmhome02-20', brand: 'SanDisk', spec: 'Local camera storage — no cloud subscription required', price: 12 },
      { name: 'Calm Home Setup Guide', brand: 'Calm Home', spec: 'Camera placement map, alert zones, family sharing & privacy modes', price: 0 },
    ],
    includes: [
      'Tapo C210P2 2K cameras (×2) — pan/tilt, local storage, no subscription',
      'Tapo C120 2K camera — third room or covered outdoor use',
      'Aqara Door & Window Sensors (×4) — Matter certified, instant alerts',
      'Tapo T100 Motion Sensors (×2) — hallways & living areas',
      '64GB microSD — free local recording, no monthly fee',
      'Calm Home setup guide',
    ],
    guideTopics: [
      'Choosing the right camera position for each room (coverage map included)',
      'Setting up motion zones — alerts only when it actually matters',
      'Creating family notification groups: right people, right alerts',
      'Configuring local storage so footage is always saved',
      'Privacy mode — cameras off automatically when everyone\'s home',
      'Door & window alerts: know who opened what, and when',
    ],
    faq: [
      { q: 'Do these cameras require a monthly subscription?', a: 'No. All three cameras support local storage on the included 64GB microSD card. Live view, recordings, and motion alerts are all free with no subscription.' },
      { q: 'Can my spouse and I both get alerts?', a: 'Yes. The Tapo app supports multiple accounts with individual notification settings. The guide covers family sharing setup.' },
      { q: 'What\'s the third camera (C120) best used for?', a: 'It\'s our pick for a third interior room, a hallway, or the garage. It also handles light outdoor use under a covered area. The guide includes placement recommendations for all three.' },
      { q: 'Will the door sensors work with Google Home?', a: 'Yes. The Aqara P2 sensors are Matter-certified, which means they work natively with Google Home, Amazon Alexa, Apple HomeKit, and SmartThings.' },
    ],
  },
  {
    slug: 'easy-mornings',
    name: 'Easy Mornings',
    tagline: 'Wake up to a home that\'s already ready.',
    icon: '☀️',
    price: 359,
    priceLabel: '$359',
    hero: 'A home that\'s already at the right temperature when you wake up. One that stops heating empty rooms, quietly saves money while you\'re at work, and eases the lights up before your alarm even goes off.',
    products: [
      { name: 'Ecobee Smart Thermostat Enhanced', amazonUrl: 'https://www.amazon.com/s?k=Ecobee+Smart+Thermostat+Enhanced+EB-STATE6L-01&tag=calmhome02-20', brand: 'Ecobee', spec: 'Learning schedule · room sensor included · Google Home, Alexa & HomeKit · ENERGY STAR', price: 180 },
      { name: 'Ecobee SmartSensor (add-on)', amazonUrl: 'https://www.amazon.com/s?k=Ecobee+SmartSensor+Room+Sensor&tag=calmhome02-20', brand: 'Ecobee', spec: 'Bedroom temperature accuracy · occupancy detection · pairs with thermostat', price: 40 },
      { name: 'Kasa Smart Plug EP25 (4-pack)', amazonUrl: 'https://www.amazon.com/s?k=Kasa+Smart+Plug+EP25+4+pack+energy+monitoring&tag=calmhome02-20', brand: 'Kasa / TP-Link', spec: 'Per-outlet energy monitoring · coffee maker, fans, lamps, space heaters', price: 50 },
      { name: 'Kasa Smart Bulb KL135 (2-pack)', amazonUrl: 'https://www.amazon.com/s?k=Kasa+Smart+Bulb+KL135+tunable+white+color+2+pack&tag=calmhome02-20', brand: 'Kasa / TP-Link', spec: 'Tunable white + color · sunrise alarm simulation · bedroom or kitchen', price: 28 },
      { name: 'Calm Home Setup Guide', brand: 'Calm Home', spec: 'Thermostat wiring guide, schedule templates, plug & light automations', price: 0 },
    ],
    includes: [
      'Ecobee Smart Thermostat Enhanced — learning schedule, ENERGY STAR certified',
      'Ecobee SmartSensor — bedroom temp accuracy + occupancy detection',
      'Kasa EP25 Smart Plugs (×4) — per-outlet energy monitoring',
      'Kasa KL135 Smart Bulbs (×2) — tunable white, sunrise alarm mode',
      'Calm Home setup guide + scheduling templates',
    ],
    guideTopics: [
      'Installing the Ecobee — wiring diagrams for most HVAC systems',
      'Building a heating & cooling schedule around your actual routine',
      'SmartSensor setup so the bedroom is always the right temperature',
      'Energy monitoring: find out what\'s actually costing you money',
      'Sunrise alarm: lights that fade in before your alarm goes off',
      'Away mode + geofencing — stop heating an empty house',
    ],
    faq: [
      { q: 'Will the Ecobee work with my HVAC system?', a: 'The Ecobee Enhanced works with most 24V systems — gas, electric, heat pump, and most radiant setups. The guide includes a wiring check you complete before touching anything.' },
      { q: 'What does the SmartSensor actually do?', a: 'It measures temperature and occupancy in a separate room — typically the bedroom — so the thermostat targets comfort where people actually are, not just where the thermostat is mounted.' },
      { q: 'How much can I realistically save?', a: 'Ecobee\'s own data shows an average of 26% on heating and cooling. The energy monitoring plugs often surface additional savings — appliances running 24/7 that you didn\'t know about.' },
      { q: 'Can I still adjust the temperature manually?', a: 'Yes. The touchscreen works exactly like a standard thermostat. Smart features layer on top; they don\'t replace manual control.' },
    ],
  },
  {
    slug: 'full-calm',
    name: 'Full Calm',
    tagline: 'Everything handled. Nothing to think about.',
    icon: '🏡',
    price: 999,
    priceLabel: '$999',
    badge: 'Best Value',
    savings: 188,
    hero: 'Good Neighbor, Safe Kids, and Easy Mornings — all three kits together, built to work as one system. The front door, the family, the temperature. All of it, handled.',
    products: [
      { name: 'Everything in Good Neighbor', brand: '', spec: 'Arlo 2K Doorbell · Schlage Encode Plus · Ring Chime Pro · Kasa Plugs ×2', price: 440 },
      { name: 'Everything in Safe Kids', brand: '', spec: 'Tapo C210P2 ×2 · Tapo C120 · Aqara Sensors ×4 · Motion Sensors ×2 · 64GB SD', price: 217 },
      { name: 'Everything in Easy Mornings', brand: '', spec: 'Ecobee Enhanced · SmartSensor · Kasa Plugs ×4 · Kasa Bulbs ×2', price: 298 },
      { name: 'TP-Link Tapo Hub H200', amazonUrl: 'https://www.amazon.com/s?k=TP-Link+Tapo+Hub+H200+Smart+Home+Hub+Matter&tag=calmhome02-20', brand: 'TP-Link Tapo', spec: 'Local sensor hub · Matter bridge · faster automations, less cloud dependency', price: 30 },
      { name: 'Calm Home Setup Guide — Full Calm Edition', brand: 'Calm Home', spec: '5 pre-built automation recipes · unified system setup guide', price: 0 },
    ],
    includes: [
      'Everything in Good Neighbor (doorbell, lock, chime, plugs ×2)',
      'Everything in Safe Kids (3 cameras, 4 door sensors, 2 motion, 64GB SD)',
      'Everything in Easy Mornings (thermostat, room sensor, plugs ×4, bulbs ×2)',
      'TP-Link Tapo Hub H200 — local processing, faster automations',
      '5 pre-built automation recipes (morning, away, bedtime, guest, security)',
      'Unified setup guide for all packages',
      'Saves $188 vs. buying the three kits individually',
    ],
    guideTopics: [
      'Day 1: Good Neighbor — doorbell, lock, exterior lights',
      'Day 2: Safe Kids — cameras, sensors, family alert setup',
      'Day 3: Easy Mornings — thermostat, plugs, bulb automations',
      'Day 4: Connect everything — unified Google Home or Alexa setup',
      'The 5 automations: Morning, Away, Bedtime, Guest & Security modes',
      'Long-term: firmware updates, adding devices, troubleshooting',
    ],
    faq: [
      { q: 'Do all these devices actually work together?', a: 'Yes. Every product in Full Calm is selected for cross-compatibility via Google Home and Matter. The guide walks through unified setup as a single connected system, not three separate installs.' },
      { q: 'How long does the full setup take?', a: 'Most households finish over a weekend. The guide is structured as four focused sessions of 1–2 hours each, with checkpoints so you always know where you are.' },
      { q: 'What are the 5 pre-built automation recipes?', a: 'Morning Mode (lights up, heat on, front door unlocked for school), Away Mode (everything off, cameras active), Bedtime Mode (doors locked, lights off, thermostat drops), Guest Mode (temp code, camera privacy), and Security Mode (all sensors active, immediate alerts).' },
      { q: 'What if I already own some of these devices?', a: 'Reach out before ordering — we\'ll build a custom bundle around what you already have so you\'re not paying for duplicates.' },
    ],
  },
];
