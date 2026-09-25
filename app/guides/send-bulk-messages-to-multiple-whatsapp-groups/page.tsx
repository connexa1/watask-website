import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Send Bulk Messages to Multiple WhatsApp Groups at Scale (2026)',
  description: 'Learn why WhatsApp "bulk" tools usually mean 1:1 templates, what Meta\'s Groups API (8-cap) allows, and how multi-group platforms post campaigns into many existing groups.',
  alternates: {
    canonical: 'https://www.watask.com/guides/send-bulk-messages-to-multiple-whatsapp-groups',
  },
  openGraph: {
    title: 'How to Send Bulk Messages to Multiple WhatsApp Groups at Scale (2026)',
    description: 'Complete guide to sending campaigns across multiple WhatsApp groups. Understand Cloud API vs Groups API vs multi-group platforms.',
    url: 'https://www.watask.com/guides/send-bulk-messages-to-multiple-whatsapp-groups',
    type: 'article',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Can the official WhatsApp Business / Cloud API message my existing large groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Effectively no for ordinary large consumer groups. The Meta WhatsApp Groups API is designed for small, invite-only API-created groups with a maximum of 8 participants. It cannot be used to post into your existing large community or marketing groups that have 50-500+ members.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the WhatsApp Groups API participant limit?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '8 participants maximum. The Meta WhatsApp Groups API is limited to groups with up to 8 participants, and these groups must be invite-only and created through the API. This is documented in Meta\'s official Business Messaging documentation.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is a WhatsApp broadcast the same as posting to groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. A WhatsApp broadcast list or Cloud API campaign sends individual 1:1 messages to contacts in your list. Group posting means sending a message inside group chats where all members can see and respond to each other.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How do I send one message to multiple WhatsApp groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'There are three main paths: (A) WhatsApp Cloud API/BSP for 1:1 template campaigns to contacts, (B) Meta Groups API for small 8-participant API groups, or (C) multi-group platform for campaigns into many existing large groups you already manage. For most use cases involving existing community or marketing groups, path C is the appropriate solution.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do Chrome WhatsApp group senders work?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Some Chrome extensions do work for Web-session multi-select group sending. However, they carry account risks if not used carefully, especially without proper pacing and consent. Consider trust, account health, and whether a productized platform with built-in safety features would be more appropriate for business use.'
      }
    },
    {
      '@type': 'Question',
      'name': 'When should I use a BSP vs a multi-group tool?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Use a BSP (Business Service Provider) like WATI or AiSensy when you need compliant 1:1 template messaging and inbox management for opted-in contacts. Use a multi-group tool when your job is to send campaigns into many existing groups that you already manage and administrate.'
      }
    }
  ]
};

