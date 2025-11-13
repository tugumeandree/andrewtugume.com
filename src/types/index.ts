export interface SiteConfig {
  title: string
  description: string
  url: string
  logo?: string
  socialLinks?: Record<string, string>
}

export interface Resource { label: string; url: string }

export interface Lesson {
  id: string
  slug: string
  title: string
  content: string
  audioUrl?: string
  resources?: Resource[]
}

export interface Module { id: string; title: string; lessons: Lesson[] }

export interface Program { id: string; slug: string; title: string; subtitle?: string; description?: string; heroImage?: string; tags?: string[]; duration?: string; price?: number; modules?: Module[] }

export interface Article { id: string; slug: string; title: string; excerpt?: string; content?: string; date?: string; author?: string; tags?: string[] }

export interface Person { name: string; title?: string; bio?: string; avatar?: string }

export interface NewsletterSignup { email: string; name?: string; source?: string }
