import Nav from '@/components/Nav'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { notFound } from 'next/navigation'
import path from 'path'
import fs from 'fs'
import { PACKAGES } from '@/lib/packages'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} — Calm Home`,
      description: post.description,
      url: `https://calmhome.io/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Check the MDX file exists
  const mdxPath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`)
  if (!fs.existsSync(mdxPath)) notFound()

  // Dynamically import the MDX file
  const { default: Content } = await import(`../../../content/blog/${slug}.mdx`)

  const relatedPackage = post.packageSlug ? PACKAGES.find(p => p.slug === post.packageSlug) : null

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
          ← All posts
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4 text-sm text-slate-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <p className="text-xl text-slate-400 leading-relaxed">{post.description}</p>
        </div>

        <div className="prose prose-invert prose-amber max-w-none
          prose-headings:font-semibold prose-headings:text-white
          prose-p:text-slate-300 prose-p:leading-relaxed
          prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300
          prose-strong:text-white
          prose-code:text-amber-300 prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded
          prose-blockquote:border-amber-400 prose-blockquote:text-slate-400
          prose-li:text-slate-300
          prose-hr:border-slate-700
          mb-16">
          <Content />
        </div>

        {relatedPackage && (
          <div className="bg-slate-900 rounded-2xl p-8">
            <p className="text-sm text-slate-500 mb-2">Featured in this article</p>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{relatedPackage.icon} {relatedPackage.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{relatedPackage.tagline}</p>
              </div>
              <Link
                href={`/packages/${relatedPackage.slug}`}
                className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
              >
                View Package →
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
