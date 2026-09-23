import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Group Management Tool - Organize & Campaign Across Groups',
  description: 'Manage multiple WhatsApp groups, organize them into collections, and send campaigns at scale. The WhatsApp OS for agencies and community managers.',
  alternates: {
    canonical: 'https://watask.com/whatsapp-group-management-tool',
  },
  openGraph: {
    title: 'WhatsApp Group Management Tool | WaTask',
    description: 'Manage multiple WhatsApp groups, organize them into collections, and send campaigns at scale.',
    url: 'https://watask.com/whatsapp-group-management-tool',
  },
};

export default function CategoryPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            WhatsApp Group Management Tool
          </h1>
          <p className="text-xl text-gray-600">
            The category that traditional BSPs leave undefined: tools for organizing many WhatsApp groups 
            and running campaigns across your group network.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is a WhatsApp Group Management Tool?
          </h2>
          <p className="text-gray-700 mb-6">
            Unlike WhatsApp Business API platforms that focus on 1:1 messaging to individual contacts, 
            WhatsApp group management tools help you organize, administrate, and campaign across many 
            existing WhatsApp groups simultaneously.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Core Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Group Organization
              </h3>
              <p className="text-gray-700">
                Connect your WhatsApp groups and organize them into collections by client, audience, 
                geography, or campaign type.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multi-Group Campaigns
              </h3>
              <p className="text-gray-700">
                Send one message or campaign to multiple selected groups at once, rather than manually 
                posting to each group.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pacing & Delivery Controls
              </h3>
              <p className="text-gray-700">
                Built-in safeguards to pace sends, respect account health limits, and avoid appearing 
                spammy to group members.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-700">
                Multiple team members can manage the same group network, with appropriate permissions 
                and audit trails.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Who Needs This Category?
          </h2>
          
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">→</span>
              <span className="text-gray-700">
                <strong>Agencies</strong> managing WhatsApp groups for multiple clients
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">→</span>
              <span className="text-gray-700">
                <strong>Community managers</strong> running dozens or hundreds of neighborhood, interest, or advocacy groups
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">→</span>
              <span className="text-gray-700">
                <strong>Brands</strong> with regional group networks or vertical-specific communities
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">→</span>
              <span className="text-gray-700">
                <strong>Multi-location operations</strong> coordinating messaging across franchise or branch networks
              </span>
            </li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How This Differs from BSPs
            </h3>
            <p className="text-gray-700 mb-4">
              WhatsApp Business Service Providers (BSPs) like WATI, AiSensy, and Interakt excel at sending 
              template-based 1:1 messages to opted-in contact lists. They provide inbox management, chatbots, 
              and CRM features.
            </p>
            <p className="text-gray-700">
              <strong>Group management tools solve a different problem:</strong> posting campaigns into many 
              existing group chats you already administrate. These are complementary categories, not competitors.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            WaTask: A WhatsApp Group Management Platform
          </h2>
          
          <p className="text-gray-700 mb-6">
            WaTask is built specifically for the multi-group use case. It provides the infrastructure to connect, 
            organize, and campaign across your WhatsApp group network — the WhatsApp OS that BSPs don't offer.
          </p>

          <div className="bg-green-50 border-2 border-green-600 rounded-lg p-8 text-center">
            <p className="text-gray-700 mb-4">
              Ready to manage your WhatsApp groups at scale?
            </p>
            <Link 
              href="/register"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 inline-block"
            >
              Start Free Trial
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Learn More
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" className="text-green-600 hover:text-green-700">
                  How to Send Bulk Messages to Multiple WhatsApp Groups →
                </Link>
              </li>
              <li>
                <Link href="/guides/whatsapp-groups-api-limits" className="text-green-600 hover:text-green-700">
                  WhatsApp Groups API Limits Explained →
                </Link>
              </li>
              <li>
                <Link href="/guides/safer-multi-group-whatsapp-campaigns" className="text-green-600 hover:text-green-700">
                  Safer Multi-Group Campaigns →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
