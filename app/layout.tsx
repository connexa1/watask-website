import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL('https://watask.com'),
  title: {
    default: 'Multi-Group WhatsApp Campaigns | WaTask',
    template: '%s | WaTask',
  },
  description: 'Send one campaign into many existing WhatsApp groups. Organize collections, pace safely, and run multi-group ops — built for agencies, brands, and community teams.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://watask.com',
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
        <nav className="sticky top-0 z-50 glass-panel border-b border-[var(--border-subtle)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center">
                  <span className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                    WA<span className="text-cyber">TASK</span>
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="/whatsapp-group-management-tool" 
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
                >
                  Product
                </Link>
                <Link 
                  href="/guides" 
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
                >
                  Guides
                </Link>
                <Link 
                  href="/register" 
                  className="bg-cyber text-bg-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-cyber-hover transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)] text-sm"
                >
                  Start Free Trial
                </Link>
              </div>

              {/* Mobile Navigation */}
              <div className="flex md:hidden items-center space-x-3">
                <Link 
                  href="/register" 
                  className="bg-cyber text-bg-primary px-4 py-2 rounded-lg font-semibold hover:bg-cyber-hover transition-all text-sm whitespace-nowrap"
                >
                  Try Free
                </Link>
                <button
                  className="text-text-secondary hover:text-text-primary p-2"
                  aria-label="Menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <main>{children}</main>

        <footer className="bg-bg-secondary border-t border-[var(--border-subtle)] mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  WA<span className="text-cyber">TASK</span>
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  WhatsApp OS for multi-group campaigns at scale.
                </p>
                <p className="text-text-muted text-xs mt-3">
                  Part of the Connexa product family.
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
                  <li>
                    <Link href="/register" className="text-text-secondary hover:text-cyber transition-colors">
                      Start free trial
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
              
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Company</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="https://myconnexa.online" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-cyber transition-colors">
                      Connexa Suite
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] text-center text-sm text-text-muted">
              <p>&copy; {new Date().getFullYear()} WaTask. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
