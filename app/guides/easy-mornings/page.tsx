import Nav from '@/components/Nav'
import Link from 'next/link'
import ExploreMore from '@/components/ExploreMore'
import { PACKAGES } from '@/lib/packages'

export const metadata = {
  title: 'Easy Mornings Setup Guide',
  description: 'Step-by-step setup guide for the Calm Home Easy Mornings package.',
}

type Step = {
  number: number
  title: string
  time: string
  content: string
  tip: string | null
  warning: string | null
  links?: Array<{ label: string; url: string; type: 'video' | 'product' | 'guide' }>
}

const steps: Step[] = [
  {
    number: 1,
    title: "What's in the box",
    time: '5 min',
    content: `Confirm you have: 1× Ecobee Smart Thermostat Enhanced (with SmartSensor included in box), 4× Kasa EP25 Smart Plugs, and 2× Kasa KL135 Smart Bulbs.\n\nDownload the apps: Ecobee, Kasa Smart. Also have your current thermostat's wiring photo ready — you'll take a photo of the wires before disconnecting anything.`,
    tip: 'Before touching the thermostat, take a photo of the existing wiring with your phone. This is your safety net.',
    warning: null,
  },
  {
    number: 2,
    title: 'Install the Ecobee thermostat',
    time: '30 min',
    content: `**Step 1:** Turn off power to your HVAC at the breaker.\n\n**Step 2:** Remove your old thermostat. Take a photo of the wires and which terminals they're in (Rc, Rh, G, Y, W, C, etc.).\n\n**Step 3:** Remove wires from old thermostat, attach the Ecobee wall plate, and reconnect wires to matching labeled terminals. Ecobee's wiring guide in the app matches your specific photo.\n\n**Step 4:** Snap the Ecobee unit onto the wall plate.\n\n**Step 5:** Restore power at the breaker. Follow the on-screen setup to connect to Wi-Fi and set your schedule.`,
    tip: null,
    warning: "Most homes have a C-wire (common wire). If yours doesn't, the Ecobee package includes a Power Extender Kit (PEK) — the app will detect this and walk you through it.",
    links: [
      { label: 'Ecobee Install Guide (The Hook Up)', url: 'https://www.youtube.com/results?search_query=ecobee+smart+thermostat+installation+setup', type: 'video' as const },
      { label: 'Ecobee on Amazon', url: 'https://www.amazon.com/s?k=Ecobee+Smart+Thermostat+Enhanced+EB-STATE6L-01&tag=calmhome02-20', type: 'product' as const },
    ],
  },
  {
    number: 3,
    title: 'Place the Ecobee SmartSensor',
    time: '10 min',
    content: `The SmartSensor sits on a shelf or mounts on the wall in your bedroom (or wherever you sleep). No wiring — it runs on a coin battery for years.\n\nIn the Ecobee app → Main Menu → Sensors → Add Sensor → follow the pairing steps.\n\nOnce paired, set the sensor to be "active" during your sleeping schedule. This means at night, the thermostat targets comfort in the bedroom specifically — not wherever the main unit is mounted.`,
    tip: "Put the SmartSensor where you sleep, not where you live during the day. That's the whole point.",
    warning: null,
  },
  {
    number: 4,
    title: 'Build your schedule',
    time: '10 min',
    content: `In the Ecobee app → Schedule → create blocks for your week:\n\n- **Asleep** (10 PM–6 AM): slightly cooler, SmartSensor active\n- **Awake** (6 AM–8 AM): warm up to comfortable before you're up\n- **Away** (8 AM–5 PM): set back temperature while house is empty\n- **Home** (5 PM–10 PM): comfortable living temperature\n\nEnable geofencing (Ecobee app → Settings → Home & Away) so it automatically switches to Away when everyone leaves and Home when someone returns.`,
    tip: 'The Awake block starting 30 min before you get up is the magic. House is already warm when the alarm goes off.',
    warning: null,
  },
  {
    number: 5,
    title: 'Set up the Kasa Smart Plugs',
    time: '10 min',
    content: `Plug the four EP25 plugs into outlets for: coffee maker, a space heater or fan, bedside lamp, and one bonus outlet of your choice.\n\nOpen Kasa app → Add Device → Smart Plug for each one. Name them clearly (e.g., "Coffee Maker", "Bedroom Fan").\n\n**Schedule ideas:**\n- Coffee maker: on at 6:30 AM, off at 9 AM\n- Space heater: on 30 min before wake time, off when you leave\n- Lamp: on at sunset, off at 11 PM`,
    tip: null,
    warning: 'Never plug high-wattage appliances (hair dryers, toasters) into a smart plug — the EP25 is rated for up to 15A. Coffee makers and space heaters (under 1500W) are fine.',
    links: [
      { label: 'Kasa Smart Plug Setup', url: 'https://www.youtube.com/results?search_query=kasa+ep25+smart+plug+setup', type: 'video' as const },
      { label: 'Kasa EP25 on Amazon', url: 'https://www.amazon.com/s?k=Kasa+Smart+Plug+EP25+4+pack+energy+monitoring&tag=calmhome02-20', type: 'product' as const },
    ],
  },
  {
    number: 6,
    title: 'Set up the Kasa Smart Bulbs',
    time: '10 min',
    content: `Screw the KL135 bulbs into your bedside lamps or kitchen light fixture. Open Kasa app → Add Device → Smart Bulb.\n\n**Sunrise alarm setup:**\nIn the Kasa app → Schedules → create a new schedule for your bulb:\n- Start 20–30 minutes before your alarm\n- Begin at 1% brightness, warm white (2700K)\n- Ramp to 100% brightness over 20 minutes\n\nThis is a natural wake-up that works with your circadian rhythm — you'll wake up before the alarm feeling alert, not dragged out of sleep.`,
    tip: 'Set the sunrise scene for 20 minutes before your alarm. Most people find they wake up naturally before the alarm rings once they try this for a week.',
    warning: null,
    links: [
      { label: 'Kasa Smart Bulb Setup', url: 'https://www.youtube.com/results?search_query=kasa+kl135+smart+bulb+setup+google+home', type: 'video' as const },
      { label: 'Kasa KL135 on Amazon', url: 'https://www.amazon.com/s?k=Kasa+Smart+Bulb+KL135+2+pack&tag=calmhome02-20', type: 'product' as const },
    ],
  },
  {
    number: 7,
    title: 'Connect to Google Home or Alexa',
    time: '5 min',
    content: `**Google Home:** Add → Works with Google → Ecobee → link account. Repeat for Kasa.\n**Alexa:** More → Skills & Games → search Ecobee → Enable. Repeat for Kasa.\n\n**Useful routines to create:**\n- "Good morning" → turn on coffee maker + ramp bulbs to full + set thermostat to Awake\n- "Good night" → turn off all plugs + dim bulbs to 10% + set thermostat to Asleep\n- "Leaving" → set thermostat to Away + turn off all plugs`,
    tip: null,
    warning: null,
    links: [
      { label: 'Ecobee + Google Home Setup', url: 'https://www.youtube.com/results?search_query=ecobee+google+home+alexa+setup', type: 'video' as const },
    ],
  },
]

