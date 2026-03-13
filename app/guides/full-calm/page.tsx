import Nav from '@/components/Nav'
import Link from 'next/link'
import ExploreMore from '@/components/ExploreMore'
import { PACKAGES } from '@/lib/packages'

export const metadata = {
  title: 'Full Calm Setup Guide',
  description: 'Step-by-step setup guide for the Calm Home Full Calm package — the complete home automation bundle.',
}

export default function FullCalmGuide() {
  const suggestions = PACKAGES.filter(p => ['welcome-home', 'weekend-away', 'work-from-home', 'pet-parent', 'never-leave-worried'].includes(p.slug))
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/packages/full-calm" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← Back to Full Calm
        </Link>
        <div className="mb-12">
          <div className="text-4xl mb-4">🏠</div>
          <h1 className="text-4xl font-bold text-white mb-3">Full Calm Setup Guide</h1>
          <p className="text-slate-400 text-lg">{"The whole home. Done right. Set aside a weekend — it's worth it."}</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
            <span>⏱</span><span>Total time: ~4–5 hours over a weekend</span>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-semibold text-white mb-3">This guide = all three guides combined</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Full Calm is everything from Good Neighbor, Safe Kids, and Easy Mornings in one bundle.
            The best approach is to set up one package at a time over a weekend — each one takes about 90 minutes and you can test it before moving on.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">We recommend this order:</p>
          <div className="space-y-3">
            {[
              { icon: '🚪', label: 'Saturday morning', pkg: 'Good Neighbor', slug: 'good-neighbor', desc: 'Doorbell, lock, porch lights — everything outside-facing' },
              { icon: '🛡️', label: 'Saturday afternoon', pkg: 'Safe Kids', slug: 'safe-kids', desc: 'Cameras, sensors, family notifications' },
              { icon: '☀️', label: 'Sunday morning', pkg: 'Easy Mornings', slug: 'easy-mornings', desc: 'Thermostat, plugs, sunrise bulbs' },
            ].map((item) => (
              <Link key={item.slug} href={`/guides/${item.slug}`} className="flex items-start gap-4 bg-slate-800 hover:bg-slate-700 rounded-xl p-4 transition-colors group">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-500">{item.label}</span>
                  </div>
                  <p className="font-semibold text-white group-hover:text-amber-400 transition-colors">{item.pkg} Setup Guide</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
                <span className="text-amber-400 self-center">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Unify section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">After all three are set up: unify everything</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div className="border-l-2 border-amber-400 pl-6">
              <h3 className="text-white font-semibold mb-2">Create a &ldquo;Good night&rdquo; master routine</h3>
              <p>In Google Home or Alexa, create one routine that fires everything at once: lock the front door, turn off porch lights, enable Arlo motion detection, turn off all Kasa plugs, dim bedroom bulbs, and set thermostat to Asleep. One command. Everything handled.</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-6">
              <h3 className="text-white font-semibold mb-2">Create a &ldquo;Good morning&rdquo; routine</h3>
              <p>Turn on coffee maker, ramp bedroom bulbs to full, set thermostat to Awake, and display the front door camera on a smart display if you have one. The house is already going by the time you&apos;re up.</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-6">
              <h3 className="text-white font-semibold mb-2">Set geofencing for away mode</h3>
              <p>In both Ecobee and Tapo: configure geofencing so when the last person leaves, the thermostat switches to Away and cameras enable motion recording. When someone returns, the cameras go to privacy mode and the thermostat comes back to comfort.</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-6">
              <h3 className="text-white font-semibold mb-2">Share access with everyone in the household</h3>
              <p>Tapo → Family Sharing. Arlo → Grant Access. Schlage Home → Manage Users. One afternoon of sharing and everyone in the family has visibility into their piece of it.</p>
            </div>
          </div>
        </div>

        <ExploreMore packages={suggestions} subheading="Even more automation to layer on top of your Full Calm setup." />

        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-2 font-medium">Questions? Something not working?</p>
          <p className="text-slate-400 text-sm mb-6">Each individual guide has detailed troubleshooting. Start there — the answers to most issues are covered step by step.</p>
          <Link href="/packages/full-calm" className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors">
            Back to Full Calm Package →
          </Link>
        </div>
      </main>
    </div>
  )
}
