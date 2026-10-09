import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building, 
  Award, 
  ShieldCheck, 
  FileCheck, 
  Users, 
  BookOpen, 
  TrendingUp, 
  ChevronRight, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { PageRoute, ServiceItem } from '../types';
import { SERVICES } from '../data/consultancyData';

interface ServicesPageProps {
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenConsultationWithService: (serviceTitle: string) => void;
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  GraduationCap,
  Building,
  Award,
  ShieldCheck,
  FileCheck,
  Users,
  BookOpen,
  TrendingUp
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultationWithService
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Admissions', 'Visa', 'Training', 'Career'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl text-left space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-lg">
            <span>Specialized Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Consultancy &amp; Support Services
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Every step of your overseas education and visa process managed with professional care, transparent advice, and thorough documentation.
          </p>
        </div>

        {/* Interactive Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#0B2545] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {category === 'All' ? 'All 8 Services' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => {
            const IconComp = SERVICE_ICONS[service.iconName] || GraduationCap;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center group-hover:bg-[#0B2545] group-hover:text-amber-400 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B2545] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate('service-detail', service.slug)}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#0B2545] py-2 cursor-pointer"
                  >
                    <span>View Full Procedure &amp; FAQs</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenConsultationWithService(service.title)}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#1D4ED8] rounded-xl transition-colors cursor-pointer"
                  >
                    Book for This Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice on Visa Guarantees */}
        <div className="mt-16 p-6 rounded-2xl bg-blue-50/60 border border-blue-100 text-left text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-800">Consumer Protection Advisory:</strong> All visa assistance provided by Premium Education Consultancy is strictly advisory, consultative, and administrative. We do not charge fees for visa approvals, nor do we issue guaranteed visa grants. Visa decisions are under the sole discretion of the respective high commission or immigration embassy.
        </div>
      </div>
    </div>
  );
};
