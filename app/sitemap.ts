import { MetadataRoute } from 'next'
import { PACKAGES } from '@/lib/packages'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://calmhome.io'
  const packageUrls = PACKAGES.map(pkg => ({
    url: `${base}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  const posts = getAllPosts()
  const blogUrls = posts.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  const guideUrls = PACKAGES.map(pkg => ({
    url: `${base}/guides/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/quiz`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    ...packageUrls,
    ...guideUrls,
    ...blogUrls,
  ]
}
