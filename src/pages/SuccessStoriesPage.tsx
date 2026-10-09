import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Quote, 
  Calendar, 
  GraduationCap, 
  FileCheck, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import { PageRoute } from '../types';
import { TESTIMONIALS } from '../data/consultancyData';

interface SuccessStoriesPageProps {
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const [filter, setFilter] = useState<string>('All');

  const filteredStories = filter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => {
        if (filter === 'Student Visa') return t.verifiedBadge.includes('Student');
        if (filter === 'Visitor Visa') return t.verifiedBadge.includes('Visitor') || t.verifiedBadge.includes('10-Yr');
        if (filter === 'IELTS Academy') return t.verifiedBadge.includes('IELTS');
        return true;
      });

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-lg">
            <span>Verified Student Outcomes</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Success Stories &amp; Testimonials
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Real outcomes from students and families who entrusted their international study and visa aspirations to Premium Education Consultancy.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            {['All', 'Student Visa', 'Visitor Visa', 'IELTS Academy'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-[#0B2545] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{story.verifiedBadge}</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-medium">{story.year}</span>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-slate-200 absolute -top-2 -left-2 -z-0 opacity-80" />
                  <p className="relative z-10 text-sm text-slate-700 leading-relaxed italic pt-2">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#0B2545]">{story.studentName}</h4>
                  <p className="text-xs text-slate-600 font-medium">{story.universityOrVisa}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{story.course} · {story.destination}</p>
                </div>

                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold text-sm font-mono">
                  {story.studentName[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Case Study Feature Box */}
        <div className="bg-[#0B2545] text-white p-8 sm:p-12 rounded-3xl shadow-xl text-left mb-16 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Refusal Diagnosis &amp; Strategic Success</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Overcoming Previous Visa Refusals
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            A visa refusal does not mean your international aspirations are over. Our team reviews refusal letters, pinpoints procedural or documentary gaps, restructures financial affidavits, and presents a comprehensive factual representation to the visa authorities.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-xs font-bold text-[#0B2545] bg-[#F59E0B] hover:bg-amber-400 rounded-xl transition-colors uppercase tracking-wider shadow-md cursor-pointer"
            >
              Request Visa File Assessment
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors"
            >
              Contact Our Documentation Office
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
