import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Group Limits 2026: Members & Communities',
  description: 'Current WhatsApp limits for group size, Communities, forwarding, broadcast lists, and joining groups — with sources. Updated for 2026.',
  alternates: {
    canonical: 'https://www.watask.com/guides/whatsapp-group-limits',
  },
  openGraph: {
    title: 'WhatsApp Group Limits 2026: Members & Communities',
    description: 'Current WhatsApp limits for group size, Communities, forwarding, broadcast lists, and joining groups — with sources. Updated for 2026.',
    url: 'https://www.watask.com/guides/whatsapp-group-limits',
    type: 'article',
    images: [
      {
        url: 'https://www.watask.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'WaTask - Multi-Group WhatsApp Campaigns',
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How many members can a WhatsApp group have in 2026?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'A WhatsApp group can have up to 1,024 members, according to WhatsApp Help Center. The group creator is counted separately, so a full group has 1,025 people.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How many groups can I add to a WhatsApp Community?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'A WhatsApp Community can include up to 100 groups, with a total of 2,000 members across all groups and the announcement group combined, according to WhatsApp Help Center (2026).'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is the WhatsApp Community limit 2,000 or 5,000?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'According to WhatsApp Help Center (checked 2026-09-28), a Community can have 2,000 total members. Some older articles mention 5,000, but the current published limit from WhatsApp is 2,000 members across all Community groups.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How many WhatsApp groups can I join?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'WhatsApp does not publish a fixed limit for how many groups one account can join. Join groups gradually, and if WhatsApp stops you from joining, wait and try again later.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the WhatsApp forward limit?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Up to 5 chats per forward. A message that was already forwarded to you can go to only 1 more group chat, and a "Forwarded many times" message can go to only 1 chat at a time.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does the 1,024 limit apply to WhatsApp Business?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'WhatsApp\'s Help Center lists 1,024 members as the group size limit and does not give a separate number for the WhatsApp Business app. The WhatsApp Groups API is a separate product limited to 8 participants per group and does not post into existing large groups.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can a broadcast list include groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. Broadcast lists send individual 1:1 messages to up to 256 contacts who have saved your number, not group messages. Broadcast lists and group messages are different features.'
      }
    }
  ]
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'WhatsApp Group Limits 2026: Members, Communities & More',
  'image': 'https://www.watask.com/opengraph-image',
  'datePublished': '2026-09-28',
  'dateModified': '2026-09-28',
  'author': {
    '@type': 'Organization',
    'name': 'WaTask'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'WaTask'
  },
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://www.watask.com/guides/whatsapp-group-limits'
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://www.watask.com'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Guides',
      'item': 'https://www.watask.com/guides'
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'WhatsApp Group Limits 2026',
      'item': 'https://www.watask.com/guides/whatsapp-group-limits'
    }
  ]
};

