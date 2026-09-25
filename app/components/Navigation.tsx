'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0E1A]/95 backdrop-blur-sm border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
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
              <a 
              href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber text-bg-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-cyber-hover transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)] text-sm"
            >
              Start on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <a 
              href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber text-bg-primary px-4 py-2 rounded-lg font-semibold hover:bg-cyber-hover transition-all text-sm whitespace-nowrap"
              onClick={closeMobileMenu}
            >
              Chat
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-text-primary p-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E1A]/95 backdrop-blur-sm border-t border-[var(--border-subtle)]">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/whatsapp-group-management-tool"
              className="block text-text-secondary hover:text-text-primary transition-colors text-base font-medium py-2"
              onClick={closeMobileMenu}
            >
              Product
            </Link>
            <Link
              href="/guides"
              className="block text-text-secondary hover:text-text-primary transition-colors text-base font-medium py-2"
              onClick={closeMobileMenu}
            >
              Guides
            </Link>
            <a
              href="https://wa.me/306981337327?text=Hi%2C%20I%27d%20like%20to%20try%20WaTask"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-cyber text-bg-primary px-6 py-3 rounded-lg font-semibold hover:bg-cyber-hover transition-all text-center shadow-[0_0_20px_rgba(0,255,148,0.3)]"
              onClick={closeMobileMenu}
            >
              Start on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
