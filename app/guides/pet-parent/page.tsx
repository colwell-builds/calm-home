import Nav from '@/components/Nav'
import Link from 'next/link'
import ExploreMore from '@/components/ExploreMore'
import { PACKAGES } from '@/lib/packages'

export const metadata = {
  title: 'Pet Parent Setup Guide',
  description: 'Step-by-step setup guide for the Calm Home Pet Parent package. Someone\'s always keeping an eye on them.',
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
    content: `Before you start, confirm you have: a Tapo C210 Pan/Tilt Camera, a Tapo T100 Motion Sensor, and a Kasa EP25 Smart Plug.\n\nDownload these apps now: Tapo and Kasa Smart.`,
    tip: null,
    warning: null,
  },
  {
    number: 2,
    title: 'Set up the Tapo C210 pan/tilt camera',
    time: '15 min',
    content: `Place the C210 in a central position in the room where your pet spends the most time. The pan/tilt motor can rotate 360° horizontally and 114° vertically, so placement matters less than with a fixed camera — but a high shelf or counter gives you the best range.\n\nPlug in the camera and open the Tapo app → + → Add Device → C210. Follow the on-screen pairing steps. Connect to your 2.4 GHz Wi-Fi.\n\nOnce set up, use the remote pan/tilt control in the app to scan the room and confirm you can see all the areas your pet uses. Insert a microSD card for local recording — no subscription required.`,
    tip: 'Use the two-way audio to call out to your pet when you\'re away. It often gets a reaction — and can reassure an anxious dog that you\'re still around.',
    warning: null,
    links: [
      { label: 'Tapo C210 Setup (Smart Home Solver)', url: 'https://www.youtube.com/results?search_query=tapo+c210+pan+tilt+camera+setup+review', type: 'video' },
      { label: 'Tapo C210 on Amazon', url: 'https://www.amazon.com/indoor-pet-wifi-camera-tapo/dp/B09Y8TLP25?linkCode=ll2&tag=calmhome02-20&linkId=3757682ba9430229a83c49c251293610&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 3,
    title: 'Set up the Tapo T100 motion sensor',
    time: '10 min',
    content: `Place the T100 in the area where your pet spends most of their time — near their bed, feeding spot, or favorite couch corner.\n\nMount using the peel-and-stick backing at a height of 2–3 feet for pets, which is lower than for typical human detection.\n\nOpen the Tapo app → + → Add Device → Motion Sensor. Follow the setup steps.\n\nThis sensor tracks activity throughout the day. You'll be able to see whether your pet is active and moving around — useful for spotting if they seem unusually still, which can be an early sign of illness.`,
    tip: null,
    warning: null,
    links: [
      { label: 'Tapo T100 Motion Sensor Guide', url: 'https://www.youtube.com/results?search_query=tapo+t100+motion+sensor+setup+review', type: 'video' },
      { label: 'Tapo T100 on Amazon', url: 'https://www.amazon.com/TP-Link-Tapo-Sensitivity-Notification-T100/dp/B0BYH66C3S?linkCode=ll2&tag=calmhome02-20&linkId=6ab088f0d1490a445b00959481008d33&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 4,
    title: 'Plug the feeder or water fountain into the Kasa EP25',
    time: '10 min',
    content: `If you have an automatic pet feeder or a pet water fountain, plug it into the Kasa EP25 smart plug.\n\nOpen the Kasa app → + → Add Device → Smart Plug. Name it clearly: "Pet Feeder" or "Water Fountain."\n\nSet a feeding schedule: go to the plug → Schedule → add time blocks for your pet's regular feeding times (e.g., 7 AM and 5 PM). The plug will cut and restore power on schedule, triggering the feeder's dispensing cycle.\n\nNote: this works best with gravity or timed auto-feeders. Check your feeder's manual to confirm it dispenses on power-on.`,
    tip: 'Monitor the feeder\'s power consumption in the Kasa app. A sudden drop to zero watts may mean the feeder is empty or jammed — a useful alert when you\'re not home.',
    warning: null,
    links: [
      { label: 'Kasa EP25 Setup (Lon.TV)', url: 'https://www.youtube.com/results?search_query=kasa+ep25+smart+plug+setup+review', type: 'video' },
      { label: 'Kasa EP25 on Amazon', url: 'https://www.amazon.com/s?k=Kasa+Smart+Plug+EP25&linkCode=ll2&tag=calmhome02-20&linkId=150d744101bce7144a18861f581b6960&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 5,
    title: 'Set up activity alerts',
    time: '10 min',
    content: `In the Tapo app, set up motion detection alerts from the C210 camera:\n\nCamera Settings → Notifications → Motion Detection → toggle ON. Set sensitivity to "Medium" — pets move quickly and will trigger high sensitivity constantly.\n\nSet quiet hours so you're not woken up at 3 AM when your cat decides to redecorate. In Tapo → Notifications → Schedule → set quiet hours from 10 PM to 7 AM (or whatever works for you).\n\nFor the T100 motion sensor, set the re-trigger interval to 5 minutes so you get a notification if your pet hasn't moved in a while — a gentle health check built into your home.`,
    tip: null,
    warning: null,
  },
  {
    number: 6,
    title: 'Share camera access with your pet sitter or dog walker',
    time: '5 min',
    content: `In the Tapo app → tap your C210 camera → Share → enter the pet sitter's email address. Select "Limited access" — they can view the live feed but can't change settings or access other cameras.\n\nThis is useful for dog walkers who want to know where your pet is before they arrive, or for out-of-town sitters who want to check in remotely.\n\nRevoke access easily when they're done: tap the camera → Share → remove the user.`,
    tip: 'If your pet sitter isn\'t comfortable with apps, just share the Tapo link via text — they can view the camera in a browser without installing anything.',
    warning: null,
  },
]

const faqs = [
  {
    q: "Camera keeps losing track of my pet when they move fast",
    a: "Enable the auto-tracking feature in the Tapo app (camera settings → Auto Tracking). It uses the pan/tilt motor to follow movement automatically. Works best for pets that stay in one room.",
  },
  {
    q: "Motion sensor is triggering too often",
    a: "Lower the sensitivity in the Tapo app to 'Low' or 'Medium' for pets. Also adjust the detection zone so it covers your pet's area without including high-traffic zones like windows with outdoor movement.",
  },
  {
    q: "Feeder isn't dispensing on schedule",
    a: "The Kasa plug controls power only — it can't send a 'dispense' command. Your feeder needs to dispense automatically when powered on (most gravity and timed feeders do). Check the feeder manual and test by unplugging and replugging it manually.",
  },
]

export default function PetParentGuide() {
  const suggestions = PACKAGES.filter(p => ['safe-kids', 'weekend-away', 'never-leave-worried'].includes(p.slug))
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Back link */}
        <Link href="/packages/pet-parent" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← Back to Pet Parent
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="text-amber-400 text-4xl mb-4">🐾</div>
          <h1 className="text-4xl font-bold text-white mb-3">Pet Parent Setup Guide</h1>
          <p className="text-slate-400 text-lg">Someone's always keeping an eye on them.</p>
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

        <ExploreMore packages={suggestions} subheading="These pair naturally with your Pet Parent setup." />

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-4">Ready to keep an eye on your furry family member? Everything you need is in the Pet Parent package.</p>
          <Link
            href="/packages/pet-parent"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            View the Pet Parent Package →
          </Link>
        </div>

      </main>
    </div>
  )
}
