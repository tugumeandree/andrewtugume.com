// One connected JSON-LD graph describing Andrew, his initiatives and his businesses.
// Every node has a stable @id so other schema on the site (articles, FAQs, profile
// pages) can reference the same entities instead of redefining them.
import { bibleStudy, brand, ecosystem, influencemasters, initiatives, knowsAbout, SITE_URL, workmasters } from '@/lib/brand'

export const ids = {
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  qraftGroup: `${SITE_URL}/#qraft-group`,
  initiative: (id: string) => `${SITE_URL}/#initiative-${id}`,
  business: (id: string) => `${SITE_URL}/#${id}`,
}

const initiativeDescriptions: Record<string, string> = {
  work: workmasters.promise,
  influence: influencemasters.promise,
  scripture: bibleStudy.mission,
}

export function siteGraph() {
  const { qraftGroup, futureOfWorkForum } = ecosystem

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': ids.website,
        url: SITE_URL,
        name: brand.name,
        description: brand.description,
        inLanguage: 'en',
        publisher: { '@id': ids.person },
      },
      {
        '@type': 'Person',
        '@id': ids.person,
        name: brand.name,
        alternateName: brand.alias,
        url: SITE_URL,
        image: brand.images.headshot,
        jobTitle: brand.titles,
        description: brand.description,
        email: `mailto:${brand.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Kampala', addressCountry: 'UG' },
        knowsAbout,
        sameAs: brand.socials.map((social) => social.href),
        founder: [{ '@id': ids.qraftGroup }, ...initiatives.map((initiative) => ({ '@id': ids.initiative(initiative.id) }))],
      },
      ...initiatives.map((initiative) => ({
        '@type': initiative.id === 'scripture' ? 'CreativeWorkSeries' : 'Service',
        '@id': ids.initiative(initiative.id),
        name: initiative.name,
        url: `${SITE_URL}${initiative.href}`,
        description: initiativeDescriptions[initiative.id],
        ...(initiative.id === 'scripture'
          ? { author: { '@id': ids.person }, ...(bibleStudy.youtubeChannelUrl && { sameAs: [bibleStudy.youtubeChannelUrl] }) }
          : { provider: { '@id': ids.person }, serviceType: initiative.category, areaServed: 'Africa' }),
      })),
      {
        '@type': 'Organization',
        '@id': ids.qraftGroup,
        name: qraftGroup.name,
        legalName: qraftGroup.legalName,
        founder: { '@id': ids.person },
        address: { '@type': 'PostalAddress', addressLocality: 'Kampala', addressCountry: 'UG' },
        subOrganization: qraftGroup.businesses.map((business) => ({ '@id': ids.business(business.id) })),
      },
      ...qraftGroup.businesses.map((business) => ({
        '@type': 'Organization',
        '@id': ids.business(business.id),
        name: business.name,
        description: business.description,
        parentOrganization: { '@id': ids.qraftGroup },
        ...(business.href && { url: business.href }),
      })),
      {
        '@type': 'Organization',
        '@id': ids.business(futureOfWorkForum.id),
        name: futureOfWorkForum.name,
        description: futureOfWorkForum.description,
      },
    ],
  }
}

// About page: tells search and answer engines that the page is about the Person node
export function profilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}/about`,
    mainEntity: { '@id': ids.person },
    isPartOf: { '@id': ids.website },
  }
}
