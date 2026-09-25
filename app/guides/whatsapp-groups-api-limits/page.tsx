import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Groups API Limits Explained (2026)',
  description: 'Meta\'s official WhatsApp Groups API is limited to 8 participants per group, invite-only, and requires OBA. Learn what the API can and cannot do for your existing groups.',
  alternates: {
    canonical: 'https://www.watask.com/guides/whatsapp-groups-api-limits',
  },
  openGraph: {
    title: 'WhatsApp Groups API Limits Explained (2026)',
    description: 'Meta\'s official WhatsApp Groups API is limited to 8 participants per group, invite-only, and requires OBA. Learn what the API can and cannot do for your existing groups.',
    url: 'https://www.watask.com/guides/whatsapp-groups-api-limits',
    type: 'article',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is the WhatsApp Groups API participant limit?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'The WhatsApp Groups API is limited to a maximum of 8 participants per group. These groups must be created through the API and are invite-only. This is documented in Meta\'s official Business Messaging documentation (updated June 2026).'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can the WhatsApp Groups API post to my existing large groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. The WhatsApp Groups API can only create and manage new groups with a maximum of 8 participants. It cannot post into your existing consumer or community groups that have 50-500+ members. The API is designed for small, structured communication, not existing large group campaigns.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How many groups can I create with the WhatsApp Groups API?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'You can create and manage up to 10,000 groups per business phone number using the WhatsApp Groups API. However, each group is still limited to 8 participants maximum.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do I need an Official Business Account (OBA) to use the Groups API?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. The WhatsApp Groups API requires an Official Business Account (OBA). Standard Business Accounts cannot use the Groups API features.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What are the alternatives for managing existing large WhatsApp groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'For existing large groups, you need multi-group management platforms like WaTask that connect to your existing groups (not the official API) and provide campaign, collection, and pacing features. These platforms are built specifically for posting into many existing groups you already manage.'
      }
    }
  ]
};

