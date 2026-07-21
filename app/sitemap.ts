import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.renewalpressurewashing.com'

  const staticPages = ['', '/about', '/contact', '/quote', '/services', '/service-areas', '/gallery', '/reviews']

  const servicePages = ['house-washing', 'concrete-cleaning', 'deck-cleaning', 'patio-cleaning', 'window-cleaning', 'gutter-cleaning', 'parking-garage-cleaning', 'commercial-pressure-washing', 'christmas-light-installation']

  const locationPages = ['pikesville', 'towson', 'owings-mills', 'reisterstown', 'lutherville-timonium', 'catonsville', 'ellicott-city', 'columbia']

  return [
    ...staticPages.map(page => ({ url: `${baseUrl}${page}`, lastModified: new Date(), priority: page === '' ? 1 : 0.8 })),
    ...servicePages.map(slug => ({ url: `${baseUrl}/services/${slug}`, lastModified: new Date(), priority: 0.8 })),
    ...locationPages.map(slug => ({ url: `${baseUrl}/service-areas/${slug}`, lastModified: new Date(), priority: 0.7 })),
  ]
}