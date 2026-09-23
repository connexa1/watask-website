import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL('https://watask.com'),
  title: {
    default: 'WaTask - WhatsApp Group Management & Multi-Group Campaigns',
    template: '%s | WaTask',
  },
  description: 'Manage multiple WhatsApp groups and send bulk campaigns at scale. The WhatsApp OS for agencies, community managers, and brands.',
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
        <nav className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  WATASK
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/guides" className="text-gray-700 hover:text-gray-900">
                  Guides
                </Link>
                <Link href="/whatsapp-group-management-tool" className="text-gray-700 hover:text-gray-900">
                  Features
                </Link>
                <Link 
                  href="/register" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main>{children}</main>

        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">WATASK</h3>
                <p className="text-gray-600 text-sm">
                  WhatsApp group management and multi-group campaigns at scale.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/whatsapp-group-management-tool" className="text-gray-600 hover:text-gray-900">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="text-gray-600 hover:text-gray-900">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/guides" className="text-gray-600 hover:text-gray-900">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/whatsapp-groups-api-limits" className="text-gray-600 hover:text-gray-900">
                      WhatsApp API Limits
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/whatsapp-broadcast-vs-group-vs-communities" className="text-gray-600 hover:text-gray-900">
                      Broadcast vs Groups
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://watask.com" className="text-gray-600 hover:text-gray-900">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
              <p>&copy; {new Date().getFullYear()} WaTask. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
