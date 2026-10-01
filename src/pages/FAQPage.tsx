import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS } from '../data/faqs';
import { CONFIG } from '../config';
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldQuestion
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  // Open the first two items by default
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Transparent Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Everything you need to know about our web engineering workflow, payment protection, delivery timelines, and domain connections.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = !!openItems[faq.id];
          return (
            <div
              key={faq.id}
              className={`rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-950/20'
                  : 'bg-[#0e1422] border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2 py-1 rounded border border-cyan-800/60 shrink-0">
                    Q{index + 1}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white font-['Syne']">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`p-1 rounded-lg bg-slate-800 text-slate-300 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-cyan-400 bg-cyan-950' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 mt-1">
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Card */}
      <div className="rounded-3xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-800/40 p-8 sm:p-10 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-['Syne']">
          Have an unlisted question about your project?
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          We are directly reachable on WhatsApp to review custom features, integrations, or quote assessments.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={CONFIG.WHATSAPP_ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-2 shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-3 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            View Business Hours &amp; Location
          </button>
        </div>
      </div>
    </div>
  );
};
