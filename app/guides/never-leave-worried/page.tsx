import Nav from '@/components/Nav'
import Link from 'next/link'
import ExploreMore from '@/components/ExploreMore'
import { PACKAGES } from '@/lib/packages'

export const metadata = {
  title: 'Never Leave Worried Setup Guide',
  description: 'Step-by-step setup guide for the Calm Home Never Leave Worried package. Prove you turned everything off.',
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
    content: `Before you start, confirm you have all items: Kasa EP25 Smart Plugs (×4) and Aqara Door & Window Sensors (×2).\n\nDownload these apps now: Kasa Smart and Aqara Home.`,
    tip: null,
    warning: null,
  },
  {
    number: 2,
    title: 'Plug in the Kasa EP25 smart plugs',
    time: '10 min',
    content: `Identify the appliances you always worry about leaving on — the stove, iron, space heater, and curling iron are the most common culprits.\n\nPlug each Kasa EP25 into the wall outlet and connect your appliance to the smart plug. Open the Kasa app → + → Add Device → Smart Plug.\n\nName each plug clearly: "Kitchen Stove," "Master Bedroom Iron," "Office Space Heater." These names appear in your monitoring dashboard and routines.`,
    tip: 'The EP25 also monitors energy usage, so you can see at a glance whether an appliance is actually drawing power — handy for double-checking remotely.',
    warning: null,
    links: [
      { label: 'Kasa EP25 Setup (Lon.TV)', url: 'https://www.youtube.com/results?search_query=kasa+ep25+smart+plug+setup+review', type: 'video' },
      { label: 'Kasa EP25 4-pack on Amazon', url: 'https://www.amazon.com/s?k=Kasa+Smart+Plug+EP25+4+pack&linkCode=ll2&tag=calmhome02-20&linkId=37e1af93dbdf8bf060b9cca6638d8a91&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 3,
    title: 'Set auto-shutoff schedules',
    time: '10 min',
    content: `In the Kasa app, open each plug → tap "Schedule" → set it to automatically turn OFF after 2 hours (or whatever makes sense for that appliance).\n\nFor the iron and curling iron, 30–60 minutes is plenty. For the space heater, 2–3 hours. For the stove plug, you may prefer not to use a timer and instead just monitor remotely.\n\nYou can also set a hard cutoff time — for example, "Turn off at 8 PM regardless" — so nothing runs into the evening accidentally.`,
    tip: 'Use the "Away" mode in Kasa to cut power to all monitored plugs with one tap before you leave the house.',
    warning: null,
  },
  {
    number: 4,
    title: 'Install the Aqara Door & Window Sensors',
    time: '10 min',
    content: `The Aqara P2 sensors use peel-and-stick mounting — no drilling, no tools. Each sensor is two parts: the main body and a small magnet.\n\nAttach the main body to the door or window frame, and the magnet to the moving part (the door itself or the window sash). Keep them within 1 cm of each other when closed.\n\nOpen the Aqara Home app → + → Add Accessory → scan the QR code on the sensor. Repeat for each sensor.\n\nGood locations: front door, back door, garage door, or any window you sometimes forget to close.`,
    tip: null,
    warning: null,
    links: [
      { label: 'Aqara Sensor Setup Guide', url: 'https://www.youtube.com/results?search_query=aqara+door+window+sensor+p2+setup+review', type: 'video' },
      { label: 'Aqara P2 Sensors on Amazon', url: 'https://www.amazon.com/Aqara-Requires-Contact-Automation-Supports/dp/B0BTL8B72D?linkCode=ll2&tag=calmhome02-20&linkId=5e4a409d1a7eee2a1d98ceb4eeb95b7a&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 5,
    title: 'Connect to Google Home or Alexa',
    time: '10 min',
    content: `**Google Home:** Open the app → + → Set up device → Works with Google → search "Kasa" → link your TP-Link account. Repeat with "Aqara."\n\n**Alexa:** Open Alexa → More → Skills & Games → search "Kasa Smart" → Enable → link account. Repeat for "Aqara."\n\nOnce linked, all your plugs and sensors appear in the same hub. This is what makes the "leaving home" routine in the next step possible.`,
    tip: null,
    warning: null,
  },
  {
    number: 6,
    title: 'Create a "Leaving home" routine',
    time: '10 min',
    content: `Build a single routine that checks everything before you leave.\n\n**Google Home:** Automations → + New → name it "Away Check" → choose "At a time" or "When I leave home" (geofencing) → Then: turn off all Kasa plugs + check all Aqara sensors (set to alert if open).\n\n**Alexa:** Routines → + → Trigger: "When I say Alexa, Away Check" → Actions: turn off each Kasa plug → send a notification if any Aqara sensor is open.\n\nRun "Away Check" every time you leave. It confirms everything is off and flags any open doors — so you never have to turn around.`,
    tip: 'Name the Alexa routine something you can say naturally: "Alexa, leaving" or "Alexa, Away Check." The simpler the phrase, the more likely you\'ll actually use it.',
    warning: null,
  },
]

const faqs = [
  {
    q: "Can I turn off a plug remotely after I've already left?",
    a: "Yes. Open the Kasa app from anywhere and tap the plug to toggle it off. As long as your phone has a data connection, it works globally.",
  },
  {
    q: "The Aqara sensor shows 'open' but the door is definitely closed",
    a: "The magnet and sensor body are too far apart. Adjust the magnet's position on the door so it sits within about 5mm of the sensor when closed. Sometimes adhesive shift happens over time — just re-stick it.",
  },
  {
    q: "My space heater isn't responding to the smart plug",
    a: "Some space heaters have a physical power switch that needs to be manually set to 'on' — the smart plug only controls the outlet power. Make sure the heater's own switch is in the ON position so the smart plug can take over.",
  },
]

export default function NeverLeaveWorriedGuide() {
  const suggestions = PACKAGES.filter(p => ['good-neighbor', 'safe-kids', 'weekend-away'].includes(p.slug))
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Back link */}
        <Link href="/packages/never-leave-worried" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← Back to Never Leave Worried
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="text-amber-400 text-4xl mb-4">✅</div>
          <h1 className="text-4xl font-bold text-white mb-3">Never Leave Worried Setup Guide</h1>
          <p className="text-slate-400 text-lg">You already turned everything off. We can prove it.</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
            <span>⏱</span> <span>Total time: ~55 minutes</span>
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

        <ExploreMore packages={suggestions} subheading="These pair naturally with your Never Leave Worried setup." />

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-4">Ready to leave without looking back? Everything you need is in the Never Leave Worried package.</p>
          <Link
            href="/packages/never-leave-worried"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            View the Never Leave Worried Package →
          </Link>
        </div>

      </main>
    </div>
  )
}
