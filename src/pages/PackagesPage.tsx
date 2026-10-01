import React from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import { PACKAGES, DOMAIN_INFO, CHANGES_POLICY } from '../data/packages';
import {
  Check,
  Globe,
  Mic,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  HelpCircle,
  Sparkles,
  Layers,
  Zap,
  Info
} from 'lucide-react';

interface PackagesPageProps {
  onNavigate: (page: PageId, selectedPkg?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Full Package Specifications</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Website Development Packages &amp; Pricing
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Transparent, fixed-fee packages designed for every operational scale. No hidden surcharges, no unexpected maintenance traps.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* MANDATORY TOP NOTE (Section 9) */}
      {/* ========================================================================= */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-950/70 via-slate-900 to-indigo-950/70 border border-cyan-700/50 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-cyan-900/60 border border-cyan-700/60 flex items-center justify-center text-cyan-400 shrink-0">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block">
              Quick Voice Assistance
            </span>
            <p className="text-slate-200 text-xs sm:text-sm font-medium">
              If you have difficulty filling the requirements form, simply contact us on WhatsApp and send your details by voice message.
            </p>
          </div>
        </div>

        <a
          href={CONFIG.WHATSAPP_ORDER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 transition-colors flex items-center gap-2"
        >
          <span>Send Voice Message</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* ========================================================================= */}
      {/* FULL PACKAGE CARDS (Section 6) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PACKAGES.map((pkg) => {
          const isBusiness = pkg.id === 'business';
          const isPremium = pkg.id === 'premium';

          return (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                isBusiness
                  ? 'bg-slate-900/90 border-2 border-indigo-500/80 shadow-2xl shadow-indigo-950/40 relative'
                  : isPremium
                  ? 'bg-slate-900/90 border-2 border-cyan-500/80 shadow-2xl shadow-cyan-950/40 relative'
                  : 'bg-[#0e1422] border border-slate-800'
              }`}
            >
              {pkg.badge && (
                <div
                  className={`inline-block w-fit px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase mb-3 ${
                    isBusiness
                      ? 'bg-indigo-600 text-white'
                      : isPremium
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white'
                      : 'bg-slate-800 text-slate-200'
                  }`}
                >
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-2xl font-bold text-white font-['Syne']">
                      {pkg.name}
                    </h2>
                    <div className="text-right">
                      {pkg.originalPrice && (
                        <span className="text-xs text-slate-400 line-through block">
                          Original: {pkg.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                        {pkg.offerPrice}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Important Specific Note for Starter Package as requested */}
                {pkg.id === 'starter' && (
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200 flex items-start gap-2">
                    <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Important note:</strong> The website may start as a basic package, but the final design should look modern and advanced.
                    </span>
                  </div>
                )}

                {/* Full Features List */}
                <div className="space-y-3 pt-2 border-t border-slate-800/80">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Package Inclusions &amp; Specifications:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {pkg.fullFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metadata specifications */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Domain Connection</span>
                    <span className="font-semibold text-white mt-0.5 block">{pkg.domainConnectionFee}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Major Changes (Post-Launch)</span>
                    <span className="font-semibold text-white mt-0.5 block">{pkg.majorChangeFee}</span>
                  </div>
                </div>
              </div>

              {/* Order button */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onNavigate('requirements', pkg.id)}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Select &amp; Order This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`${CONFIG.WHATSAPP_ORDER_LINK}?text=${encodeURIComponent(
                    `Hello Mimi Web Developer Service, I am interested in the ${pkg.name} (${pkg.offerPrice}). Can we discuss the requirements?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/60 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 7. DOMAIN SECTION (Section 7) */}
      {/* ========================================================================= */}
      <section className="rounded-3xl bg-[#0e1422] border border-slate-800 p-6 sm:p-10 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>Domain Names &amp; Custom Hosting</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
            Custom Domain Connection &amp; Registration
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
            {DOMAIN_INFO.description} Whether you already hold a domain or need us to register a professional one on your behalf, we configure all DNS records, SSL certificates, and cloud routing seamlessly.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1: Personal Domain Connection Charges */}
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
            <h3 className="text-base font-bold text-white font-['Syne'] flex items-center justify-between">
              <span>Personal Domain Connection Charges</span>
              <span className="text-xs text-slate-400 font-normal">If you already own one</span>
            </h3>
            <p className="text-xs text-slate-400">
              If you already own a personal domain, we can connect your website to it for the following one-time configuration charge:
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-300">Starter Package</span>
                <span className="font-bold text-white font-mono tabular-nums">{DOMAIN_INFO.connectionCharges.starter}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-300">Business Package</span>
                <span className="font-bold text-white font-mono tabular-nums">{DOMAIN_INFO.connectionCharges.business}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-300">Advance Package</span>
                <span className="font-bold text-white font-mono tabular-nums">{DOMAIN_INFO.connectionCharges.advance}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-300">Premium Package</span>
                <span className="font-bold text-white font-mono tabular-nums">{DOMAIN_INFO.connectionCharges.premium}</span>
              </div>
            </div>
          </div>

          {/* Box 2: 1-Year Professional Domain Through Us */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-950 border border-indigo-500/40 space-y-4">
            <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-indigo-500 text-white">
              Complete Setup Option
            </div>
            <h3 className="text-base font-bold text-white font-['Syne']">
              1-Year Professional Domain Through Us
            </h3>
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
              {DOMAIN_INFO.oneYearDomainPrice}
            </div>
            <p className="text-xs text-emerald-400 font-medium">
              ★ {DOMAIN_INFO.purchaseNote}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              We register your branded top-level domain (.com, .net, etc.), set up DNS zone files, install security SSL encryption, and connect it directly to your website.
            </p>
            <div className="pt-2">
              <a
                href={CONFIG.DOMAIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <span>Inquire About Domain Availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Explicit Domain Recommendation */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">Professional Presence Recommendation:</strong>
            {DOMAIN_INFO.recommendation}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CHANGES POLICY SECTION (Section 8) */}
      {/* ========================================================================= */}
      <section className="rounded-3xl bg-[#0e1422] border border-slate-800 p-6 sm:p-10 space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Revisions &amp; Post-Launch Updates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
            Clear Changes &amp; Modifications Policy
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
            {CHANGES_POLICY.intro}
          </p>
        </div>

        {/* Clear Charge Schedule */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHANGES_POLICY.charges.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center space-y-1"
            >
              <span className="text-xs text-slate-400 block">{item.package}</span>
              <span className="text-xl font-bold text-white font-mono tabular-nums block">
                {item.fee}
              </span>
              <span className="text-[10px] text-slate-400 block">per major change</span>
            </div>
          ))}
        </div>

        {/* Crucial clarification rule */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <p>
            {CHANGES_POLICY.clarification}
          </p>
        </div>
      </section>
    </div>
  );
};
