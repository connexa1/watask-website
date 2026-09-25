'use client';

import { useEffect } from 'react';
import { GA_ID } from '@/lib/analytics';

export default function WhatsAppTracker() {
  useEffect(() => {
    if (!GA_ID || typeof window === 'undefined' || !window.gtag) {
      return;
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="https://wa.me/"]');
      
      if (link instanceof HTMLAnchorElement) {
        window.gtag('event', 'whatsapp_click', {
          link_url: link.href,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
