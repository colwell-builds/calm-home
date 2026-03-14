import Link from 'next/link'
import { PACKAGES, SITE_NAME } from '@/lib/packages'
import WaitlistForm from '@/components/WaitlistForm'
import BlogPreview from '@/components/BlogPreview'

export default function Home() {
  return (
    <div className="pt-16">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 py-24">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in">
            Launching Spring 2026
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight animate-fade-in-up">
            Your home,<br />
            <span className="text-amber-400">handled.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto animate-fade-in-up delay-100">
            Home automation kits built around the moments that matter. The front door. The kids. The morning routine. Every kit includes the hardware, the guide, and everything in between.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Link href="#packages"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl transition-colors text-sm">
              See Our Packages
            </Link>
            <Link href="#waitlist"
              className="px-8 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-xl transition-colors text-sm">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 px-6 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-white mb-4">How it works</h2>
          <p className="text-center text-slate-400 mb-16 max-w-lg mx-auto">
            Three steps from browsing to a genuinely smarter home.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '📦', title: 'Choose a package', desc: 'Pick the kit that fits your goal — entry, safety, climate, or the whole starter bundle.' },
              { step: '02', icon: '📦', title: 'Order from Amazon', desc: 'Every product links directly to Amazon. Shop individually or all at once — same prices, same Prime benefits, no middleman.' },
              { step: '03', icon: '✅', title: 'Follow the guide', desc: 'Step-by-step setup guide walks you through every device. Most setups take under two hours.' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center hover:border-slate-700 transition-colors">
                <div className="text-xs font-bold text-amber-500/60 tracking-widest mb-4">{step}</div>
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section id="packages" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-white mb-4">Our packages</h2>
          <p className="text-center text-slate-400 mb-16 max-w-lg mx-auto">
            Every kit is hardware + setup guide + everything you need to actually get it working.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map(pkg => (
              <div key={pkg.slug}
                className="relative flex flex-col bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all hover:-translate-y-1 group">
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{pkg.tagline}</p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-amber-500 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-white">{pkg.priceLabel}</span>
                  <Link href={`/packages/${pkg.slug}`}
                    className="px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 rounded-lg transition-all">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiz CTA ── */}
      <section className="py-16 px-6 border-t border-slate-800/60">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-3">Not sure where to start?</p>
          <h2 className="text-3xl font-bold text-white mb-4">Find the right package in 60 seconds</h2>
          <p className="text-slate-400 mb-8">Answer 4 quick questions and we&apos;ll recommend the package that fits your home, your budget, and your life.</p>
          <Link href="/quiz" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-8 py-4 rounded-full transition-colors text-lg">
            Take the quiz →
          </Link>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <BlogPreview />

      {/* ── Value Props ── */}
      <section className="py-24 px-6 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-white mb-16">Why {SITE_NAME}?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Built around feelings, not features', desc: "We didn't name our kits \"Smart Entry Package v2.\" We named them Good Neighbor and Safe Kids — because that's what you actually want." },
              { icon: '📋', title: 'Guides that actually work', desc: 'Written by people who have set up these exact devices in real homes. No jargon. No assumed knowledge. Most setups take a weekend.' },
              { icon: '🔌', title: 'Everything plays nice together', desc: "Every device in a kit is tested for compatibility before it goes in the box. It connects. No surprises." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Waitlist ── */}
      <section id="waitlist" className="py-24 px-6 bg-slate-900/40 border-t border-slate-800/60">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-6">📬</div>
          <h2 className="text-3xl font-bold text-white mb-4">Be first when we launch.</h2>
          <p className="text-slate-400 mb-10 text-sm leading-relaxed max-w-md mx-auto">
            Calm Home launches Spring 2026. Join the waitlist for early access and launch pricing.
          </p>
          <WaitlistForm />
        </div>
      </section>

    </div>
  )
}
