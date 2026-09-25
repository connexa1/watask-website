import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.watask.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-09-20'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date('2026-09-20'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/send-bulk-messages-to-multiple-whatsapp-groups`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/whatsapp-group-management-tool`,
      lastModified: new Date('2026-09-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/whatsapp-groups-api-limits`,
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/whatsapp-broadcast-vs-group-vs-communities`,
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/safer-multi-group-whatsapp-campaigns`,
      lastModified: new Date('2026-09-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/does-whatsapp-business-api-support-groups`,
      lastModified: new Date('2026-09-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/whatsapp-communities-bulk-messaging`,
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/multi-group-tools-vs-bsp-vs-extensions`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/whatsapp-group-sending-alternatives`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
