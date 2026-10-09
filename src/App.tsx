import React, { useState, useEffect } from 'react';
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
  const [pageTransitioning, setPageTransitioning] = useState(false);

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

    // Trigger subtle page exit transition
    setPageTransitioning(true);

    setTimeout(() => {
      const newPath = getPathForRoute(newRoute, newSlug);
      window.history.pushState(null, '', newPath);
      setRouteState({ route: newRoute, slug: newSlug });
      window.scrollTo({ top: 0, behavior: 'instant' });
      setPageTransitioning(false);
    }, 120);
  };

  const handleOpenConsultation = (serviceTitle?: string, destination?: string) => {
    setConsultationService(serviceTitle);
    setConsultationDestination(destination);
    setIsConsultationOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-900">
      {/* Top Navigation */}
      <Navbar
        currentRoute={routeState.route}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area with Page Transition */}
      <main
        className={`flex-grow transition-all duration-200 ease-out ${
          pageTransitioning ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
        }`}
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
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

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
