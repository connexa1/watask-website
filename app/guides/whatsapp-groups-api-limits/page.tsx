import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Groups API Limits Explained',
  description: 'Document Meta\'s official Groups API caps (8 participants, invite-only, 10k groups/number, OBA) in plain language.',
  alternates: {
    canonical: 'https://watask.com/guides/whatsapp-groups-api-limits',
  },
};

export default function GroupsAPILimitsPage() {
  return (
    <div className="bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/guides" className="text-sm text-gray-600 hover:text-gray-900">
              ← Back to Guides
            </Link>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
              In progress
            </span>
            <span className="text-sm text-gray-500">Updated Sep 2026 · ETA: Q4 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            WhatsApp Groups API Limits Explained
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            This guide will document Meta's official Groups API caps (8 participants, invite-only, 10k groups/number, OBA) in plain language.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">
              What this guide will cover
            </h2>
            <ul className="space-y-3 mb-0">
              <li className="text-gray-700">
                Official Meta Groups API constraints with citations
              </li>
              <li className="text-gray-700">
                8-participant cap and invite-only requirements
              </li>
              <li className="text-gray-700">
                10,000 groups per business number limit
              </li>
              <li className="text-gray-700">
                Official Business Account (OBA) requirements
              </li>
              <li className="text-gray-700">
                Why the API doesn't work for existing large groups
              </li>
              <li className="text-gray-700">
                Alternatives for existing community/marketing groups
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quick summary (preview)
          </h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Meta WhatsApp Groups API is designed for small, API-created groups with a maximum of <strong>8 participants</strong>. These groups must be invite-only and created through the API. You can manage up to <strong>10,000</strong> such groups per business phone number, but each group is capped at 8 members.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>This means:</strong> If you already manage dozens or hundreds of WhatsApp groups with 50-500+ members each, the official Groups API will not help you send campaigns to those groups.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Read next (available now)
          </h2>
          
          <div className="space-y-4 mb-12">
            <Link 
              href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
              className="block bg-white border-2 border-green-200 rounded-lg p-6 hover:border-green-400 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600">
                How to Send Bulk Messages to Multiple WhatsApp Groups →
              </h3>
              <p className="text-gray-600 text-sm">
                Complete guide covering Cloud API, Groups API, and multi-group platforms
              </p>
            </Link>
            
            <Link 
              href="/whatsapp-group-management-tool"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600">
                WhatsApp Group Management Tool →
              </h3>
              <p className="text-gray-600 text-sm">
                What group management tools are and how they differ from BSPs
              </p>
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Get early access to the product
          </h2>
          
          <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-600 rounded-xl p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              WaTask is built for managing and campaigning across many existing large groups — the job the official Groups API doesn't solve.
            </p>
            <Link 
              href="/register"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 inline-block transition-colors"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
