import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Multi-Group Campaign Guides',
  description: 'Learn how multi-group WhatsApp campaigns differ from Cloud API broadcasts and Meta\'s Groups API — practical guides for agencies and community teams.',
  alternates: {
    canonical: 'https://watask.com/guides',
  },
  openGraph: {
    title: 'WhatsApp Multi-Group Campaign Guides | WaTask',
    description: 'Learn how multi-group WhatsApp campaigns differ from Cloud API broadcasts and Meta\'s Groups API — practical guides for agencies and community teams.',
    url: 'https://watask.com/guides',
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
    title: 'Safer Multi-Group WhatsApp Campaigns',
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
    <div className="bg-bg-primary">
      <section className="bg-gradient-to-b from-bg-secondary to-bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Guides for multi-group WhatsApp campaigns
          </h1>
          <p className="text-xl text-text-secondary mb-10">
            Clear answers for teams who need to post into many existing groups — not another roundup of 1:1 BSP tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/register"
              className="bg-cyber text-bg-primary px-8 py-3 rounded-lg font-semibold hover:bg-cyber-hover transition-all text-center shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)]"
            >
              Start free trial
            </Link>
            <Link 
              href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
              className="text-cyber border-2 border-cyber px-8 py-3 rounded-lg font-semibold hover:bg-cyber/10 transition-colors text-center"
            >
              Read the pillar guide
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-cyber/20 text-cyber text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide border border-cyber/30">
              Featured
            </span>
            <span className="text-sm text-text-muted">{featuredGuide.category}</span>
          </div>
          <Link href={featuredGuide.href} className="group block">
            <div className="glass-panel border-2 border-cyber/30 rounded-xl p-8 hover:border-cyber transition-colors bg-bg-card">
              <h2 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-cyber transition-colors">
                {featuredGuide.title} →
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {featuredGuide.description}
              </p>
            </div>
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-8">All Guides</h2>
          <div className="space-y-6">
            {guides.map((guide) => (
              <div key={guide.href} className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 hover:border-cyber/30 transition-colors bg-bg-card">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wide">{guide.category}</span>
                    {guide.status && (
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${
                        guide.status === 'Published' 
                          ? 'bg-cyber/10 text-cyber border-cyber/30' 
                          : 'bg-cyan/10 text-cyan border-cyan/30'
                      }`}>
                        {guide.status}
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {guide.title}
                </h3>
                
                {guide.intent && (
                  <div className="mb-3">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="font-medium text-text-primary">Intent:</span> {guide.intent}
                    </p>
                  </div>
                )}
                
                {guide.youllLearn && (
                  <div className="mb-4">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="font-medium text-text-primary">You'll learn:</span> {guide.youllLearn}
                    </p>
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-sm">
                  <Link 
                    href={guide.href}
                    className="text-cyber hover:text-cyber-hover font-medium"
                  >
                    View page →
                  </Link>
                  <Link 
                    href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
                    className="text-text-muted hover:text-text-secondary"
                  >
                    Read pillar guide instead
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-16 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Ready to run multi-group campaigns?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Try WaTask free for 7 days. No credit card required.
          </p>
          <Link 
            href="/register"
            className="bg-cyber text-bg-primary px-8 py-3 rounded-lg font-semibold hover:bg-cyber-hover inline-block transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)]"
          >
            Start free trial
          </Link>
        </div>
      </section>
    </div>
  );
}
