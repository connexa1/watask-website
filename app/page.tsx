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
    <div className="bg-bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-grid-pattern py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--accent-cyber)_0%,_transparent_50%)] opacity-5" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-cyber text-xs sm:text-sm font-semibold tracking-wider uppercase border border-cyber/30 px-4 py-1.5 rounded-full">
                WhatsApp OS for group networks
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight tracking-tight">
              Send one campaign into<br />many WhatsApp groups
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
              WaTask is built for teams who already run community, client, and regional groups — organize them into collections, pace delivery, and post at scale. Not another 1:1 Cloud API inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/register"
                className="bg-cyber text-bg-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyber-hover transition-all shadow-[0_0_30px_rgba(0,255,148,0.4)] hover:shadow-[0_0_40px_rgba(0,255,148,0.6)] transform hover:-translate-y-0.5"
              >
                Start free trial
              </Link>
              <Link 
                href="/guides/send-bulk-messages-to-multiple-whatsapp-groups"
                className="glass-panel text-text-primary border-cyber/50 px-8 py-4 rounded-lg text-lg font-semibold hover:border-cyber transition-all"
              >
                Read the multi-group guide
              </Link>
            </div>
            
            <p className="text-sm text-text-muted mt-4">
              7-day free trial · No credit card required
            </p>
          </div>

          {/* Visual Product Frame */}
          <div className="glass-panel rounded-2xl p-1 glow-border max-w-5xl mx-auto">
            <div className="bg-bg-secondary rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="font-semibold text-text-primary mb-2 text-sm">Collections</h3>
                  <p className="text-text-secondary text-sm">Group by client · region · topic</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="font-semibold text-text-primary mb-2 text-sm">Campaign targets</h3>
                  <p className="text-text-secondary text-sm">Multi-select · controlled send</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="font-semibold text-text-primary mb-2 text-sm">Pacing & delivery</h3>
                  <p className="text-text-secondary text-sm">Safe rhythm · status per group</p>
                </div>
              </div>
              <p className="text-center text-sm text-text-muted italic">
                One message. Many groups. Controlled send.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 sm:py-32 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6 text-center">
            Most "bulk WhatsApp" tools don't post into groups
          </h2>
          <p className="text-lg text-text-secondary text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Business Service Providers excel at template messages to opted-in contacts. That's a different job. If your work is updating <strong className="text-text-primary">existing</strong> WhatsApp groups you already administer — dozens or hundreds of them — you need a multi-group campaign layer.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl hover:border-cyber/30 transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-cyber/20 to-cyan/20 border border-cyber/30">
                <svg className="w-6 h-6 text-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-text-muted mb-2">Agencies</p>
              <p className="text-text-secondary">Client group packs</p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl hover:border-cyber/30 transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-cyber/20 to-cyan/20 border border-cyber/30">
                <svg className="w-6 h-6 text-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-text-muted mb-2">Civic organizations</p>
              <p className="text-text-secondary">Community networks</p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl hover:border-cyber/30 transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-cyber/20 to-cyan/20 border border-cyber/30">
                <svg className="w-6 h-6 text-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm font-medium text-text-muted mb-2">Brands</p>
              <p className="text-text-secondary">Regional / franchise groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Your group network, in one operating view
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Connect the groups you manage. Segment them. Launch a campaign with pacing and delivery visibility — without hopping group-by-group in WhatsApp Web.
            </p>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 sm:py-32 bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 text-center">
            Built for multi-group operations
          </h2>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Multi-group campaigns
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Draft once. Select many groups. Send with control. Ideal when the same announcement, offer, or update must land inside many chats — not as separate 1:1 templates.
                </p>
              </div>
              <div className="glass-panel rounded-2xl p-8 glow-border">
                <div className="bg-bg-card rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-cyber rounded-full animate-pulse"></div>
                    <p className="text-sm font-medium text-text-primary">Campaign ready</p>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">Target: 47 groups · Enterprise tier</p>
                  <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                    <div className="h-full bg-cyber w-2/3"></div>
                  </div>
                  <p className="text-text-muted text-xs mt-2">31 sent · 16 queued</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="glass-panel rounded-2xl p-8">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-bg-card rounded-lg">
                      <span className="text-text-secondary text-sm">Enterprise clients</span>
                      <span className="text-cyber text-sm font-medium">12 groups</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-bg-card rounded-lg">
                      <span className="text-text-secondary text-sm">Regional leads</span>
                      <span className="text-cyber text-sm font-medium">8 groups</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-bg-card rounded-lg">
                      <span className="text-text-secondary text-sm">Community ops</span>
                      <span className="text-cyber text-sm font-medium">27 groups</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Collections & segmentation
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Organize groups into collections by client, region, audience type, or campaign. Target the right segment without manually filtering hundreds of chats.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Pacing & account health
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Built-in send controls help you pace messages safely, maintain account standing, and avoid looking spammy. Monitor delivery status per group in real time.
                </p>
              </div>
              <div className="glass-panel rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyber/10 border border-cyber/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-text-primary text-sm font-medium">Safe send rate</p>
                      <p className="text-text-muted text-xs">3 groups/minute</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-text-primary text-sm font-medium">Account health</p>
                      <p className="text-text-muted text-xs">Excellent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Ready to run multi-group campaigns?
          </h2>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Start your free trial today. No credit card. Connect your groups and launch your first controlled send.
          </p>
          <Link 
            href="/register"
            className="bg-cyber text-bg-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyber-hover transition-all shadow-[0_0_30px_rgba(0,255,148,0.4)] hover:shadow-[0_0_40px_rgba(0,255,148,0.6)] inline-block transform hover:-translate-y-0.5"
          >
            Start free trial
          </Link>
        </div>
      </section>
    </div>
  );
}
