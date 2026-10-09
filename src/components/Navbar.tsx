import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PageRoute } from '../types';
import { BRAND_INFO } from '../data/consultancyData';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenConsultation: () => void;
}

const NAV_ITEMS: { label: string; route: PageRoute }[] = [
  { label: 'Home', route: 'home' },
  { label: 'About Us', route: 'about' },
  { label: 'Services', route: 'services' },
  { label: 'Study Destinations', route: 'destinations' },
  { label: 'Success Stories', route: 'success-stories' },
  { label: 'Contact', route: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (route: PageRoute) => {
    setIsMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/40 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark & Official Emblem */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-xl shrink-0 cursor-pointer"
              aria-label="Go to Premium Education Consultancy homepage"
            >
              <BrandLogo variant="dark" />
            </button>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              {NAV_ITEMS.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`relative py-1 whitespace-nowrap transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-sm ${
                      isActive
                        ? 'text-[#0B2545] font-semibold'
                        : 'text-slate-600 hover:text-[#0B2545]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Active sliding indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F59E0B] rounded-full transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Quick Hotline */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${BRAND_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0B2545] py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors"
                title="Call our Sri Lanka helpline"
              >
                <Phone className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span className="tabular-nums font-mono">{BRAND_INFO.contact.primaryPhone}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white uppercase tracking-wider bg-[#0B2545] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenConsultation}
                className="text-[11px] font-bold px-3 py-1.5 bg-[#0B2545] text-white rounded-lg shadow-xs"
              >
                Book
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#0B2545] rounded-xl hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-900" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-slate-950/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <BrandLogo variant="dark" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="py-6 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl transition-colors text-left ${
                      isActive
                        ? 'bg-blue-50 text-[#0B2545]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Drawer Actions */}
            <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#0B2545] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={BRAND_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="text-center pt-2 text-xs text-slate-500">
                <span>Direct Hotline: </span>
                <a
                  href={`tel:${BRAND_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                  className="font-semibold text-slate-800"
                >
                  {BRAND_INFO.contact.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
