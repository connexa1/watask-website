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
      <body>
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
                  WaTask
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/whatsapp-group-management-tool" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                  Product
                </Link>
                <Link href="/guides" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                  Guides
                </Link>
                <Link 
                  href="/register" 
                  className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 font-semibold text-sm transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main>{children}</main>

        <footer className="bg-gray-50 border-t border-gray-200 mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">WaTask</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  WhatsApp OS for multi-group campaigns at scale.
                </p>
                <p className="text-gray-500 text-xs mt-3">
                  Part of the Connexa product family.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Product</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link href="/whatsapp-group-management-tool" className="text-gray-600 hover:text-gray-900">
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="text-gray-600 hover:text-gray-900">
                      Start free trial
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Guides</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link href="/guides" className="text-gray-600 hover:text-gray-900">
                      All guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" className="text-gray-600 hover:text-gray-900">
                      Multi-group guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/whatsapp-groups-api-limits" className="text-gray-600 hover:text-gray-900">
                      API limits explained
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="https://myconnexa.online" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                      Connexa Suite
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} WaTask. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
