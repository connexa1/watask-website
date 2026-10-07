import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Advertise in WhatsApp Groups | WaTask',
  description: 'Learn to advertise in WhatsApp groups — finding groups, asking admins, writing natural posts, tracking links, and managing restrictions.',
  alternates: {
    canonical: 'https://www.watask.com/guides/advertise-in-whatsapp-groups',
  },
  openGraph: {
    title: 'How to Advertise in WhatsApp Groups | WaTask',
    description: 'Learn how to advertise products and services in WhatsApp groups — finding groups, asking admins, writing posts that feel natural, tracking links, and managing restrictions.',
    url: 'https://www.watask.com/guides/advertise-in-whatsapp-groups',
    type: 'article',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Can I advertise my business in WhatsApp groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes, but you need to follow each group\'s rules. Many groups prohibit direct advertising or limit promotional posts. Ask the group admin before posting, check pinned messages for rules, and keep promotional content helpful rather than purely commercial.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How do I find WhatsApp groups to advertise in?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Join groups organically where your target audience already gathers. Use WhatsApp group invite links shared in your industry, ask contacts for relevant group invitations, and join local business or community groups. Avoid purchasing group lists or mass-joining through scrapers.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What happens if I post ads in too many groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'WhatsApp may temporarily restrict your number if activity looks automated. Posting identical messages to many groups quickly, especially from new numbers, can trigger restrictions lasting 24-48 hours. Space posts out, vary wording, and use multiple numbers for different groups.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How should I write a promotional post for WhatsApp groups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Write posts that feel like helpful updates rather than hard sales pitches. Lead with value or a problem you solve, keep it conversational, include a specific offer or call to action, and be transparent about commercial intent. Short, authentic posts perform better than formal ad copy.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can I track which groups drive sales or clicks?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Add UTM parameters to your links (utm_source=whatsapp, utm_medium=group, utm_campaign=campaign-name, and utm_content=group-identifier). This lets you see in Google Analytics or your tracking tool which groups deliver the most engagement and conversions.'
      }
    }
  ]
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'How to Advertise in WhatsApp Groups',
  'image': 'https://www.watask.com/opengraph-image',
  'datePublished': '2026-10-07',
  'dateModified': '2026-10-07',
  'author': {
    '@type': 'Organization',
    'name': 'WaTask'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'WaTask'
  },
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://www.watask.com/guides/advertise-in-whatsapp-groups'
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://www.watask.com'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Guides',
      'item': 'https://www.watask.com/guides'
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'Advertise in WhatsApp Groups',
      'item': 'https://www.watask.com/guides/advertise-in-whatsapp-groups'
    }
  ]
};