const faqs = [
  {
    q: "Ecobee shows 'No Power to Rh wire'",
    a: "This usually means the C-wire is missing or connected incorrectly. Use the Power Extender Kit included in the box — the Ecobee app has a specific walkthrough for this.",
  },
  {
    q: "HVAC isn't turning on after install",
    a: "Check that the breaker is back on. Then in the Ecobee app → Main Menu → System → run a system test to confirm each mode (heat, cool, fan) works.",
  },
  {
    q: "Kasa plug not responding to schedule",
    a: "Check that the plug's firmware is up to date (Kasa app → Device Settings → Firmware Update). Also confirm your time zone is set correctly in the app.",
  },
  {
    q: "Smart bulb won't connect",
    a: "Make sure the bulb is powered (switch on). Hold the switch off for 5 seconds then back on to reset, then retry adding in the Kasa app.",
  },
]

export default function EasyMorningsGuide() {
  const suggestions = PACKAGES.filter(p => ['welcome-home', 'work-from-home', 'never-leave-worried'].includes(p.slug))
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/packages/easy-mornings" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← Back to Easy Mornings
        </Link>
        <div className="mb-12">
          <div className="text-4xl mb-4">☀️</div>
          <h1 className="text-4xl font-bold text-white mb-3">Easy Mornings Setup Guide</h1>
          <p className="text-slate-400 text-lg">{"Wake up to a home that's already ready. Here's how to set it up."}</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
            <span>⏱</span><span>Total time: ~80 minutes</span>
          </div>
        </div>
        <div className="space-y-10 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="border-l-2 border-slate-700 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 text-xs font-bold">
                {step.number}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-xl font-semibold text-white">{step.title}</h2>
                <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-full">{step.time}</span>
              </div>
              {step.links && step.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {step.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                        link.type === 'video'
                          ? 'bg-red-900/30 text-red-300 hover:bg-red-900/50 border border-red-800/50'
                          : link.type === 'product'
                          ? 'bg-amber-400/10 text-amber-300 hover:bg-amber-400/20 border border-amber-500/30'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      {link.type === 'video' ? '▶ ' : link.type === 'product' ? '🛒 ' : '📖 '}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              <div className="text-slate-300 leading-relaxed whitespace-pre-line mb-3">{step.content}</div>
              {step.tip && (
                <div className="bg-amber-400/10 border border-amber-400/30 rounded-lg px-4 py-3 text-sm text-amber-200">
                  💡 <strong>Tip:</strong> {step.tip}
                </div>
              )}
              {step.warning && (
                <div className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-sm text-slate-300">
                  ⚠️ <strong>Note:</strong> {step.warning}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Troubleshooting</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-900 rounded-xl p-5">
                <p className="font-medium text-white mb-2">{faq.q}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <ExploreMore packages={suggestions} subheading="These pair naturally with your Easy Mornings setup." />

        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-4">Everything you need is in the Easy Mornings package.</p>
          <Link href="/packages/easy-mornings" className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors">
            View the Easy Mornings Package →
          </Link>
        </div>
      </main>
    </div>
  )
}
