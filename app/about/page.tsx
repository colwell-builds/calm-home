import Nav from '@/components/Nav'

export const metadata = {
  title: 'About — Calm Home',
  description: 'Why we built Calm Home and what we believe about smart home technology.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />

      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The home you imagined<br />
            <span className="text-amber-400">should actually exist.</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Everyone has felt it — that vision of a home that just works. Lights that know when you arrive. 
            A door that locks itself. A thermostat that learns what comfortable means to you. A home 
            that wraps around you and becomes part of the experience of living.
          </p>
        </div>

        {/* The gap */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">The reality, though, is different.</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            You get a lot of work. You get things that sort of work, incrementally, not quite the way 
            you pictured. You get systems that don't talk to each other. You get more headaches than 
            heartfelt responses.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The smart home industry has spent twenty years selling individual devices. Nobody sold you 
            the <em>experience</em>.
          </p>
        </div>

        {/* Calm Home answer */}
        <div className="mb-16 border-l-4 border-amber-400 pl-8">
          <p className="text-xl text-white font-medium leading-relaxed">
            "Set it and forget it. That's the goal. Not a project — a feeling."
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">That's why we built Calm Home.</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Instead of selling you a gadget, we sell you an outcome. Each package is designed around 
            a specific feeling — security, ease, peace of mind — with every product chosen to work 
            together from day one.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            We've done the research, sorted through the compatibility headaches, and put together 
            bundles that actually deliver the experience people are after. Then we guide you through 
            setup so it feels doable — because it is.
          </p>
          <p className="text-slate-300 leading-relaxed">
            You don't need to be a tech person. You just need to know what you want your home to feel like.
          </p>
        </div>

        {/* Support promise */}
        <div className="mb-16 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">We stay with you.</h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-amber-400 mt-0.5">✓</span>
              <span>Step-by-step setup guides for every package</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 mt-0.5">✓</span>
              <span>FAQs for the things that might go sideways</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 mt-0.5">✓</span>
              <span>Products that are built to last, not just to impress</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 mt-0.5">✓</span>
              <span>No subscriptions required for core features — your home, not a rental</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to get the feeling?</h2>
          <p className="text-slate-300 mb-8">Browse the packages. Pick the one that fits your life. We'll take it from there.</p>
          <a
            href="/#packages"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            See the packages →
          </a>
        </div>

      </main>
    </div>
  )
}