export default function GroupLimitsPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/guides" className="text-sm text-green-700 hover:text-green-800 transition-colors inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Guides
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            WhatsApp Group Limits 2026: Members, Communities & More
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            A WhatsApp group holds up to 1,024 members; a Community holds up to 100 groups and 2,000 members in total (WhatsApp Help Center, 2026).
          </p>
          <p className="text-sm text-gray-600">
            Updated 2026-09-28
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              This guide provides one dated table covering every limit that trips up group admins — from member caps and Community sizes to forwarding and broadcast restrictions. Multi-group posting is a separate topic covered in <Link href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" className="text-green-700 hover:text-green-800">our multi-group campaigns guide</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              WhatsApp Limits at a Glance (2026)
            </h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-2 border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Limit</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Value</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Applies to</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Source</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">What to do if you hit it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">Members in a group</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">1,024</td>
                    <td className="border border-gray-300 px-4 py-3">WhatsApp groups</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="https://faq.whatsapp.com/775771602130495/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Help Center</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">Split into multiple groups or use a Community</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Groups in a Community</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">100</td>
                    <td className="border border-gray-300 px-4 py-3">WhatsApp Communities</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="https://faq.whatsapp.com/438859978317289" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Help Center</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">Create additional Communities or use multi-group tools</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">Members in a Community</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">2,000</td>
                    <td className="border border-gray-300 px-4 py-3">Total across all Community groups + announcement group</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="https://faq.whatsapp.com/438859978317289" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Help Center</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">Create additional Communities</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Forward to chats at once</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">5</td>
                    <td className="border border-gray-300 px-4 py-3">Standard forward limit</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="https://faq.whatsapp.com/1053543185312573/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Help Center</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <Link href="/guides/whatsapp-forward-limit-more-than-5-groups" className="text-green-700 hover:text-green-800">Forward limit guide</Link>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">Forward already-forwarded message to groups</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">1 group</td>
                    <td className="border border-gray-300 px-4 py-3">Messages already forwarded once</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="https://faq.whatsapp.com/1053543185312573/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Help Center</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <Link href="/guides/whatsapp-forward-limit-more-than-5-groups" className="text-green-700 hover:text-green-800">Forward limit guide</Link>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Broadcast list size</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">256 contacts</td>
                    <td className="border border-gray-300 px-4 py-3">Contacts who saved your number</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="https://faq.whatsapp.com/861663048350950/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Help Center</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <Link href="/guides/whatsapp-broadcast-vs-group-vs-communities" className="text-green-700 hover:text-green-800">Broadcast vs groups guide</Link>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">WhatsApp Groups API group size</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">8 participants</td>
                    <td className="border border-gray-300 px-4 py-3">Groups API only (separate product)</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <Link href="/guides/whatsapp-groups-api-limits" className="text-green-700 hover:text-green-800">API limits guide</Link>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">Groups API is for small new groups only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Groups you can join / people you can add</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">No published cap</td>
                    <td className="border border-gray-300 px-4 py-3">Joining groups and adding members</td>
                    <td className="border border-gray-300 px-4 py-3">Not published by WhatsApp</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <Link href="/guides/safer-multi-group-whatsapp-campaigns" className="text-green-700 hover:text-green-800">Pacing guide</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              Numbers checked against WhatsApp Help Center on 2026-09-28. Limits change; re-check the linked Help pages if something looks off.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Group Size — 1,024 Members
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What counts toward the 1,024
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              <a href="https://faq.whatsapp.com/967457667545238/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">WhatsApp's Help Center</a> puts the maximum group size at 1,024 members, or 1,025 including the group creator.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What happens when a group is full
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If a group has reached 1,024 members, new people can't join it. For groups inside a Community, <a href="https://faq.whatsapp.com/967457667545238/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">WhatsApp's Help Center</a> says you can request to join a full group when a member leaves or is removed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              When one group is not enough
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you need to organize more than 1,024 people, you have two main options: split them into multiple topic-based or region-based groups, or create a WhatsApp Community that organizes related groups under one umbrella with a shared announcement group. Learn more in our <Link href="/guides/whatsapp-communities-bulk-messaging" className="text-green-700 hover:text-green-800">Communities bulk messaging guide</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Community Limits — 100 Groups and 2,000 Members
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Groups per Community (100)
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You can create a WhatsApp Community with up to <strong>100 groups</strong>, according to <a href="https://faq.whatsapp.com/438859978317289" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">WhatsApp's Help Center</a>. WhatsApp automatically creates a Community Announcements group, where Community admins can send messages to all Community members.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Members per Community (2,000 total, not per group)
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The 2,000-member cap applies to the <strong>total membership across the entire Community</strong>, including all sub-groups and the announcement group combined. This is not 2,000 per group. If you have 100 groups in a Community, the total number of members across all of them cannot exceed 2,000.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why blogs disagree (50 / 5,000 numbers)
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Some older articles still mention a 50-group limit or a 5,000-member limit for Communities. As of 2026-09-28, the <a href="https://faq.whatsapp.com/438859978317289" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Help Center states 100 groups and 2,000 members</a>, so this guide uses those numbers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              When a Community is enough vs when you need more
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A Community works well when you admin all the groups and want to broadcast updates to all members via the announcement group. If you need to post into groups you do not admin, or if your groups span multiple Communities or accounts, you will need multi-group tools that can post from numbers already in those groups. See <Link href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" className="text-green-700 hover:text-green-800">our pillar guide</Link> for the full decision tree.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Forwarding and Broadcast Limits
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              WhatsApp restricts how many chats you can forward a message to at once: <strong>up to 5 chats</strong> per forward. If the message was already forwarded to you, it can only go to <strong>one additional group</strong>. Messages labeled "Forwarded many times" (passed through 5+ chats) can only be forwarded to <strong>one chat at a time</strong>.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              For the full breakdown of how these limits work and your options for reaching more groups, see <Link href="/guides/whatsapp-forward-limit-more-than-5-groups" className="text-green-700 hover:text-green-800">WhatsApp Forward Limit: How to Send to More Than 5 Groups</Link>.
            </p>

            <p className="text-gray-700 mb-0 leading-relaxed">
              <strong>Broadcast lists</strong> are a separate feature that sends individual 1:1 messages to up to 256 contacts who have saved your number. Broadcast lists do not post into groups. Learn the differences in <Link href="/guides/whatsapp-broadcast-vs-group-vs-communities" className="text-green-700 hover:text-green-800">Broadcast vs Group vs Communities</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Joining Groups and Adding Members — No Published Cap
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              WhatsApp's Help Center does not publish a fixed number for how many groups you can join or how many people you can add to groups. Practical advice:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Join groups and add people gradually rather than all at once</li>
              <li>Prefer invite links so people join themselves</li>
              <li>If WhatsApp stops you from joining or adding, wait before trying again</li>
            </ul>

            <p className="text-gray-700 mb-0 leading-relaxed">
              For pacing strategies when running multi-group campaigns, see <Link href="/guides/safer-multi-group-whatsapp-campaigns" className="text-green-700 hover:text-green-800">Multi-Group Campaign Best Practices</Link>.
            </p>
          </section>

          <section className="mb-12">
            <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">
                WhatsApp Groups API Limits Are a Different Topic
              </h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                The WhatsApp Groups API is a separate product path capped at <strong>8 participants per group</strong> and limited to small invite-only groups created through the API. It does not provide access to post into your existing large consumer groups.
              </p>

              <p className="text-gray-700 mb-0 leading-relaxed">
                Learn more: <Link href="/guides/whatsapp-groups-api-limits" className="text-green-700 hover:text-green-800">WhatsApp Groups API Limits</Link> and <Link href="/guides/does-whatsapp-business-api-support-groups" className="text-green-700 hover:text-green-800">Does WhatsApp Business API Support Groups?</Link>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What to Do When You Need One Message in Many Groups
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              The limits above describe group size and structure caps. When the challenge is not group size but <strong>reaching many groups with one post</strong>, you have several options:
            </p>

            <ol className="space-y-4 mb-8">
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Community announcement group</strong> — Works only for groups inside one Community you admin. Posts reach all Community members at once.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Forward in batches of 5</strong> — Repeat the forward action for each batch. See the <Link href="/guides/whatsapp-forward-limit-more-than-5-groups" className="text-green-700 hover:text-green-800">forward limit guide</Link> for details.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Multi-group tool</strong> — For campaigns across many groups your numbers are already in, a multi-group platform posts from numbers you connect yourself.
              </li>
            </ol>

            <p className="text-gray-700 mb-0 leading-relaxed">
              Learn more: <Link href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" className="text-green-700 hover:text-green-800">How to Send Bulk Messages to Multiple WhatsApp Groups</Link> and <Link href="/whatsapp-group-management-tool" className="text-green-700 hover:text-green-800">WhatsApp Group Management Tool</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How many members can a WhatsApp group have in 2026?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A WhatsApp group can have up to <strong>1,024 members</strong>, according to <a href="https://faq.whatsapp.com/775771602130495/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">WhatsApp Help Center</a>. The group creator is counted separately, so a full group has 1,025 people.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How many groups can I add to a WhatsApp Community?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A WhatsApp Community can include up to <strong>100 groups</strong>, with a total of 2,000 members across all groups and the announcement group combined, according to <a href="https://faq.whatsapp.com/438859978317289" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">WhatsApp Help Center (2026)</a>.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is the WhatsApp Community limit 2,000 or 5,000?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  According to WhatsApp Help Center (checked 2026-09-28), a Community can have <strong>2,000 total members</strong>. Some older articles mention 5,000, but the current published limit from WhatsApp is 2,000 members across all Community groups.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How many WhatsApp groups can I join?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>WhatsApp does not publish a fixed limit</strong> for how many groups one account can join. Join groups gradually, and if WhatsApp stops you from joining, wait and try again later.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What is the WhatsApp forward limit?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Up to <strong>5 chats</strong> per forward. A message that was already forwarded to you can go to only 1 more group chat, and a "Forwarded many times" message can go to only 1 chat at a time.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Does the 1,024 limit apply to WhatsApp Business?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  WhatsApp's Help Center lists 1,024 members as the group size limit and does not give a separate number for the WhatsApp Business app. The WhatsApp Groups API is a separate product limited to 8 participants per group and does not post into existing large groups.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can a broadcast list include groups?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>No.</strong> Broadcast lists send individual 1:1 messages to up to 256 contacts who have saved your number, not group messages. Broadcast lists and group messages are different features.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-green-50 border-2 border-green-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Post to Many Groups from Your Own Numbers
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              WaTask connects your own WhatsApp numbers with a QR scan and posts into groups those numbers are already in.
            </p>

            <div className="mb-6">
              <Link 
                href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask"
                className="bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 inline-block transition-colors"
              >
                Message WaTask on WhatsApp
              </Link>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <strong>Related guides:</strong>
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" className="text-green-700 hover:text-green-800">
                    How to Send Bulk Messages to Multiple WhatsApp Groups →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/whatsapp-communities-bulk-messaging" className="text-green-700 hover:text-green-800">
                    WhatsApp Communities for Bulk Messaging →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/whatsapp-forward-limit-more-than-5-groups" className="text-green-700 hover:text-green-800">
                    WhatsApp Forward Limit: Send to More Than 5 Groups →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/safer-multi-group-whatsapp-campaigns" className="text-green-700 hover:text-green-800">
                    Multi-Group Campaign Best Practices →
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className="text-green-700 hover:text-green-800">
                    WhatsApp Business Glossary →
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
