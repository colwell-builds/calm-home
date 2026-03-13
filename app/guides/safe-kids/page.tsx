import Nav from '@/components/Nav'
import Link from 'next/link'
import ExploreMore from '@/components/ExploreMore'
import { PACKAGES } from '@/lib/packages'

export const metadata = {
  title: 'Safe Kids Setup Guide',
  description: 'Step-by-step setup guide for the Calm Home Safe Kids package.',
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
    content: `Check that you have: 2× TP-Link Tapo C210P2 cameras (2K pan/tilt, indoor), 1× Tapo C120 camera (indoor/outdoor), 4× Aqara Door & Window Sensors P2, 2× Tapo T100 Motion Sensors, and 1× 64GB SanDisk microSD card.\n\nDownload these apps before you start: Tapo (cameras and motion sensors), Aqara (door/window sensors). You'll also want Google Home or Amazon Alexa for voice control.`,
    tip: 'Insert the microSD card into one of the C210P2 cameras before powering it on — it sets up local storage automatically.',
    warning: null,
  },
  {
    number: 2,
    title: 'Place and mount the cameras',
    time: '20 min',
    content: `**Camera 1 (C210P2) — Main living area or playroom:** Pan/tilt cameras have a 360° horizontal range, so placement near the center of the room works well. Set on a shelf or mount high on a wall.\n\n**Camera 2 (C210P2) — Second child's room or hallway:** Same setup. These cameras can be monitored together in the Tapo app.\n\n**Camera 3 (C120) — Third location:** Use this for a covered porch, garage, or third interior room. It handles indoor and light outdoor use.\n\nAll three plug into standard outlets — no battery, no wiring.`,
    tip: "Aim cameras at the room entrance rather than the far wall. You want to see who comes in, not what's in the corner.",
    warning: null,
    links: [
      { label: 'Tapo C210 Camera Setup', url: 'https://www.youtube.com/results?search_query=tp+link+tapo+c210+setup+review', type: 'video' as const },
      { label: 'Tapo C210 2-Pack on Amazon', url: 'https://www.amazon.com/s?k=TP-Link+Tapo+C210P2+2K+Pan+Tilt+Camera&tag=calmhome02-20', type: 'product' as const },
      { label: 'Tapo C120 Setup (Everything Smart Home)', url: 'https://www.youtube.com/results?search_query=tp+link+tapo+c120+setup+review', type: 'video' as const },
      { label: 'Tapo C120 on Amazon', url: 'https://www.amazon.com/s?k=TP-Link+Tapo+C120+2K+Indoor+Outdoor+Security+Camera&tag=calmhome02-20', type: 'product' as const },
    ],
  },
  {
    number: 3,
    title: 'Set up the Tapo cameras in the app',
    time: '15 min',
    content: `Open the Tapo app → tap + → Add Device → Camera → select your model.\n\nFor each camera:\n1. Connect to your 2.4 GHz Wi-Fi (required during setup)\n2. Name the camera by room (e.g., "Playroom", "Ollie's Room")\n3. Set the microSD card for local recording in Settings → Storage → Local Storage\n4. Set up motion detection zones in Settings → Detection → Motion Detection\n\nRepeat for all three cameras.`,
    tip: null,
    warning: "During setup, make sure you're on 2.4 GHz Wi-Fi. After pairing, the camera works on either 2.4 or 5 GHz.",
  },
  {
    number: 4,
    title: 'Install the Aqara door and window sensors',
    time: '15 min',
    content: `Each sensor has two pieces: a main unit and a small magnet. They attach with included 3M tape — no tools, no screws.\n\n**Recommended placement:**\n- Front door\n- Back door or garage door\n- Bedroom door (optional — alerts when a child leaves their room at night)\n- Bonus window (basement, playroom, or any point of entry)\n\nTo pair: open the Aqara app → Add Device → follow the steps. These sensors are Matter-certified, so they also work directly with Google Home and Alexa.`,
    tip: 'Place the magnet piece on the moving part (the door), and the main unit on the stationary frame. Keep them within 1/4" of each other when closed.',
    warning: null,
    links: [
      { label: 'Aqara Sensor Setup', url: 'https://www.youtube.com/results?search_query=aqara+door+window+sensor+setup+google+home', type: 'video' as const },
      { label: 'Aqara Sensors on Amazon', url: 'https://www.amazon.com/s?k=Aqara+Door+Window+Sensor+P2&tag=calmhome02-20', type: 'product' as const },
    ],
  },
  {
    number: 5,
    title: 'Install the motion sensors',
    time: '10 min',
    content: `The Tapo T100 motion sensors use the same 3M mounting tape. No hub required — they pair directly to the Tapo app via the hub built into the cameras.\n\n**Best locations:**\n- Main hallway (catches movement between bedrooms and common areas)\n- Staircase top or bottom\n\nIn the Tapo app → Automation → Create → When: motion detected → Then: send phone notification + start camera recording.`,
    tip: null,
    warning: null,
    links: [
      { label: 'Tapo T100 Motion Sensor Setup', url: 'https://www.youtube.com/results?search_query=tp+link+tapo+t100+motion+sensor+setup', type: 'video' as const },
      { label: 'T100 Motion Sensor on Amazon', url: 'https://www.amazon.com/s?k=TP-Link+Tapo+T100+Motion+Sensor+2+pack&tag=calmhome02-20', type: 'product' as const },
    ],
  },
  {
    number: 6,
    title: 'Set up family sharing and notifications',
    time: '10 min',
    content: `In the Tapo app → Me → Family Sharing → invite your partner by email. Both of you will see all cameras and get alerts.\n\n**Tune your notifications:**\n- Set "quiet hours" so motion alerts pause overnight (2 AM–6 AM) if you don't want sleep interruptions\n- Turn off motion alerts when everyone's home using the "Home" mode — cameras still record, just don't ping you\n- Set door sensor alerts to notify immediately, regardless of mode\n\nIn Google Home or Alexa: link your Tapo account to see cameras in your smart home app.`,
    tip: 'Use the Aqara "scenes" to create a bedtime automation: when you say "good night," arm the door sensors for instant alerts.',
    warning: null,
  },
  {
    number: 7,
    title: 'Enable privacy mode',
    time: '5 min',
    content: `The C210P2 cameras have a built-in privacy mode — the camera physically rotates to face the wall and stops recording.\n\nSet up an automation: when your phone arrives home (geofencing) → enable privacy mode on all cameras. When you leave → disable privacy mode.\n\nIn Tapo app → Automation → Create → Trigger: geofence arrive → Action: Privacy Mode ON.`,
    tip: "This is the single best trust-builder if you have older kids or guests. The camera visibly turns away — no guessing whether it's watching.",
    warning: null,
  },
]

