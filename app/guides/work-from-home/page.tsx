import Nav from '@/components/Nav'
import Link from 'next/link'
import ExploreMore from '@/components/ExploreMore'
import { PACKAGES } from '@/lib/packages'

export const metadata = {
  title: 'Work From Home Setup Guide',
  description: 'Step-by-step setup guide for the Calm Home Work From Home package. Your home office, actually working.',
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
    content: `Before you start, confirm you have: Kasa KL135 Smart Bulbs (×2), Kasa EP25 Smart Plugs (×2), and a Tapo T100 Motion Sensor.\n\nDownload these apps now: Kasa Smart and Tapo.`,
    tip: null,
    warning: null,
  },
  {
    number: 2,
    title: 'Install the Kasa KL135 bulbs in your workspace',
    time: '10 min',
    content: `Install the KL135 bulbs in your desk lamp and/or overhead light fixture. Make sure the switches controlling those fixtures are left permanently ON — you'll control the bulbs through the Kasa app from here on.\n\nOpen the Kasa app → + → Add Device → Smart Bulb. Follow the setup steps for each bulb.\n\nTest the full color temperature range — from warm yellow (2500K) at the low end to cool daylight white (6500K) at the high end. Your "video call" scene will use the high end.`,
    tip: 'Position your desk lamp slightly behind and above your monitor, angled toward your face. This is the classic interview lighting setup and it translates perfectly to video calls.',
    warning: null,
    links: [
      { label: 'Kasa KL135 Setup Guide', url: 'https://www.youtube.com/results?search_query=kasa+kl135+smart+bulb+setup+review', type: 'video' },
      { label: 'Kasa KL135 on Amazon', url: 'https://www.amazon.com/Kasa-Smart-Changing-Compatible-KL135P2/dp/B08TB6VXFL?linkCode=ll2&tag=calmhome02-20&linkId=95cb1ede5c63058e53801311456f21c1&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 3,
    title: 'Create your "Video call" scene',
    time: '10 min',
    content: `In the Kasa app → Scenes → + Create Scene → name it "Video Call."\n\nSet your desk lamp bulb to: 5000K (cool daylight white), 70% brightness.\nSet your overhead bulb (if any) to: 4000K, 50% brightness.\n\nThis combination gives you even, flattering light for video without harsh shadows or the orange glow of warmer settings.\n\nSave the scene. You can trigger it with one tap in the app, or link it to a Google Home / Alexa routine.`,
    tip: '5000K is your magic number for video calls — it matches natural daylight and makes skin tones look accurate on camera. Anything warmer (below 3500K) adds an orange cast.',
    warning: null,
  },
  {
    number: 4,
    title: 'Plug your desk and monitor into Kasa EP25 plugs',
    time: '10 min',
    content: `Plug the two EP25 smart plugs into the outlets powering your desk lamp and your monitor (or desktop computer if you have one).\n\nOpen the Kasa app → + → Add Device → Smart Plug for each one. Name them clearly: "Desk Monitor" and "Desk Lamp."\n\nNow set a work schedule in the Kasa app: each plug turns ON at 8:00 AM and OFF at 6:30 PM on weekdays. Your workstation powers itself up and down so it's never burning energy at 2 AM.`,
    tip: 'If you use a laptop instead of a desktop, plug your monitor into the EP25 — the monitor waking up is a good cue that the workday has started.',
    warning: null,
    links: [
      { label: 'Kasa EP25 Setup (Lon.TV)', url: 'https://www.youtube.com/results?search_query=kasa+ep25+smart+plug+setup+review', type: 'video' },
      { label: 'Kasa EP25 on Amazon', url: 'https://www.amazon.com/Kasa-Smart-Supported-Scheduling-EP25P2/dp/B0CHDCYSW7?linkCode=ll2&tag=calmhome02-20&linkId=f41bca503408c3cac4288731665e3d82&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 5,
    title: 'Set up the Tapo T100 motion sensor at your desk',
    time: '15 min',
    content: `Mount the T100 at desk height or slightly above, angled to detect movement in your chair. Use the peel-and-stick mount on a shelf, monitor stand, or the desk itself.\n\nOpen the Tapo app → + → Add Device → Motion Sensor. Follow the pairing steps.\n\nNow link it to a "Focus mode" in Google Home or Alexa:\n\n**Google Home:** Automations → When motion detected by T100 → set lights to 5000K Focus mode.\n\n**Alexa:** Routines → When motion detected (T100) → Smart Home → set each bulb to 5000K at 70%.\n\nWhen you sit down at your desk, the lights shift automatically. When you get up and motion stops, you can set them to shift back to a warmer tone after 5 minutes.`,
    tip: 'Set the T100\'s re-trigger interval to 5 minutes. This prevents the focus lighting from turning off every time you reach for your coffee.',
    warning: null,
    links: [
      { label: 'Tapo T100 Motion Sensor Guide', url: 'https://www.youtube.com/results?search_query=tapo+t100+motion+sensor+setup+review', type: 'video' },
      { label: 'Tapo T100 on Amazon', url: 'https://www.amazon.com/TP-Link-Tapo-Sensitivity-Notification-T100/dp/B0BYH66C3S?linkCode=ll2&tag=calmhome02-20&linkId=6ab088f0d1490a445b00959481008d33&language=en_US&ref_=as_li_ss_tl', type: 'product' },
    ],
  },
  {
    number: 6,
    title: 'Create your "End of day" routine',
    time: '10 min',
    content: `Build a routine that signals the end of the workday and transitions your home back to evening mode.\n\n**Google Home:** Automations → + New → Trigger: "At 6:00 PM, weekdays" → Then: turn off Kasa EP25 plugs (monitor + desk lamp) + set KL135 bulbs to 2700K warm white at 40% brightness.\n\n**Alexa:** Routines → Schedule → 6:00 PM weekdays → turn off Kasa plugs → set bulbs to warm scene.\n\nThe effect: at 6 PM, your desk turns off, the room shifts to warm evening light, and work is physically over. It's a surprisingly effective cue to stop checking email.`,
    tip: 'Add a soft chime or a brief Alexa announcement ("Work day complete.") as part of the end-of-day routine. A little ceremony helps your brain switch off.',
    warning: null,
  },
]

const faqs = [
  {
    q: "My bulb isn't responding to the scene",
    a: "Make sure the bulb's wall switch is permanently ON. Smart bulbs lose their connection when the switch is turned off. If it's already on, force-close the Kasa app and reopen it — sometimes a refresh is all it needs.",
  },
  {
    q: "The T100 keeps triggering even when I'm not at my desk",
    a: "Adjust the sensor's aim so it's pointing more directly at your chair. A wide angle will pick up movement across the room. Also check the sensitivity setting in the Tapo app — medium is usually right for office setups.",
  },
  {
    q: "Work schedule isn't turning plugs on/off at the right time",
    a: "Check that the Kasa app has the correct time zone set (Account → Settings → Time Zone). Schedules run on device local time, and a mismatch causes them to fire at the wrong hour.",
  },
]

export default function WorkFromHomeGuide() {
  const suggestions = PACKAGES.filter(p => ['easy-mornings', 'welcome-home', 'never-leave-worried'].includes(p.slug))
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Back link */}
        <Link href="/packages/work-from-home" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← Back to Work From Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="text-amber-400 text-4xl mb-4">💻</div>
          <h1 className="text-4xl font-bold text-white mb-3">Work From Home Setup Guide</h1>
          <p className="text-slate-400 text-lg">Your home office, actually working.</p>
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

        <ExploreMore packages={suggestions} subheading="These pair naturally with your Work From Home setup." />

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-4">Ready to make your home office actually work? Everything you need is in the Work From Home package.</p>
          <Link
            href="/packages/work-from-home"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            View the Work From Home Package →
          </Link>
        </div>

      </main>
    </div>
  )
}
