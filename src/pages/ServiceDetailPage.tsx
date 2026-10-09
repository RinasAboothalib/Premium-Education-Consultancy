import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  FileCheck2, 
  ArrowRight, 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';
import { PageRoute, ServiceItem } from '../types';
import { SERVICES, BRAND_INFO } from '../data/consultancyData';

interface ServiceDetailPageProps {
  slug?: string;
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenConsultationWithService: (serviceTitle: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenConsultationWithService
}) => {
  // Find matching service by slug or fallback to first service
  const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation back */}
        <div className="mb-8 text-left">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0B2545] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>
        </div>

        {/* Hero Card */}
        <div className="bg-[#0B2545] text-white p-8 sm:p-12 rounded-3xl shadow-xl text-left space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <span>{service.category} Support</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {service.fullDescription}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onOpenConsultationWithService(service.title)}
              className="px-6 py-3.5 text-xs font-bold text-[#0B2545] bg-[#F59E0B] hover:bg-amber-400 rounded-xl transition-colors uppercase tracking-wider shadow-md cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation for this Service</span>
            </button>

            <a
              href={`https://wa.me/94707818299?text=${encodeURIComponent(`Hello, I want to inquire about ${service.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Content Breakdown: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Step by Step Process */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-[#0B2545]">
                Step-by-Step Workflow Process
              </h2>

              <div className="space-y-4">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-xl bg-[#0B2545] text-amber-400 font-bold font-mono text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="text-sm font-medium text-slate-800 leading-relaxed">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Advantages */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-[#0B2545]">
                Service Deliverables &amp; Benefits
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            {service.faq && service.faq.length > 0 && (
              <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#1D4ED8]" />
                  <h2 className="text-xl font-bold text-[#0B2545]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {service.faq.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                      <h4 className="text-sm font-bold text-slate-900">{faq.question}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar: Document Checklist & Quick Help */}
          <div className="lg:col-span-4 space-y-6">
            {/* Required Documents Checklist */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <FileCheck2 className="w-4 h-4 text-[#1D4ED8]" />
                <span>Document Checklist</span>
              </div>
              <p className="text-xs text-slate-500">
                Have these documents ready for your initial assessment:
              </p>

              <ul className="space-y-2.5 text-xs text-slate-600">
                {service.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-1.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Need Fast Advisory?
              </div>
              <h3 className="text-base font-bold text-white">
                Speak directly with our senior counselors in Sri Lanka.
              </h3>
              <p className="text-xs text-slate-400">
                Office Hours: Mon – Sat, 8:30 AM – 5:30 PM
              </p>
              <div className="pt-2 space-y-2 text-xs">
                <div className="text-slate-300">
                  Manaachenai HQ: <strong className="text-white font-mono">+94 70 781 8299</strong>
                </div>
                <div className="text-slate-300">
                  Kalmunai Branch: <strong className="text-white font-mono">+94 76 567 8883</strong>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultationWithService(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-[#0B2545] bg-[#F59E0B] hover:bg-amber-400 rounded-xl transition-colors cursor-pointer"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