const faqs = [
  {
    q: "Do I need a subscription for cloud storage?",
    a: "No. All recordings go to the 64GB microSD card included in the package. Local storage, no monthly fee. Cloud storage is optional and available in the Tapo app if you want it.",
  },
  {
    q: "Camera shows offline in the app",
    a: "Usually a Wi-Fi issue. Move your router closer, or check that the camera is on 2.4 GHz (not 5 GHz only). Unplug the camera for 10 seconds and plug back in.",
  },
  {
    q: "Getting too many motion alerts",
    a: "Go into each camera's settings → Detection → Motion Detection → lower the sensitivity, or draw a custom detection zone to exclude high-traffic areas like windows with passing cars.",
  },
  {
    q: "Door sensor isn't triggering alerts",
    a: "Check the gap between the two sensor pieces when the door is closed — they need to be within about 1/4 inch. Reposition the magnet piece if needed.",
  },
]

export default function SafeKidsGuide() {
  const suggestions = PACKAGES.filter(p => ['pet-parent', 'never-leave-worried', 'weekend-away'].includes(p.slug))
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/packages/safe-kids" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← Back to Safe Kids
        </Link>
        <div className="mb-12">
          <div className="text-4xl mb-4">🛡️</div>
          <h1 className="text-4xl font-bold text-white mb-3">Safe Kids Setup Guide</h1>
          <p className="text-slate-400 text-lg">Every room covered. Every alert dialed in. No subscription required.</p>
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
        <ExploreMore packages={suggestions} subheading="These pair naturally with your Safe Kids setup." />

        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-4">Everything you need is in the Safe Kids package.</p>
          <Link href="/packages/safe-kids" className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors">
            View the Safe Kids Package →
          </Link>
        </div>
      </main>
    </div>
  )
}
