import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Multi-Group WhatsApp Campaigns | WaTask',
  description: 'Send one campaign into many existing WhatsApp groups. Organize collections, pace safely, and run multi-group ops — built for agencies, brands, and community teams.',
  alternates: {
    canonical: 'https://watask.com',
  },
  openGraph: {
    title: 'Multi-Group WhatsApp Campaigns | WaTask',
    description: 'Send one campaign into many existing WhatsApp groups. Organize collections, pace safely, and run multi-group ops — built for agencies, brands, and community teams.',
    url: 'https://watask.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-green-600 mb-4 tracking-wide uppercase">
              WhatsApp OS for group networks
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Send one campaign into<br />many WhatsApp groups
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              WaTask is built for teams who already run community, client, and regional groups — organize them into collections, pace delivery, and post at scale. Not another 1:1 Cloud API inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/register"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start free trial
              </Link>
              <Link 
                href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
                className="text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Read the multi-group guide
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              7-day free trial · No credit card required
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Collections</h3>
                <p className="text-gray-600 text-sm">Group by client · region · topic</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Campaign targets</h3>
                <p className="text-gray-600 text-sm">Multi-select · controlled send</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Pacing & delivery</h3>
                <p className="text-gray-600 text-sm">Safe rhythm · status per group</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 italic">
              One message. Many groups. Controlled send.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Most "bulk WhatsApp" tools don't post into groups
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Business Service Providers excel at template messages to opted-in contacts. That's a different job. If your work is updating <strong>existing</strong> WhatsApp groups you already administer — dozens or hundreds of them — you need a multi-group campaign layer.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-2">Agencies</p>
              <p className="text-gray-700">Client group packs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-2">Civic organizations</p>
              <p className="text-gray-700">Community networks</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-2">Brands</p>
              <p className="text-gray-700">Regional / franchise groups</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your group network, in one operating view
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect the groups you manage. Segment them. Launch a campaign with pacing and delivery visibility — without hopping group-by-group in WhatsApp Web.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Built for multi-group operations
          </h2>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Multi-group campaigns
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Draft once. Select many groups. Send with control. Ideal when the same announcement, offer, or update must land inside many chats — not as separate 1:1 templates.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm font-medium text-gray-900">Campaign ready</p>
                  </div>
                  <p className="text-xs text-gray-600">42 groups selected · Paced over 2 hours</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm font-medium text-gray-900">Client A · Regional</p>
                    <p className="text-xs text-gray-500">18 groups</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm font-medium text-gray-900">Community · North</p>
                    <p className="text-xs text-gray-500">24 groups</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Group collections
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Organize by client, audience, geography, or campaign type. Target a subset of your network instead of blasting every group every time.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Paced, professional sending
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Spread delivery over time. Respect how communities experience posts. Built-in pacing helps you work like an operator, not like a spray-and-pray extension.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-gray-900">Pacing control</p>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Interval</span>
                      <span className="text-gray-900 font-medium">3 min between sends</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Quiet hours</span>
                      <span className="text-gray-900 font-medium">22:00 - 08:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-sm font-medium text-gray-900 mb-3">Team workspace</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      <span className="text-gray-700">Admin · Full access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      <span className="text-gray-700">Manager · Campaign only</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Team-ready workflows
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Shared access, roles, and audit-friendly history for agencies and multi-location teams managing campaigns together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Choose the path that matches your groups
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Not all "bulk WhatsApp" solutions do the same job. Here's how they differ:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">Path</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Best for</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Not for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4">
                    <p className="font-semibold text-gray-900 mb-1">Cloud API / BSP</p>
                    <p className="text-sm text-gray-500">WATI, AiSensy, Interakt</p>
                  </td>
                  <td className="p-4 text-gray-700">
                    1:1 template campaigns to opted-in contacts; shared inbox; chatbots
                  </td>
                  <td className="p-4 text-gray-700">
                    Posting into large existing consumer/community groups
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">
                    <p className="font-semibold text-gray-900 mb-1">WhatsApp Groups API</p>
                    <p className="text-sm text-gray-500">Meta official, 8-cap</p>
                  </td>
                  <td className="p-4 text-gray-700">
                    Small, invite-only API-created groups (max <strong>8</strong> participants; up to <strong>10,000</strong> groups per number; OBA required)
                  </td>
                  <td className="p-4 text-gray-700">
                    Existing large groups with 50–500+ members you already built
                  </td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-4">
                    <p className="font-semibold text-gray-900 mb-1">WaTask (multi-group OS)</p>
                    <p className="text-sm text-green-600">This platform</p>
                  </td>
                  <td className="p-4 text-gray-700">
                    Campaigns across many <strong>existing</strong> groups you administer; collections + paced sends
                  </td>
                  <td className="p-4 text-gray-700">
                    Pure 1:1 ecommerce order bots (use a BSP)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-6 italic">
            Groups API limits from Meta Business Messaging documentation (updated Jun 2026). Always re-check Meta's docs before legal/compliance claims.
          </p>
          
          <p className="text-center text-gray-900 font-medium mt-6">
            WaTask is complementary to BSPs — not a clone of them.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Who WaTask is for
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Built for operators who already manage WhatsApp group networks
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agencies</h3>
              <p className="text-gray-700">
                Run client WhatsApp group packs from one place — updates and campaigns without manual copy-paste across chats.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Political & civic organizations</h3>
              <p className="text-gray-700">
                Coordinate announcements across neighborhood, volunteer, and advocacy groups with pacing that fits real community norms.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brands & community managers</h3>
              <p className="text-gray-700">
                Keep regional, interest, and loyalty groups aligned when one message needs many rooms.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-location / franchise teams</h3>
              <p className="text-gray-700">
                Push the same operational update to location groups — selected, scheduled, and trackable.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-100 border border-gray-200 rounded-xl p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Not primarily for</h3>
            <p className="text-gray-700">
              Single-inbox sellers who only need 1:1 order and support messaging — a Cloud API BSP is the better fit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            From inventory to campaign — in six moves
          </h2>
          
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Connect",
                desc: "Link the WhatsApp account that administers your groups."
              },
              {
                num: "2",
                title: "Inventory",
                desc: "Import the groups (and Community announcement groups if relevant)."
              },
              {
                num: "3",
                title: "Segment",
                desc: "Build collections by client, audience, or region."
              },
              {
                num: "4",
                title: "Compose",
                desc: "Draft text + media; optional variants per collection."
              },
              {
                num: "5",
                title: "Pace",
                desc: "Set delivery rhythm; avoid instant mass blasts."
              },
              {
                num: "6",
                title: "Monitor",
                desc: "Watch delivery and account-health signals; pause if needed."
              }
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Quick answers
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is WaTask the same as WhatsApp Business API marketing tools?
              </h3>
              <p className="text-gray-700">
                No. Those platforms focus on 1:1 Cloud API templates and inboxes. WaTask focuses on campaigns into many existing groups.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can Meta's Groups API replace this?
              </h3>
              <p className="text-gray-700">
                Not for large existing groups. Official Groups API groups are capped at 8 participants and are invite-only / API-created.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you replace Chrome group-sender extensions?
              </h3>
              <p className="text-gray-700">
                WaTask is the productized alternative: collections, pacing, and team workflows instead of raw multi-select blasts.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/guides"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              See all guides →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Run your next update across the whole group network
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Start a free trial, organize your collections, and send your first multi-group campaign with pacing turned on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/register"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Start free trial
            </Link>
            <a 
              href="https://myconnexa.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 font-medium text-sm"
            >
              Talk to us about Connexa →
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            WaTask — WhatsApp group management and multi-group campaigns at scale. Part of the Connexa product family.
          </p>
        </div>
      </section>
    </div>
  );
}
