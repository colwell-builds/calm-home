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
    price: 440,
    priceLabel: '$440',
    hero: 'Garage closed. Porch light on at the right time. No porch pirates. Door locked. You\'re a good neighbor — and you didn\'t have to think about any of it.',
    products: [
      { name: 'Arlo Video Doorbell 2nd Gen', amazonUrl: 'https://www.amazon.com/Arlo-Doorbell-Generation-Detection-AVDK4001-100CNS/dp/B0DDRVVJHQ?linkCode=ll2&tag=calmhome02-20&linkId=b7857f9b4d1372c46827305fd1fc71fc&language=en_US&ref_=as_li_ss_tl', brand: 'Arlo', spec: '2K HDR · 180° view · wired or battery · Google Home & Alexa', price: 130 },
      { name: 'Schlage Encode Plus Smart WiFi Deadbolt', amazonUrl: 'https://www.amazon.com/Schlage-Deadbolt-BE489WB-CAM-619/dp/B07HX9GSJM?linkCode=ll2&tag=calmhome02-20&linkId=cf78f27fb84c9f98d31d46d776d7ea5d&language=en_US&ref_=as_li_ss_tl', brand: 'Schlage', spec: 'ANSI Grade 1 · built-in Wi-Fi · 100 access codes · Google, Alexa & HomeKit', price: 250 },
      { name: 'Ring Chime Pro 2nd Gen', amazonUrl: 'https://www.amazon.com/Ring-Chime-Pro/dp/B07WML2XTD?linkCode=ll2&tag=calmhome02-20&linkId=92904628eb3bc4b1f123c209ee5cec0b&language=en_US&ref_=as_li_ss_tl', brand: 'Ring', spec: 'Indoor doorbell chime · Wi-Fi range extender built in', price: 35 },
      { name: 'Kasa Smart Plug EP25 (2-pack)', amazonUrl: 'https://www.amazon.com/Kasa-Smart-Supported-Scheduling-EP25P2/dp/B0CHDCYSW7?linkCode=ll2&tag=calmhome02-20&linkId=f41bca503408c3cac4288731665e3d82&language=en_US&ref_=as_li_ss_tl', brand: 'Kasa / TP-Link', spec: 'Energy monitoring · porch & exterior light scheduling · Google Home & Alexa', price: 25 },
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
    price: 217,
    priceLabel: '$217',
    hero: 'The quiet confidence of knowing where the kids are, what\'s happening at home, and that you\'ll hear about it the second something doesn\'t look right.',
    products: [
      { name: 'TP-Link Tapo C210P2 2K Indoor Camera (2-pack)', amazonUrl: 'https://www.amazon.com/indoor-pet-wifi-camera-tapo/dp/B09Y8C185M?linkCode=ll2&tag=calmhome02-20&linkId=8f2312e36cb751334381f2e062e59f28&language=en_US&ref_=as_li_ss_tl', brand: 'TP-Link Tapo', spec: '2K pan/tilt · local microSD storage · Google Home & Alexa · no subscription needed', price: 65 },
      { name: 'TP-Link Tapo C120 Indoor/Outdoor Camera', amazonUrl: 'https://www.amazon.com/Tapo-cameras-for-home-security/dp/B0CH45HPZT?linkCode=ll2&tag=calmhome02-20&linkId=8a3fe3e5bdc58ec2bfc40f5de017fb8e&language=en_US&ref_=as_li_ss_tl', brand: 'TP-Link Tapo', spec: '2K · color night vision · motion zones · third room, hallway, or garage', price: 30 },
      { name: 'Aqara Door & Window Sensor P2 (4-pack)', amazonUrl: 'https://www.amazon.com/Aqara-Requires-Contact-Automation-Supports/dp/B0BTL8B72D?linkCode=ll2&tag=calmhome02-20&linkId=5e4a409d1a7eee2a1d98ceb4eeb95b7a&language=en_US&ref_=as_li_ss_tl', brand: 'Aqara', spec: 'Matter certified · instant alerts · front door, back door, garage, windows', price: 80 },
      { name: 'TP-Link Tapo T100 Motion Sensor (2-pack)', amazonUrl: 'https://www.amazon.com/TP-Link-Tapo-Sensitivity-Notification-T100/dp/B0BYH66C3S?linkCode=ll2&tag=calmhome02-20&linkId=6ab088f0d1490a445b00959481008d33&language=en_US&ref_=as_li_ss_tl', brand: 'TP-Link Tapo', spec: 'Living areas & hallways · triggers camera recording and phone alerts', price: 30 },
      { name: '64GB SanDisk microSD Card', amazonUrl: 'https://www.amazon.com/SANDISK-Ultra-microSD-UHS-I-SDSQUJQ-064G-GZ6MA/dp/B0G8KLQ64L?linkCode=ll2&tag=calmhome02-20&linkId=0dcac55d505cc079d01218f7b5c458ec&language=en_US&ref_=as_li_ss_tl', brand: 'SanDisk', spec: 'Local camera storage — no cloud subscription required', price: 12 },
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
    price: 298,
    priceLabel: '$298',
    hero: 'A home that\'s already at the right temperature when you wake up. One that stops heating empty rooms, quietly saves money while you\'re at work, and eases the lights up before your alarm even goes off.',
    products: [
      { name: 'Ecobee Smart Thermostat Enhanced', amazonUrl: 'https://www.amazon.com/ecobee-Smart-Thermostat-Enhanced-works/dp/B09XXTQPXC?linkCode=ll2&tag=calmhome02-20&linkId=c2bda7840fff236c1366bf352f8cad1a&language=en_US&ref_=as_li_ss_tl', brand: 'Ecobee', spec: 'Learning schedule · room sensor included · Google Home, Alexa & HomeKit · ENERGY STAR', price: 180 },
      { name: 'Ecobee SmartSensor (add-on)', amazonUrl: 'https://www.amazon.com/s?k=Ecobee+SmartSensor+Room+Sensor&tag=calmhome02-20', brand: 'Ecobee', spec: 'Bedroom temperature accuracy · occupancy detection · pairs with thermostat', price: 40 },
      { name: 'Kasa Smart Plug EP25 (4-pack)', amazonUrl: 'https://www.amazon.com/s?k=Kasa+Smart+Plug+EP25+4+pack&linkCode=ll2&tag=calmhome02-20&linkId=37e1af93dbdf8bf060b9cca6638d8a91&language=en_US&ref_=as_li_ss_tl', brand: 'Kasa / TP-Link', spec: 'Per-outlet energy monitoring · coffee maker, fans, lamps, space heaters', price: 50 },
      { name: 'Kasa Smart Bulb KL135 (2-pack)', amazonUrl: 'https://www.amazon.com/Kasa-Smart-Changing-Compatible-KL135P2/dp/B08TB6VXFL?linkCode=ll2&tag=calmhome02-20&linkId=95cb1ede5c63058e53801311456f21c1&language=en_US&ref_=as_li_ss_tl', brand: 'Kasa / TP-Link', spec: 'Tunable white + color · sunrise alarm simulation · bedroom or kitchen', price: 28 },
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
    price: 985,
    priceLabel: '$985',
    badge: 'Best Value',
    savings: 188,
    hero: 'Good Neighbor, Safe Kids, and Easy Mornings — all three kits together, built to work as one system. The front door, the family, the temperature. All of it, handled.',
    products: [
      { name: 'Everything in Good Neighbor', brand: '', spec: 'Arlo 2K Doorbell · Schlage Encode Plus · Ring Chime Pro · Kasa Plugs ×2', price: 440 },
      { name: 'Everything in Safe Kids', brand: '', spec: 'Tapo C210P2 ×2 · Tapo C120 · Aqara Sensors ×4 · Motion Sensors ×2 · 64GB SD', price: 217 },
      { name: 'Everything in Easy Mornings', brand: '', spec: 'Ecobee Enhanced · SmartSensor · Kasa Plugs ×4 · Kasa Bulbs ×2', price: 298 },
      { name: 'TP-Link Tapo Hub H200', amazonUrl: 'https://www.amazon.com/Tapo-REQUIRES-Low-Power-Wireless-H200/dp/B0C7FCX76S?linkCode=ll2&tag=calmhome02-20&linkId=3a953c61a2d460bb0ca520f6a43f550b&language=en_US&ref_=as_li_ss_tl', brand: 'TP-Link Tapo', spec: 'Local sensor hub · Matter bridge · faster automations, less cloud dependency', price: 30 },
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
  {
    slug: 'welcome-home',
    name: 'Welcome Home',
    tagline: 'Your home knows when you\'re coming.',
    icon: '🌅',
    price: 68,
    priceLabel: '$68',
    featured: false,
    hero: 'Lights on before you open the door. Temperature already set. The house is ready before you are.',
    badge: 'Great add-on',
    products: [
      { name: 'Kasa Smart Plug EP25 (2-pack)', brand: 'Kasa / TP-Link', spec: 'Lamp + device automation, energy monitoring', price: 25, amazonUrl: 'https://www.amazon.com/Kasa-Smart-Supported-Scheduling-EP25P2/dp/B0CHDCYSW7?linkCode=ll2&tag=calmhome02-20&linkId=f41bca503408c3cac4288731665e3d82&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Kasa KL135 Smart Bulbs (2-pack)', brand: 'Kasa / TP-Link', spec: 'Tunable white + color, arrival scene lighting', price: 28, amazonUrl: 'https://www.amazon.com/Kasa-Smart-Changing-Compatible-KL135P2/dp/B08TB6VXFL?linkCode=ll2&tag=calmhome02-20&linkId=95cb1ede5c63058e53801311456f21c1&language=en_US&ref_=as_li_ss_tl' },
      { name: 'TP-Link Tapo T100 Motion Sensor', brand: 'TP-Link Tapo', spec: 'Trigger automations on arrival at front door', price: 15, amazonUrl: 'https://www.amazon.com/TP-Link-Tapo-Sensitivity-Notification-T100/dp/B0BYH66C3S?linkCode=ll2&tag=calmhome02-20&linkId=6ab088f0d1490a445b00959481008d33&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Calm Home Setup Guide', brand: 'Calm Home', spec: 'Arrival scenes, geofencing setup, routine building', price: 0 },
    ],
    includes: [
      'Kasa EP25 Smart Plugs (×2) — arrival automation',
      'Kasa KL135 Smart Bulbs (×2) — warm arrival lighting scene',
      'Tapo T100 Motion Sensor — trigger on entry',
      'Setup guide: arrival scenes + geofencing',
    ],
    guideTopics: [
      'Setting up geofencing so automations trigger when you pull into the neighborhood',
      'Building an arrival scene: lights on, temperature set, devices ready',
      'Integrating with Google Home and Alexa routines',
    ],
    faq: [
      { q: 'Does this work if I already have Easy Mornings?', a: 'Yes — Welcome Home uses the same Kasa app and ecosystem. Your plugs and bulbs work together with no extra setup.' },
      { q: 'How accurate is the geofencing?', a: 'Most automations trigger when you\'re 0.1–0.5 miles from home, so everything is ready by the time you arrive.' },
    ],
  },
  {
    slug: 'never-leave-worried',
    name: 'Never Leave Worried',
    tagline: 'You already turned everything off. We can prove it.',
    icon: '✅',
    price: 90,
    priceLabel: '$90',
    featured: false,
    hero: 'Check that the stove is off, the doors are closed, and nothing is running — from wherever you are.',
    badge: 'Peace of mind',
    products: [
      { name: 'Kasa Smart Plug EP25 (4-pack)', brand: 'Kasa / TP-Link', spec: 'Monitor and cut power to stove, iron, space heater, curling iron', price: 50, amazonUrl: 'https://www.amazon.com/s?k=Kasa+Smart+Plug+EP25+4+pack&linkCode=ll2&tag=calmhome02-20&linkId=37e1af93dbdf8bf060b9cca6638d8a91&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Aqara Door & Window Sensor P2 (2-pack)', brand: 'Aqara', spec: 'Matter certified — instant alert if a door or window is left open', price: 40, amazonUrl: 'https://www.amazon.com/Aqara-Requires-Contact-Automation-Supports/dp/B0BTL8B72D?linkCode=ll2&tag=calmhome02-20&linkId=5e4a409d1a7eee2a1d98ceb4eeb95b7a&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Calm Home Setup Guide', brand: 'Calm Home', spec: 'Leaving home checklist, auto-off setup, remote power monitoring', price: 0 },
    ],
    includes: [
      'Kasa EP25 Smart Plugs (×4) — remote off + energy monitoring',
      'Aqara Door & Window Sensors (×2) — open/close status anywhere',
      'Setup guide: leaving checklist + auto-shutoff automations',
    ],
    guideTopics: [
      'Setting up auto-shutoff for high-draw appliances (stove, iron, space heater)',
      'Creating a "leaving home" checklist automation',
      'Checking door and window status from your phone',
    ],
    faq: [
      { q: 'Does this work with Safe Kids?', a: 'Yes — if you already have Aqara sensors from Safe Kids, you only need to add the smart plugs.' },
      { q: 'Can I turn things off remotely?', a: 'Yes. The Kasa app lets you switch any plug on or off from anywhere in the world.' },
    ],
  },
  {
    slug: 'weekend-away',
    name: 'Weekend Away',
    tagline: 'Leave. Don\'t worry.',
    icon: '🧳',
    price: 95,
    priceLabel: '$95',
    featured: false,
    hero: 'Lights on random timers. Cameras watching. Instant alert if anything moves or opens. You\'re not there — but your home still is.',
    badge: 'Great with Good Neighbor',
    products: [
      { name: 'Kasa Smart Plug EP25 (2-pack)', brand: 'Kasa / TP-Link', spec: 'Random-timer lighting to simulate occupancy', price: 25, amazonUrl: 'https://www.amazon.com/Kasa-Smart-Supported-Scheduling-EP25P2/dp/B0CHDCYSW7?linkCode=ll2&tag=calmhome02-20&linkId=f41bca503408c3cac4288731665e3d82&language=en_US&ref_=as_li_ss_tl' },
      { name: 'TP-Link Tapo C120 Indoor/Outdoor Camera', brand: 'TP-Link Tapo', spec: '2K, color night vision, local storage, no subscription', price: 30, amazonUrl: 'https://www.amazon.com/Tapo-cameras-for-home-security/dp/B0CH45HPZT?linkCode=ll2&tag=calmhome02-20&linkId=8a3fe3e5bdc58ec2bfc40f5de017fb8e&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Aqara Door & Window Sensor P2 (2-pack)', brand: 'Aqara', spec: 'Instant alert if a door or window opens while you\'re away', price: 40, amazonUrl: 'https://www.amazon.com/Aqara-Requires-Contact-Automation-Supports/dp/B0BTL8B72D?linkCode=ll2&tag=calmhome02-20&linkId=5e4a409d1a7eee2a1d98ceb4eeb95b7a&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Calm Home Setup Guide', brand: 'Calm Home', spec: 'Away mode setup, random lighting timers, pet sitter access code guide', price: 0 },
    ],
    includes: [
      'Kasa EP25 Smart Plugs (×2) — random timer to look occupied',
      'Tapo C120 Camera — indoor/outdoor monitoring, local storage',
      'Aqara Door & Window Sensors (×2) — instant alert if anything opens',
      'Setup guide: away mode + pet sitter access codes',
    ],
    guideTopics: [
      'Setting up random lighting timers that don\'t look robotic',
      'Enabling away mode across cameras, sensors, and the thermostat',
      'Creating a temporary access code for a pet sitter or house sitter',
      'Getting instant alerts if a door or window opens',
    ],
    faq: [
      { q: 'Does this work with Good Neighbor?', a: 'It\'s designed to layer on top. Good Neighbor gives you the front door — Weekend Away adds interior monitoring and away mode.' },
      { q: 'Do I need a subscription for camera footage?', a: 'No. The Tapo C120 stores recordings locally on a microSD card. No monthly fee.' },
    ],
  },
  {
    slug: 'work-from-home',
    name: 'Work From Home',
    tagline: 'Your home office, actually working.',
    icon: '💻',
    price: 68,
    priceLabel: '$68',
    featured: false,
    hero: 'A lighting scene for video calls. Focus mode that pauses doorbell alerts. Plugs that cut power to distractions on a schedule.',
    badge: 'For the home office',
    products: [
      { name: 'Kasa KL135 Smart Bulbs (2-pack)', brand: 'Kasa / TP-Link', spec: 'Tunable white — cool for focus, warm for evening, calibrated for video calls', price: 28, amazonUrl: 'https://www.amazon.com/Kasa-Smart-Changing-Compatible-KL135P2/dp/B08TB6VXFL?linkCode=ll2&tag=calmhome02-20&linkId=95cb1ede5c63058e53801311456f21c1&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Kasa Smart Plug EP25 (2-pack)', brand: 'Kasa / TP-Link', spec: 'Desk lamp + monitor on a work schedule, auto-off after hours', price: 25, amazonUrl: 'https://www.amazon.com/Kasa-Smart-Supported-Scheduling-EP25P2/dp/B0CHDCYSW7?linkCode=ll2&tag=calmhome02-20&linkId=f41bca503408c3cac4288731665e3d82&language=en_US&ref_=as_li_ss_tl' },
      { name: 'TP-Link Tapo T100 Motion Sensor', brand: 'TP-Link Tapo', spec: 'Trigger focus mode when you sit down at your desk', price: 15, amazonUrl: 'https://www.amazon.com/TP-Link-Tapo-Sensitivity-Notification-T100/dp/B0BYH66C3S?linkCode=ll2&tag=calmhome02-20&linkId=6ab088f0d1490a445b00959481008d33&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Calm Home Setup Guide', brand: 'Calm Home', spec: 'Video call lighting, focus mode, do-not-disturb automations', price: 0 },
    ],
    includes: [
      'Kasa KL135 Smart Bulbs (×2) — video call + focus lighting scenes',
      'Kasa EP25 Smart Plugs (×2) — desk + monitor on work schedule',
      'Tapo T100 Motion Sensor — trigger focus mode automatically',
      'Setup guide: video call scene, focus mode, do-not-disturb',
    ],
    guideTopics: [
      'Setting the perfect color temperature for video calls (5000K daylight)',
      'Creating a focus scene that dims everything except your desk',
      'Building a work schedule: everything on at 8 AM, off at 6 PM',
      'Do-not-disturb mode: silence doorbell chime during calls',
    ],
    faq: [
      { q: 'What color temperature is best for video calls?', a: 'Daylight white (5000–5500K) placed slightly behind and above your monitor gives the most flattering, professional look. The setup guide covers exact positioning.' },
      { q: 'Does this pair with Easy Mornings?', a: 'Yes — both use Kasa. Your morning routine flows directly into your work setup with one combined schedule in the Kasa app.' },
    ],
  },
  {
    slug: 'pet-parent',
    name: 'Pet Parent',
    tagline: 'Someone\'s always keeping an eye on them.',
    icon: '🐾',
    price: 61,
    priceLabel: '$61',
    featured: false,
    hero: 'Check in on your pet from anywhere. Know when they\'re active. Set up automations around their routine.',
    badge: 'Great with Safe Kids',
    products: [
      { name: 'TP-Link Tapo C210 2K Indoor Camera', brand: 'TP-Link Tapo', spec: 'Pan/tilt 360°, local storage, no subscription, two-way audio', price: 33, amazonUrl: 'https://www.amazon.com/indoor-pet-wifi-camera-tapo/dp/B09Y8TLP25?linkCode=ll2&tag=calmhome02-20&linkId=3757682ba9430229a83c49c251293610&language=en_US&ref_=as_li_ss_tl' },
      { name: 'TP-Link Tapo T100 Motion Sensor', brand: 'TP-Link Tapo', spec: 'Detect pet activity patterns, log movement throughout the day', price: 15, amazonUrl: 'https://www.amazon.com/TP-Link-Tapo-Sensitivity-Notification-T100/dp/B0BYH66C3S?linkCode=ll2&tag=calmhome02-20&linkId=6ab088f0d1490a445b00959481008d33&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Kasa Smart Plug EP25', brand: 'Kasa / TP-Link', spec: 'Automatic pet feeder, fan, or water fountain on a schedule', price: 13, amazonUrl: 'https://www.amazon.com/s?k=Kasa+Smart+Plug+EP25&linkCode=ll2&tag=calmhome02-20&linkId=150d744101bce7144a18861f581b6960&language=en_US&ref_=as_li_ss_tl' },
      { name: 'Calm Home Setup Guide', brand: 'Calm Home', spec: 'Camera placement, activity alerts, feeder scheduling', price: 0 },
    ],
    includes: [
      'Tapo C210 2K Pan/Tilt Camera — full room coverage, two-way audio',
      'Tapo T100 Motion Sensor — activity tracking throughout the day',
      'Kasa EP25 Smart Plug — feeder, fan, or water fountain scheduling',
      'Setup guide: camera placement, activity alerts, daily schedule',
    ],
    guideTopics: [
      'Placing the camera for full room coverage (pets move — pan/tilt helps)',
      'Setting up activity alerts: know when your pet is unusually still',
      'Scheduling a smart plug for an automatic feeder or water fountain',
      'Sharing camera access with a pet sitter or dog walker',
    ],
    faq: [
      { q: 'Does this work with Safe Kids?', a: 'Yes — both use the Tapo app. Your pet camera appears in the same app as your kids\' cameras. Same family sharing, same alerts.' },
      { q: 'Can I talk to my pet through the camera?', a: 'Yes. The C210 has a built-in microphone and speaker for two-way audio.' },
    ],
  },
];