export default function BulkWhatsAppGroupsGuidePage() {
  return (
    <div className="bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/guides" className="text-sm text-cyber hover:text-cyber-hover transition-colors inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Guides
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            How to Send Bulk Messages to Multiple WhatsApp Groups at Scale (2026)
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Understand your options for posting one campaign into many existing WhatsApp groups — 
            and why most "bulk WhatsApp" tools don't solve this problem.
          </p>
        </header>

        <div className="prose prose-lg max-w-none prose-invert">
          <section className="mb-12">
            <p className="text-lg text-text-secondary leading-relaxed">
              If you manage multiple WhatsApp groups — for clients, communities, or marketing — you've likely searched 
              for a way to send one message to all of them at once. The problem? Most search results for "bulk WhatsApp" 
              lead to Business Service Provider (BSP) tools that send 1:1 template messages to contact lists, not posts 
              into existing group chats.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This guide explains the three main paths for WhatsApp group messaging, when each makes sense, and how 
              to choose the right approach for your needs. Whether you're an agency managing client groups, a community 
              manager, or a brand with regional networks, you'll understand where multi-group platforms like{' '}
              <Link href="/" className="text-green-600 hover:text-green-700 font-medium">WaTask</Link> fit in.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What People Mean by "Bulk WhatsApp" (and Why It's Confusing)
            </h2>
            
            <p className="text-gray-700 mb-4">
              The term "bulk WhatsApp messaging" means different things to different people, which is why search results 
              often don't match what you're looking for.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Broadcast Lists & Cloud API Template Campaigns (1:1)
            </h3>
            <p className="text-gray-700 mb-4">
              When most BSPs and marketing platforms talk about "bulk WhatsApp," they mean sending individual 1:1 messages 
              to a list of contacts using the WhatsApp Cloud API. These are template-based messages that require opt-in, 
              appear in each recipient's personal chat, and are subject to Meta's messaging policies.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>This is not group posting.</strong> Tools like WATI, AiSensy, and Interakt excel at this type of 
              messaging but cannot post into your existing consumer or community groups.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Posting into Consumer / Community Groups (Multi-Group)
            </h3>
            <p className="text-gray-700 mb-4">
              This is the job-to-be-done most people searching for "send message to multiple WhatsApp groups" actually need: 
              selecting many existing groups you already administer and sending one campaign message into all of them. 
              This is where multi-group platforms and group management tools come in.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              WhatsApp Communities as a Related Scale Vector
            </h3>
            <p className="text-gray-700 mb-4">
              WhatsApp Communities let you organize related groups under one umbrella, with an announcement group that 
              reaches all community members. This can be part of a multi-group strategy but doesn't replace the need 
              for campaign tools when you manage dozens or hundreds of independent groups.
            </p>
            <p className="text-gray-700">
              Learn more: <Link href="/guides/whatsapp-broadcast-vs-group-vs-communities" className="text-green-600 hover:text-green-700">
                Broadcast vs Group vs Communities
              </Link>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Decision Tree: Which Path Fits Your Groups?
            </h2>
            
            <p className="text-gray-700 mb-8">
              Here are the three main approaches to WhatsApp group messaging at scale, and when each makes sense:
            </p>

            <div className="space-y-6">
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-700">
                    A
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      WhatsApp Cloud API / BSP (1:1 Templates)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best for:</strong> Sending template-based messages to opted-in individual contacts. 
                      Great for transactional notifications, customer service, and compliant marketing campaigns.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Not for:</strong> Posting into many large existing groups you already administrate. 
                      BSPs cannot access your group chats.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Example tools:</strong> WATI, AiSensy, Interakt, Respond.io
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center font-bold text-purple-700">
                    B
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Meta WhatsApp Groups API (Official, Capped)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Key constraints:</strong> The official WhatsApp Groups API on the Business Platform 
                      is limited to groups with a <strong>maximum of 8 participants</strong>. Groups must be 
                      invite-only and created through the API. You can manage up to 10,000 groups per phone number.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Not for:</strong> Existing large community, marketing, or neighborhood groups with 
                      50-500+ members that you've already built.
                    </p>
                    <p className="text-sm text-gray-600">
                      Source: <a 
                        href="https://developers.facebook.com/docs/whatsapp/business-management-api/guides/groups/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700"
                      >
                        Meta WhatsApp Groups API Documentation
                      </a> and{' '}
                      <a 
                        href="https://docs.360dialog.com/docs/messaging/groups" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700"
                      >
                        360dialog Groups Documentation
                      </a>
                    </p>
                    <p className="text-gray-700 mt-3">
                      Read more: <Link href="/guides/whatsapp-groups-api-limits" className="text-green-600 hover:text-green-700">
                        WhatsApp Groups API Limits Explained
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-600 rounded-lg p-6 bg-green-50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center font-bold text-white">
                    C
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Multi-Group Campaign Platform
                    </h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Job-to-be-done:</strong> Connect and organize many groups you already use, then run 
                      a campaign across a selection of those groups. This is the approach for agencies, community 
                      managers, and brands that need to post the same message into dozens or hundreds of existing groups.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Key differences from extensions:</strong> Multi-group platforms offer group collections, 
                      pacing controls, team collaboration, and account health management — not just raw bulk sending.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>This is the wedge WaTask targets.</strong> Rather than hacking together 
                      Chrome extensions or building custom API loops, multi-group platforms provide a proper 
                      operating system for group network management.
                    </p>
                    <div className="mt-4">
                      <Link 
                        href="/whatsapp-group-management-tool"
                        className="text-green-600 hover:text-green-700 font-semibold"
                      >
                        Learn about WhatsApp Group Management Tools →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Step-by-Step: How to Run a Multi-Group Campaign
            </h2>
            
            <p className="text-gray-700 mb-6">
              Here's the conceptual workflow for managing campaigns across many WhatsApp groups, whether you're 
              using a platform like WaTask or building your own solution:
            </p>

            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Inventory Your Groups
                  </h3>
                  <p className="text-gray-700">
                    Connect your WhatsApp account and import the groups you administrate. Include WhatsApp 
                    Communities announcement groups if relevant to your strategy.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Segment & Organize into Collections
                  </h3>
                  <p className="text-gray-700">
                    Create collections by client, audience type, geography, or campaign goal. This lets you 
                    target specific subsets of your group network rather than blasting everyone every time.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Draft Message & Media
                  </h3>
                  <p className="text-gray-700">
                    Prepare your campaign message. Consider creating variants for different audiences or 
                    A/B testing different approaches. Include images, videos, or documents as needed.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Pace Your Sends
                  </h3>
                  <p className="text-gray-700">
                    Don't blast hundreds of groups instantly. Use pacing controls to spread sends over time, 
                    respect group norms, and maintain account health. Good platforms build this in; with 
                    extensions or DIY approaches, you need to manage it yourself.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Monitor Delivery & Account Health
                  </h3>
                  <p className="text-gray-700">
                    Track which groups received your message, monitor for any delivery issues, and watch 
                    account health signals. Be prepared to pause if you see warning signs.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                  6
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Consider Your Technical Approach
                  </h3>
                  <p className="text-gray-700">
                    Developers can build custom loops with code, but this requires ongoing maintenance and risk management. For most businesses, a productized platform provides group collections, scheduling, pacing, multi-number distribution, and team collaboration without code to run.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700 mb-3">
                <strong>Important:</strong> Always respect consent and group norms. Just because you can post 
                to many groups doesn't mean you should spam them. The best multi-group campaigns are relevant, 
                valuable, and respectful of each community's expectations.
              </p>
              <Link 
                href="/guides/safer-multi-group-whatsapp-campaigns"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Read: Safer Multi-Group WhatsApp Campaigns →
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Mistakes (and SERP Traps)
            </h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Buying a BSP Because a Roundup Said "Best Bulk WhatsApp"
                </h3>
                <p className="text-gray-700">
                  Many "best WhatsApp marketing software" roundups only list Cloud API / BSP tools designed for 
                  1:1 messaging. They won't solve multi-group posting. Make sure the tool category matches your 
                  actual job-to-be-done.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Assuming Meta Groups API Unlocks Existing Large Groups
                </h3>
                <p className="text-gray-700">
                  The 8-participant cap and invite-only requirements mean the official Groups API won't help 
                  with your existing 100+ member marketing or community groups. Don't build a strategy around 
                  this API if you already have established groups.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Running Unlimited Extension Blasts with No Pacing
                </h3>
                <p className="text-gray-700">
                  Chrome "group sender" extensions can work, but blasting hundreds of groups with no delays 
                  increases account risk. If you use extensions, implement your own pacing and consent checks.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Confusing Broadcast Lists with Group Posts
                </h3>
                <p className="text-gray-700">
                  WhatsApp Broadcast Lists (up to 256 contacts in the Business app) send 1:1 messages, not 
                  group posts. The recipient sees a personal message, not a group conversation.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who This Is For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Agencies Managing Client Groups
                </h3>
                <p className="text-gray-700">
                  If you manage WhatsApp groups for multiple clients and need to post updates, promotions, 
                  or campaigns across those networks efficiently.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Community Managers & Civic Organizations
                </h3>
                <p className="text-gray-700">
                  Organizations that run dozens or hundreds of neighborhood, interest, or advocacy groups 
                  and need to broadcast announcements or campaigns.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Multi-Location or Vertical Operations
                </h3>
                <p className="text-gray-700">
                  Businesses with regional groups, franchise networks, or vertical-specific communities 
                  (like real estate listing groups) that need coordinated messaging.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Not Primarily For
                </h3>
                <p className="text-gray-700">
                  Single-inbox ecommerce sellers who only need to send order confirmations and support 
                  messages to individual customers (use a BSP instead).
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
                  Can the official WhatsApp Business / Cloud API message my existing large groups?
                </h3>
                <p className="text-gray-700">
                  <strong>Effectively no</strong> for ordinary large consumer groups. The Meta WhatsApp Groups API 
                  is designed for small, invite-only API-created groups with a maximum of 8 participants. It cannot 
                  be used to post into your existing large community or marketing groups that have 50-500+ members.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What is the WhatsApp Groups API participant limit?
                </h3>
                <p className="text-gray-700">
                  <strong>8 participants maximum.</strong> The Meta WhatsApp Groups API is limited to groups with up 
                  to 8 participants, and these groups must be invite-only and created through the API. This is 
                  documented in Meta's official Business Messaging documentation. You can manage up to 10,000 such 
                  groups per phone number, but each group is capped at 8 members.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is a WhatsApp broadcast the same as posting to groups?
                </h3>
                <p className="text-gray-700">
                  <strong>No.</strong> A WhatsApp broadcast list or Cloud API campaign sends individual 1:1 messages 
                  to contacts in your list. Each recipient sees the message in their personal chat with you. Group 
                  posting means sending a message inside group chats where all members can see and respond to each other.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How do I send one message to multiple WhatsApp groups?
                </h3>
                <p className="text-gray-700">
                  There are three main paths: (A) WhatsApp Cloud API/BSP for 1:1 template campaigns to contacts, 
                  (B) Meta Groups API for small 8-participant API groups, or (C) multi-group platform for campaigns 
                  into many existing large groups you already manage. For most use cases involving existing community 
                  or marketing groups, <strong>path C is the appropriate solution.</strong>
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do Chrome WhatsApp group senders work?
                </h3>
                <p className="text-gray-700">
                  <strong>Some do work</strong> for Web-session multi-select group sending. However, they carry 
                  account risks if not used carefully, especially without proper pacing and consent. Consider trust, 
                  account health, and whether a productized platform with built-in safety features would be more 
                  appropriate for business use.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's the difference vs WhatsApp Communities?
                </h3>
                <p className="text-gray-700">
                  WhatsApp Communities organize related groups under one umbrella, with an announcement group that 
                  can reach all community members. This is useful but doesn't replace the need for multi-group 
                  campaign tools when you manage dozens or hundreds of independent groups across different communities. 
                  Communities are complementary to, not a substitute for, multi-group management platforms.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  When should I use a BSP vs a multi-group tool?
                </h3>
                <p className="text-gray-700">
                  <strong>Use a BSP</strong> (Business Service Provider) like WATI or AiSensy when you need compliant 
                  1:1 template messaging and inbox management for opted-in contacts. <strong>Use a multi-group tool</strong> 
                  when your job is to send campaigns into many existing groups that you already manage and administrate.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-green-50 border-2 border-green-600 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Next Steps
            </h2>
            
            <p className="text-gray-700 mb-6">
              If you're managing multiple WhatsApp groups and need a proper platform to organize and campaign 
              across your group network, try WaTask:
            </p>

            <div className="mb-6">
              <Link 
                href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 inline-block"
              >
                Start on WhatsApp
              </Link>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <strong>Learn more:</strong>
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/guides/whatsapp-groups-api-limits" className="text-green-600 hover:text-green-700">
                    WhatsApp Groups API Limits (8-participant cap) →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/whatsapp-broadcast-vs-group-vs-communities" className="text-green-600 hover:text-green-700">
                    Broadcast vs Group vs Communities →
                  </Link>
                </li>
                <li>
                  <Link href="/whatsapp-group-management-tool" className="text-green-600 hover:text-green-700">
                    WhatsApp Group Management Tool (category overview) →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/safer-multi-group-whatsapp-campaigns" className="text-green-600 hover:text-green-700">
                    Safer Multi-Group Campaigns →
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
