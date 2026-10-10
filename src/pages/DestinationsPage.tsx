import React, { useState } from 'react';
import { 
  Globe, 
  Clock, 
  Briefcase, 
  Building, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Compass,
  GraduationCap
} from 'lucide-react';
import { PageRoute, DestinationItem } from '../types';
import { DESTINATIONS } from '../data/consultancyData';

interface DestinationsPageProps {
  initialSlug?: string;
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenConsultationWithDestination: (destinationCountry: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  initialSlug,
  onNavigate,
  onOpenConsultationWithDestination
}) => {
  const [selectedDestSlug, setSelectedDestSlug] = useState<string>(
    initialSlug || DESTINATIONS[0].slug
  );

  const currentDest = DESTINATIONS.find(d => d.slug === selectedDestSlug) || DESTINATIONS[0];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-lg">
            <span>Global Study Pathways</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Study Destinations
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Explore verified requirements, intake cycles, post-study work opportunities, and tuition benchmarks across the world's most sought-after academic hubs.
          </p>
        </div>

        {/* Destination Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            {DESTINATIONS.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestSlug(dest.slug)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  selectedDestSlug === dest.slug
                    ? 'bg-[#0B2545] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {dest.country}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Destination Hero Feature */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs mb-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image banner */}
            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-[480px]">
              <img
                src={currentDest.image}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('destination')) {
                    target.src = '/images/destination_uk_campus_1791560270604.jpg';
                  }
                }}
                alt={`Campus in ${currentDest.country}`}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 lg:hidden text-white font-bold text-xl">
                {currentDest.country}
              </div>
            </div>

            {/* Information Body */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">
                    Featured Country Profile
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                    Post-Study: {currentDest.postStudyWork}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] mb-4">
                  Study in {currentDest.country}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {currentDest.overview}
                </p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                      <span>Popular Intakes</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      {currentDest.popularIntakes.join(', ')}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <DollarSign className="w-3.5 h-3.5 text-[#1D4ED8]" />
                      <span>Average Tuition Fee</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      {currentDest.averageTuition}
                    </p>
                  </div>
                </div>

                {/* Key Advantages */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-bold uppercase text-slate-800 tracking-wider">
                    Why Choose {currentDest.country}:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentDest.whyStudyThere.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => onOpenConsultationWithDestination(currentDest.country)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#1D4ED8] rounded-xl transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Apply for {currentDest.country}
                </button>

                <a
                  href={`https://wa.me/94707818299?text=${encodeURIComponent(`Hello, I would like to inquire about study options in ${currentDest.country}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  Direct Inquiry on WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown: Top Universities & Visa Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
          {/* Top Universities */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-[#1D4ED8]" />
              <h3 className="text-lg font-bold text-[#0B2545]">
                Partner &amp; Popular Universities in {currentDest.country}
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Institutions offering undergraduate, postgraduate, and professional diplomas:
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700">
              {currentDest.topUniversities.map((uni, idx) => (
                <li key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <GraduationCap className="w-4 h-4 text-[#0B2545]" />
                  <span className="font-medium">{uni}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Requirements */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#1D4ED8]" />
              <h3 className="text-lg font-bold text-[#0B2545]">
                Student Visa Compliance Criteria
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Standard visa verification and documentation benchmarks:
            </p>

            <ul className="space-y-3 text-xs text-slate-700">
              {currentDest.visaRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
