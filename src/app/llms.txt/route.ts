import { getAllPosts } from '@/lib/blog/posts'
import { faithmasters, brand, ecosystem, facts, generalFaqs, influencemasters, SITE_URL, workmasters } from '@/lib/brand'

// /llms.txt — a plain-text profile for AI assistants and generative search engines.
// Built from the same verified content as the site, so it never drifts from it.
export async function GET() {
  const posts = await getAllPosts()
  const { qraftGroup, futureOfWorkForum } = ecosystem

  const text = `# ${brand.name}

> ${brand.description}

${facts.map((fact) => `- ${fact.label}: ${fact.value}`).join('\n')}

## Initiatives

- [WorkMasters](${SITE_URL}/workmasters): ${workmasters.category}. ${workmasters.promise}
- [InfluenceMasters](${SITE_URL}/influencemasters): ${influencemasters.category}. ${influencemasters.promise}
- [${faithmasters.name}](${SITE_URL}/faithmasters) — ${faithmasters.byline}: ${faithmasters.mission} The public library is free. ${faithmasters.weekly.title}: ${faithmasters.weekly.when}. YouTube: ${faithmasters.youtubeChannelUrl}

## Frameworks

- The Work Value Engine (WorkMasters): ${workmasters.engine.map((step) => step.title).join(' → ')}
- The Influence Asset Cycle (InfluenceMasters): ${influencemasters.cycle.map((step) => step.title).join(' → ')}
- FaithMasters teaching tracks: ${faithmasters.tracks.map((track) => track.title).join('; ')}

## Ecosystem

- ${qraftGroup.name} (${qraftGroup.legalName}): ${qraftGroup.relationship}. Businesses: ${qraftGroup.businesses.map((business) => `${business.name} (${business.category}: ${business.programmes.join(', ')})`).join('; ')}
- ${futureOfWorkForum.name}: ${futureOfWorkForum.relationship}. ${futureOfWorkForum.programmes.join(', ')}

## Frequently asked questions

${generalFaqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join('\n\n')}

## Key pages

- [About](${SITE_URL}/about)
- [Programmes](${SITE_URL}/programs)
- [Book Andrew to speak](${SITE_URL}/speaking)
- [FaithMasters](${SITE_URL}/faithmasters)
- [Invite Andrew to teach](${SITE_URL}/faithmasters/invite)
- [Ecosystem](${SITE_URL}/ecosystem)
- [FAQ](${SITE_URL}/faq)
- [Resources](${SITE_URL}/resources)
- [Contact](${SITE_URL}/contact)
${posts.length > 0 ? `\n## Articles\n\n${posts.map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug})${post.summary ? `: ${post.summary}` : ''}`).join('\n')}\n` : ''}`

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
