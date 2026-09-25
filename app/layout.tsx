import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Navigation from './components/Navigation';
import WhatsAppButton from './components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.watask.com'),
  title: {
    default: 'Multi-Group WhatsApp Campaigns | WaTask',
    template: '%s | WaTask',
  },
  description: 'Send one campaign into many existing WhatsApp groups. Organize collections, pace safely, and run multi-group ops — built for agencies, brands, and community teams.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.watask.com',
    siteName: 'WaTask',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-primary">
        <Navigation />
        <WhatsAppButton />
        
        <main>{children}</main>

        <footer className="bg-bg-secondary border-t border-[var(--border-subtle)] mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  WA<span className="text-cyber">TASK</span>
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Multi-group WhatsApp campaigns at scale.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Product</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/whatsapp-group-management-tool" className="text-text-secondary hover:text-cyber transition-colors">
                      How it works
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Guides</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/guides" className="text-text-secondary hover:text-cyber transition-colors">
                      All guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" className="text-text-secondary hover:text-cyber transition-colors">
                      Multi-group guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/whatsapp-communities-bulk-messaging" className="text-text-secondary hover:text-cyber transition-colors">
                      Communities guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/glossary" className="text-text-secondary hover:text-cyber transition-colors">
                      Glossary
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] text-center text-sm text-text-muted">
              <p>&copy; {new Date().getFullYear()} WaTask</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
