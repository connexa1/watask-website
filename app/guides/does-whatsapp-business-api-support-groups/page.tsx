import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Does WhatsApp Business API Support Groups? (2026 Answer)',
  description: 'Short answer: Cloud API is 1:1 only. Groups API exists but is limited to 8-participant API-created groups. Your existing large groups need a different approach.',
  alternates: {
    canonical: 'https://watask.com/guides/does-whatsapp-business-api-support-groups',
  },
  openGraph: {
    title: 'Does WhatsApp Business API Support Groups? (2026 Answer)',
    description: 'Short answer: Cloud API is 1:1 only. Groups API exists but is limited to 8-participant API-created groups. Your existing large groups need a different approach.',
    url: 'https://watask.com/guides/does-whatsapp-business-api-support-groups',
    type: 'article',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Does WhatsApp Business API support groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'The WhatsApp Cloud API (used by BSPs) focuses on 1:1 messaging and does not support posting to existing consumer groups. The WhatsApp Groups API is a separate limited feature for small API-created groups with a maximum of 8 participants. It cannot post into your existing large community or marketing groups with 50-500+ members.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the difference between WhatsApp Cloud API and Groups API?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'The WhatsApp Cloud API (Business API) is designed for 1:1 template messaging, shared inboxes, and customer conversations. The Groups API is a separate feature limited to creating small API groups with a maximum of 8 participants. Neither can post into your existing large consumer groups.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can WhatsApp Business API message my existing groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. The WhatsApp Cloud API cannot message existing groups at all. The Groups API can only create and manage new groups with 8 participants maximum — it cannot access your existing large community or marketing groups.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Why do BSP tools like WATI not post into groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'BSP (Business Service Provider) tools use the WhatsApp Cloud API, which is designed exclusively for 1:1 template messaging to opted-in contacts. The API does not provide access to group chats, so BSPs cannot post into groups — this is an API design constraint, not a feature the BSPs chose to omit.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What should I use to post into my existing WhatsApp groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'For existing large groups, you need multi-group management platforms like WaTask that connect to your existing groups (not through the official API) and provide campaign, collection, and pacing features. These platforms are built specifically for posting into many existing groups you already manage.'
      }
    }
  ]
};

export default function DoesAPISupportGroupsPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/guides" className="text-sm text-green-600 hover:text-green-700 inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Guides
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Does WhatsApp Business API Support Groups?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The direct answer to a common search question: Cloud API vs Groups API vs existing-group posting.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-600 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">
                The Short Answer
              </h2>
              <p className="text-xl text-gray-900 font-semibold mb-4">
                The WhatsApp Cloud API (used by BSPs) focuses on 1:1 messaging and does <strong>not</strong> support posting into existing consumer groups.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Meta WhatsApp <strong>Groups API</strong> is a separate, limited feature designed for small API-created groups with a maximum of <strong>8 participants</strong>. It cannot be used to post into your existing large community or marketing groups that have 50-500+ members.
              </p>
              <p className="text-gray-900 font-semibold mb-0">
                Bottom line: If you're asking "can WhatsApp Business API message my existing groups?" — the answer is <strong>effectively no</strong> for ordinary large consumer groups.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              This is one of the most common confusion points for teams searching for WhatsApp group messaging solutions. Many assume that because the WhatsApp Business API exists, it must support their use case. Understanding what the API <em>actually</em> does — and what it doesn't — saves time and sets realistic expectations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Two "APIs" Explained
            </h2>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              When people ask "does WhatsApp Business API support groups," they're usually conflating two different things: the <strong>Cloud API</strong> (for 1:1 messaging) and the <strong>Groups API</strong> (for small API groups). Neither solves the "post into my existing large groups" problem.
            </p>

            <div className="space-y-8">
              <div className="border-2 border-blue-600 rounded-xl p-8 bg-blue-50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      WhatsApp Cloud API / Business API
                    </h3>
                    <p className="text-sm text-blue-600 font-medium">
                      1:1 Template Messaging Only
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    This is what BSP platforms (WATI, AiSensy, Interakt, Respond.io) use. The Cloud API is designed exclusively for <strong>1:1 template-based messaging</strong> to opted-in contacts.
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What it does:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Send template messages to individual contacts (1:1)</li>
                      <li>• Manage shared inbox conversations</li>
                      <li>• Build chatbots and automated flows</li>
                      <li>• Handle notifications, order updates, and customer service</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What it does NOT do:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Post into existing consumer or community groups</li>
                      <li>• Access your group chats in any way</li>
                      <li>• Send messages that appear in group conversations</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-0">
                      <strong>Why BSPs don't post into groups:</strong> It's not that they chose not to build this feature — the Cloud API doesn't provide access to group chats. This is a fundamental API design constraint from Meta.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-purple-600 rounded-xl p-8 bg-purple-50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      WhatsApp Groups API
                    </h3>
                    <p className="text-sm text-purple-600 font-medium">
                      Small API Groups Only (Max 8 Participants)
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The <strong>Groups API</strong> is a separate, limited feature for creating and managing <strong>small groups through the API</strong>. It has strict constraints that make it unsuitable for most multi-group campaign use cases.
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key constraints:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Maximum <strong>8 participants</strong> per group</li>
                      <li>• Groups must be <strong>created through the API</strong> (invite-only)</li>
                      <li>• Cannot access or post into <strong>existing consumer groups</strong></li>
                      <li>• Up to 10,000 such groups per business number</li>
                      <li>• Requires Official Business Account (OBA)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What it's designed for:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Small, structured coordination groups (e.g., support ticket groups, micro-communities, team coordination threads) where 8 participants is enough and the groups are programmatically created and managed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What it does NOT do:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Post into your existing 50-500 member community groups</li>
                      <li>• Expand beyond 8 participants</li>
                      <li>• Connect to groups you already manage through consumer WhatsApp</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-purple-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Learn more:</strong>{' '}
                      <Link href="/guides/whatsapp-groups-api-limits" className="text-purple-600 hover:text-purple-700 font-semibold">
                        WhatsApp Groups API Limits Explained →
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why This Matters: The Search Intent Mismatch
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Most people searching "does WhatsApp Business API support groups" are actually asking: <strong>"Can I use the official API to post campaigns into my many existing large groups?"</strong>
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Common Scenario (That the API Doesn't Solve)
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                You're an agency managing 40 client WhatsApp groups. Each group has 80-200 members. You want to send one campaign announcement into all 40 groups, with pacing to avoid spam. You searched for "WhatsApp Business API for groups" hoping the official solution could help.
              </p>
              <p className="text-gray-700 font-semibold leading-relaxed">
                Problem: Neither the Cloud API nor the Groups API solves this job. Cloud API is 1:1 only. Groups API is limited to 8-participant API-created groups, not your existing large groups.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              This is why search results for "WhatsApp Business API" and "send to multiple groups" often don't match expectations: the official API wasn't designed for multi-group campaign posting. You need a <strong>different approach</strong> for that job.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Should I Use Instead?
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              If the official WhatsApp Business API doesn't support posting into your existing large groups, what <em>does</em> work?
            </p>

            <div className="space-y-6">
              <div className="border-2 border-green-600 rounded-xl p-8 bg-green-50">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="flex-shrink-0 text-green-600">✓</span>
                  Multi-Group Management Platforms
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Platforms like <Link href="/" className="text-green-600 hover:text-green-700 font-semibold">WaTask</Link> are built specifically for managing and campaigning across many existing groups. They connect to your existing groups (not through the official API) and provide:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Group collections and organization</li>
                  <li>• Multi-group campaign sends with pacing controls</li>
                  <li>• Delivery monitoring and account health safeguards</li>
                  <li>• Team collaboration and audit trails</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  <strong>Best for:</strong> Agencies, community managers, brands, and multi-location teams who already manage dozens or hundreds of groups and need to run controlled campaigns.
                </p>
                <div className="mt-4">
                  <Link 
                    href="/whatsapp-group-management-tool"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    Learn about Group Management Tools →
                  </Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Manual Posting (Baseline)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Open WhatsApp Web or mobile app and post your message manually into each group one by one. This is the default approach for teams with small group networks (5-10 groups) where dedicated tools aren't yet necessary.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  WhatsApp Communities (Complementary)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If your groups fit under one Community umbrella, the announcement group feature can help. However, this doesn't solve campaigns across <em>many independent groups</em> or groups not organized into Communities.
                </p>
                <div className="mt-3">
                  <Link 
                    href="/guides/whatsapp-broadcast-vs-group-vs-communities"
                    className="text-green-600 hover:text-green-700 font-semibold text-sm"
                  >
                    Read: Broadcast vs Group vs Communities →
                  </Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Developer Custom Solutions (Advanced)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Developers can build custom multi-group sending loops using unofficial APIs. This requires technical expertise, ongoing maintenance, risk management, and careful pacing implementation.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Does WhatsApp Business API support groups?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The WhatsApp Cloud API (used by BSPs) focuses on <strong>1:1 messaging</strong> and does not support posting to existing consumer groups. The WhatsApp Groups API is a separate limited feature for small API-created groups with a maximum of <strong>8 participants</strong>. It cannot post into your existing large community or marketing groups with 50-500+ members.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What is the difference between WhatsApp Cloud API and Groups API?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The <strong>WhatsApp Cloud API</strong> (Business API) is designed for 1:1 template messaging, shared inboxes, and customer conversations. The <strong>Groups API</strong> is a separate feature limited to creating small API groups with a maximum of 8 participants. Neither can post into your existing large consumer groups.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can WhatsApp Business API message my existing groups?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>No.</strong> The WhatsApp Cloud API cannot message existing groups at all. The Groups API can only create and manage new groups with 8 participants maximum — it cannot access your existing large community or marketing groups.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why do BSP tools like WATI not post into groups?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  BSP (Business Service Provider) tools use the WhatsApp Cloud API, which is designed <strong>exclusively for 1:1 template messaging</strong> to opted-in contacts. The API does not provide access to group chats, so BSPs cannot post into groups — this is an <strong>API design constraint</strong>, not a feature the BSPs chose to omit.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Will Meta add full group support to the Business API?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  There's no public roadmap confirming this. The current Groups API (8-participant cap) has been the official group solution since its release. For now, if you need to campaign across existing large groups, you need solutions outside the official API.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What should I use to post into my existing WhatsApp groups?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For existing large groups, you need <strong>multi-group management platforms</strong> like WaTask that connect to your existing groups (not through the official API) and provide campaign, collection, and pacing features. These platforms are built specifically for posting into many existing groups you already manage.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-green-50 border-2 border-green-600 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need to Campaign Across Your Existing Groups?
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              WaTask is built for the job neither Cloud API nor Groups API solve: organizing and campaigning across many existing large groups with proper pacing, collections, and team collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link 
                href="/register"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 text-center transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
                className="text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 text-center transition-colors"
              >
                Read the Multi-Group Guide
              </Link>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <strong>Related guides:</strong>
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/guides/whatsapp-groups-api-limits" className="text-green-600 hover:text-green-700">
                    WhatsApp Groups API Limits Explained →
                  </Link>
                </li>
                <li>
                  <Link href="/whatsapp-group-management-tool" className="text-green-600 hover:text-green-700">
                    WhatsApp Group Management Tool (category) →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/whatsapp-broadcast-vs-group-vs-communities" className="text-green-600 hover:text-green-700">
                    Broadcast vs Group vs Communities →
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
