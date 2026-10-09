import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PageRoute } from '../types';
import { BRAND_INFO, OFFICES, SERVICES, DESTINATIONS } from '../data/consultancyData';

interface ContactPageProps {
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: SERVICES[0].title,
    destination: DESTINATIONS[0].country,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Valid phone or WhatsApp number is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief inquiry message';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Premium Education Consultancy,\n\nI would like to inquire about:\n- Name: ${formData.fullName || 'Prospective Student'}\n- Service: ${formData.service}\n- Destination: ${formData.destination}\n- Message: ${formData.message || 'General Inquiry'}`
    );
    window.open(`https://wa.me/94707818299?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-lg">
            <span>Get in Touch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Contact Our Advisory Team
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Visit our offices in Manaachenai and Kalmunai, call our helplines, or submit an enquiry form. Our counselors will reach out to discuss your overseas roadmap.
          </p>
        </div>

        {/* Main Grid: Form (Left) & Office Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left mb-16">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Complete this form to receive personalized recommendations and eligibility guidelines.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Enquiry Submitted</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your enquiry regarding <strong className="text-slate-900">{formData.service}</strong> has been logged. An academic counselor will contact you via WhatsApp/Phone at <strong className="text-slate-900">{formData.phone}</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open in WhatsApp Right Away
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        service: SERVICES[0].title,
                        destination: DESTINATIONS[0].country,
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vinoth S."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.fullName ? 'border-rose-400' : 'border-slate-200 focus:border-[#1D4ED8]'
                      } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                    />
                    {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +94 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.phone ? 'border-rose-400' : 'border-slate-200 focus:border-[#1D4ED8]'
                      } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                    />
                    {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.email ? 'border-rose-400' : 'border-slate-200 focus:border-[#1D4ED8]'
                    } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Interested Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-slate-800"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-slate-800"
                    >
                      <option value="United Kingdom">United Kingdom (UK)</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Europe (Germany & Ireland)">Europe (Germany &amp; Ireland)</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Academic Background *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your educational qualifications (O/L, A/L, degree), English test status, or intended intake."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.message ? 'border-rose-400' : 'border-slate-200 focus:border-[#1D4ED8]'
                    } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-7 py-3 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-sm disabled:opacity-50 uppercase tracking-wider cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Submitting...' : 'Send Enquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Or chat instantly on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Office Directory Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-[#0B2545]">
              Office Directory &amp; Contacts
            </h3>

            {/* Offices Cards */}
            {OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    {office.isHeadquarters ? 'Headquarters' : 'Academy & Branch'}
                  </span>
                  <span className="text-[11px] text-slate-500">{office.hours}</span>
                </div>

                <h4 className="text-base font-bold text-[#0B2545] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{office.city}</span>
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {office.address}
                </p>

                <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                  <div className="text-slate-700">
                    <strong>Telephone: </strong>
                    {office.phones.map((p, pIdx) => (
                      <span key={pIdx}>
                        <a href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-blue-600 font-mono">
                          {p}
                        </a>
                        {pIdx < office.phones.length - 1 && ' / '}
                      </span>
                    ))}
                  </div>
                  <div className="text-slate-700">
                    <strong>Email: </strong>
                    <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                      {office.email}
                    </a>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href={office.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] hover:text-[#0B2545]"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}

            {/* Official Social Links & Hotlines */}
            <div className="p-6 rounded-3xl bg-[#0B2545] text-white space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Official Channels
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our verified social media page for real-time scholarship intake announcements and visa success updates:
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={BRAND_INFO.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-[#0B2545] bg-white hover:bg-amber-400 rounded-xl transition-colors"
                >
                  Facebook Page
                </a>
                <a
                  href={BRAND_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
