import Nav from '@/components/Nav'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog',
  description: 'Smart home tips, product reviews, and guides from the Calm Home team.',
}

const categoryColors: Record<string, string> = {
  guide: 'bg-blue-900/40 text-blue-300',
  product: 'bg-purple-900/40 text-purple-300',
  trend: 'bg-amber-900/40 text-amber-300',
  seasonal: 'bg-green-900/40 text-green-300',
  review: 'bg-rose-900/40 text-rose-300',
}

const categoryLabels: Record<string, string> = {
  guide: 'Guide',
  product: 'Product',
  trend: 'Trend',
  seasonal: 'Seasonal',
  review: 'Review',
}

const youtubers = [
  {
    name: 'The Hook Up',
    handle: '@TheHookUp',
    description: 'One of the most trusted voices in smart home. Deep technical dives on everything from automations to security — never dumbed down.',
    url: 'https://www.youtube.com/@TheHookUp',
    subs: '700K+',
    icon: '🔧',
  },
  {
    name: 'Smart Home Solver',
    handle: '@SmartHomeSolver',
    description: "Practical, accessible tutorials for real homes. Great for beginners who want to actually understand what they're setting up.",
    url: 'https://www.youtube.com/@SmartHomeSolver',
    subs: '400K+',
    icon: '💡',
  },
  {
    name: 'Everything Smart Home',
    handle: '@EverythingSmartHome',
    description: "Product reviews and comparisons with a focus on real-world performance. Solid picks if you're shopping for specific devices.",
    url: 'https://www.youtube.com/@EverythingSmartHome',
    subs: '200K+',
    icon: '📱',
  },
  {
    name: 'Paul Hibbert',
    handle: '@PaulHibbert',
    description: "Beginner-friendly reviews with honest takes. If you're new to smart home and overwhelmed, start here.",
    url: 'https://www.youtube.com/@PaulHibbert',
    subs: '300K+',
    icon: '🏠',
  },
  {
    name: 'Lon.TV',
    handle: '@LonSeidman',
    description: 'Meticulous, no-fluff device reviews. Lon tests everything thoroughly — great when you want the full picture before buying.',
    url: 'https://www.youtube.com/@LonSeidman',
    subs: '500K+',
    icon: '📺',
  },
]

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">The Calm Home Blog</h1>
          <p className="text-slate-400 text-lg">Smart home tips, honest product reviews, and guides that actually help.</p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <p className="text-2xl mb-3">First post coming soon.</p>
            <p>We&apos;re working on it.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-slate-900 hover:bg-slate-800 rounded-2xl p-6 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-slate-800 text-slate-400'}`}>
                      {categoryLabels[post.category] || post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <span className="text-xs text-slate-500">·</span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed">{post.description}</p>
                  {post.packageSlug && (
                    <div className="mt-3 text-xs text-amber-400/70">
                      Related: {post.packageSlug.split('-').map((w: string) => w[0].toUpperCase() + w.slice(1)).join(' ')} package
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* YouTube creators */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">Learn from the best</h2>
            <p className="text-slate-400">The home automation YouTube channels actually worth your time.</p>
          </div>
          <div className="space-y-4">
            {youtubers.map(yt => (
              <a
                key={yt.handle}
                href={yt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-slate-900 hover:bg-slate-800 rounded-2xl p-5 transition-colors group"
              >
                <div className="text-2xl w-10 text-center flex-shrink-0">{yt.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-semibold text-white group-hover:text-amber-400 transition-colors">{yt.name}</span>
                    <span className="text-xs text-slate-500">{yt.handle}</span>
                    <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">{yt.subs} subscribers</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{yt.description}</p>
                </div>
                <span className="text-amber-400 self-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
