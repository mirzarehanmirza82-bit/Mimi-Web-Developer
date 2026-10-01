import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import { PACKAGES } from '../data/packages';
import { BUSINESS_CATEGORIES } from '../data/gallery';
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  Flame,
  Globe,
  MonitorSmartphone,
  ShieldAlert,
  Zap,
  Tag,
  Users
} from 'lucide-react';

// Hero generated images
import imgWebDev from '../assets/images/hero_web_development_1790833818545.jpg';
import imgBusinessWeb from '../assets/images/hero_business_website_1790833832733.jpg';
import imgResponsiveDevices from '../assets/images/hero_responsive_devices_1790833845528.jpg';

interface HomePageProps {
  onNavigate: (page: PageId, selectedPkg?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: 'Website Development',
      badge: 'Bespoke Architecture',
      description: 'Clean coding, rapid load speeds, custom UI, and scalable design engineered for maximum reliability.',
      image: imgWebDev,
    },
    {
      id: 2,
      title: 'Business Website',
      badge: 'High Conversion',
      description: 'Built for sales, brand reputation, lead generation, and seamless customer interaction.',
      image: imgBusinessWeb,
    },
    {
      id: 3,
      title: 'Modern Responsive Website',
      badge: 'All-Screen Adaptability',
      description: 'Fluid layout ensuring pixel-perfect clarity on iPhones, Android smartphones, tablets, and desktop displays.',
      image: imgResponsiveDevices,
    },
  ];

  // Auto carousel slide change from left to right smoothly every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-10 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Subtle Background Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack Web Development Agency</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-white font-['Syne'] leading-[1.15] text-balance">
              Build Your Professional Website With Mimi Web Developer Service
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We create modern, responsive and customized websites for businesses, brands, professionals, shops, restaurants, doctors, salons, property dealers, gyms and many other services.
            </p>

            {/* Three CTAs as required */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => onNavigate('requirements')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-950/50 transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={CONFIG.WHATSAPP_ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/60 hover:border-emerald-600/80 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Contact</span>
              </a>

              <button
                onClick={() => onNavigate('packages')}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
              >
                View Packages
              </button>
            </div>

            {/* Quiet Quick Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>Fast 1–3 Days Preparation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>Pay After Final Review</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>Free Local Domain Included</span>
              </span>
            </div>
          </div>

          {/* Right Visual Column: 3 animated visuals continuously sliding left to right */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Carousel Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 shadow-2xl shadow-cyan-950/20 group">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                        idx === activeSlide
                          ? 'opacity-100 translate-x-0 scale-100'
                          : idx < activeSlide
                          ? 'opacity-0 -translate-x-full scale-95'
                          : 'opacity-0 translate-x-full scale-95'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Measured contrast scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2">
                        <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-widest bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded">
                          {slide.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-['Syne']">
                          {slide.title}
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Left/Right manual slide buttons */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-cyan-600 text-white flex items-center justify-center backdrop-blur-sm transition-colors z-10"
                  aria-label="Previous Visual"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-cyan-600 text-white flex items-center justify-center backdrop-blur-sm transition-colors z-10"
                  aria-label="Next Visual"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Slider progress dots */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeSlide === i ? 'w-5 bg-cyan-400' : 'w-1.5 bg-slate-600'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative side accent tag */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-2">
                <span className="flex items-center gap-1.5">
                  <MonitorSmartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Live Mockups</span>
                </span>
                <span>Continuously updated 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. RECOMMENDED / HOT SECTION (Highlighting Business Package) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-6 sm:p-10 shadow-2xl">
          {/* Subtle Ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>HOT &amp; RECOMMENDED CHOICE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
                Business Package — Recommended for Established Businesses
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most businesses choose this package for a professional online presence. It delivers tailored industry architecture, conversion-focused sections, and full business alignment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Business-focused layout &amp; clear presentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom sections tailored to your services</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free minor revisions during development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Includes everything in Starter package</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-4 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
              <div>
                <span className="text-xs text-slate-400 line-through block">
                  Original: PKR 14,999
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                  PKR 12,499
                </div>
                <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                  Save PKR 2,500 Special Offer
                </span>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full max-w-xs">
                <button
                  onClick={() => onNavigate('requirements', 'business')}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md transition-all"
                >
                  Order Business Package
                </button>
                <button
                  onClick={() => onNavigate('packages')}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-all"
                >
                  View Full Package Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PACKAGE PREVIEW ON HOME (4 Concise Cards) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Syne']">
            Select Your Website Development Tier
          </h2>
          <p className="text-slate-400 text-sm">
            Professional web development solutions crafted for any stage of business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => {
            const isFeatured = pkg.id === 'business';
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isFeatured
                    ? 'bg-slate-900 border-2 border-indigo-500 shadow-xl shadow-indigo-950/40'
                    : 'bg-[#0e1422] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-['Syne']">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1 min-h-[32px] line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    {pkg.originalPrice && (
                      <span className="text-xs text-slate-400 line-through block">
                        Original: {pkg.originalPrice}
                      </span>
                    )}
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                      {pkg.offerPrice}
                    </div>
                  </div>

                  {/* 3-5 Major Benefits as requested */}
                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/60">
                    {pkg.majorBenefits.slice(0, 4).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 space-y-3">
                  <button
                    onClick={() => onNavigate('requirements', pkg.id)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all ${
                      isFeatured
                        ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white'
                    }`}
                  >
                    Select &amp; Order
                  </button>

                  <div className="text-center">
                    <p className="text-[11px] text-slate-400 mb-1">
                      Want to know more about this package?
                    </p>
                    <button
                      onClick={() => onNavigate('packages')}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-400 transition-all"
                    >
                      View Full Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BUSINESS CATEGORIES OVERVIEW */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Versatile Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
            Websites for Every Category &amp; Industry
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            We adapt typography, navigation patterns, and conversion flows specifically to your business niche.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 pt-4">
          {BUSINESS_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex items-center gap-2.5 text-xs text-slate-300"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span className="font-medium truncate">{cat}</span>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Explore 12+ live website examples in our Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLIENT WEBSITE COMMUNITY SHOWCASE NOTICE (Section 22) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0e1422] border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-white font-['Syne']">
                Client Website Community Showcase
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                When you order a website from us, your completed website may be displayed inside our website-development community/showcase with a link, where applicable, so visitors can view examples of websites created by us.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('gallery')}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Browse Gallery
            </button>
            <button
              onClick={() => onNavigate('community')}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/60 transition-colors flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Join Community</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION STRIP */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/80 via-slate-900 to-indigo-950/80 border border-cyan-800/40 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Syne'] max-w-2xl mx-auto">
            Ready To Launch Your High-Converting Professional Website?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Get your website built in 1–3 days. Review your project with our engineers, request adjustments, and go live with total peace of mind.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('requirements')}
              className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg transition-all"
            >
              Submit Requirements Now
            </button>
            <a
              href={CONFIG.WHATSAPP_ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/60 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
