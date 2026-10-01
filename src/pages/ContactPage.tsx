import React from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import {
  MessageCircle,
  Send,
  Mail,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
          <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Direct Service Communication</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Contact Mimi Web Developer Service
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Reach out for project consultations, package queries, or custom development requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Contact Channels */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl bg-[#0e1422] border border-slate-800 p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white font-['Syne']">
              Official Communication Channels
            </h2>

            {/* Channel 1: WhatsApp */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-emerald-900/40 hover:border-emerald-500/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">WhatsApp Business</h3>
                  <p className="text-xs text-slate-400">Instant project chat, voice notes &amp; requirements</p>
                </div>
              </div>
              <a
                href={CONFIG.WHATSAPP_ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>Open Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Channel 2: Telegram */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-sky-900/40 hover:border-sky-500/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-700/60 flex items-center justify-center text-sky-400 shrink-0">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Telegram</h3>
                  <p className="text-xs text-slate-400">Direct handle: @MirzaRehan6</p>
                </div>
              </div>
              <a
                href={CONFIG.TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-500 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Channel 3: Email */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Official Email</h3>
                  <p className="text-xs text-slate-400">{CONFIG.EMAIL_ADDRESS}</p>
                </div>
              </div>
              <a
                href={`mailto:${CONFIG.EMAIL_ADDRESS}`}
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>Send Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location Box (Section 15: Name only, no map!) */}
          <div className="rounded-3xl bg-[#0e1422] border border-slate-800 p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-['Syne']">Physical Headquarters Location</h3>
                <p className="text-xs text-slate-400">Official business registration address</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <p className="text-sm font-semibold text-white">
                {CONFIG.LOCATION_TEXT}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Serving businesses nationwide across Pakistan and international clients globally.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Business Hours & Operational Schedule (Section 15) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-[#0e1422] border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-['Syne']">Business Hours</h3>
                <p className="text-xs text-slate-400">Operational dealing timetable</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300 font-medium">Monday – Thursday</span>
                <span className="font-bold text-white font-mono tabular-nums">
                  {CONFIG.BUSINESS_HOURS.MON_THU}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300 font-medium">Friday – Saturday</span>
                <span className="font-bold text-white font-mono tabular-nums">
                  {CONFIG.BUSINESS_HOURS.FRI_SAT}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Sunday</span>
                <span className="font-bold text-rose-400 uppercase tracking-wider text-xs">
                  {CONFIG.BUSINESS_HOURS.SUN}
                </span>
              </div>
            </div>

            {/* Mandatory Exact Phrasing from Section 15 */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                Off-Hours Assistance Notice
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                “{CONFIG.BUSINESS_HOURS.NOTE}”
              </p>
            </div>

            <button
              onClick={() => onNavigate('requirements')}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 shadow"
            >
              <span>Submit Project Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
