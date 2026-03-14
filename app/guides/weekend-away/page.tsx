import Nav from '@/components/Nav'
import Link from 'next/link'
import ExploreMore from '@/components/ExploreMore'
import { PACKAGES } from '@/lib/packages'

export const metadata = {
  title: 'Weekend Away Setup Guide',
  description: 'Step-by-step setup guide for the Calm Home Weekend Away package. Leave with confidence — your home is watching.',
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
    content: `Before you start, confirm you have: Kasa EP25 Smart Plugs (×2), a Tapo C120 Indoor/Outdoor Camera, and Aqara Door & Window Sensors (×2).\n\nDownload these apps now: Kasa Smart, Tapo, and Aqara Home.`,
    tip: null,
    warning: null,
  },
  {
    number: 2,
    title: 'Install the Tapo C120 camera',
    time: '20 min',
    content: `The C120 works both indoors and outdoors (under a covered area). Choose a location that covers your main entry point — front door interior, back door, or a covered porch.\n\nIndoor setup: plug into any outlet, aim at the door. No mounting required unless you want it fixed.\n\nOutdoor setup: the C120 is rated for covered outdoor use. Mount using the included bracket. Route the cable to a weatherproof outlet or use an outdoor extension cord.\n\nOpen the Tapo app → + → Add Device → follow the pairing steps. Connect to your 2.4 GHz Wi-Fi network.\n\nIn settings, insert a microSD card for local recording — no subscription needed.`,
    tip: 'Set the motion detection zone to cover just the entry area, not the street. This cuts down on false alerts from passing cars.',
    warning: null,
    links: [
      { label: 'Tapo C120 Setup (Smart Home Solver)', url: 'https://www.youtube.com/results?search_query=tapo+c120+camera+setup+review', type: 'video' },
      { label: 'Tapo C120 on Amazon', url: 'https://www.amazon.com/Tapo-cameras-for-home-security/dp/B0CH45HPZT?linkCode=ll2&tag=calmhome02-20&linkId=8a3fe3e5bdc58ec2bfc40f5de017fb8e&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 3,
    title: 'Install the Aqara door & window sensors',
    time: '10 min',
    content: `Place one sensor on the front door and one on the back door (or whichever entry points matter most).\n\nEach sensor is two pieces: stick the main body to the door frame and the magnet to the door itself, within about 5mm of each other when the door is closed.\n\nOpen the Aqara Home app → + → Add Accessory → scan the QR code on each sensor.`,
    tip: null,
    warning: null,
    links: [
      { label: 'Aqara Sensor Setup Guide', url: 'https://www.youtube.com/results?search_query=aqara+door+window+sensor+p2+setup+review', type: 'video' },
      { label: 'Aqara P2 Sensors on Amazon', url: 'https://www.amazon.com/Aqara-Requires-Contact-Automation-Supports/dp/B0BTL8B72D?linkCode=ll2&tag=calmhome02-20&linkId=5e4a409d1a7eee2a1d98ceb4eeb95b7a&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 4,
    title: 'Set up Kasa EP25 plugs on random timer',
    time: '10 min',
    content: `Plug the two EP25 smart plugs into lamps in different rooms — a living room lamp and a bedroom lamp work well. This creates the appearance that someone is home.\n\nIn the Kasa app: open each plug → Schedule → enable "Smart Schedule." This randomizes on/off times slightly each day so the pattern doesn't look mechanical from the outside.\n\nSet the general window: on between 7–9 PM, off between 10 PM–midnight. The smart schedule adds natural variation within that range.`,
    tip: 'Vary which rooms have lights on. A house where only one light is always on at the same time looks automated. Two rooms with slightly different patterns looks lived-in.',
    warning: null,
  },
  {
    number: 5,
    title: 'Enable away mode',
    time: '15 min',
    content: `Create an "Away" scene that arms everything at once.\n\n**Google Home:** Automations → + New → name it "Away Mode" → Trigger: "When I say 'Hey Google, Away Mode'" or "When I leave home" (geofencing) → Then: enable camera motion alerts in Tapo (link Tapo to Google Home first) + set Aqara to notify on any open/close.\n\nIn the Tapo app directly: Camera Settings → Notifications → Motion Detection → enable. Set sensitivity to "Medium" to avoid false alarms from shadows or wind.\n\nIn the Aqara app: set each sensor to send you a push notification whenever it opens.`,
    tip: 'Test away mode before your trip. Open a door and make sure your phone buzzes. Nothing worse than discovering the notifications were off when you\'re already three states away.',
    warning: null,
  },
  {
    number: 6,
    title: 'Create temporary access for a pet sitter',
    time: '10 min',
    content: `**If you have Good Neighbor:** In the Schlage Home app → Access Codes → Add Code → set it to active only during the pet sitter's visit window (e.g., Mon–Fri, 12–3 PM). The code expires automatically.\n\n**Camera access via Tapo:** Open Tapo → tap your camera → Share → enter the pet sitter's email. Set to "Limited access" so they can view the live feed but not change settings.\n\nThis way your pet sitter can check in on the animals without needing your main app credentials.`,
    tip: "Revoke camera access as soon as the trip is over — it's a one-tap action in the Tapo app under the camera's Share settings.",
    warning: null,
  },
]

const faqs = [
  {
    q: "Camera shows offline when I check remotely",
    a: "The C120 connects through your home Wi-Fi. If your internet goes out or the router restarts while you're away, the camera will go offline until it reconnects. Most routers recover automatically within a few minutes.",
  },
  {
    q: "Getting too many motion alerts from the camera",
    a: "Lower the sensitivity in the Tapo app and narrow the motion detection zone to exclude busy areas like streets or vents. Setting quiet hours (e.g., 11 PM–6 AM) also helps if you're not worried about overnight activity.",
  },
  {
    q: "Aqara sensor isn't sending notifications",
    a: "Check that notifications are enabled in the Aqara Home app under the sensor's settings. Also check your phone's notification permissions for the Aqara app in your device settings.",
  },
]

export default function WeekendAwayGuide() {
  const suggestions = PACKAGES.filter(p => ['good-neighbor', 'never-leave-worried', 'pet-parent'].includes(p.slug))
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Back link */}
        <Link href="/packages/weekend-away" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← Back to Weekend Away
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="text-amber-400 text-4xl mb-4">🧳</div>
          <h1 className="text-4xl font-bold text-white mb-3">Weekend Away Setup Guide</h1>
          <p className="text-slate-400 text-lg">Leave. Don't worry. Here's how to set it all up.</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
            <span>⏱</span> <span>Total time: ~65 minutes</span>
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

        <ExploreMore packages={suggestions} subheading="These pair naturally with your Weekend Away setup." />

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-4">Ready to leave the worry behind? Everything you need is in the Weekend Away package.</p>
          <Link
            href="/packages/weekend-away"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            View the Weekend Away Package →
          </Link>
        </div>

      </main>
    </div>
  )
}
