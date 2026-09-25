import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Start on WhatsApp',
  description: 'Start with WaTask to run multi-group WhatsApp campaigns with pacing controls. Organize group collections, coordinate messaging, and manage campaigns. Chat on WhatsApp to begin.',
  alternates: {
    canonical: 'https://www.watask.com/register',
  },
  openGraph: {
    title: 'Start on WhatsApp | WaTask',
    description: 'Start with WaTask to run multi-group WhatsApp campaigns with pacing controls. Organize group collections, coordinate messaging, and manage campaigns. Chat on WhatsApp to begin.',
    url: 'https://www.watask.com/register',
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

export default function RegisterPage() {
  const whatsappUrl = 'https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask';

  return (
    <div className="bg-bg-primary min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Start on WhatsApp
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Chat with us on WhatsApp to get started with WaTask. We'll help you set up your multi-group campaigns.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyber text-bg-primary px-10 py-5 rounded-lg text-lg font-semibold hover:bg-cyber-hover transition-all shadow-[0_0_30px_rgba(0,255,148,0.4)] hover:shadow-[0_0_40px_rgba(0,255,148,0.6)] transform hover:-translate-y-0.5"
          >
            <svg 
              className="w-8 h-8" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] text-center">
          <p className="text-text-secondary mb-4">
            Learn more about multi-group campaigns
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/whatsapp-group-management-tool"
              className="text-cyber hover:text-cyber-hover font-medium"
            >
              How it works →
            </Link>
            <Link 
              href="/guides"
              className="text-cyber hover:text-cyber-hover font-medium"
            >
              Read guides →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
