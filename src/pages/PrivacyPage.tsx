import React from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import { ShieldCheck, MessageCircle, ArrowRight, Lock, Check } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Client Confidentiality</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm">
          Last revised: 2026 · Mimi Web Developer Service
        </p>
      </div>

      <div className="rounded-3xl bg-[#0e1422] border border-slate-800 p-6 sm:p-10 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
        {/* Intro */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-['Syne']">
            1. Our Commitment to Your Privacy
          </h2>
          <p>
            At Mimi Web Developer Service, we respect the privacy of every client and visitor. This Privacy Policy details the exact nature of the information we collect when you inquire about or order web development services, how that data is strictly utilized, and how we safeguard your project credentials.
          </p>
        </section>

        {/* What Information We Collect (Section 17 specific) */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-['Syne']">
            2. Information Submitted Through Requirements Forms
          </h2>
          <p>
            When submitting a project brief or ordering a package, the information requested may include:
          </p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Name:</strong> Client or representative full name</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>WhatsApp / Phone Number:</strong> Primary channel for communications and milestone reviews</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Email Address:</strong> Optional secondary correspondence channel</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Website &amp; Business Details:</strong> Proposed site title, operational category, and trade details</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Social Media Links:</strong> Channels you request to have integrated into the layout</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Project Requirements:</strong> Specific branding preferences, pages, and technical specifications</span>
            </li>
          </ul>
        </section>

        {/* How We Use Your Information (Section 17 specific) */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-['Syne']">
            3. Purpose of Information Utilization
          </h2>
          <p>
            The collected information is utilized strictly to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <strong className="text-white block text-xs mb-1">Contact the Customer</strong>
              <p className="text-slate-400 text-xs">Direct communications regarding your brief and requirements.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <strong className="text-white block text-xs mb-1">Understand Website Requirements</strong>
              <p className="text-slate-400 text-xs">Reviewing business context to formulate appropriate architecture.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <strong className="text-white block text-xs mb-1">Prepare the Requested Website</strong>
              <p className="text-slate-400 text-xs">Engineering the pages, UI components, and domain routing.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <strong className="text-white block text-xs mb-1">Project Updates &amp; Delivery</strong>
              <p className="text-slate-400 text-xs">Sending demonstration links for client review and final launch approval.</p>
            </div>
          </div>
        </section>

        {/* No unnecessary data */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-['Syne']">
            4. No Unnecessary Data Collection
          </h2>
          <p>
            We do not sell, rent, monetize, or harvest your client details or business contacts for unrelated third-party advertising. All credentials shared for hosting, domain records, or social embeds remain strictly confidential.
          </p>
        </section>

        {/* WhatsApp Clickable Link Button (Section 17 requirement) */}
        <section className="pt-4 border-t border-slate-800/80 space-y-4">
          <h2 className="text-base font-bold text-white font-['Syne']">
            Questions Regarding Data Privacy?
          </h2>
          <p className="text-slate-300">
            If you have questions about our privacy practices, wish to update your records, or need confidential handling of enterprise assets, you may contact our privacy desk directly:
          </p>
          <div>
            <a
              href={CONFIG.WHATSAPP_ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact us on WhatsApp</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