export default function GroupsAPILimitsPage() {
  return (
    <div className="bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/guides" className="text-sm text-cyber hover:text-cyber-hover inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Guides
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            WhatsApp Groups API Limits Explained (2026)
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Understanding Meta's official Groups API constraints: 8-participant cap, invite-only requirements, and why it doesn't work for existing large groups.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <div className="glass-panel border-2 border-cyber/30 rounded-xl p-8 mb-8 bg-bg-card">
              <h2 className="text-2xl font-bold text-text-primary mb-4 mt-0">
                The Bottom Line
              </h2>
              <p className="text-text-secondary mb-4 leading-relaxed text-lg">
                The Meta WhatsApp Groups API is limited to groups with a <strong className="text-text-primary">maximum of 8 participants</strong>. These groups must be invite-only and created through the API. You can manage up to <strong className="text-text-primary">10,000</strong> such groups per business phone number.
              </p>
              <p className="text-text-primary font-semibold mb-0 text-lg">
                If you manage dozens or hundreds of existing WhatsApp groups with 50-500+ members each, the official Groups API will not help you send campaigns to those groups.
              </p>
            </div>

            <p className="text-text-secondary leading-relaxed">
              When developers and marketers search for ways to message multiple WhatsApp groups, many assume the official WhatsApp Business API has a solution. The <strong className="text-text-primary">WhatsApp Groups API</strong> does exist on the Business Platform, but its design and constraints mean it's <em>not</em> the answer for most multi-group campaign needs.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This guide documents the official constraints with citations from Meta's documentation, explains what the API <em>can</em> do, and clarifies why it doesn't solve the "send one campaign to many existing large groups" job.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Official Groups API Constraints
            </h2>

            <div className="space-y-6">
              <div className="glass-panel border-2 border-cyan/30 rounded-xl p-6 bg-bg-card">
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan text-bg-primary rounded-lg flex items-center justify-center font-bold">
                    1
                  </span>
                  Maximum 8 Participants Per Group
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Every group created through the WhatsApp Groups API is <strong className="text-text-primary">capped at 8 participants</strong>. This is a hard limit set by Meta. You cannot expand these groups beyond 8 members, and you cannot use the API to post into larger existing consumer or community groups.
                </p>
                <p className="text-sm text-text-muted mt-3">
                  <strong className="text-text-secondary">Source:</strong>{' '}
                  <a 
                    href="https://developers.facebook.com/docs/whatsapp/business-management-api/guides/groups/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyber hover:text-cyber-hover"
                  >
                    Meta WhatsApp Groups API Documentation
                  </a> and{' '}
                  <a 
                    href="https://docs.360dialog.com/docs/messaging/groups" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyber hover:text-cyber-hover"
                  >
                    360dialog Groups Documentation
                  </a>
                </p>
              </div>

              <div className="glass-panel border-2 border-cyber/30 rounded-xl p-6 bg-bg-card">
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyber text-bg-primary rounded-lg flex items-center justify-center font-bold">
                    2
                  </span>
                  Groups Must Be API-Created and Invite-Only
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  You cannot use the Groups API to connect to or post into <strong className="text-text-primary">existing groups</strong> you already manage through the WhatsApp consumer app. The API only works with groups that are <strong className="text-text-primary">created through the API itself</strong>. Members join via invite links, and the groups are invite-only by design.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  This means: if you already run 50 client groups, 100 neighborhood groups, or 200 marketing groups through regular WhatsApp, the Groups API offers no way to message those groups.
                </p>
              </div>

              <div className="glass-panel border-2 border-cyan/30 rounded-xl p-6 bg-bg-card">
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan text-bg-primary rounded-lg flex items-center justify-center font-bold">
                    3
                  </span>
                  Up to 10,000 Groups Per Business Number
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  While you're limited to 8 participants per group, you <em>can</em> create and manage a large number of these small groups: up to <strong className="text-text-primary">10,000 groups per business phone number</strong>. This makes the API suitable for highly segmented small-team coordination or structured micro-communities, but not for typical marketing or community groups.
                </p>
              </div>

              <div className="glass-panel border-2 border-cyber/30 rounded-xl p-6 bg-bg-card">
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyber text-bg-primary rounded-lg flex items-center justify-center font-bold">
                    4
                  </span>
                  Requires Official Business Account (OBA)
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  To use the WhatsApp Groups API, you need an <strong className="text-text-primary">Official Business Account (OBA)</strong> with Meta. Standard Business Accounts cannot access Groups API features. OBA requirements include verification, compliance with Meta's commerce and messaging policies, and meeting eligibility criteria.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              What the Groups API Is Designed For
            </h2>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              Understanding the constraints helps clarify the intended use cases. The WhatsApp Groups API is designed for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Small Team Coordination
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Businesses that need many small, structured groups for internal coordination (e.g., support ticket groups, order fulfillment groups, customer care threads) where 8 or fewer participants is sufficient.
                </p>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Micro-Segmented Communities
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Platforms creating thousands of tiny, focused groups (e.g., a matchmaking service with 1:1 or small-group introductions, or a tutoring platform with teacher + 7 students).
                </p>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Structured Messaging Flows
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Use cases where the business programmatically creates and manages groups as part of a service workflow, rather than broadcasting to existing large community groups.
                </p>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  API-First Architecture
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Applications that need programmatic group creation, member management, and messaging as part of an automated system, where the 8-participant limit is acceptable.
                </p>
              </div>
            </div>

            <div className="glass-panel border-2 border-cyber/30 rounded-lg p-6 bg-bg-card">
              <p className="text-text-secondary mb-3 leading-relaxed">
                <strong className="text-text-primary">What the Groups API is NOT designed for:</strong>
              </p>
              <ul className="space-y-2 text-text-secondary mb-0">
                <li>• Posting campaigns into your existing 50-500 member community groups</li>
                <li>• Managing dozens of client marketing groups you already run</li>
                <li>• Broadcasting announcements to large neighborhood or interest groups</li>
                <li>• Multi-group campaign management across existing group networks</li>
                <li>• Replacing manual posting across many groups you've already built</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Why This Matters for Multi-Group Campaigns
            </h2>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              Most people searching for "WhatsApp Groups API" or "send message to multiple WhatsApp groups" are looking for a way to <strong className="text-text-primary">campaign across their existing large groups</strong>. The 8-participant cap makes the official API unsuitable for this job.
            </p>

            <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 mb-6 bg-bg-card">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Example Scenario That Won't Work with Groups API
              </h3>
              <p className="text-text-secondary mb-3 leading-relaxed">
                You're a digital marketing agency managing 40 client WhatsApp groups. Each group has 80-200 members who engage with your client's content. You want to send one campaign announcement into all 40 groups at once, with pacing to avoid looking spammy.
              </p>
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-text-primary">Problem:</strong> The Groups API can't access those existing groups (they weren't API-created), and even if you could recreate them via API, each would be limited to 8 members — fundamentally changing the nature of the community.
              </p>
            </div>

            <p className="text-text-secondary leading-relaxed">
              This is the disconnect: the Groups API is designed for <strong className="text-text-primary">creating new small groups</strong>, not <strong className="text-text-primary">campaigning across existing large groups</strong>. For the latter job, you need multi-group management platforms built specifically for that purpose.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Alternatives for Existing Large Groups
            </h2>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              If the official Groups API doesn't fit your needs, what are the alternatives?
            </p>

            <div className="space-y-6">
              <div className="border-2 border-cyber rounded-lg p-6 glass-panel bg-bg-card">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Multi-Group Management Platforms
                </h3>
                <p className="text-text-secondary mb-3 leading-relaxed">
                  Platforms like <Link href="/" className="text-cyber hover:text-cyber-hover font-semibold">WaTask</Link> are designed specifically for managing and campaigning across many existing groups. They connect to your existing groups (not through the official API), organize them into collections, and provide pacing, team collaboration, and campaign features.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">Best for:</strong> Agencies, community managers, brands, and multi-location teams who already manage dozens or hundreds of WhatsApp groups and need to run controlled campaigns.
                </p>
                <div className="mt-4">
                  <Link 
                    href="/whatsapp-group-management-tool"
                    className="text-cyber hover:text-cyber-hover font-semibold"
                  >
                    Learn about WhatsApp Group Management Tools →
                  </Link>
                </div>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Manual Posting (Baseline)
                </h3>
                <p className="text-text-secondary mb-3 leading-relaxed">
                  Open WhatsApp Web or the mobile app and manually post your message into each group one by one. This is slow and doesn't scale, but it's what most teams default to when they don't have a multi-group tool.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">Best for:</strong> Small group networks (5-10 groups) where manual posting is still manageable.
                </p>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  WhatsApp Communities (Complementary)
                </h3>
                <p className="text-text-secondary mb-3 leading-relaxed">
                  WhatsApp Communities let you organize related groups under one umbrella with a shared announcement group. If your groups fit under one Community structure, this can help. However, it doesn't solve campaigns across <em>many independent groups</em> or groups not organized into Communities.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">Best for:</strong> Organizations with hierarchical group structures that map cleanly to the Community model.
                </p>
                <div className="mt-4">
                  <Link 
                    href="/guides/whatsapp-broadcast-vs-group-vs-communities"
                    className="text-cyber hover:text-cyber-hover font-semibold"
                  >
                    Read: Broadcast vs Group vs Communities →
                  </Link>
                </div>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Developer-Built Custom Solutions
                </h3>
                <p className="text-text-secondary mb-3 leading-relaxed">
                  Some teams use unofficial APIs (Whapi, Maytapi, WAHA, 2Chat) to build custom multi-group sending loops. This requires technical expertise, ongoing maintenance, careful rate-limit management, and awareness of account risks.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">Best for:</strong> Technical teams with developer resources who need full control and customization, and are comfortable managing risk and compliance themselves.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="glass-panel border-[var(--border-subtle)] p-6 rounded-lg bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  What is the WhatsApp Groups API participant limit?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  The WhatsApp Groups API is limited to a <strong className="text-text-primary">maximum of 8 participants per group</strong>. These groups must be created through the API and are invite-only. This is documented in Meta's official Business Messaging documentation (updated June 2026).
                </p>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] p-6 rounded-lg bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Can the WhatsApp Groups API post to my existing large groups?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">No.</strong> The WhatsApp Groups API can only create and manage new groups with a maximum of 8 participants. It cannot post into your existing consumer or community groups that have 50-500+ members. The API is designed for small, structured communication, not existing large group campaigns.
                </p>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] p-6 rounded-lg bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  How many groups can I create with the WhatsApp Groups API?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  You can create and manage up to <strong className="text-text-primary">10,000 groups per business phone number</strong> using the WhatsApp Groups API. However, each group is still limited to 8 participants maximum.
                </p>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] p-6 rounded-lg bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Do I need an Official Business Account (OBA) to use the Groups API?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Yes. The WhatsApp Groups API requires an Official Business Account (OBA). Standard Business Accounts cannot use the Groups API features.
                </p>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] p-6 rounded-lg bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Can I upgrade an API group from 8 to more participants?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No. The 8-participant limit is a hard constraint in the API design. There is no way to expand Groups API groups beyond 8 members.
                </p>
              </div>

              <div className="glass-panel border-[var(--border-subtle)] p-6 rounded-lg bg-bg-card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  What are the alternatives for managing existing large WhatsApp groups?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  For existing large groups, you need <strong className="text-text-primary">multi-group management platforms</strong> like WaTask that connect to your existing groups (not the official API) and provide campaign, collection, and pacing features. These platforms are built specifically for posting into many existing groups you already manage.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-panel border-2 border-cyber rounded-lg p-8 bg-bg-card">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Need to Campaign Across Existing Large Groups?
            </h2>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              WaTask is built for the job the official Groups API doesn't solve: managing and campaigning across many existing large groups with collections, pacing, and team collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link 
                href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask"
                className="bg-cyber text-bg-primary px-8 py-3 rounded-lg font-semibold hover:bg-cyber-hover text-center transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)]"
              >
                Start on WhatsApp
              </Link>
              <Link 
                href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
                className="text-cyber border-2 border-cyber px-8 py-3 rounded-lg font-semibold hover:bg-cyber/10 text-center transition-colors"
              >
                Read the Multi-Group Guide
              </Link>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Learn more:</strong>
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/whatsapp-group-management-tool" className="text-cyber hover:text-cyber-hover">
                    WhatsApp Group Management Tool (category) →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/safer-multi-group-whatsapp-campaigns" className="text-cyber hover:text-cyber-hover">
                    Safer Multi-Group Campaigns →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/does-whatsapp-business-api-support-groups" className="text-cyber hover:text-cyber-hover">
                    Does WhatsApp Business API Support Groups? →
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
