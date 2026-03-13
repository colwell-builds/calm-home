import { MetadataRoute } from 'next'
import { PACKAGES } from '@/lib/packages'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://calmhome.io'
  const packageUrls = PACKAGES.map(pkg => ({
    url: `${base}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    ...packageUrls,
  ]
}
