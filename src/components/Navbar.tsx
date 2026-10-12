import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import {
  Menu,
  X,
  MoreVertical,
  Tag,
  Users,
  ShieldCheck,
  FileText,
  Info,
  Rocket,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePageSelect = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainNavItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const moreNavItems: {
    id: PageId;
    label: string;
    description: string;
    icon: React.ReactNode;
    colorClass: string;
    badgeText?: string;
  }[] = [
    {
      id: 'coupon',
      label: 'Today’s Coupon',
      description: 'Check active discount codes from PKR 499 to PKR 2,999',
      icon: <Tag className="w-4 h-4 text-amber-400" />,
      colorClass: 'text-amber-400 hover:bg-amber-950/30',
      badgeText: 'Offer'
    },
    {
      id: 'packages',
      label: 'AI Tools & App Offer',
      description: 'Convert custom AI tools into web and mobile apps',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      colorClass: 'text-cyan-400 hover:bg-cyan-950/30',
      badgeText: 'New'
    },
    {
      id: 'community',
      label: 'Community',
      description: 'Join our business owner WhatsApp community',
      icon: <Users className="w-4 h-4 text-emerald-400" />,
      colorClass: 'text-emerald-400 hover:bg-emerald-950/30',
      badgeText: 'Network'
    },
    {
      id: 'about',
      label: 'About Us',
      description: 'Our story, client mission & technical expertise',
      icon: <Info className="w-4 h-4 text-sky-400" />,
      colorClass: 'text-slate-200 hover:bg-slate-800/60'
    },
    {
      id: 'project',
      label: 'Business Project',
      description: 'Digital concepts for eligible project clients',
      icon: <Rocket className="w-4 h-4 text-indigo-400" />,
      colorClass: 'text-indigo-400 hover:bg-indigo-950/30',
      badgeText: 'Concept'
    },
    {
      id: 'privacy',
      label: 'Privacy Policy',
      description: 'How project data and contacts are handled',
      icon: <ShieldCheck className="w-4 h-4 text-slate-400" />,
      colorClass: 'text-slate-200 hover:bg-slate-800/60'
    },
    {
      id: 'terms',
      label: 'Terms & Conditions',
      description: 'Delivery timelines, revisions & payment policies',
      icon: <FileText className="w-4 h-4 text-slate-400" />,
      colorClass: 'text-slate-200 hover:bg-slate-800/60'
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-[#0b0f17]/80 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Single clean text element wordmark */}
          <button
            onClick={() => handlePageSelect('home')}
            className="flex items-center text-left group"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-['Syne'] group-hover:text-cyan-400 transition-colors">
              Mimi Web Developer Service
            </span>
          </button>

          {/* Zone 2: Main clean navigation links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {mainNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageSelect(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* 3-Dot More Menu */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                aria-label="More pages and categories"
                className={`p-2 rounded-lg transition-colors flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800/60 ${
                  isMoreMenuOpen ? 'bg-slate-800 text-cyan-400' : ''
                }`}
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {/* 3-Dot Dropdown panel */}
              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#0f172a] border border-slate-800 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-slate-400 border-b border-slate-800/80 mb-1">
                    Additional Pages
                  </div>
                  {moreNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handlePageSelect(item.id)}
                      className={`w-full px-3 py-2.5 text-left text-xs transition-colors flex items-start gap-3 ${
                        currentPage === item.id ? 'bg-slate-800/90 text-cyan-400' : item.colorClass
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{item.label}</span>
                          {item.badgeText && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 font-medium">
                              {item.badgeText}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONFIG.WHATSAPP_ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/50 rounded-lg transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => handlePageSelect('requirements')}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-lg shadow-md shadow-cyan-900/20 transition-all flex items-center gap-1.5"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0b0f17] px-4 pt-2 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 px-3 pt-2">
            Main Menu
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageSelect(item.id)}
                className={`px-3 py-2.5 text-left text-sm font-medium rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/50'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 px-3 pt-3 border-t border-slate-800/60">
            More Categories & Pages
          </div>
          <div className="space-y-1">
            {moreNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageSelect(item.id)}
                className={`w-full px-3 py-2 text-left text-sm rounded-lg transition-colors flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-slate-800 text-cyan-400'
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badgeText && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                    {item.badgeText}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/60 flex flex-col gap-2">
            <a
              href={CONFIG.WHATSAPP_ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Quick Chat</span>
            </a>
            <button
              onClick={() => handlePageSelect('requirements')}
              className="w-full py-2.5 text-center text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg shadow"
            >
              Order Website Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
