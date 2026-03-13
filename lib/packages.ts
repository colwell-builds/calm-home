// ── Package config — update content here, everything else picks it up ──────

export const SITE_NAME = 'Calm Home';
export const SITE_TAGLINE = 'Your home, handled.';
export const SITE_DOMAIN = 'calmhome.io';
export const SITE_DESCRIPTION =
  'Home automation kits built around the moments that matter. Every package includes the hardware, the setup guide, and everything in between.';

export interface Package {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  price: number;
  priceLabel: string;
  hero: string;
  includes: string[];
  guideTopics: string[];
  faq: { q: string; a: string }[];
  badge?: string;
}

export const PACKAGES: Package[] = [
  {
    slug: 'good-neighbor',
    name: 'Good Neighbor',
    tagline: 'You know who\'s at your door. So does everyone else.',
    icon: '🚪',
    price: 349,
    priceLabel: '$349',
    hero: 'The feeling of knowing your home is secure — even when you\'re not there. See who arrives, lock up from anywhere, and hand out digital keys without a spare set.',
    includes: [
      'Video doorbell (1080p, night vision, two-way audio)',
      'Smart deadbolt lock',
      'Keypad entry panel',
      'Setup guide + app walkthrough',
      'Compatibility check for your door',
    ],
    guideTopics: [
      'Installing the doorbell in under 20 minutes',
      'Pairing the lock and keypad',
      'Setting up guest access codes',
      'Connecting to Google Home or Alexa',
      'Getting doorbell notifications on your phone',
    ],
    faq: [
      { q: 'Does this work with my existing deadbolt?', a: 'Our smart lock replaces your existing deadbolt and works with most standard door preps. The guide includes a compatibility check for common door types.' },
      { q: 'Do I need professional installation?', a: 'No. Both the doorbell and lock are designed for DIY setup. Most customers are up and running in under an hour.' },
      { q: 'Does it work without Wi-Fi?', a: 'The keypad and lock work locally without Wi-Fi. Remote access and notifications require a connection.' },
      { q: 'Which smart home systems does it support?', a: 'Works with Google Home, Amazon Alexa, and Apple HomeKit. Full setup instructions for each included.' },
    ],
  },
  {
    slug: 'safe-kids',
    name: 'Safe Kids',
    tagline: 'You\'ll know the moment anything changes.',
    icon: '🛡️',
    price: 449,
    priceLabel: '$449',
    hero: 'The quiet confidence of knowing where the kids are, what\'s happening at home, and that you\'ll hear about it the second something doesn\'t look right.',
    includes: [
      '2 indoor security cameras (HD, wide-angle)',
      '2 door/window contact sensors',
      '1 motion sensor',
      'Cloud storage trial (30 days)',
      'Family alert setup guide',
    ],
    guideTopics: [
      'Choosing camera placement for maximum coverage',
      'Setting up motion zones and alert rules',
      'Creating family notification groups',
      'Reviewing footage on your phone',
      'Privacy mode — turning cameras off when you\'re home',
    ],
    faq: [
      { q: 'Where should I put the cameras?', a: 'The guide covers optimal placement for common home layouts — living rooms, entryways, and stairways. We include a quick coverage map template.' },
      { q: 'Can I share access with my spouse?', a: 'Yes. The included app supports multiple users with individual notification preferences.' },
      { q: 'Does cloud storage cost extra?', a: 'You get a 30-day cloud trial. After that, local storage is free. Optional cloud plans start at $3/month.' },
      { q: 'Do the sensors require a hub?', a: 'No hub required. Sensors connect directly to your Wi-Fi network.' },
    ],
  },
  {
    slug: 'easy-mornings',
    name: 'Easy Mornings',
    tagline: 'The house figures itself out. So can you.',
    icon: '☀️',
    price: 299,
    priceLabel: '$299',
    hero: 'A home that\'s already at the right temperature when you wake up. One that stops heating empty rooms and quietly saves money while you\'re at work. It just handles it.',
    includes: [
      'Smart thermostat (learning, 7-day scheduling)',
      '3 smart plugs (energy monitoring)',
      'Setup guide + scheduling templates',
      'Compatible with most HVAC systems',
    ],
    guideTopics: [
      'Installing the thermostat — no electrician needed',
      'Building a heating and cooling schedule',
      'Setting up energy monitoring for high-draw appliances',
      'Away mode and geofencing setup',
      'Connecting to your voice assistant',
    ],
    faq: [
      { q: 'Will it work with my HVAC system?', a: 'Compatible with most 24V systems including gas, electric, heat pump, and radiant. The guide includes a wiring check before you start.' },
      { q: 'How much can I save?', a: 'Industry average is 10–15% on heating and cooling. The energy monitoring plugs help identify additional savings on appliances.' },
      { q: 'Can I still use the thermostat manually?', a: 'Yes. The touchscreen works like any thermostat — smart features are an addition, not a replacement.' },
      { q: 'What if I rent my home?', a: 'Smart thermostats are generally renter-friendly and easily uninstalled. Check with your landlord first.' },
    ],
  },
  {
    slug: 'full-calm',
    name: 'Full Calm',
    tagline: 'Everything handled. Nothing to think about.',
    icon: '🏡',
    price: 799,
    priceLabel: '$799',
    badge: 'Most Popular',
    hero: 'Good Neighbor, Safe Kids, and Easy Mornings — together, set up to work as one. The front door, the family, the temperature. All of it, handled.',
    includes: [
      'Everything in Good Neighbor',
      'Everything in Safe Kids',
      'Everything in Easy Mornings',
      'Unified app setup guide',
      'Cross-device automation recipes',
      'Priority email support (30 days)',
    ],
    guideTopics: [
      'Setting up all devices as one connected system',
      'Building automations across entry, safety, and climate',
      'Morning, away, and bedtime home modes',
      'Sharing access with your family',
      'Troubleshooting and maintenance tips',
    ],
    faq: [
      { q: 'Do all these devices work together?', a: 'Yes — everything in Full Calm is selected for cross-compatibility. The guide walks through connecting it all into a single, unified system.' },
      { q: 'How long does the full setup take?', a: 'Most people finish over a weekend. The guide is split into sessions so you can go at your own pace.' },
      { q: 'Is the $799 price a real saving?', a: 'Buying the three kits individually costs $1,097. Full Calm saves you $298.' },
      { q: 'What if I already have some of these devices?', a: 'Reach out before ordering — we\'ll build a custom bundle around what you already own.' },
    ],
  },
];
