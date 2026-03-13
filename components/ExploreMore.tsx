import Link from 'next/link'
import { Package } from '@/lib/packages'

interface Props {
  packages: Package[]
  heading?: string
  subheading?: string
}

export default function ExploreMore({ packages, heading = 'Want more automation?', subheading = 'These packages pair well with what you just set up.' }: Props) {
  if (!packages.length) return null
  return (
    <div className="mt-16 pt-12 border-t border-slate-800">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">{heading}</h2>
        <p className="text-slate-400 text-sm">{subheading}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map(pkg => (
          <Link key={pkg.slug} href={`/packages/${pkg.slug}`} className="block group">
            <div className="bg-slate-900 hover:bg-slate-800 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all h-full">
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{pkg.icon}</span>
                {pkg.badge && (
                  <span className="text-xs bg-amber-400/15 text-amber-400 px-2 py-0.5 rounded-full">{pkg.badge}</span>
                )}
              </div>
              <p className="font-semibold text-white group-hover:text-amber-400 transition-colors mb-1">{pkg.name}</p>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">{pkg.tagline}</p>
              <p className="text-amber-400 text-sm font-medium">{pkg.priceLabel}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
