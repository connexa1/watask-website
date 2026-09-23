import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Group Management & Multi-Group Campaigns',
  description: 'Manage multiple WhatsApp groups and send campaigns at scale. The WhatsApp OS for agencies, community managers, and brands running many groups.',
  alternates: {
    canonical: 'https://watask.com',
  },
  openGraph: {
    title: 'WaTask - WhatsApp Group Management & Multi-Group Campaigns',
    description: 'Manage multiple WhatsApp groups and send campaigns at scale.',
    url: 'https://watask.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            WhatsApp Group Management at Scale
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Manage multiple WhatsApp groups and send bulk campaigns across your group network. 
            The WhatsApp OS for agencies, community managers, and brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/guides"
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Teams Managing Many WhatsApp Groups
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlike traditional WhatsApp Business API tools that focus on 1:1 messaging, 
              WaTask helps you organize and campaign across existing groups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Group Campaigns</h3>
              <p className="text-gray-600">
                Send one message to multiple WhatsApp groups at once. Perfect for agencies managing client groups or brands with community networks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Group Organization</h3>
              <p className="text-gray-600">
                Organize your WhatsApp groups into collections. Segment by client, audience, or campaign type for targeted messaging.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Paced Sending</h3>
              <p className="text-gray-600">
                Built-in pacing and delivery controls help you maintain account health while reaching many groups efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Traditional "Bulk WhatsApp" Tools Don't Work for Groups
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most WhatsApp Business platforms focus on 1:1 template messages to opted-in contacts. 
              WaTask solves the different problem: posting campaigns into many existing groups you already manage.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-200 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    WhatsApp Cloud API / BSP Tools
                  </h3>
                  <p className="text-gray-600">
                    WATI, AiSensy, Interakt, and similar platforms send template-based 1:1 messages to contact lists. 
                    They <strong>cannot</strong> post into your existing large community or marketing groups.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Meta WhatsApp Groups API
                  </h3>
                  <p className="text-gray-600">
                    The official Groups API is limited to <strong>8 participants maximum</strong> and requires invite-only setup. 
                    Not suitable for existing large groups with 50-500+ members.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-green-600">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Multi-Group Platforms (WaTask)
                  </h3>
                  <p className="text-gray-600">
                    Connect your existing groups, organize them into collections, and send one campaign across 
                    a selection of groups. Built for the real job of multi-group management.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Read the Complete Guide to Multi-Group WhatsApp Campaigns →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Manage Your WhatsApp Groups at Scale?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your free trial today. No credit card required.
          </p>
          <Link 
            href="/register"
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
