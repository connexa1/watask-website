import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Business & Group Messaging Glossary',
  description: 'Plain-English definitions of WhatsApp business terms — broadcast list, group, Community, Cloud API, BSP, Groups API, OBA, template message, quality rating, pacing, and more.',
  alternates: {
    canonical: 'https://www.watask.com/glossary',
  },
  openGraph: {
    title: 'WhatsApp Business & Group Messaging Glossary | WaTask',
    description: 'Plain-English definitions of WhatsApp business terms — broadcast list, group, Community, Cloud API, BSP, Groups API, OBA, template message, quality rating, pacing, and more.',
    url: 'https://www.watask.com/glossary',
  },
};

const glossarySchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  'name': 'WhatsApp Business & Group Messaging Glossary',
  'description': 'Definitions of key terms for WhatsApp business messaging, group management, and multi-group campaigns.',
  'hasDefinedTerm': [
    {
      '@type': 'DefinedTerm',
      'name': 'Broadcast List',
      'description': 'A consumer WhatsApp feature that lets you send one message to up to 256 contacts. Each recipient sees the message as a personal 1:1 chat, not a group conversation. Available in the WhatsApp Business app.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'WhatsApp Group',
      'description': 'A chat where multiple participants can see and respond to each other\'s messages. Consumer groups support up to 1,024 participants. Admins control who joins and can set group permissions.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'WhatsApp Community',
      'description': 'A structure that organizes multiple related groups under one umbrella. Communities have an announcement group that reaches all members, plus up to 50 linked groups.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Announcement Group',
      'description': 'The main group in a WhatsApp Community where admins can broadcast to all community members. Only admins can send messages by default.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'WhatsApp Cloud API',
      'description': 'Meta\'s WhatsApp Business API for business messaging. Enables 1:1 template messages, media sending, and automation. Does not provide access to post into existing large consumer groups.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'BSP',
      'description': 'Business Service Provider. A company authorized by Meta to provide access to the WhatsApp Cloud API. Examples include WATI, AiSensy, 360dialog, and Interakt. BSPs typically offer inbox interfaces, automation, and template management.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'WhatsApp Groups API',
      'description': 'An official Meta API for creating and managing small API-based groups. Limited to 8 participants per group, invite-only, and cannot access existing large consumer groups. Part of the Cloud API platform.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'OBA',
      'description': 'Official Business Account. A Meta-verified WhatsApp business account obtained through Meta Business verification. Required for using the Groups API and certain Business Platform features.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Template Message',
      'description': 'A pre-approved message format required for outbound marketing messages via the Cloud API. Must be approved by Meta before use. Structured with header, body, footer, and optional buttons.'
    },
    {
      '@type': 'DefinedTerm',
      'name': '24-Hour Window',
      'description': 'The time period after a customer messages your business during which you can send free-form messages via Cloud API without using a template. After 24 hours, you must use approved templates.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Quality Rating',
      'description': 'Meta\'s assessment of your business messaging quality on Cloud API, based on blocks, reports, and user feedback. Poor quality ratings can restrict your messaging limits. Ratings are Green, Yellow, or Red.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Messaging Limits',
      'description': 'Daily conversation limits on Cloud API based on your phone number\'s tier. Starts at 1,000 conversations/day and can scale to unlimited with good quality ratings and verification.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Opt-in',
      'description': 'Explicit consent from a user to receive messages from your business. Required before sending marketing messages via Cloud API. Must be documented and verifiable.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Pacing',
      'description': 'Spreading message sends over time rather than sending all at once. Essential for multi-group campaigns to maintain account health and respect community norms.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Throttling',
      'description': 'Rate limiting or delaying message sends to avoid triggering spam filters or account restrictions. Similar to pacing but often refers to platform-imposed limits.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Multi-Number Distribution',
      'description': 'Using multiple WhatsApp numbers to distribute campaign sends across accounts, reducing load on any single number and providing redundancy.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Group Admin',
      'description': 'A participant with elevated permissions in a WhatsApp group. Can add/remove members, change group settings, send messages in announcement-only groups, and delete messages.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Invite Link',
      'description': 'A shareable URL that lets people join a WhatsApp group without admin approval. Can be reset by admins if the link is shared unwanted. Format: chat.whatsapp.com/...'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Group Collections',
      'description': 'Organized sets of WhatsApp groups segmented by criteria like client, region, or campaign type. Used in multi-group platforms to target specific subsets of your group network.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Multi-Group Campaign',
      'description': 'Sending one coordinated message into many existing WhatsApp groups. Different from broadcast lists (1:1) and Cloud API campaigns (also 1:1).'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Account Health',
      'description': 'The overall standing of your WhatsApp account based on usage patterns, reports, and blocks. Poor account health can lead to restrictions or bans.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Group Description',
      'description': 'Text that appears at the top of a WhatsApp group explaining its purpose, rules, or context. Visible to all members. Can be edited by admins.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Mute Group',
      'description': 'Disabling notifications for a group without leaving it. Options include 8 hours, 1 week, or always. You remain a member and can still read messages.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Exit Group',
      'description': 'Leaving a WhatsApp group as a participant. Other members are notified. Admins who exit a group with other admins remain can return; sole admins must assign a new admin first.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Group Settings',
      'description': 'Admin controls for who can send messages (all participants or admins only), edit group info, and whether the group is public or private.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Disappearing Messages',
      'description': 'A setting that automatically deletes messages from a chat or group after 24 hours, 7 days, or 90 days. Can be enabled by admins in groups or by anyone in 1:1 chats.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Reply Privately',
      'description': 'A feature in groups that lets you respond to a group message in a private 1:1 chat with that person, moving the conversation out of the group.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Group Call',
      'description': 'Audio or video call with multiple group members. Initiated from the group chat. Supports up to 32 participants in a video call.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Group Media Visibility',
      'description': 'Settings that control whether media from a group automatically saves to your phone\'s gallery. Can be controlled per-group in WhatsApp settings.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Business Profile',
      'description': 'Information displayed on a WhatsApp Business account including business name, category, description, address, hours, and website. Visible when customers view your profile.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Catalog',
      'description': 'A product showcase feature in WhatsApp Business. Lets businesses display products with images, prices, and descriptions. Available in Business app and via Cloud API.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Quick Replies',
      'description': 'Saved message shortcuts in WhatsApp Business app for frequently sent responses. Triggered with "/" commands. Different from Cloud API message templates.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Away Message',
      'description': 'Automated response in WhatsApp Business app sent when you\'re unavailable. Can be scheduled for specific hours or days.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Greeting Message',
      'description': 'Automated first message sent to new customers who message your WhatsApp Business for the first time. Only sent once per contact.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Phone Number Tier',
      'description': 'The tier determines daily messaging limits on Cloud API. Starts at Tier 1 and can scale up to unlimited with quality ratings and verification.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Conversation Window',
      'description': 'A 24-hour period that starts when a business sends a template or a customer sends a message. Meta moved from conversation-based billing to per-message pricing on July 1, 2025.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'WhatsApp Web',
      'description': 'Browser-based version of WhatsApp that mirrors your phone\'s account. Requires active internet on your phone. Used by some multi-group tools for Web-based sending.'
    },
    {
      '@type': 'DefinedTerm',
      'name': 'Business Messaging',
      'description': 'The broader category of using WhatsApp for business communications, including customer service, marketing campaigns, transactional notifications, and group management.'
    }
  ]
};

