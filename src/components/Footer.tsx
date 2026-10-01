import React from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import {
  Code2,
  Mail,
  Send,
  MessageCircle,
  MapPin,
  ShieldCheck,
  FileText,
  Tag,
  Users,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a10] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-[#0b0f17] rounded-xl flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Syne']">
                {CONFIG.BRAND_NAME}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Professional Websites for Businesses, Brands &amp; Services.
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Crafting responsive, high-converting digital storefronts and bespoke web platforms tailored to your business, brand, and target audience.
            </p>

            {/* Direct Social Triggers */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CONFIG.WHATSAPP_ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/60 hover:text-emerald-400 flex items-center justify-center text-slate-300 transition-colors"
                title="WhatsApp Direct Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={CONFIG.TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/60 hover:text-sky-400 flex items-center justify-center text-slate-300 transition-colors"
                title="Telegram Direct Contact"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${CONFIG.EMAIL_ADDRESS}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/60 hover:text-cyan-400 flex items-center justify-center text-slate-300 transition-colors"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('packages')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Packages &amp; Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Website Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('requirements')}
                  className="hover:text-cyan-400 transition-colors text-left font-medium text-slate-200"
                >
                  Submit Requirements
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Contact &amp; Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Discover & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              More Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('coupon')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 text-amber-400/90"
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>Today's Coupon Code</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('community')}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5 text-emerald-400/90"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Business Community</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('project')}
                  className="hover:text-indigo-400 transition-colors text-left flex items-center gap-1.5 text-indigo-400/90"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Business Project Info</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{CONFIG.LOCATION_TEXT}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${CONFIG.EMAIL_ADDRESS}`}
                  className="hover:text-white transition-colors"
                >
                  {CONFIG.EMAIL_ADDRESS}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={CONFIG.WHATSAPP_ORDER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Mimi Web Developer Service. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('requirements')}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Order Website
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