export default function AdvertiseInWhatsAppGroupsPage() {
  return (
    <div className="bg-white font-outfit">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section with Real Photos */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background overlay with real photo */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80" 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/40"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <Link href="/guides" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium mb-6 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Guides
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-outfit">
                How to Advertise in WhatsApp Groups
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 font-dm-sans">
                The practical guide to promoting products and services in WhatsApp groups — finding the right groups, crafting posts that feel like updates, and managing account health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
                <a href="#tldr" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-all backdrop-blur-sm">
                  Skip to Summary
                </a>
              </div>
            </div>
            
            {/* Hero Image - Real Photo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500 transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                  alt="Business person managing WhatsApp group advertising campaign"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Group Advertising</div>
                      <div className="text-xs text-blue-200">Reach • Engage • Convert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-8 bg-gray-50 rounded-xl p-6 border-2 border-gray-200" style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}>
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">On This Page</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#tldr" className="text-gray-700 hover:text-green-700 transition-colors">TL;DR Summary</a></li>
                <li><a href="#find-groups" className="text-gray-700 hover:text-green-700 transition-colors">Find Relevant Groups</a></li>
                <li><a href="#ask-admins" className="text-gray-700 hover:text-green-700 transition-colors">Ask Admins First</a></li>
                <li><a href="#write-posts" className="text-gray-700 hover:text-green-700 transition-colors">Write Effective Posts</a></li>
                <li><a href="#timing" className="text-gray-700 hover:text-green-700 transition-colors">Timing & Frequency</a></li>
                <li><a href="#vary-wording" className="text-gray-700 hover:text-green-700 transition-colors">Vary Your Wording</a></li>
                <li><a href="#track-links" className="text-gray-700 hover:text-green-700 transition-colors">Track With UTM Links</a></li>
                <li><a href="#pacing" className="text-gray-700 hover:text-green-700 transition-colors">Pace Your Posts</a></li>
                <li><a href="#multiple-numbers" className="text-gray-700 hover:text-green-700 transition-colors">Use Multiple Numbers</a></li>
                <li><a href="#restrictions" className="text-gray-700 hover:text-green-700 transition-colors">Handle Restrictions</a></li>
                <li><a href="#faq" className="text-gray-700 hover:text-green-700 transition-colors">FAQs</a></li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-9" style={{ scrollMarginTop: '2rem' }}>
            {/* TL;DR Box - Enhanced Tinted Highlight */}
            <div id="tldr" className="relative bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-100 border-4 border-blue-500 rounded-2xl p-8 mb-12 scroll-mt-8 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-bl-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400 rounded-tr-full opacity-10"></div>
              <div className="relative flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-outfit">TL;DR: Advertising in WhatsApp Groups That Works</h2>
                  <div className="space-y-4 text-gray-800 font-dm-sans">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-2 border-green-300">
                      <p className="font-semibold"><span className="text-green-700 text-xl">✓</span> <strong className="text-green-700">Find relevant groups:</strong> Join organically where your audience already gathers. Skip mass-joining tools.</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-300">
                      <p className="font-semibold"><span className="text-blue-700 text-xl">✓</span> <strong className="text-blue-700">Ask admins first:</strong> Message group admins privately before posting promotional content.</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-2 border-purple-300">
                      <p className="font-semibold"><span className="text-purple-700 text-xl">✓</span> <strong className="text-purple-700">Write like updates:</strong> Keep posts conversational and helpful, not hard-sell pitches.</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-2 border-yellow-300">
                      <p className="font-semibold"><span className="text-yellow-700 text-xl">✓</span> <strong className="text-yellow-700">Pace and vary:</strong> Space posts out across groups and change wording so activity looks natural.</p>
                    </div>
                    <div className="pt-4 border-t-2 border-blue-400">
                      <p className="text-lg font-bold text-gray-900">Track performance with UTM links and use multiple numbers for different groups.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Find Groups Section */}
            <section id="find-groups" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">Finding Relevant WhatsApp Groups to Join</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-dm-sans">
                The first step is joining groups where your target customers already spend time. Posting in irrelevant groups wastes effort and annoys members.
              </p>

              {/* Real Photo Feature */}
              <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                  alt="Team collaborating on business strategy"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Join Groups Organically</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Focus on quality over quantity. Better to be active in ten relevant groups than invisible in a hundred random ones.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Where to Find Groups</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Industry Contacts</h4>
                      <p className="text-gray-700 leading-relaxed">Ask colleagues, partners, and customers for invitations to relevant groups they belong to.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Community Forums</h4>
                      <p className="text-gray-700 leading-relaxed">Many online communities share WhatsApp group invite links. Look in Facebook groups, Reddit, LinkedIn, and industry forums.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Local Business Groups</h4>
                      <p className="text-gray-700 leading-relaxed">Join neighborhood, city, or regional business groups where local buyers gather.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Niche Interest Groups</h4>
                      <p className="text-gray-700 leading-relaxed">Find groups centered on hobbies, professions, or interests aligned with what you sell.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-gray-800 leading-relaxed"><strong>Avoid mass-joining tools or purchased group lists.</strong> WhatsApp limits how many groups you can join in a short window, and purchased lists often contain inactive or irrelevant groups.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Ask Admins Section */}
            <section id="ask-admins" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">Ask Group Admins Before Posting Ads</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-dm-sans">
                Most WhatsApp groups have rules about promotional content. Some allow it with permission, others prohibit it entirely. Always check before posting.
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-yellow-500 rounded-2xl p-8 mb-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Ask Permission</h3>
                <div className="space-y-4">
                  <div className="bg-white border-2 border-yellow-300 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                      <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-outfit font-bold text-lg">1</span> Check Pinned Messages
                    </h4>
                    <p className="text-gray-700 leading-relaxed">Most groups pin their rules at the top of the chat. Look for guidelines about promotional posts.</p>
                  </div>
                  <div className="bg-white border-2 border-yellow-300 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                      <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-outfit font-bold text-lg">2</span> Message the Admin Privately
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-3">Introduce yourself, explain what you want to share, and ask if promotional posts are allowed.</p>
                    <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700 italic">
                        "Hi [Name], I'm in the [Group Name] group. I have a [product/service] that might help members with [problem]. Is it okay to share a short post about it, or would you prefer I don't? Thanks!"
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-yellow-300 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                      <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-outfit font-bold text-lg">3</span> Respect the Answer
                    </h4>
                    <p className="text-gray-700 leading-relaxed">If the admin says no or asks for changes, follow their guidance. Posting anyway gets you removed.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Write Posts Section */}
            <section id="write-posts" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">Write Posts That Feel Like Updates</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-dm-sans">
                Hard-sell pitches get ignored or reported. Conversational posts that lead with value work better.
              </p>

              {/* Real Photo - Writing Context */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-xl border-4 border-purple-500">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                    alt="Team brainstorming content strategy"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg font-bold">Craft Messages That Resonate</div>
                        <div className="text-sm text-purple-200">Be helpful first, promotional second</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Formal Ad Copy</span>
                  </h4>
                  <div className="bg-white border border-red-200 rounded-lg p-4 mb-3">
                    <p className="text-sm text-gray-700 italic">
                      "🎉 MEGA SALE ALERT 🎉<br/>
                      Get 50% OFF premium widgets!<br/>
                      Limited time offer! Click now!<br/>
                      www.example.com/sale"
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">Reads like an ad. Members scroll past.</p>
                </div>

                <div className="bg-green-50 border-2 border-green-600 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Helpful Update</span>
                  </h4>
                  <div className="bg-white border border-green-200 rounded-lg p-4 mb-3">
                    <p className="text-sm text-gray-700 italic">
                      "Hey everyone, I know some of you mentioned struggling with [problem]. We just launched a [product] that handles that — thought it might help. Happy to answer questions: [short link]"
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">Conversational and relevant. Feels like a genuine recommendation.</p>
                </div>
              </div>

              <div className="bg-white border-4 border-blue-600 rounded-2xl p-8 shadow-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Template: Promotional Post Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">Lead with a problem or insight</p>
                      <p className="text-sm text-gray-700">"I've noticed many people here asking about..."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">Mention your solution briefly</p>
                      <p className="text-sm text-gray-700">"We built [product] to solve exactly that."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">Add one specific benefit or offer</p>
                      <p className="text-sm text-gray-700">"First 20 signups get [discount/bonus]."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">Clear call to action</p>
                      <p className="text-sm text-gray-700">"Check it out here: [link]. Questions? DM me."</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-800 leading-relaxed"><strong>Keep it short.</strong> Three to five sentences work best. Long posts get skipped in fast-moving groups.</p>
              </div>
            </section>

            {/* Timing Section */}
            <section id="timing" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">Timing and Frequency</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-dm-sans">
                When you post matters as much as what you post. Groups have active hours, and posting too often risks getting you muted or removed.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Morning (8-10 AM)</h4>
                  <p className="text-sm text-gray-700">People check groups during commute or coffee. Good for time-sensitive offers.</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Evening (6-8 PM)</h4>
                  <p className="text-sm text-gray-700">Peak engagement. Groups are most active after work hours.</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Avoid Late Night</h4>
                  <p className="text-sm text-gray-700">Posts get buried overnight. Members see them hours later when the chat has moved on.</p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How Often to Post</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <p className="text-gray-700 leading-relaxed"><strong>Once per week maximum per group</strong> for promotional content. Twice per month is even better.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 text-xl font-bold">×</span>
                    <p className="text-gray-700 leading-relaxed"><strong>Never post the same offer multiple times per day.</strong> That's the fastest way to get removed.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p className="text-gray-700 leading-relaxed"><strong>Space out promotional posts with genuine participation.</strong> Answer questions, share helpful content, and engage naturally between your promotional messages.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vary Wording Section */}
            <section id="vary-wording" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">Vary Your Wording Between Groups</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-dm-sans">
                Posting identical text to many groups at once looks automated and increases restriction risk. Small wording changes make posts feel natural.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-4 border-green-600 rounded-2xl p-8 mb-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Simple Variations That Work</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
                    <h4 className="font-bold text-gray-900 mb-3">Change the opening</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• "Hey team..."</li>
                      <li>• "Quick update..."</li>
                      <li>• "Thought this might help..."</li>
                      <li>• "Sharing something useful..."</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
                    <h4 className="font-bold text-gray-900 mb-3">Reorder details</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Lead with problem vs solution</li>
                      <li>• Mention price first vs last</li>
                      <li>• Link at top vs bottom</li>
                      <li>• CTA phrasing differences</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
                    <h4 className="font-bold text-gray-900 mb-3">Adjust the tone</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Casual vs professional</li>
                      <li>• Question vs statement</li>
                      <li>• Emoji placement</li>
                      <li>• Sentence length</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
                    <h4 className="font-bold text-gray-900 mb-3">Customize to the group</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Reference group topic</li>
                      <li>• Mention local context</li>
                      <li>• Use group-specific language</li>
                      <li>• Acknowledge past discussions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-gray-800 leading-relaxed">Even minor changes help. You don't need to rewrite the entire message — adjusting the first sentence and closing is usually enough.</p>
              </div>
            </section>

            {/* Track Links Section */}
            <section id="track-links" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">Track Performance With UTM Links</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-dm-sans">
                Add UTM parameters to your links so you can measure which groups drive clicks, signups, or sales.
              </p>

              <div className="bg-white border-4 border-purple-600 rounded-2xl p-8 shadow-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">How to Structure UTM Links</h3>
                
                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 mb-6">
                  <p className="text-sm text-gray-600 mb-2 font-mono">Base URL:</p>
                  <p className="text-gray-900 font-mono text-sm mb-4">https://yoursite.com/product</p>
                  
                  <p className="text-sm text-gray-600 mb-2 font-mono">Add parameters:</p>
                  <p className="text-gray-900 font-mono text-sm break-all">
                    ?utm_source=whatsapp&utm_medium=group&utm_campaign=oct-promo&utm_content=group-name
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-purple-700">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1"><code className="text-sm bg-gray-100 px-2 py-1 rounded">utm_source=whatsapp</code></p>
                      <p className="text-sm text-gray-700">Identifies the platform</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-purple-700">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1"><code className="text-sm bg-gray-100 px-2 py-1 rounded">utm_medium=group</code></p>
                      <p className="text-sm text-gray-700">Specifies it came from a group (vs direct message)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-purple-700">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1"><code className="text-sm bg-gray-100 px-2 py-1 rounded">utm_campaign=oct-promo</code></p>
                      <p className="text-sm text-gray-700">Names your campaign or promotion</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-purple-700">4</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1"><code className="text-sm bg-gray-100 px-2 py-1 rounded">utm_content=group-name</code></p>
                      <p className="text-sm text-gray-700">Tracks individual groups (optional but helpful)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-600 rounded-xl p-6">
                <p className="text-gray-800 leading-relaxed mb-3"><strong>Check Google Analytics (or your tracking tool)</strong> to see which groups deliver the best results. Focus your effort on high-performing groups.</p>
                <p className="text-sm text-gray-700">Use a URL shortener if long links look messy, but make sure it preserves UTM parameters.</p>
              </div>
            </section>

            {/* Pacing Section */}
            <section id="pacing" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">Pace Your Posts to Avoid Looking Automated</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-dm-sans">
                Posting to many groups in quick succession can trigger WhatsApp restrictions. Spacing posts out makes activity look natural.
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-yellow-500 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recommended Pacing</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center border-2 border-yellow-300">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">30-60 seconds</h4>
                    <p className="text-sm text-gray-700">Between posts to different groups</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center border-2 border-yellow-300">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">1-2 hours</h4>
                    <p className="text-sm text-gray-700">If posting to many groups (20+) in one session</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center border-2 border-yellow-300">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Across days</h4>
                    <p className="text-sm text-gray-700">For large campaigns, split groups across multiple days</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-gray-800 leading-relaxed"><strong>Avoid posting to all groups within minutes.</strong> WhatsApp detects unusual sending patterns and may temporarily restrict your number.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Multiple Numbers Section */}
            <section id="multiple-numbers" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">Use Multiple Numbers for Different Groups</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-dm-sans">
                Distributing groups across several WhatsApp numbers reduces restriction risk and lets you post to more groups in the same timeframe.
              </p>

              {/* Real Photo - Multiple Numbers Context */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-xl border-4 border-green-500">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                    alt="Business team coordinating multi-channel campaign"
                    className="w-full h-64 md:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-900/70 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="p-8 text-white max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">Split Groups Across Numbers</h3>
                      <p className="text-lg text-green-100">Each number handles a smaller group count, making activity look normal.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-sm mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Structure Multiple Numbers</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Assign groups to each number</h4>
                      <p className="text-gray-700 leading-relaxed">Join 15-25 groups per number. More than that increases restriction risk if you post frequently.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Group by category or region</h4>
                      <p className="text-gray-700 leading-relaxed">Number A handles local groups, Number B handles industry groups, Number C handles reseller groups.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Rotate which number you use</h4>
                      <p className="text-gray-700 leading-relaxed">If you promote twice per week, use Number A on Monday and Number B on Thursday.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Age new numbers before heavy posting</h4>
                      <p className="text-gray-700 leading-relaxed">Use new numbers for normal chats for a few weeks before starting promotional campaigns.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  href="/guides/multiple-whatsapp-numbers-group-campaigns" 
                  className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold transition-colors group"
                >
                  <span>Read the full multi-number strategy guide</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* Restrictions Section */}
            <section id="restrictions" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">What to Do If Your Number Gets Restricted</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-dm-sans">
                WhatsApp may temporarily restrict numbers that post to many groups quickly or receive reports from group members.
              </p>

              <div className="bg-red-50 border-4 border-red-500 rounded-2xl p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Common Restriction Triggers</h3>
                    <ul className="space-y-2 text-gray-800">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-lg">×</span>
                        <span>Posting identical messages to many groups within minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-lg">×</span>
                        <span>Receiving multiple reports or blocks from group members</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-lg">×</span>
                        <span>New numbers with high posting volume and low normal chat activity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-lg">×</span>
                        <span>Posting too frequently to the same groups</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Steps to Take</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-blue-600">1.</span> Stop posting immediately
                    </h4>
                    <p className="text-sm text-gray-700">Pause all group campaigns from that number until the restriction lifts.</p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-blue-600">2.</span> Wait 24-48 hours
                    </h4>
                    <p className="text-sm text-gray-700">Most temporary restrictions lift automatically after a day or two.</p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-blue-600">3.</span> Use your other numbers
                    </h4>
                    <p className="text-sm text-gray-700">If you have multiple numbers, continue campaigns from unrestricted numbers at a slower pace.</p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-blue-600">4.</span> Adjust pacing when you resume
                    </h4>
                    <p className="text-sm text-gray-700">Space posts out more when the number is restored. Increase gaps between groups to one to two minutes.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  href="/guides/whatsapp-restricted-after-group-posting" 
                  className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-semibold transition-colors group"
                >
                  <span>Full guide: fixing WhatsApp restrictions</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* How WaTask Fits */}
            <section className="mb-16 bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">How WaTask Fits Into Your Workflow</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-dm-sans">
                WaTask connects your own WhatsApp numbers with a QR scan and posts into groups those numbers are already in. You compose your message once, select which groups to post into, and WaTask handles paced delivery.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-green-300 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">✓ Your numbers, your groups</h4>
                  <p className="text-sm text-gray-700">Join groups organically and connect those numbers to WaTask.</p>
                </div>
                <div className="bg-white border border-green-300 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">✓ Built-in pacing</h4>
                  <p className="text-sm text-gray-700">Posts space out automatically to reduce restriction risk.</p>
                </div>
                <div className="bg-white border border-green-300 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">✓ Multi-number support</h4>
                  <p className="text-sm text-gray-700">Connect several numbers and distribute groups across them.</p>
                </div>
                <div className="bg-white border border-green-300 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">✓ Campaign tracking</h4>
                  <p className="text-sm text-gray-700">See delivery status and manage campaigns from one dashboard.</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-outfit">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <details className="group bg-white border-2 border-gray-200 hover:border-green-600 rounded-xl p-6 transition-colors">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between text-lg">
                    <span>Can I advertise my business in WhatsApp groups?</span>
                    <svg className="w-5 h-5 text-green-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                    Yes, but you need to follow each group's rules. Many groups prohibit direct advertising or limit promotional posts. Ask the group admin before posting, check pinned messages for rules, and keep promotional content helpful rather than purely commercial.
                  </p>
                </details>

                <details className="group bg-white border-2 border-gray-200 hover:border-green-600 rounded-xl p-6 transition-colors">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between text-lg">
                    <span>How do I find WhatsApp groups to advertise in?</span>
                    <svg className="w-5 h-5 text-green-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                    Join groups organically where your target audience already gathers. Use WhatsApp group invite links shared in your industry, ask contacts for relevant group invitations, and join local business or community groups. Avoid purchasing group lists or mass-joining through scrapers.
                  </p>
                </details>

                <details className="group bg-white border-2 border-gray-200 hover:border-green-600 rounded-xl p-6 transition-colors">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between text-lg">
                    <span>What happens if I post ads in too many groups?</span>
                    <svg className="w-5 h-5 text-green-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                    WhatsApp may temporarily restrict your number if activity looks automated. Posting identical messages to many groups quickly, especially from new numbers, can trigger restrictions lasting 24-48 hours. Space posts out, vary wording, and use multiple numbers for different groups.
                  </p>
                </details>

                <details className="group bg-white border-2 border-gray-200 hover:border-green-600 rounded-xl p-6 transition-colors">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between text-lg">
                    <span>How should I write a promotional post for WhatsApp groups?</span>
                    <svg className="w-5 h-5 text-green-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                    Write posts that feel like helpful updates rather than hard sales pitches. Lead with value or a problem you solve, keep it conversational, include a specific offer or call to action, and be transparent about commercial intent. Short, authentic posts perform better than formal ad copy.
                  </p>
                </details>

                <details className="group bg-white border-2 border-gray-200 hover:border-green-600 rounded-xl p-6 transition-colors">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between text-lg">
                    <span>Can I track which groups drive sales or clicks?</span>
                    <svg className="w-5 h-5 text-green-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                    Yes. Add UTM parameters to your links (utm_source=whatsapp, utm_medium=group, utm_campaign=campaign-name, and utm_content=group-identifier). This lets you see in Google Analytics or your tracking tool which groups deliver the most engagement and conversions.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Guides */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-green-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link 
                  href="/guides/send-bulk-messages-to-multiple-whatsapp-groups" 
                  className="flex items-center gap-4 p-5 bg-white border-2 border-green-200 hover:border-green-600 rounded-xl transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 group-hover:text-green-700 mb-1">Multi-Group Messaging</div>
                    <p className="text-xs text-gray-600">Post to many groups at once</p>
                  </div>
                  <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/guides/safer-multi-group-whatsapp-campaigns" 
                  className="flex items-center gap-4 p-5 bg-white border-2 border-green-200 hover:border-green-600 rounded-xl transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 group-hover:text-green-700 mb-1">Campaign Best Practices</div>
                    <p className="text-xs text-gray-600">Pacing, consent, account health</p>
                  </div>
                  <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/guides/whatsapp-restricted-after-group-posting" 
                  className="flex items-center gap-4 p-5 bg-white border-2 border-green-200 hover:border-green-600 rounded-xl transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 group-hover:text-green-700 mb-1">Fix Restrictions</div>
                    <p className="text-xs text-gray-600">What to do if your number is flagged</p>
                  </div>
                  <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/guides/automate-whatsapp-group-messages" 
                  className="flex items-center gap-4 p-5 bg-white border-2 border-green-200 hover:border-green-600 rounded-xl transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 group-hover:text-green-700 mb-1">Automate Group Messages</div>
                    <p className="text-xs text-gray-600">Scheduling, batching, and automation</p>
                  </div>
                  <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/use-cases/resellers-whatsapp-groups" 
                  className="flex items-center gap-4 p-5 bg-white border-2 border-green-200 hover:border-green-600 rounded-xl transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 group-hover:text-green-700 mb-1">Resellers Use Case</div>
                    <p className="text-xs text-gray-600">Post deals across groups</p>
                  </div>
                  <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/use-cases/event-promoters-whatsapp-groups" 
                  className="flex items-center gap-4 p-5 bg-white border-2 border-green-200 hover:border-green-600 rounded-xl transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 group-hover:text-green-700 mb-1">Event Promoters Use Case</div>
                    <p className="text-xs text-gray-600">Promote events in groups</p>
                  </div>
                  <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 font-outfit">
            Ready to Advertise Across WhatsApp Groups?
          </h2>
          <p className="text-xl text-green-50 mb-10 leading-relaxed">
            Try WaTask free for 7 days. No credit card required.
          </p>
          <Link 
            href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask"
            className="inline-flex items-center justify-center px-10 py-5 bg-white hover:bg-gray-100 text-green-700 font-bold rounded-2xl transition-all shadow-2xl hover:shadow-3xl text-lg"
          >
            Start on WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}
