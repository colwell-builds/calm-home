import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PACKAGES } from '@/lib/packages';

export function generateStaticParams() {
  return PACKAGES.map(p => ({ slug: p.slug }));
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = PACKAGES.find(p => p.slug === slug);
  if (!pkg) notFound();

  return (
    <div className="pt-16 min-h-screen">

      {/* Hero */}
      <section className="relative px-6 py-24 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative max-w-3xl mx-auto">
          <Link href="/#packages" className="text-sm text-slate-500 hover:text-slate-300 mb-6 inline-block transition-colors">← All packages</Link>
          <div className="text-5xl mb-6">{pkg.icon}</div>
          {pkg.badge && (
            <span className="inline-block mb-3 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-full">{pkg.badge}</span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pkg.name}</h1>
          <p className="text-xl text-amber-400 font-medium mb-6">{pkg.tagline}</p>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl">{pkg.hero}</p>
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold text-white">{pkg.priceLabel}</span>
            <Link href="/#waitlist"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl transition-colors text-sm">
              Join Waitlist to Order
            </Link>
          </div>
        </div>
      </section>

      {/* What's included — real products */}
      <section className="py-16 px-6 border-b border-slate-800/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">What&apos;s in the kit</h2>
          <p className="text-slate-500 text-sm mb-8">Every product selected for compatibility, quality, and ease of setup.</p>
          <div className="space-y-3">
            {pkg.products.filter(p => p.price > 0).map((product, i) => (
              <div key={i} className="flex items-start justify-between gap-4 bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl px-5 py-4 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    {product.brand && <span className="text-xs text-amber-500/80 font-semibold uppercase tracking-wide">{product.brand}</span>}
                  </div>
                  <p className="text-slate-100 text-sm font-medium">{product.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{product.spec}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="text-slate-300 text-sm font-semibold">${product.price}</span>
                  {product.amazonUrl && (
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored"
                      className="block text-xs text-amber-500 hover:text-amber-400 mt-1 transition-colors">
                      View on Amazon →
                    </a>
                  )}
                </div>
              </div>
            ))}
            {/* Guide */}
            <div className="flex items-start justify-between gap-4 bg-amber-500/5 border border-amber-500/20 rounded-xl px-5 py-4">
              <div>
                <span className="text-xs text-amber-500/80 font-semibold uppercase tracking-wide">Calm Home</span>
                <p className="text-slate-100 text-sm font-medium mt-0.5">Setup Guide — {pkg.name}</p>
                <p className="text-slate-500 text-xs mt-0.5">{pkg.products.find(p => p.price === 0)?.spec}</p>
              </div>
              <span className="flex-shrink-0 text-amber-400 text-sm font-semibold">Included</span>
            </div>
          </div>
          {pkg.savings && (
            <div className="mt-4 text-center text-sm text-emerald-400 font-medium">
              💰 Bundle saves you ${pkg.savings} vs. buying kits individually
            </div>
          )}
        </div>
      </section>

      {/* Setup guide preview */}
      <section className="py-16 px-6 border-b border-slate-800/60 bg-slate-900/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">What the setup guide covers</h2>
          <p className="text-slate-400 text-sm mb-8">Step-by-step. No technical experience required.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {pkg.guideTopics.map((topic, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5">
                <span className="text-slate-600 font-mono text-xs mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-slate-300 text-sm">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 border-b border-slate-800/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {pkg.faq.map((item, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2 text-sm">{item.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-slate-900/20">
        <div className="max-w-md mx-auto">
          <div className="text-3xl mb-4">{pkg.icon}</div>
          <h2 className="text-2xl font-bold text-white mb-3">Ready for the {pkg.name} kit?</h2>
          <p className="text-slate-400 text-sm mb-8">We&apos;re launching in Spring 2026. Join the waitlist for early access and launch pricing.</p>
          <Link href="/#waitlist"
            className="inline-block px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl transition-colors text-sm">
            Join the Waitlist
          </Link>
        </div>
      </section>

    </div>
  );
}
