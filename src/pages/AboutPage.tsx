import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Scale, 
  FileText, 
  ArrowRight,
  MapPin,
  Building2,
  HeartHandshake
} from 'lucide-react';
import { PageRoute } from '../types';
import { BRAND_INFO, OFFICES } from '../data/consultancyData';
import { IMAGES } from '../assets/images';

interface AboutPageProps {
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-lg">
            <span>About Premium Education Consultancy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Guiding Your Journey <br />
            <span className="text-[#1D4ED8]">Beyond Borders.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Established to empower Sri Lankan students and families with truthful, accredited international education counseling, verified admissions, and legal documentation precision.
          </p>
        </div>
      </section>

      {/* 2. Editorial Narrative & Photo Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
              <img
                src={IMAGES.about}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== IMAGES.fallbacks.about) {
                    target.src = IMAGES.fallbacks.about;
                  }
                }}
                alt="Advisory counseling session at Premium Education"
                className="w-full h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Trust badge */}
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-[#0B2545] text-white p-5 rounded-2xl shadow-xl max-w-xs text-left border border-white/20">
              <div className="text-xs uppercase tracking-wider font-semibold text-amber-400">Our Core Creed</div>
              <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                "Honest evaluation, uncompromised student welfare, and zero misleading promises."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              Who We Are &amp; Our Commitment
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Premium Education Consultancy</strong> (operating alongside the Kalmunai IELTS Academy and Manaachenai Headquarters) was founded on a simple principle: every student deserves transparent, realistic guidance when investing their family’s savings into an international degree.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Unlike agencies that push high-commission courses regardless of student suitability, we analyze your authentic academic background, English proficiency, and financial bandwidth. We guide you toward institutions that genuinely advance your long-term career.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">100% Policy Compliance</h4>
                <p className="text-xs text-slate-600 mt-1">
                  We follow verified immigration guidelines (UKVI, IRCC, Australian Home Affairs).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Transparent Pricing</h4>
                <p className="text-xs text-slate-600 mt-1">
                  No hidden fees, no opaque promises, and clear institutional invoicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-white py-20 border-y border-slate-200 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B2545] text-amber-400 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2545]">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To provide accessible, individualized, and high-integrity consultancy services that enable aspiring Sri Lankan students to gain admission to world-class universities, access deserved scholarships, and achieve lawful international relocation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1D4ED8] text-white flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2545]">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To stand as Sri Lanka’s most trusted overseas education and immigration consultancy, recognized for uncompromising ethics, high document verification standards, and outstanding student achievement across global borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Founders & Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-left mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">
            Executive Leadership
          </span>
          <h2 className="text-3xl font-extrabold text-[#0B2545] mt-1">
            Meet the Founders
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mt-2">
            Directly guiding daily operations, admissions management, and student interview preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BRAND_INFO.founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow text-left space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0B2545] text-white flex items-center justify-center font-bold text-lg font-mono">
                  {founder.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{founder.name}</h3>
                  <div className="text-xs font-semibold text-[#1D4ED8]">{founder.role}</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {founder.bio}
              </p>

              <div className="pt-2 text-xs text-slate-500 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Leadership Profile</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Ethical Visa Code of Conduct */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#0B2545] text-white p-8 sm:p-12 rounded-3xl text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Scale className="w-4 h-4" />
            <span>Ethical Standards &amp; Consumer Protection</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Our Code of Professional Ethics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-bold text-white text-sm">1. Sovereign Authority</div>
              <p>
                We clearly advise all applicants that sovereign immigration departments retain exclusive authority over visa issuance. We never guarantee approvals.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-bold text-white text-sm">2. Truthful Documentation</div>
              <p>
                We only lodge genuine, verified academic transcripts and bank proofs. We strictly refuse fraudulent documentation or misleading representations.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-bold text-white text-sm">3. Continuous Support</div>
              <p>
                From initial transcript reviews to post-visa travel preparation and foreign exchange guidelines, we support you through every stage.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 text-xs font-bold text-[#0B2545] bg-[#F59E0B] hover:bg-amber-400 rounded-xl transition-colors uppercase tracking-wider"
            >
              Book an In-Person Consultation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-semibold text-slate-300 hover:text-white underline"
            >
              View Manaachenai &amp; Kalmunai Office Hours &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
