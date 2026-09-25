import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-700 mb-8">
=======
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
>>>>>>> e25209c (fix: rebase drop fixes - cards styling, titles, link text, safety wording, og:image, 404 page)
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
<<<<<<< HEAD
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all inline-block"
=======
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
>>>>>>> e25209c (fix: rebase drop fixes - cards styling, titles, link text, safety wording, og:image, 404 page)
          >
            Go Home
          </Link>
          <Link
            href="/guides"
<<<<<<< HEAD
            className="text-green-700 border-2 border-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-block"
=======
            className="text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600/10 transition-colors"
>>>>>>> e25209c (fix: rebase drop fixes - cards styling, titles, link text, safety wording, og:image, 404 page)
          >
            Browse Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
