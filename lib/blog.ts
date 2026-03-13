import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: 'guide' | 'product' | 'trend' | 'seasonal' | 'review'
  packageSlug?: string  // links to a Calm Home package
  readTime: string
  draft?: boolean
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return []
  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.mdx'))
  const posts = files.map(filename => {
    const slug = filename.replace(/\.mdx$/, '')
    const metaPath = path.join(postsDirectory, `${slug}.meta.json`)
    if (!fs.existsSync(metaPath)) return null
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
    return { slug, ...meta } as BlogPost
  }).filter(Boolean).filter(p => !p!.draft) as BlogPost[]

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const metaPath = path.join(postsDirectory, `${slug}.meta.json`)
  if (!fs.existsSync(metaPath)) return null
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
  return { slug, ...meta }
}
