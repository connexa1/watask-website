import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Multi-Group Campaign Guides',
  description: 'Learn how to send bulk messages to multiple WhatsApp groups, understand API limits, and choose the right tools for your multi-group campaigns.',
  alternates: {
    canonical: 'https://watask.com/guides',
  },
  openGraph: {
    title: 'WhatsApp Multi-Group Campaign Guides | WaTask',
    description: 'Learn how to send bulk messages to multiple WhatsApp groups, understand API limits, and choose the right tools for your multi-group campaigns.',
    url: 'https://watask.com/guides',
  },
};

const guides = [
  {
    title: 'How to Send Bulk Messages to Multiple WhatsApp Groups at Scale',
    description: 'The definitive guide to understanding your options for multi-group WhatsApp campaigns. Learn the difference between Cloud API, Groups API, and multi-group platforms.',
    href: '/guides/send-bulk-messages-to-multiple-whatsapp-groups',
    category: 'Core Guide',
    featured: true,
  },
  {
    title: 'WhatsApp Groups API Limits Explained',
    description: 'Understand the 8-participant cap and invite-only requirements of Meta\'s official WhatsApp Groups API.',
    href: '/guides/whatsapp-groups-api-limits',
    category: 'Technical',
    status: 'Coming Soon',
  },
  {
    title: 'WhatsApp Broadcast vs Group vs Communities',
    description: 'Clear taxonomy of WhatsApp messaging types and when to use each approach.',
    href: '/guides/whatsapp-broadcast-vs-group-vs-communities',
    category: 'Basics',
    status: 'Coming Soon',
  },
  {
    title: 'Safer Multi-Group WhatsApp Campaigns',
    description: 'Best practices for pacing, consent, and account health when running campaigns across many groups.',
    href: '/guides/safer-multi-group-whatsapp-campaigns',
    category: 'Best Practices',
    status: 'Coming Soon',
  },
  {
    title: 'Does WhatsApp Business API Support Groups?',
    description: 'Quick answer to one of the most common questions about WhatsApp\'s official Cloud API.',
    href: '/guides/does-whatsapp-business-api-support-groups',
    category: 'FAQ',
    status: 'Coming Soon',
  },
  {
    title: 'WhatsApp Communities Bulk Messaging',
    description: 'How Communities announcement groups work and how they fit into your multi-group strategy.',
    href: '/guides/whatsapp-communities-bulk-message',
    category: 'Advanced',
    status: 'Coming Soon',
  },
];

export default function GuidesPage() {
  const featuredGuide = guides.find(g => g.featured);
  const otherGuides = guides.filter(g => !g.featured);

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            WhatsApp Multi-Group Campaign Guides
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to manage multiple WhatsApp groups, send bulk campaigns, and choose the right tools 
            for your organization's needs.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {featuredGuide && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Featured Guide
              </span>
              <span className="text-sm text-gray-500">{featuredGuide.category}</span>
            </div>
            <Link href={featuredGuide.href} className="group">
              <div className="bg-white border-2 border-green-200 rounded-lg p-8 hover:border-green-400 transition-colors">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600">
                  {featuredGuide.title} →
                </h2>
                <p className="text-gray-600 text-lg">
                  {featuredGuide.description}
                </p>
              </div>
            </Link>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Guides</h2>
          <div className="space-y-6">
            {otherGuides.map((guide) => (
              <div key={guide.href} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-gray-500">{guide.category}</span>
                      {guide.status && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {guide.status}
                        </span>
                      )}
                    </div>
                    {guide.status ? (
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {guide.title}
                      </h3>
                    ) : (
                      <Link href={guide.href} className="text-lg font-semibold text-gray-900 hover:text-green-600 mb-2 block">
                        {guide.title} →
                      </Link>
                    )}
                    <p className="text-gray-600">
                      {guide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Managing Multiple Groups?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Try WaTask free for 7 days. No credit card required.
          </p>
          <Link 
            href="/register"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
