import React from 'react';
import { CONFIG } from '../config';
import {
  Sparkles,
  Bot,
  Globe,
  Smartphone,
  Cpu,
  FileText,
  Languages,
  Search,
  Calculator,
  ArrowRight,
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';

interface AiToolsAndAppOfferProps {
  onOrderClick?: () => void;
}

export const AiToolsAndAppOffer: React.FC<AiToolsAndAppOfferProps> = ({ onOrderClick }) => {
  const toolExamples = [
    {
      name: 'AI Image Generator',
      desc: 'Prompt-to-visual conversion engine producing custom images and digital artwork.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />
    },
    {
      name: 'AI Writing Assistant',
      desc: 'Automated copywriting assistant for marketing, blogs, social posts, and product copy.',
      icon: <FileText className="w-5 h-5 text-indigo-400" />
    },
    {
      name: 'AI Translator',
      desc: 'Context-aware multilingual translation tool with instant terminology conversion.',
      icon: <Languages className="w-5 h-5 text-sky-400" />
    },
    {
      name: 'AI SEO Assistant',
      desc: 'Keyword discovery, meta tags generator, and content optimization utility.',
      icon: <Search className="w-5 h-5 text-emerald-400" />
    },
    {
      name: 'Calculators & Utility Tools',
      desc: 'Financial, loan, pricing, BMI, unit conversion, and operational business calculators.',
      icon: <Calculator className="w-5 h-5 text-amber-400" />
    },
    {
      name: 'Other Small AI Tools & Utilities',
      desc: 'Bespoke AI-powered micro-tools, prompt utilities, and custom interactive widgets.',
      icon: <Cpu className="w-5 h-5 text-fuchsia-400" />
    }
  ];

  return (
    <section
      id="ai-tools-offer"
      className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#0e1628] to-slate-900 border-2 border-indigo-500/50 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-10 overflow-hidden"
    >
      {/* Decorative ambient glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Notice Title */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md">
            <Bot className="w-3.5 h-3.5" />
            Special Innovation Offer
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/80 text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            Website Upgrade Instructions
          </span>
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-1">
            Website Upgrade Instructions — AI Tools, App Development, and Domain Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
            AI Tools, Website, and App Development Offer
          </h2>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          You can request the development of small AI tools and convert them into standalone websites or mobile applications. Build custom tools for your audience, streamline your operations, or launch utility web apps.
        </p>
      </div>

      {/* Tool Examples Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
          <Cpu className="w-4 h-4" />
          <span>Examples of Tools Available for Development:</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolExamples.map((tool, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-indigo-500/50 transition-colors flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0 mt-0.5">
                {tool.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-['Syne']">
                  {tool.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Showcase: Two Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Pillar 1: Development Pricing */}
        <div className="rounded-2xl p-6 bg-slate-950/90 border border-indigo-500/40 space-y-4 relative flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Tool &amp; App Engineering
              </span>
              <Smartphone className="w-4 h-4 text-indigo-400" />
            </div>

            <h4 className="text-lg font-bold text-white font-['Syne']">
              Development Pricing
            </h4>

            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              PKR 20,000 – PKR 30,000
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              The development cost for converting these tools into websites or applications will range from <strong>PKR 20,000 to PKR 30,000</strong>, depending on the features, complexity, and requirements.
            </p>

            <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Responsive Web App or Mobile Application packaging</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Modern interactive UI customized to your branding</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Full functional logic and user input processing</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <a
              href={`${CONFIG.WHATSAPP_ORDER_LINK}?text=${encodeURIComponent(
                'Hello Mimi Web Developer Service, I want to inquire about the AI Tools / App Development Offer (PKR 20,000 - PKR 30,000).'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2 shadow"
            >
              <span>Inquire About Tool Development</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Pillar 2: Professional Domain Offer */}
        <div className="rounded-2xl p-6 bg-slate-950/90 border border-cyan-500/40 space-y-4 relative flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Domain &amp; DNS Integration
              </span>
              <Globe className="w-4 h-4 text-cyan-400" />
            </div>

            <h4 className="text-lg font-bold text-white font-['Syne']">
              Professional Domain Offer
            </h4>

            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              PKR 14,999 <span className="text-xs font-normal text-slate-400 font-sans">/ 1 Year</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              If you want a professional domain for your website or tool, we can arrange and connect a suitable domain for one year for <strong>PKR 14,999</strong>, subject to domain availability and the final package terms.
            </p>

            <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>1-year professional domain registration (.com, .net, etc.)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Complete SSL security certificate &amp; HTTPS encryption</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Seamless DNS zone setup &amp; live connection</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <a
              href={`${CONFIG.WHATSAPP_ORDER_LINK}?text=${encodeURIComponent(
                'Hello Mimi Web Developer Service, I want to request the 1-Year Professional Domain Offer for PKR 14,999.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 shadow"
            >
              <span>Request Professional Domain</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="rounded-2xl bg-[#090d15] border border-amber-500/40 p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2.5 text-amber-400">
          <ShieldAlert className="w-5 h-5 shrink-0" />
          <h4 className="text-base font-bold text-white font-['Syne']">
            Important Notice
          </h4>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Please clearly note that the development charges and professional domain charges are separate unless explicitly included in a package. These services are available as a special offer.
        </p>
      </div>
    </section>
  );
};
