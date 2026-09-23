import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Groups API Limits: 8-Participant Cap Explained (2026)',
  description: 'Meta\'s WhatsApp Groups API is limited to 8 participants per group and requires invite-only setup. Understand the constraints and alternatives.',
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            WhatsApp Groups API Limits: 8-Participant Cap Explained
          </h1>
          <p className="text-xl text-gray-600">
            Meta's official WhatsApp Groups API has strict constraints that make it unsuitable 
            for managing existing large community or marketing groups.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-8">
            <p className="text-gray-900 font-semibold mb-2">Coming Soon</p>
            <p className="text-gray-700">
              This guide is being prepared with full citations from Meta's official documentation. 
              In the meantime, see the{' '}
              <Link href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" className="text-green-600 hover:text-green-700 font-medium">
                main multi-group guide
              </Link>{' '}
              for an overview of the Groups API limitations.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Constraints (Summary)</h2>
          
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✗</span>
              <span className="text-gray-700">
                <strong>Maximum 8 participants</strong> per group
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✗</span>
              <span className="text-gray-700">
                <strong>Invite-only groups</strong> created through the API
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✗</span>
              <span className="text-gray-700">
                Cannot message existing large consumer/community groups
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700">
                Can manage up to <strong>10,000 groups per phone number</strong>
              </span>
            </li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What This Means</h3>
            <p className="text-gray-700">
              If you already manage dozens or hundreds of WhatsApp groups with 50-500+ members each, 
              the official Groups API will not help you send campaigns to those groups. You need a 
              different approach.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">References</h2>
          
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>
              <a 
                href="https://developers.facebook.com/docs/whatsapp/business-management-api/guides/groups/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
              >
                Meta WhatsApp Groups API Documentation →
              </a>
            </li>
            <li>
              <a 
                href="https://docs.360dialog.com/docs/messaging/groups" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
              >
                360dialog Groups Documentation →
              </a>
            </li>
          </ul>

          <div className="bg-green-50 border-2 border-green-600 rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Alternative: Multi-Group Platforms</h3>
            <p className="text-gray-700 mb-6">
              For managing and campaigning across many existing large groups, consider a multi-group 
              management platform like WaTask instead of trying to work within the Groups API constraints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/whatsapp-group-management-tool"
                className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 text-center"
              >
                Learn About Group Management Tools
              </Link>
              <Link 
                href="/register"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 text-center"
              >
                Try WaTask Free
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
