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
      </main>
    </div>
  )
}
