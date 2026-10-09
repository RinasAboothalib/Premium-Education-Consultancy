import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  GraduationCap, 
  Building, 
  Award, 
  ShieldCheck, 
  FileCheck, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Compass, 
  RotateCcw, 
  PlaneTakeoff, 
  Calendar, 
  Globe, 
  Quote, 
  Clock, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { PageRoute } from '../types';
import { 
  BRAND_INFO, 
  SERVICES, 
  DESTINATIONS, 
  TESTIMONIALS, 
  UNIVERSITY_PARTNERS, 
  WHY_CHOOSE_US 
} from '../data/consultancyData';

interface HomePageProps {
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenConsultation: () => void;
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  GraduationCap,
  Building,
  Award,
  ShieldCheck,
  FileCheck,
  Users,
  BookOpen,
  TrendingUp,
  Compass,
  RotateCcw,
  PlaneTakeoff
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
        {/* Subtle Brand Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#1D4ED8] bg-blue-50/80 px-3.5 py-1.5 rounded-lg border border-blue-100/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span>Your Future, Our Guidance</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">Sri Lanka</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2545] leading-[1.12] text-balance">
                Your Global Future <br />
                <span className="text-[#1D4ED8]">Starts Here.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-balance font-normal">
                Expert guidance for overseas education, university admissions, scholarships, and visa support — helping you take the next step with confidence.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white uppercase tracking-wider bg-[#0B2545] hover:bg-[#1D4ED8] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl font-bold text-[#0B2545] font-mono tabular-nums">1,000+</div>
                  <div className="text-xs text-slate-500 font-medium">Partner Universities</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0B2545] font-mono tabular-nums">700+</div>
                  <div className="text-xs text-slate-500 font-medium">Successful Admissions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1D4ED8] font-mono tabular-nums">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Transparent Guidance</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Photography Container */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="/src/assets/images/hero_international_students_1791560239292.jpg"
                  alt="International university students on campus"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/30 to-transparent pointer-events-none" />

                {/* Floating Glassmorphic Trust Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B2545] text-amber-400 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0B2545] uppercase tracking-wide">
                        Admissions Open For Upcoming Intakes
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        UK, Canada, Australia &amp; Europe Applications Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US PREVIEW (Editorial Story & Founders) */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <img
                  src="/src/assets/images/about_consultancy_counseling_1791560255172.jpg"
                  alt="Personalized university admissions counselling at Premium Education"
                  className="w-full h-[380px] object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#0B2545]/90 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg backdrop-blur-xs">
                  Manaachenai HQ &amp; Kalmunai Academy
                </div>
              </div>
            </div>

            {/* Text & Philosophy Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">
                About Premium Education Consultancy
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
                Guiding Your Journey <br />
                <span className="text-[#1D4ED8]">Beyond Borders.</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Founded by <strong>Mr. Vinayakamoorthi Livisanan</strong> and <strong>Mrs. Pavithra Livisanan</strong>, Premium Education Consultancy was established to bring ethical, transparent, and legally rigorous overseas education guidance to students across Sri Lanka.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-[#0B2545] mb-1">Authentic University Liaison</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct communication with global admissions departments ensuring prompt CAS, LOA, and CoE issuances.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-[#0B2545] mb-1">Legal &amp; Language Rigor</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spearheaded by legal background expertise and in-house IELTS test preparation in Kalmunai.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2545] hover:text-[#1D4ED8] transition-colors"
                >
                  <span>Learn More About Our Team &amp; Mission</span>
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID (8 Verified Services) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">
              Comprehensive Student Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Our Professional Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From university course selection to visa interview mastery and post-study opportunities, we provide end-to-end support for your international transition.
            </p>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const IconComp = SERVICE_ICONS[service.iconName] || GraduationCap;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Editorial Index & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center group-hover:bg-[#0B2545] group-hover:text-amber-400 transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B2545] mb-2 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('service-detail', service.slug)}
                      className="text-xs font-bold text-[#1D4ED8] group-hover:text-[#0B2545] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Service</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-[10px] uppercase font-semibold text-slate-400">
                      {service.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-sm"
            >
              <span>View Full Services Guide &amp; Checklist</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. STUDY DESTINATIONS SHOWCASE */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">
                Global Study Hubs
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
                Top Study Destinations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Discover reputable universities, upcoming intakes, post-study work regulations, and living conditions across key global nations.
              </p>
            </div>

            <button
              onClick={() => onNavigate('destinations')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2545] hover:text-[#1D4ED8] whitespace-nowrap self-start md:self-end"
            >
              <span>Compare All Destinations</span>
              <ArrowRight className="w-4 h-4 text-amber-500" />
            </button>
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((dest) => (
              <div
                key={dest.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md flex flex-col justify-end text-left h-[420px]"
              >
                {/* Background Image */}
                <img
                  src={dest.image}
                  alt={`Study in ${dest.country}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

                {/* Content Overlay */}
                <div className="relative z-10 p-6 space-y-3">
                  <div className="inline-block px-2.5 py-1 text-[11px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/30 rounded-lg">
                    {dest.postStudyWork}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {dest.country}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {dest.overview}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('destinations', dest.slug)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-slate-900 bg-white hover:bg-amber-400 rounded-xl transition-colors cursor-pointer"
                    >
                      <span>Explore {dest.country}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Trust & Verifiable Strengths) */}
      <section className="py-24 bg-[#0B2545] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Verifiable Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Guidance You Can Trust. <br />
              <span className="text-blue-300">Opportunities Without Borders.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We eliminate ambiguity through transparent counselling, rigorous file management, and honest assessment of your chances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComponent = SERVICE_ICONS[item.iconName] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/10 transition-all text-left space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. IELTS ACADEMY SPOTLIGHT */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-[#0B2545] to-blue-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-amber-400/20 text-amber-400 rounded-lg border border-amber-400/30">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Kalmunai IELTS Academy &amp; Online Classes</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Ace Your IELTS with Focused Preparation
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Supervised by Mrs. Pavithra Livisanan, our IELTS and English grammar modules provide individual speaking interview coaching, writing essay corrections, and proven band 7.0+ strategies.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => onNavigate('service-detail', 'english-language-training')}
                    className="px-5 py-2.5 text-xs font-bold text-[#0B2545] bg-[#F59E0B] hover:bg-amber-400 rounded-xl transition-colors cursor-pointer"
                  >
                    View IELTS Course Details
                  </button>
                  <a
                    href="https://wa.me/94765678883?text=Hello%20I%20would%20like%20to%20enroll%20in%20the%20IELTS%20Academy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors"
                  >
                    Inquire via Kalmunai Desk (+94 76 567 8883)
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg">
                  <img
                    src="/src/assets/images/ielts_language_academy_1791560293468.jpg"
                    alt="IELTS classroom learning at Premium Education"
                    className="w-full h-56 object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STUDENT SUCCESS STORIES & TESTIMONIALS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">
              Real Student Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Verified Success Stories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Read authentic experiences from Sri Lankan students and families who achieved their global study and visa milestones through our guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 rounded-md border border-emerald-200">
                      {t.verifiedBadge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{t.year}</span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-6">
                  <div className="font-bold text-sm text-[#0B2545]">{t.studentName}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.universityOrVisa}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.course} · {t.destination}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('success-stories')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1D4ED8] hover:text-[#0B2545] transition-colors"
            >
              <span>Read Full Visa Case Studies &amp; Success Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. PARTNER UNIVERSITIES STRIP */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Trusted Global University Network
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {UNIVERSITY_PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:border-blue-300 transition-colors"
              >
                <span>{partner.name}</span>
                <span className="text-slate-400 ml-1.5 text-[11px]">({partner.country})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CONVERSION & CONSULTATION CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B2545] via-[#0E2A47] to-[#07172B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Take Your Next Step?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your goals and explore the right opportunities for your future with personalized, honest advice.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-[#0B2545] bg-[#F59E0B] hover:bg-amber-400 rounded-xl shadow-lg transition-colors cursor-pointer uppercase tracking-wider"
            >
              Book a Consultation
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors"
            >
              Contact Our Team
            </button>
          </div>

          <div className="pt-6 text-xs text-slate-400">
            <span>Direct Manaachenai &amp; Kalmunai Hotlines: </span>
            <strong className="text-slate-200 font-mono">+94 70 781 8299</strong> / <strong className="text-slate-200 font-mono">+94 76 567 8883</strong>
          </div>
        </div>
      </section>
    </div>
  );
};
