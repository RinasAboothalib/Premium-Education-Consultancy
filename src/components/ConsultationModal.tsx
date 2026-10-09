import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Calendar, User, Mail, Phone, Globe, BookOpen, Clock } from 'lucide-react';
import { BRAND_INFO, SERVICES, DESTINATIONS, OFFICES } from '../data/consultancyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultDestination?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  defaultDestination
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: defaultService || SERVICES[0].title,
    destination: defaultDestination || DESTINATIONS[0].country,
    mode: 'In-Person (Manaachenai HQ)',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Please provide a valid phone or WhatsApp number';
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
    setLoading(true);

    // Simulate reliable consultation request dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Premium Education Consultancy,\n\nI would like to book a consultation:\n- Name: ${formData.fullName || 'Prospective Student'}\n- Service: ${formData.service}\n- Destination: ${formData.destination}\n- Mode: ${formData.mode}\n- Contact: ${formData.phone}`
    );
    window.open(`https://wa.me/94707818299?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-[#0B2545] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>Personalized Advisory Session</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Book a Consultation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Connect with our licensed education and visa specialists in Sri Lanka.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Consultation Request Received</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our senior counselor will review your request and contact you via phone or WhatsApp at <strong className="text-slate-900">{formData.phone}</strong> within 24 business hours.
              </p>

              {/* Fast WhatsApp Handover */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat Directly on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Tharshan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.fullName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-[#1D4ED8] focus:ring-blue-100'
                      } focus:outline-none focus:ring-2 transition-all`}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +94 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-[#1D4ED8] focus:ring-blue-100'
                      } focus:outline-none focus:ring-2 transition-all`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                      errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:border-[#1D4ED8] focus:ring-blue-100'
                    } focus:outline-none focus:ring-2 transition-all`}
                  />
                </div>
                {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
              </div>

              {/* Service & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Required
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 absolute left-3 top-3 text-slate-400 pointer-events-none" />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all text-slate-800"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Destination
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 absolute left-3 top-3 text-slate-400 pointer-events-none" />
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all text-slate-800"
                    >
                      <option value="United Kingdom">United Kingdom (UK)</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Europe (Germany & Ireland)">Europe (Germany & Ireland)</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="United States">United States (USA)</option>
                      <option value="Language Only (IELTS)">Language / IELTS Academy Only</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Consultation Mode */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'In-Person (Manaachenai HQ)',
                    'In-Person (Kalmunai Branch)',
                    'Virtual (WhatsApp / Zoom)'
                  ].map((modeOption) => (
                    <button
                      key={modeOption}
                      type="button"
                      onClick={() => setFormData({ ...formData, mode: modeOption })}
                      className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all ${
                        formData.mode === modeOption
                          ? 'border-[#0B2545] bg-[#0B2545] text-white shadow-xs'
                          : 'border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100'
                      }`}
                    >
                      {modeOption}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Brief */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Academic Status or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Completed G.C.E. A/L in 2024, looking for September intake, or prior Canada refusal review."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all text-slate-800"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 py-2 px-3 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Or send directly via WhatsApp
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-sm disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Confirm Consultation'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
