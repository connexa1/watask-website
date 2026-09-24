import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Group Management Tool | WaTask',
  description: 'What a WhatsApp group management tool is — organize many groups, run multi-group campaigns, and pace delivery. How this category differs from Cloud API BSPs.',
  alternates: {
    canonical: 'https://watask.com/whatsapp-group-management-tool',
  },
  openGraph: {
    title: 'WhatsApp Group Management Tool | WaTask',
    description: 'What a WhatsApp group management tool is — organize many groups, run multi-group campaigns, and pace delivery. How this category differs from Cloud API BSPs.',
    url: 'https://watask.com/whatsapp-group-management-tool',
  },
};

export default function CategoryPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            WhatsApp Group Management Tool
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A WhatsApp group management tool helps teams <strong>organize, segment, and campaign across many existing groups</strong> — the job traditional Business API platforms leave undefined because they optimize for 1:1 conversations.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What belongs in this category
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Group inventory & collections
              </h3>
              <p className="text-gray-700 text-sm">
                Connect and organize your groups by client, region, or campaign type
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multi-group campaign sends
              </h3>
              <p className="text-gray-700 text-sm">
                Post one campaign into many selected groups at once
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pacing / delivery controls
              </h3>
              <p className="text-gray-700 text-sm">
                Spread sends over time with built-in safeguards
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Team collaboration
              </h3>
              <p className="text-gray-700 text-sm">
                Shared access on a unified group network
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
            How this differs from BSPs
          </h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
            <p className="text-gray-700 mb-4 leading-relaxed">
              BSPs (WATI, AiSensy, Interakt, etc.) are strong at <strong>template 1:1 messaging</strong>, inboxes, and automation on the Cloud API. Group management tools solve <strong>posting into many group chats you already administrate</strong>.
            </p>
            <p className="text-gray-900 font-medium">
              Complementary categories — not substitutes.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
            Who needs it
          </h2>
          
          <div className="space-y-4 mb-12">
            <div className="flex gap-4 items-start">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">→</span>
              <p className="text-gray-700 pt-1">
                <strong className="text-gray-900">Agencies</strong> managing client group packs
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">→</span>
              <p className="text-gray-700 pt-1">
                <strong className="text-gray-900">Community / civic operators</strong> with large group networks
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">→</span>
              <p className="text-gray-700 pt-1">
                <strong className="text-gray-900">Brands</strong> with regional or vertical groups
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">→</span>
              <p className="text-gray-700 pt-1">
                <strong className="text-gray-900">Multi-location / franchise coordinators</strong> running location groups
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
            WaTask in this category
          </h2>
          
          <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-600 rounded-xl p-8 mb-12">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              WaTask is a WhatsApp OS for multi-group work: connect existing groups, organize collections, and run paced campaigns across your network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/register"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 text-center transition-colors"
              >
                Start free trial
              </Link>
              <Link 
                href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
                className="text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 text-center transition-colors"
              >
                Read the multi-group guide
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Learn more
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" className="text-green-600 hover:text-green-700 font-medium">
                  How to Send Bulk Messages to Multiple WhatsApp Groups →
                </Link>
              </li>
              <li>
                <Link href="/guides/whatsapp-groups-api-limits" className="text-green-600 hover:text-green-700 font-medium">
                  WhatsApp Groups API Limits Explained →
                </Link>
              </li>
              <li>
                <Link href="/guides/safer-multi-group-whatsapp-campaigns" className="text-green-600 hover:text-green-700 font-medium">
                  Safer Multi-Group Campaigns →
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-green-600 hover:text-green-700 font-medium">
                  All guides →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