interface Term {
  term: string;
  definition: string;
  relatedGuides?: Array<{ title: string; href: string }>;
}

const terms: Term[] = [
  {
    term: 'Broadcast List',
    definition: 'A consumer WhatsApp feature that lets you send one message to up to 256 contacts. Each recipient sees the message as a personal 1:1 chat, not a group conversation. Available in the WhatsApp Business app. Recipients must have your number saved to receive broadcast messages.',
    relatedGuides: [
      { title: 'Broadcast vs Group vs Communities', href: '/guides/whatsapp-broadcast-vs-group-vs-communities' },
      { title: 'How to Send to Multiple Groups', href: '/guides/send-bulk-messages-to-multiple-whatsapp-groups' }
    ]
  },
  {
    term: 'WhatsApp Group',
    definition: 'A chat where multiple participants (up to 1,024) can see and respond to each other\'s messages. Admins control who joins, can set permissions for who can send messages and edit group info, and manage group settings. Different from broadcast lists where recipients see 1:1 messages.',
    relatedGuides: [
      { title: 'Broadcast vs Group vs Communities', href: '/guides/whatsapp-broadcast-vs-group-vs-communities' },
      { title: 'Multi-Group Campaigns', href: '/guides/send-bulk-messages-to-multiple-whatsapp-groups' }
    ]
  },
  {
    term: 'WhatsApp Community',
    definition: 'A structure that organizes multiple related groups (up to 50) under one umbrella. Communities have an announcement group where admins can broadcast to all community members, plus linked sub-groups for focused discussions. Launched by Meta in 2022 for organizing larger group networks.',
    relatedGuides: [
      { title: 'Communities Bulk Messaging Guide', href: '/guides/whatsapp-communities-bulk-messaging' },
      { title: 'Broadcast vs Group vs Communities', href: '/guides/whatsapp-broadcast-vs-group-vs-communities' }
    ]
  },
  {
    term: 'Announcement Group',
    definition: 'The main group in a WhatsApp Community where only admins can send messages by default (though this can be changed in settings). Used to broadcast important updates to all community members. Every community has one announcement group plus optional sub-groups.',
    relatedGuides: [
      { title: 'Communities Bulk Messaging Guide', href: '/guides/whatsapp-communities-bulk-messaging' }
    ]
  },
  {
    term: 'WhatsApp Cloud API',
    definition: 'Meta\'s WhatsApp Business API for business messaging. Enables 1:1 template messages, media sending, webhooks, and automation for businesses. Requires opt-in and approved message templates. Does not provide access to post into existing large consumer groups. The Groups API is limited to small new groups (max 8 participants).',
    relatedGuides: [
      { title: 'Does Business API Support Groups?', href: '/guides/does-whatsapp-business-api-support-groups' },
      { title: 'Groups API Limits', href: '/guides/whatsapp-groups-api-limits' }
    ]
  },
  {
    term: 'BSP (Business Service Provider)',
    definition: 'A company authorized by Meta to provide access to the WhatsApp Cloud API. BSPs handle infrastructure, provide inbox interfaces, and manage message delivery. Examples include WATI, AiSensy, 360dialog, Interakt, and Respond.io. Most BSPs focus on 1:1 messaging, not multi-group posting.',
    relatedGuides: [
      { title: 'How to Send to Multiple Groups', href: '/guides/send-bulk-messages-to-multiple-whatsapp-groups' }
    ]
  },
  {
    term: 'WhatsApp Groups API',
    definition: 'An official Meta API for creating and managing small API-based groups. Strictly limited to 8 participants per group, invite-only, and cannot access or post into existing large consumer groups. Part of the Cloud API Business Platform. Requires an Official Business Account (OBA). You can manage up to 10,000 groups per phone number.',
    relatedGuides: [
      { title: 'Groups API Limits Explained', href: '/guides/whatsapp-groups-api-limits' },
      { title: 'Does Business API Support Groups?', href: '/guides/does-whatsapp-business-api-support-groups' }
    ]
  },
  {
    term: 'OBA (Official Business Account)',
    definition: 'A Meta-verified WhatsApp business account obtained through Meta Business verification. Required for using the Groups API and certain advanced Business Platform features. Verification confirms business identity with Meta.',
    relatedGuides: []
  },
  {
    term: 'Template Message',
    definition: 'A pre-approved message format required for outbound marketing messages via the Cloud API. Must be submitted to Meta for approval before use. Structured with optional header, body text, footer, and buttons. Template rejections are common — Meta enforces strict quality rules. Can include variables for personalization.',
    relatedGuides: [
      { title: 'How to Send to Multiple Groups', href: '/guides/send-bulk-messages-to-multiple-whatsapp-groups' }
    ]
  },
  {
    term: '24-Hour Window',
    definition: 'The time period after a customer messages your business during which you can send free-form messages via Cloud API without using templates. Lets you have natural conversations. After 24 hours without customer response, you must use approved templates to re-engage. Also called the customer service window.',
    relatedGuides: []
  },
  {
    term: 'Quality Rating',
    definition: 'Meta\'s assessment of your business messaging quality on Cloud API. Based on user feedback signals like blocks, reports, and message response patterns. Ratings are Green (high quality), Yellow (medium), or Red (low). Poor ratings restrict your messaging limits and can lead to number suspension. Check in Meta Business Manager.',
    relatedGuides: [
      { title: 'Safer Multi-Group Campaigns', href: '/guides/safer-multi-group-whatsapp-campaigns' }
    ]
  },
  {
    term: 'Messaging Limits / Tiers',
    definition: 'Daily messaging limits on Cloud API that scale based on your phone number\'s tier and quality rating. Starts at Tier 1, progresses through higher tiers with good performance, and can reach unlimited. Limits reset daily. Quality rating issues can cause tier drops.',
    relatedGuides: []
  },
  {
    term: 'Opt-in',
    definition: 'Explicit consent from a user to receive messages from your business via Cloud API. Required by Meta policy before sending marketing messages. Must be clear, documented, and verifiable. Cannot be implied or assumed. Violation risks account suspension. Obtain through forms, checkboxes, or keyword replies.',
    relatedGuides: []
  },
  {
    term: 'Pacing',
    definition: 'Spreading message sends over time with delays between sends, rather than sending all at once. Essential for multi-group campaigns to maintain account health, respect community norms, and avoid appearing spammy. Professional multi-group tools build pacing controls in; with extensions or DIY approaches you manage it manually.',
    relatedGuides: [
      { title: 'Safer Multi-Group Campaigns', href: '/guides/safer-multi-group-whatsapp-campaigns' },
      { title: 'How to Send to Multiple Groups', href: '/guides/send-bulk-messages-to-multiple-whatsapp-groups' }
    ]
  },
  {
    term: 'Throttling',
    definition: 'Rate limiting message sends to avoid triggering spam filters, platform restrictions, or overwhelming recipients. Similar to pacing. Can be platform-imposed (Meta limits) or self-imposed (your sending strategy). Important for account health in multi-group scenarios.',
    relatedGuides: [
      { title: 'Safer Multi-Group Campaigns', href: '/guides/safer-multi-group-whatsapp-campaigns' }
    ]
  },
  {
    term: 'Multi-Number Distribution',
    definition: 'Using multiple WhatsApp numbers to distribute campaign sends across accounts. Reduces load on any single number, provides redundancy if one number has issues, and can increase total sending capacity. Requires managing multiple accounts or using a platform with multi-number support.',
    relatedGuides: []
  },
  {
    term: 'Group Admin',
    definition: 'A participant with elevated permissions in a WhatsApp group. Can add/remove members, change group name and settings, promote other members to admin, send messages in announcement-only groups, and delete anyone\'s messages. Groups must have at least one admin. Original group creator is first admin.',
    relatedGuides: []
  },
  {
    term: 'Invite Link',
    definition: 'A shareable URL that lets anyone with the link join a WhatsApp group without admin approval. Format: chat.whatsapp.com/[unique-code]. Can be reset by admins if compromised or shared unwanted. Useful for open communities, risky for private groups.',
    relatedGuides: []
  },
  {
    term: 'Group Collections',
    definition: 'Organized sets of WhatsApp groups segmented by criteria like client, region, campaign type, or audience. Used in multi-group management platforms to target specific subsets of your group network. Enables sending to "all client A groups" or "all East region groups" without manual selection each time.',
    relatedGuides: [
      { title: 'Group Management Tool Overview', href: '/whatsapp-group-management-tool' },
      { title: 'How to Send to Multiple Groups', href: '/guides/send-bulk-messages-to-multiple-whatsapp-groups' }
    ]
  },
  {
    term: 'Multi-Group Campaign',
    definition: 'Sending one coordinated message into many existing WhatsApp groups your numbers are in. All group members see the post in their group chat. Different from broadcast lists (1:1 individual messages) and Cloud API campaigns (also 1:1 template messages to contacts).',
    relatedGuides: [
      { title: 'How to Send to Multiple Groups', href: '/guides/send-bulk-messages-to-multiple-whatsapp-groups' },
      { title: 'Safer Multi-Group Campaigns', href: '/guides/safer-multi-group-whatsapp-campaigns' }
    ]
  },
  {
    term: 'Account Health',
    definition: 'The overall standing of your WhatsApp account based on usage patterns, user reports, blocks, and spam signals. Poor account health leads to restrictions (throttling, messaging limits) or outright bans. Monitored by Meta for Cloud API users; consumer accounts also face restrictions for abuse.',
    relatedGuides: [
      { title: 'Safer Multi-Group Campaigns', href: '/guides/safer-multi-group-whatsapp-campaigns' }
    ]
  },
  {
    term: 'Group Description',
    definition: 'Text at the top of a WhatsApp group explaining its purpose, rules, or context. Visible to all members when they tap group info. Can be edited by admins. Useful for setting expectations and providing contact info or guidelines.',
    relatedGuides: []
  },
  {
    term: 'Group Subject',
    definition: 'The name of a WhatsApp group displayed at the top of the chat and in chat lists. Can be edited by admins (or all participants if admins allow). Limited to 25 characters. Changes notify all members.',
    relatedGuides: []
  },
  {
    term: 'Disappearing Messages',
    definition: 'A privacy setting that automatically deletes messages from a chat or group after a set duration (24 hours, 7 days, or 90 days). Can be enabled by admins in groups. Once enabled, applies to all new messages but not past ones. Recipients can still screenshot or save media before deletion.',
    relatedGuides: []
  },
  {
    term: 'Business Profile',
    definition: 'Information displayed on a WhatsApp Business account including business name, category, description, address, hours, website, and email. Visible when customers tap your business name. Required setup step for WhatsApp Business app. Can also be configured via Cloud API.',
    relatedGuides: []
  },
  {
    term: 'Catalog',
    definition: 'A product showcase feature in WhatsApp Business that lets businesses display products with images, prices, descriptions, and links. Available in WhatsApp Business app and via Cloud API. Customers can browse and inquire about products directly in chat. Limited to 500 products in the app.',
    relatedGuides: []
  },
  {
    term: 'Quick Replies',
    definition: 'Saved message shortcuts in WhatsApp Business app for frequently sent responses like "Thanks for your message" or FAQs. Triggered with "/" commands. Saves typing time for common replies. Different from Cloud API message templates which require Meta approval.',
    relatedGuides: []
  },
  {
    term: 'Away Message',
    definition: 'Automated response in WhatsApp Business app sent when you\'re unavailable. Can be scheduled for specific hours (e.g., outside business hours) or days. Lets customers know when to expect a reply. Only available in Business app, not Cloud API.',
    relatedGuides: []
  },
  {
    term: 'Greeting Message',
    definition: 'Automated first message sent to new customers who message your WhatsApp Business for the first time. Only sent once per contact. Good for setting expectations and providing initial information. Available in Business app; Cloud API uses chatbots or templates instead.',
    relatedGuides: []
  },
  {
    term: 'Phone Number Tier',
    definition: 'Cloud API phone numbers start at Tier 1 and scale up based on message quality and volume. Each tier has daily conversation limits: Tier 1 = 1K, Tier 2 = 10K, Tier 3 = 100K, Unlimited tier possible with verification. Quality ratings affect tier progression and can cause tier drops.',
    relatedGuides: []
  },
  {
    term: 'Conversation Window',
    definition: 'A 24-hour period that starts when a business sends a template or a customer sends a message on Cloud API. Meta moved from conversation-based billing (where multiple messages within 24 hours counted as one conversation) to per-message pricing on July 1, 2025.',
    relatedGuides: []
  },
  {
    term: 'WhatsApp Web',
    definition: 'Browser-based version of WhatsApp (web.whatsapp.com) that mirrors your phone\'s account. Historically required phone to be online; now works independently with multi-device. Used by some multi-group tools for Web-based automation since it provides more access than Cloud API for group posting.',
    relatedGuides: []
  }
];

