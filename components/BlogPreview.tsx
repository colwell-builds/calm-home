import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  const categoryColors: Record<string, string> = {
    guide: 'bg-blue-900/40 text-blue-300',
    product: 'bg-purple-900/40 text-purple-300',
    trend: 'bg-amber-900/40 text-amber-300',
    seasonal: 'bg-green-900/40 text-green-300',
    review: 'bg-rose-900/40 text-rose-300',
  }

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">From the blog</h2>
            <p className="text-slate-400">Smart home tips and honest takes.</p>
          </div>
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 text-sm font-medium hidden md:block">
            All posts →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-slate-900 hover:bg-slate-800 rounded-2xl p-6 h-full transition-colors border border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-slate-800 text-slate-400'}`}>
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{post.description}</p>
              </article>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
            All posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
