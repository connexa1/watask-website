import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Multi-Group Campaign Guides',
  description: 'Learn how multi-group WhatsApp campaigns differ from Cloud API broadcasts and Meta\'s Groups API — practical guides for agencies and community teams.',
  alternates: {
    canonical: 'https://www.watask.com/guides',
  },
  openGraph: {
    title: 'WhatsApp Multi-Group Campaign Guides | WaTask',
    description: 'Learn how multi-group WhatsApp campaigns differ from Cloud API broadcasts and Meta\'s Groups API — practical guides for agencies and community teams.',
    url: 'https://www.watask.com/guides',
  },
};

const featuredGuide = {
  title: 'How to Send Bulk Messages to Multiple WhatsApp Groups at Scale',
  description: 'The decision tree: Cloud API vs Groups API vs multi-group platforms — and how to run campaigns without confusing "bulk" with group posting.',
  href: '/guides/send-bulk-messages-to-multiple-whatsapp-groups',
  category: 'Core Guide',
};

const guides = [
  {
    title: 'WhatsApp Groups API Limits Explained',
    href: '/guides/whatsapp-groups-api-limits',
    category: 'Technical',
    status: 'Published',
    intent: 'Document Meta\'s official Groups API caps (8 participants, invite-only, 10k groups/number, OBA) in plain language.',
    youllLearn: 'What the API can and cannot do for existing large groups.',
  },
  {
    title: 'WhatsApp Broadcast vs Group vs Communities',
    href: '/guides/whatsapp-broadcast-vs-group-vs-communities',
    category: 'Basics',
    status: 'Published',
    intent: 'Taxonomy so buyers stop mixing broadcast lists, group posts, and Communities announcement groups.',
    youllLearn: 'When each construct fits; when you still need multi-group tooling.',
  },
  {
    title: 'WhatsApp Communities for Bulk Messaging',
    href: '/guides/whatsapp-communities-bulk-messaging',
    category: 'Core Guide',
    status: 'Published',
    intent: 'How Communities work, their limits (50 groups), announcement groups, and when multi-group tools complement them.',
    youllLearn: 'Community structure, the 50-group cap, cross-Community campaigns, and when you need more than Communities.',
  },
  {
    title: 'Multi-Group Best Practices WhatsApp Campaigns',
    href: '/guides/safer-multi-group-whatsapp-campaigns',
    category: 'Best Practices',
    status: 'Published',
    intent: 'Pacing, consent, group norms, and account-health habits for operators.',
    youllLearn: 'Practical send hygiene — not fear, not "unlimited blast" advice.',
  },
  {
    title: 'Does WhatsApp Business API Support Groups?',
    href: '/guides/does-whatsapp-business-api-support-groups',
    category: 'FAQ',
    status: 'Published',
    intent: 'Direct answer for the common search: Cloud API 1:1 vs Groups API vs existing-group posting.',
    youllLearn: 'Why most BSP tools can\'t post into your groups.',
  },
];

export default function GuidesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guides for multi-group WhatsApp campaigns
          </h1>
          <p className="text-xl text-gray-700 mb-10">
            Clear answers for teams who need to post into many existing groups — not another roundup of 1:1 BSP tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all text-center shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)]"
            >
              Start on WhatsApp
            </Link>
            <Link 
              href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
              className="text-green-700 border-2 border-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-800/10 transition-colors text-center"
            >
              Read the pillar guide
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-700/20 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide border border-green-700/30">
              Featured
            </span>
            <span className="text-sm text-gray-600">{featuredGuide.category}</span>
          </div>
          <Link href={featuredGuide.href} className="group block">
            <div className="border border-2 border-green-700/30 rounded-xl p-8 hover:border-green-800 transition-colors bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors">
                {featuredGuide.title} →
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {featuredGuide.description}
              </p>
            </div>
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Guides</h2>
          <div className="space-y-6">
            {guides.map((guide) => (
              <div key={guide.href} className="border border-gray-200 rounded-lg p-6 hover:border-green-800/30 transition-colors bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">{guide.category}</span>
                    {guide.status && (
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${
                        guide.status === 'Published' 
                          ? 'bg-green-700/10 text-green-700 border-green-700/30' 
                          : 'bg-cyan/10 text-cyan border-cyan/30'
                      }`}>
                        {guide.status}
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {guide.title}
                </h3>
                
                {guide.intent && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-medium text-gray-900">Intent:</span> {guide.intent}
                    </p>
                  </div>
                )}
                
                {guide.youllLearn && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-medium text-gray-900">You'll learn:</span> {guide.youllLearn}
                    </p>
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-sm">
                  <Link 
                    href={guide.href}
                    className="text-green-700 hover:text-green-800 font-medium"
                  >
                    View page →
                  </Link>
                  <Link 
                    href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    Read pillar guide instead
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Comparison & Reference</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Comparison</span>
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-green-100 text-green-700">
                    Published
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Multi-Group Tools vs BSP Platforms vs Chrome Extensions
              </h3>
              
              <div className="mb-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium text-gray-900">Intent:</span> Category comparison for teams choosing between BSPs (1:1 messaging), multi-group platforms, and browser extensions.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium text-gray-900">You'll learn:</span> When each category fits, feature matrix, and why BSPs don't post into existing large groups.
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <Link 
                  href="/compare/multi-group-tools-vs-bsp-vs-extensions"
                  className="text-green-700 hover:text-green-800 font-medium"
                >
                  View comparison →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Alternatives</span>
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-green-100 text-green-700">
                    Published
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                WhatsApp Group Sending Tools & Alternatives (2026)
              </h3>
              
              <div className="mb-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium text-gray-900">Intent:</span> Roundup for people searching BSP brands for group sending, explaining why BSPs don't cover it and what alternatives exist.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium text-gray-900">You'll learn:</span> Why WATI/AiSensy/etc. don't post into groups, and which tools actually do.
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <Link 
                  href="/compare/whatsapp-group-sending-alternatives"
                  className="text-green-700 hover:text-green-800 font-medium"
                >
                  View alternatives guide →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Reference</span>
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-green-100 text-green-700">
                    Published
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                WhatsApp Business & Group Messaging Glossary
              </h3>
              
              <div className="mb-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium text-gray-900">Intent:</span> Plain-English definitions of WhatsApp business terms — broadcast list, group, Community, Cloud API, BSP, Groups API, template message, pacing, and more.
                </p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium text-gray-900">You'll learn:</span> Clear definitions with links to relevant guides for every key term.
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <Link 
                  href="/glossary"
                  className="text-green-700 hover:text-green-800 font-medium"
                >
                  View glossary →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to run multi-group campaigns?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Try WaTask free for 7 days. No credit card required.
          </p>
          <Link 
            href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 inline-block transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)]"
          >
            Start on WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}
