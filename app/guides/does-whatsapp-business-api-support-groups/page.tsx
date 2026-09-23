import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Does WhatsApp Business API Support Groups? Quick Answer (2026)',
  description: 'The WhatsApp Cloud API has limited group support through the Groups API (8-participant cap). Learn what you can and cannot do.',
  alternates: {
    canonical: 'https://watask.com/guides/does-whatsapp-business-api-support-groups',
  },
};

export default function DoesAPISupportGroupsPage() {
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
            Does WhatsApp Business API Support Groups?
          </h1>
          <p className="text-xl text-gray-600">
            Quick answer to one of the most common questions about WhatsApp's official Cloud API.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Short Answer</h2>
            <p className="text-lg text-gray-900 mb-4">
              <strong>Sort of, but with strict limitations.</strong>
            </p>
            <p className="text-gray-700">
              The WhatsApp Cloud API includes a Groups API, but it only supports small, invite-only 
              groups with a <strong>maximum of 8 participants</strong>. You cannot use it to post 
              into your existing large community or marketing groups.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Groups API Does</h2>
          
          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Create and manage small groups (up to 8 participants)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Send messages within these API-created groups</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Manage up to 10,000 groups per phone number</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What It Doesn't Do</h2>
          
          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✗</span>
              <span>Post into existing large groups (50-500+ members)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✗</span>
              <span>Support groups larger than 8 participants</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✗</span>
              <span>Access groups you created manually in the WhatsApp app</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✗</span>
              <span>Let you run campaigns across existing community groups</span>
            </li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">The Bottom Line</h3>
            <p className="text-gray-700">
              If you're searching for a way to post campaigns into many existing groups you already 
              manage, the official WhatsApp Business API will not solve your problem. You need a 
              different approach.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">What to Use Instead</h2>
          
          <p className="text-gray-700 mb-6">
            For managing and campaigning across many existing large groups, consider:
          </p>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multi-Group Platforms (Recommended)
              </h3>
              <p className="text-gray-700">
                Tools like <Link href="/" className="text-green-600 hover:text-green-700">WaTask</Link> that 
                connect your existing groups, organize them into collections, and provide safe campaign delivery.
              </p>
              <Link href="/whatsapp-group-management-tool" className="text-green-600 hover:text-green-700 text-sm">
                Learn more about group management tools →
              </Link>
            </div>

            <div className="border-l-4 border-gray-400 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Unofficial APIs & Extensions
              </h3>
              <p className="text-gray-700">
                Web-session APIs (Whapi, Maytapi) or Chrome extensions can work but carry account 
                risks and require careful pacing and implementation.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-600 rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Try a Purpose-Built Solution</h3>
            <p className="text-gray-700 mb-6">
              WaTask is designed specifically for multi-group WhatsApp campaigns. Get the features 
              the official API doesn't provide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
                className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 text-center"
              >
                Read Complete Guide
              </Link>
              <Link 
                href="/register"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 text-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/whatsapp-groups-api-limits" className="text-green-600 hover:text-green-700">
                  WhatsApp Groups API Limits Explained →
                </Link>
              </li>
              <li>
                <Link href="/guides/whatsapp-broadcast-vs-group-vs-communities" className="text-green-600 hover:text-green-700">
                  Broadcast vs Group vs Communities →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
