import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Start Free Trial | WaTask',
  description: 'Start a 7-day WaTask free trial — no credit card. Connect your groups, build collections, and send your first multi-group WhatsApp campaign.',
  alternates: {
    canonical: 'https://watask.com/register',
  },
  openGraph: {
    title: 'Start Free Trial | WaTask',
    description: 'Start a 7-day WaTask free trial — no credit card. Connect your groups, build collections, and send your first multi-group WhatsApp campaign.',
    url: 'https://watask.com/register',
  },
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Start your free trial
          </h1>
          <p className="text-xl text-gray-600">
            7 days. No credit card. Get to your first paced multi-group send.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What you'll set up first
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "Connect the account that administers your groups",
                },
                {
                  num: "2",
                  title: "Import and organize collections",
                },
                {
                  num: "3",
                  title: "Compose one campaign and choose pacing",
                },
                {
                  num: "4",
                  title: "Send to a small test set, then expand",
                }
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                  <p className="text-gray-700 pt-1">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">What you get</h3>
            <ul className="space-y-3">
              {[
                "Multi-group campaign management",
                "Group organization & collections",
                "Safe pacing and delivery controls",
                "Team collaboration features"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <a 
              href="https://my.watask.com" 
              className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-700 inline-block text-lg transition-colors"
            >
              Continue to WaTask
            </a>
            <p className="text-sm text-gray-500 mt-4">
              7-day free trial · No credit card required
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              Prefer a walkthrough?
            </p>
            <a 
              href="https://myconnexa.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Book a Connexa demo →
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Built for agencies, community teams, and brands who already run WhatsApp group networks.
          </p>
        </div>
      </div>
    </div>
  );
}
