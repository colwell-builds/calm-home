import Nav from '@/components/Nav'
import Link from 'next/link'
import ExploreMore from '@/components/ExploreMore'
import { PACKAGES } from '@/lib/packages'

export const metadata = {
  title: 'Welcome Home Setup Guide',
  description: 'Step-by-step setup guide for the Calm Home Welcome Home package. Get arrival automations running in under an hour.',
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
    content: `Before you start, confirm you have all five items: Kasa EP25 Smart Plugs (×2), Kasa KL135 Smart Bulbs (×2), and a Tapo T100 Motion Sensor.\n\nDownload these apps now so they're ready: Kasa Smart and Tapo.`,
    tip: null,
    warning: null,
  },
  {
    number: 2,
    title: 'Set up the Kasa Smart Plugs',
    time: '10 min',
    content: `Plug the two Kasa EP25 plugs into the outlets you want to automate — a lamp by the door, a fan, or any device you want ready when you arrive.\n\nOpen the Kasa app → tap the + icon → Add Device → Smart Plug. Follow the on-screen steps to connect each plug to your Wi-Fi network.\n\nOnce paired, give each plug a clear name like "Entry Lamp" or "Living Room Fan" so automations are easy to build.`,
    tip: 'If your lamp uses a wall switch, leave the switch permanently ON. The Kasa plug becomes the on/off controller from here on.',
    warning: null,
    links: [
      { label: 'Kasa EP25 Setup (Lon.TV)', url: 'https://www.youtube.com/results?search_query=kasa+ep25+smart+plug+setup+review', type: 'video' },
      { label: 'Kasa EP25 on Amazon', url: 'https://www.amazon.com/Kasa-Smart-Supported-Scheduling-EP25P2/dp/B0CHDCYSW7?linkCode=ll2&tag=calmhome02-20&linkId=f41bca503408c3cac4288731665e3d82&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 3,
    title: 'Set up the Kasa Smart Bulbs',
    time: '10 min',
    content: `Replace the bulbs in your entryway or living room lamp with the KL135 bulbs. Make sure the lamp switch is ON before pairing.\n\nIn the Kasa app → + → Add Device → Smart Bulb. Follow the pairing steps for each bulb.\n\nOnce paired, try the "Warm White" preset at around 40% brightness — this makes for a welcoming arrival glow without blasting your eyes when you walk in at night.`,
    tip: 'Create a scene called "Welcome home" in the Kasa app with your preferred brightness and warmth. You can trigger this scene from a routine later.',
    warning: null,
    links: [
      { label: 'Kasa KL135 Setup (Smart Home Solver)', url: 'https://www.youtube.com/results?search_query=kasa+kl135+smart+bulb+setup+review', type: 'video' },
      { label: 'Kasa KL135 on Amazon', url: 'https://www.amazon.com/Kasa-Smart-Changing-Compatible-KL135P2/dp/B08TB6VXFL?linkCode=ll2&tag=calmhome02-20&linkId=95cb1ede5c63058e53801311456f21c1&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 4,
    title: 'Place the Tapo T100 Motion Sensor',
    time: '10 min',
    content: `The T100 uses peel-and-stick mounting — no drilling required. Place it near the front door or in the entryway hallway, angled to cover the path from your door.\n\nOpen the Tapo app → + → Add Device → Motion Sensor. Follow the setup steps.\n\nIn the sensor settings, set the detection sensitivity to "High" for indoor use and reduce the re-trigger interval to 1–2 minutes so you don't have to wait long for automations to reset.`,
    tip: 'Mount the sensor about 5–7 feet up a wall for the best detection angle. Too low and pets may trigger it; too high and it misses.',
    warning: null,
    links: [
      { label: 'Tapo T100 Setup Guide', url: 'https://www.youtube.com/results?search_query=tapo+t100+motion+sensor+setup+review', type: 'video' },
      { label: 'Tapo T100 on Amazon', url: 'https://www.amazon.com/TP-Link-Tapo-Sensitivity-Notification-T100/dp/B0BYH66C3S?linkCode=ll2&tag=calmhome02-20&linkId=6ab088f0d1490a445b00959481008d33&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 5,
    title: 'Build your arrival routine',
    time: '15 min',
    content: `Now connect the motion sensor to your lights and plugs with a routine.\n\n**Google Home:** Open Google Home → Automations → + New → choose "When motion is detected" (select your T100) → Then "Adjust lights" (select your bulbs and plugs, set to the Welcome Home scene).\n\n**Alexa:** Open Alexa → More → Routines → + → When: Smart Home → Motion Detected → select T100 → Then: Smart Home → Control Device → select each bulb and plug.\n\nTest it: walk up to your door and watch everything come on automatically.`,
    tip: "Add a \"turn off after 10 minutes of no motion\" step so lights don't stay on all night if you forgot to set a schedule.",
    warning: null,
    links: [
      { label: 'Google Home Routines Guide', url: 'https://www.youtube.com/results?search_query=google+home+automation+routines+motion+sensor', type: 'video' },
    ],
  },
  {
    number: 6,
    title: 'Optional: set up geofencing',
    time: '10 min',
    content: `Geofencing lets your phone's location trigger automations — so your home starts preparing before you even turn onto your street.\n\n**Google Home:** Go to Settings → Personal info → Home & Work locations. Set your home address. Then in Automations → + New → choose "When I arrive home."\n\n**Kasa app:** Settings → Location Services → enable "Home/Away" automation. The app will prompt you to set your home location.\n\nMost geofencing automations trigger when you're 0.1–0.5 miles away, so everything is ready when you pull into the driveway.`,
    tip: 'Geofencing uses your phone\'s GPS, which drains battery slightly faster. Most people don\'t notice — but if it bothers you, use the motion sensor routine instead.',
    warning: null,
  },
]

const faqs = [
  {
    q: "Kasa bulb won't respond after I turn off the wall switch",
    a: "Smart bulbs need constant power. Always leave the wall switch in the ON position and control the bulb through the app or automations. If someone turned it off, just flip it back on and wait 5 seconds for the bulb to reconnect.",
  },
  {
    q: "Motion sensor keeps triggering on my pet",
    a: "Lower the sensitivity setting in the Tapo app, or remount the sensor higher on the wall (7+ feet up). Most household pets won't reach the detection zone at that height.",
  },
  {
    q: "My arrival routine isn't triggering",
    a: "Check that both the T100 and the Kasa devices are in the same home in Google Home or Alexa. Also confirm the motion sensor shows as 'online' in the Tapo app — if it's offline, check the battery.",
  },
]

export default function WelcomeHomeGuide() {
  const suggestions = PACKAGES.filter(p => ['easy-mornings', 'work-from-home', 'never-leave-worried'].includes(p.slug))
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Back link */}
        <Link href="/packages/welcome-home" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← Back to Welcome Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="text-amber-400 text-4xl mb-4">🌅</div>
          <h1 className="text-4xl font-bold text-white mb-3">Welcome Home Setup Guide</h1>
          <p className="text-slate-400 text-lg">Your home knows when you're coming. Let's make that happen.</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
            <span>⏱</span> <span>Total time: ~50 minutes</span>
          </div>
        </div>

        {/* Steps */}
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
              <div className="text-slate-300 leading-relaxed whitespace-pre-line mb-3">
                {step.content}
              </div>
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

        {/* Troubleshooting */}
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

        <ExploreMore packages={suggestions} subheading="These pair naturally with your Welcome Home setup." />

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-4">Ready to get started? Everything you need is in the Welcome Home package.</p>
          <Link
            href="/packages/welcome-home"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            View the Welcome Home Package →
          </Link>
        </div>

      </main>
    </div>
  )
}