export default function GlossaryPage() {
  return (
    <div className="bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      
      <section className="bg-gradient-to-b from-bg-secondary to-bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/guides" className="text-sm text-cyber hover:text-cyber-hover inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Guides
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            WhatsApp Business & Group Messaging Glossary
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Plain-English definitions of WhatsApp business terms — from broadcast lists and Cloud API to multi-group campaigns and account health. Reference this when navigating WhatsApp business tools and strategies.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-text-secondary">
            This glossary covers terms for WhatsApp Business API, group management, Communities, and multi-group campaigns. Each term links to relevant guides where applicable.
          </p>
        </div>

        <div className="space-y-8">
          {terms.map((item, index) => (
            <div key={index} className="border-b border-[var(--border-subtle)] pb-8 last:border-b-0">
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                {item.term}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {item.definition}
              </p>
              {item.relatedGuides && item.relatedGuides.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Related guides:</p>
                  <ul className="space-y-1">
                    {item.relatedGuides.map((guide, guideIndex) => (
                      <li key={guideIndex}>
                        <Link 
                          href={guide.href}
                          className="text-sm text-cyber hover:text-cyber-hover"
                        >
                          {guide.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)]">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Learn More
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
              <h3 className="font-semibold text-text-primary mb-3">Core Multi-Group Guide</h3>
              <Link 
                href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
                className="text-cyber hover:text-cyber-hover font-medium"
              >
                How to Send Bulk Messages to Multiple WhatsApp Groups →
              </Link>
            </div>
            <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
              <h3 className="font-semibold text-text-primary mb-3">WhatsApp Communities</h3>
              <Link 
                href="/guides/whatsapp-communities-bulk-messaging"
                className="text-cyber hover:text-cyber-hover font-medium"
              >
                WhatsApp Communities for Bulk Messaging →
              </Link>
            </div>
            <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
              <h3 className="font-semibold text-text-primary mb-3">API Limits</h3>
              <Link 
                href="/guides/whatsapp-groups-api-limits"
                className="text-cyber hover:text-cyber-hover font-medium"
              >
                WhatsApp Groups API Limits Explained →
              </Link>
            </div>
            <div className="glass-panel border-[var(--border-subtle)] rounded-lg p-6 bg-bg-card">
              <h3 className="font-semibold text-text-primary mb-3">All Guides</h3>
              <Link 
                href="/guides"
                className="text-cyber hover:text-cyber-hover font-medium"
              >
                Browse all guides →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 glass-panel border-2 border-cyber rounded-lg p-8 bg-bg-card">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Ready to manage your group network?
          </h2>
          <p className="text-text-secondary mb-6">
            WaTask helps you organize collections, run multi-group campaigns, and pace delivery safely across your WhatsApp group network.
          </p>
          <Link 
            href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask"
            className="bg-cyber text-bg-primary px-8 py-3 rounded-lg font-semibold hover:bg-cyber-hover inline-block transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)]"
          >
            Start on WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}
