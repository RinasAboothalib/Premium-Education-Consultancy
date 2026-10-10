import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { ContactPage } from './pages/ContactPage';

function parseRouteFromLocation(): { route: PageRoute; slug?: string } {
  const path = window.location.pathname;
  if (path === '/' || path === '') return { route: 'home' };
  if (path.startsWith('/about')) return { route: 'about' };
  if (path.startsWith('/services/') || path.startsWith('/service/')) {
    const parts = path.split('/');
    const slug = parts[2];
    return { route: 'service-detail', slug };
  }
  if (path === '/services') return { route: 'services' };
  if (path.startsWith('/destinations/') || path.startsWith('/destination/')) {
    const parts = path.split('/');
    const slug = parts[2];
    return { route: 'destinations', slug };
  }
  if (path === '/destinations') return { route: 'destinations' };
  if (path.startsWith('/success-stories')) return { route: 'success-stories' };
  if (path.startsWith('/contact')) return { route: 'contact' };
  return { route: 'home' };
}

function getPathForRoute(route: PageRoute, slug?: string): string {
  switch (route) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'services':
      return '/services';
    case 'service-detail':
      return `/services/${slug || 'overseas-education-counselling'}`;
    case 'destinations':
      return slug ? `/destinations/${slug}` : '/destinations';
    case 'success-stories':
      return '/success-stories';
    case 'contact':
      return '/contact';
    default:
      return '/';
  }
}

export default function App() {
  const [routeState, setRouteState] = useState<{ route: PageRoute; slug?: string }>(() => 
    parseRouteFromLocation()
  );
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string | undefined>();
  const [consultationDestination, setConsultationDestination] = useState<string | undefined>();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll listener for reading progress bar and back to top button
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setRouteState(parseRouteFromLocation());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    const baseTitle = 'Premium Education Consultancy';
    switch (routeState.route) {
      case 'home':
        document.title = `${baseTitle} | Overseas Education & Visa Support Sri Lanka`;
        break;
      case 'about':
        document.title = `About Us | ${baseTitle}`;
        break;
      case 'services':
        document.title = `Our Services | Admissions & Visas | ${baseTitle}`;
        break;
      case 'service-detail':
        document.title = `Service Details | ${baseTitle}`;
        break;
      case 'destinations':
        document.title = `Study Destinations | UK, Canada, Australia | ${baseTitle}`;
        break;
      case 'success-stories':
        document.title = `Verified Success Stories & Visas | ${baseTitle}`;
        break;
      case 'contact':
        document.title = `Contact Our Offices | Manaachenai & Kalmunai | ${baseTitle}`;
        break;
    }
  }, [routeState]);

  const handleNavigate = (newRoute: PageRoute, newSlug?: string) => {
    if (newRoute === routeState.route && newSlug === routeState.slug) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const newPath = getPathForRoute(newRoute, newSlug);
    window.history.pushState(null, '', newPath);
    setRouteState({ route: newRoute, slug: newSlug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceTitle?: string, destination?: string) => {
    setConsultationService(serviceTitle);
    setConsultationDestination(destination);
    setIsConsultationOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate unique page transition key
  const pageKey = `${routeState.route}-${routeState.slug || ''}`;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-900 relative">
      {/* Scroll Progress Bar at very top of screen */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-gradient-to-r from-[#0D3559] via-[#1D4ED8] to-[#F59E0B] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Navigation Bar */}
      <Navbar
        currentRoute={routeState.route}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area with Motion Page Transition Flow */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageKey}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {routeState.route === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenConsultation={() => handleOpenConsultation()}
              />
            )}

            {routeState.route === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => handleOpenConsultation()}
              />
            )}

            {routeState.route === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onOpenConsultationWithService={(svc) => handleOpenConsultation(svc)}
              />
            )}

            {routeState.route === 'service-detail' && (
              <ServiceDetailPage
                slug={routeState.slug}
                onNavigate={handleNavigate}
                onOpenConsultationWithService={(svc) => handleOpenConsultation(svc)}
              />
            )}

            {routeState.route === 'destinations' && (
              <DestinationsPage
                initialSlug={routeState.slug}
                onNavigate={handleNavigate}
                onOpenConsultationWithDestination={(dst) => handleOpenConsultation(undefined, dst)}
              />
            )}

            {routeState.route === 'success-stories' && (
              <SuccessStoriesPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => handleOpenConsultation()}
              />
            )}

            {routeState.route === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                onOpenConsultation={() => handleOpenConsultation()}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#0D3559] hover:bg-[#1D4ED8] text-white shadow-xl hover:shadow-2xl transition-colors cursor-pointer border border-white/20 group focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Booking & Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
        defaultDestination={consultationDestination}
      />
    </div>
  );
}
