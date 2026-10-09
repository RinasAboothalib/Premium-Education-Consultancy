import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO, SERVICES, DESTINATIONS, OFFICES } from '../data/consultancyData';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="bg-[#0B2545] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo variant="light" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering students and families across Sri Lanka with transparent overseas education guidance, university admissions, scholarship assistance, and visa preparation.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-2">
                Leadership
              </span>
              <p className="text-xs text-slate-300">
                Founded by <strong className="text-white">Mr. Vinayakamoorthi Livisanan</strong> &amp; <strong className="text-white">Mrs. Pavithra Livisanan</strong> (Legal &amp; Language Specialist).
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0B2545] bg-[#F59E0B] hover:bg-amber-400 rounded-xl transition-colors cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={BRAND_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-700/50 hover:bg-emerald-900/40 rounded-xl transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('service-detail', service.slug)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-amber-400 hover:underline font-medium inline-flex items-center gap-1 pt-1"
                >
                  View All 8 Services &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Study Destinations */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Study Destinations
            </h4>
            <ul className="space-y-2.5 text-xs">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => onNavigate('destinations', dest.slug)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    Study in {dest.country}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('success-stories')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Student Visa Success Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  About Our Consultancy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Offices */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Office Locations
            </h4>
            <div className="space-y-3.5 text-xs">
              {OFFICES.map((office, idx) => (
                <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{office.city}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-2">
                    {office.address}
                  </p>
                  <div className="text-[11px] space-y-0.5">
                    {office.phones.map((phone) => (
                      <div key={phone} className="text-slate-300">
                        Tel: <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-amber-400 font-mono">{phone}</a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Legal */}
        <div className="py-6 border-b border-slate-800/80 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-300">Advisory &amp; Visa Compliance Notice:</strong> Premium Education Consultancy provides professional educational counselling, university application processing, document review, and visa application support. All visa decisions, granted durations, and entry conditions are determined exclusively by the sovereign immigration authorities of the respective destination countries (such as UKVI, IRCC, and Australian Department of Home Affairs). We adhere strictly to ethical practice and do not issue guarantees of visa outcomes.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved. Registered in Sri Lanka.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={BRAND_INFO.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Official Facebook
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-amber-400 transition-colors"
            >
              Contact Directory
            </button>
            <span className="text-slate-600">·</span>
            <span>Inter Typography Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
