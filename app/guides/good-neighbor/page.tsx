import Nav from '@/components/Nav'
import Link from 'next/link'
import ExploreMore from '@/components/ExploreMore'
import { PACKAGES } from '@/lib/packages'

export const metadata = {
  title: 'Good Neighbor Setup Guide',
  description: 'Step-by-step setup guide for the Calm Home Good Neighbor package. Get everything running in an afternoon.',
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
    content: `Before you start, confirm you have all four items: Arlo Video Doorbell, Schlage Encode Plus lock, Ring Chime Pro, and 2× Kasa Smart Plugs. Download these apps now so they're ready: Arlo, Schlage Home, Ring, and Kasa Smart.`,
    tip: null,
    warning: null,
  },
  {
    number: 2,
    title: 'Install the Arlo Video Doorbell',
    time: '30 min',
    content: `You have two options — wired or battery.\n\n**Wired (replaces existing doorbell):** Turn off power at your breaker. Remove your old doorbell button. Connect the two wires to the Arlo mounting base. Snap the camera unit into the base. Restore power.\n\n**Battery (no wiring):** Mount the bracket at your preferred location and insert the battery unit.\n\nOpen the Arlo app → Add Device → Video Doorbell → follow the on-screen steps.`,
    tip: 'Position the lens at roughly 4–5 feet from the ground (chest height) for the best face detection angle.',
    warning: null,
    links: [
      { label: 'Arlo Doorbell Install (The Hook Up)', url: 'https://www.youtube.com/results?search_query=arlo+essential+video+doorbell+installation+the+hook+up', type: 'video' },
      { label: 'Arlo Video Doorbell on Amazon', url: 'https://www.amazon.com/s?k=Arlo+Video+Doorbell+2nd+Gen&tag=calmhome02-20', type: 'product' },
    ],
  },
  {
    number: 3,
    title: 'Replace your deadbolt with the Schlage Encode Plus',
    time: '20 min',
    content: `All you need is a Phillips screwdriver.\n\n1. Remove your existing deadbolt — unscrew the two screws on the interior plate, then pull out the cylinder from both sides.\n2. Thread the new cable through the door bore hole.\n3. Attach the exterior assembly, then the interior assembly.\n4. Connect the cable between both halves and tighten all screws.\n5. Install 4 AA batteries.\n6. Open the Schlage Home app and follow the Wi-Fi pairing steps to set your first access code.`,
    tip: null,
    warning: 'Standard doors are 1-3/8" to 1-3/4" thick. If yours is non-standard, check the Schlage compatibility page before starting.',
    links: [
      { label: 'Schlage Encode Install (Smart Home Solver)', url: 'https://www.youtube.com/results?search_query=schlage+encode+plus+installation+smart+home', type: 'video' },
      { label: 'Schlage Encode Plus on Amazon', url: 'https://www.amazon.com/s?k=Schlage+Encode+Plus+Smart+WiFi+Deadbolt&tag=calmhome02-20', type: 'product' },
    ],
  },
  {
    number: 4,
    title: 'Plug in the Ring Chime Pro',
    time: '5 min',
    content: `Find an outlet roughly halfway between your router and your front door. Plug in the Ring Chime Pro. Open the Ring app → Set Up a Device → Chime Pro and follow the steps.\n\nThis does double duty: it chimes inside when someone rings the doorbell, and it extends your Wi-Fi signal to strengthen the Arlo doorbell's connection.`,
    tip: null,
    warning: null,
    links: [
      { label: 'Ring Chime Pro on Amazon', url: 'https://www.amazon.com/s?k=Ring+Chime+Pro+2nd+Gen&tag=calmhome02-20', type: 'product' },
    ],
  },
  {
    number: 5,
    title: 'Set up the Kasa Smart Plugs',
    time: '10 min',
    content: `Plug the two Kasa EP25 plugs into your porch light outlet and any secondary outdoor or entryway outlet. Open the Kasa app → Add Device → Smart Plug for each one.\n\nSet a schedule: on at sunset, off at 11 PM. Kasa pulls your local sunrise/sunset automatically based on your location.`,
    tip: 'If your porch light is controlled by a wall switch, leave the switch flipped ON permanently. The Kasa plug handles on/off from here on out.',
    warning: null,
    links: [
      { label: 'Kasa EP25 Setup (Lon.TV)', url: 'https://www.youtube.com/results?search_query=kasa+ep25+smart+plug+setup+review', type: 'video' },
      { label: 'Kasa EP25 on Amazon', url: 'https://www.amazon.com/s?k=Kasa+Smart+Plug+EP25+2+pack&tag=calmhome02-20', type: 'product' },
    ],
  },
  {
    number: 6,
    title: 'Connect everything to Google Home or Alexa',
    time: '10 min',
    content: `**Google Home:** Open the app → Add → Works with Google → search for Arlo, Schlage, Ring, and Kasa one at a time → link each account.\n\n**Alexa:** Open the app → More → Skills & Games → search each brand → Enable Skill → link account.\n\nOnce everything is linked, create a "Good night" routine: lock the door + turn off porch lights + enable Arlo motion detection — all with one command.`,
    tip: null,
    warning: null,
    links: [
      { label: 'Link Kasa to Google Home', url: 'https://www.youtube.com/results?search_query=kasa+smart+plug+google+home+setup', type: 'video' },
      { label: 'Link Schlage to Google Home', url: 'https://www.youtube.com/results?search_query=schlage+encode+google+home+setup', type: 'video' },
    ],
  },
  {
    number: 7,
    title: 'Set up access codes',
    time: '10 min',
    content: `In the Schlage Home app → Access Codes → Add Code.\n\nRecommended codes to create:\n- **Family** — permanent access\n- **Dog walker / cleaner** — scheduled (e.g., weekdays 12–4 PM only)\n- **Guests** — temporary with an expiry date\n\nYou can have up to 100 individual codes.`,
    tip: null,
    warning: 'Keep your programming code (printed on the key tag that came in the box) in a safe place. This code controls the ability to add and delete other codes — never share it.',
  },
]

const faqs = [
  {
    q: "Arlo doorbell won't connect to Wi-Fi",
    a: "Make sure you're connecting to a 2.4 GHz network during setup (not 5 GHz). Once paired, it works on either band.",
  },
  {
    q: "Schlage lock beeps but won't lock or unlock",
    a: "Usually low batteries. Check the battery indicator in the Schlage Home app and replace all 4 AAs if prompted.",
  },
  {
    q: "Kasa plug not found in the app",
    a: "Hold the button on the plug for 5 seconds until it flashes rapidly, then try adding it in the Kasa app again.",
  },
]

export default function GoodNeighborGuide() {
  const suggestions = PACKAGES.filter(p => ['weekend-away', 'welcome-home', 'never-leave-worried'].includes(p.slug))
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Back link */}
        <Link href="/packages/good-neighbor" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← Back to Good Neighbor
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="text-amber-400 text-4xl mb-4">🚪</div>
          <h1 className="text-4xl font-bold text-white mb-3">Good Neighbor Setup Guide</h1>
          <p className="text-slate-400 text-lg">Everything you need to get set up in an afternoon.</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
            <span>⏱</span> <span>Total time: ~90 minutes</span>
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

        <ExploreMore packages={suggestions} subheading="These pair naturally with your Good Neighbor setup." />

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-4">Ready to get started? Everything you need is in the Good Neighbor package.</p>
          <Link
            href="/packages/good-neighbor"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            View the Good Neighbor Package →
          </Link>
        </div>

      </main>
    </div>
  )
}
