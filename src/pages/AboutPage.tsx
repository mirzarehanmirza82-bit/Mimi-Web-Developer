import React from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import {
  Code2,
  CheckCircle2,
  Globe,
  Users,
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const supportedBusinesses = [
    'Restaurants & Cafes',
    'Doctors & Medical Clinics',
    'Gyms & Fitness Centers',
    'Salons & Beauty Parlours',
    'Drink Corners & Juice Bars',
    'Property Dealers & Real Estate',
    'Furniture Businesses',
    'Mobile & Laptop Shops',
    'Online Stores & E-commerce',
    'Professionals & Executives',
    'Startups & Tech Agencies',
    'Local Businesses & Contractors',
    'Service Providers',
    'Commercial Brands',
    'Personal Businesses & Portfolios',
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>About Our Organization</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          About Mimi Web Developer Service
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Delivering high-caliber, tailor-made web platforms that elevate brand authority and drive verifiable business growth.
        </p>
      </div>

      {/* Main Philosophy & Core Mandate */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-['Syne']">
            Customized Web Engineering for Every Industry
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Mimi Web Developer Service provides specialized, customized website development for different businesses and services across Pakistan and worldwide.
          </p>
          {/* Mandatory exact quote from Section 16 */}
          <div className="p-4 rounded-xl bg-slate-900 border-l-4 border-cyan-500 text-slate-200 text-sm font-medium leading-relaxed">
            “Whether you need a simple website or a complete multi-page professional website, we can create a solution according to your requirements.”
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            We reject fragile, slow, bloated templates in favor of modern, mobile-first architectures optimized for high search visibility, swift load speeds, and seamless client interactions.
          </p>
        </div>

        <div className="rounded-3xl bg-[#0e1422] border border-slate-800 p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold text-white font-['Syne']">
            Our Operational Principles
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Client Review First:</strong> Inspect your completed website before finalizing payment.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Ultra-Fast Turnaround:</strong> Prepared within 1–3 days, live in 1–3 hours after payment.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Fair Revisions Policy:</strong> Routine minor text changes are included free; clear fixed fees for major structural updates.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Direct Accessible Communication:</strong> WhatsApp voice and text channels directly connect you with your build team.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Business Categories Grid (Section 16 & 25) */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-white font-['Syne']">
            Industries &amp; Businesses We Serve
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Our modular development pipeline allows us to engineer tailored interfaces for any legitimate enterprise:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {supportedBusinesses.map((item, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-center text-xs text-slate-300 font-medium hover:border-cyan-500/40 transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Client Website Community Showcase Note (Section 22) */}
      <div className="rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-cyan-950/40 border border-indigo-500/30 p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2.5 text-indigo-400">
          <Globe className="w-5 h-5" />
          <h4 className="text-base font-bold text-white font-['Syne']">
            Client Website Community Showcase
          </h4>
        </div>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          “When you order a website from us, your completed website may be displayed inside our website-development community/showcase with a link, where applicable, so visitors can view examples of websites created by us.”
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-4 pt-4">
        <button
          onClick={() => onNavigate('requirements')}
          className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all shadow-lg"
        >
          Start Your Project With Us
        </button>
      </div>
    </div>
  );
};
