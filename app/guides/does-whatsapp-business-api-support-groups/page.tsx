import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Does WhatsApp Business API Support Groups?',
  description: 'Direct answer for the common search: Cloud API 1:1 vs Groups API vs existing-group posting.',
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
          
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              Ready to publish
            </span>
            <span className="text-sm text-gray-500">Updated Sep 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Does WhatsApp Business API Support Groups?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Direct answer for the common search: Cloud API 1:1 vs Groups API vs existing-group posting.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">
              What this guide will cover
            </h2>
            <ul className="space-y-3 mb-0">
              <li className="text-gray-700">
                The difference between Cloud API and Groups API
              </li>
              <li className="text-gray-700">
                What the official WhatsApp Business API (Cloud API) can do
              </li>
              <li className="text-gray-700">
                What Meta's Groups API can do (and its 8-participant limit)
              </li>
              <li className="text-gray-700">
                Why most BSP tools can't post into your existing groups
              </li>
              <li className="text-gray-700">
                Alternatives for existing large group management
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quick answer
          </h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
            <p className="text-lg text-gray-900 font-semibold mb-4">
              The WhatsApp Cloud API (used by BSPs) focuses on 1:1 messaging and does not post into existing consumer groups.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Meta WhatsApp <strong>Groups API</strong> is a separate, limited feature designed for small, API-created groups with a maximum of <strong>8 participants</strong>. It cannot be used to post into your existing large community or marketing groups that have 50-500+ members.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Bottom line:</strong> If you're asking "can WhatsApp Business API message my existing groups?" — the answer is effectively <strong>no</strong> for ordinary large consumer groups. You need a different approach.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            The two "APIs" explained
          </h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                WhatsApp Cloud API / Business API (1:1 messaging)
              </h3>
              <p className="text-gray-700 mb-3">
                This is what platforms like WATI, AiSensy, and Interakt use. It's designed for:
              </p>
              <ul className="space-y-2 mb-0">
                <li className="text-gray-700">• Template-based messages to opted-in contacts</li>
                <li className="text-gray-700">• Shared inbox and customer conversations</li>
                <li className="text-gray-700">• Chatbots and automation</li>
                <li className="text-gray-700">• Notifications and order updates</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Does not support:</strong> Posting into existing group chats
              </p>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                WhatsApp Groups API (small API groups only)
              </h3>
              <p className="text-gray-700 mb-3">
                A separate, limited API for creating and managing <strong>small groups</strong>:
              </p>
              <ul className="space-y-2 mb-0">
                <li className="text-gray-700">• Maximum <strong>8 participants</strong> per group</li>
                <li className="text-gray-700">• Groups must be created through the API (invite-only)</li>
                <li className="text-gray-700">• Up to 10,000 groups per business number</li>
                <li className="text-gray-700">• Requires Official Business Account (OBA)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Does not support:</strong> Your existing large consumer/community groups
              </p>
            </div>
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
                Complete decision tree and step-by-step guide for multi-group campaigns
              </p>
            </Link>
            
            <Link 
              href="/guides/whatsapp-groups-api-limits"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600">
                WhatsApp Groups API Limits Explained →
              </h3>
              <p className="text-gray-600 text-sm">
                Deep dive into the 8-participant cap and invite-only requirements
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
              WaTask is built specifically for managing and campaigning across many existing large groups — the job neither Cloud API nor Groups API solve.
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
