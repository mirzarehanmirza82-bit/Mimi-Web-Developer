import React, { useState } from 'react';
import { PageId, GalleryProject } from '../types';
import { GALLERY_PROJECTS } from '../data/gallery';
import { CONFIG } from '../config';
import {
  Globe,
  Layout,
  ExternalLink,
  ArrowRight,
  Check,
  X,
  MessageCircle,
  Eye,
  Filter
} from 'lucide-react';
import { LiveWebsitesShowcase } from '../components/LiveWebsitesShowcase';

interface GalleryPageProps {
  onNavigate: (page: PageId, selectedPkg?: string, businessCategory?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const categories = ['All', 'Restaurant', 'Doctor', 'Salon', 'Real Estate', 'Fitness', 'Retail', 'Corporate'];

  const filteredProjects = GALLERY_PROJECTS.filter((proj) => {
    if (filterCategory === 'All') return true;
    return (
      proj.category.toLowerCase().includes(filterCategory.toLowerCase()) ||
      proj.badge.toLowerCase().includes(filterCategory.toLowerCase())
    );
  });

  const handleOrderLikeThis = (proj: GalleryProject) => {
    setSelectedProject(null);
    onNavigate('requirements', undefined, proj.title);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
          <Layout className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Portfolio Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Website Examples &amp; Demonstration Gallery
        </h1>
        {/* Exact Required Phrasing from Section 10 */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          “These are examples of the types of websites we can create. Your website will be customized according to your business, brand and requirements.”
        </p>
      </div>

      {/* ========================================================================= */}
      {/* LIVE CLIENT WEBSITES SHOWCASE (7 LIVE LINKS WITH EXACT DOMAIN BUTTONS) */}
      {/* ========================================================================= */}
      <LiveWebsitesShowcase />

      {/* Category Filter Controls */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 12 GALLERY CARDS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-[#0e1422] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
          >
            <div>
              {/* Preview Image Slot with resilient fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 flex items-center justify-center">
                {!imageErrors[project.id] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 p-5 flex flex-col justify-between border-b border-slate-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">mimi-preview.live</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                        {project.category}
                      </span>
                      <h4 className="text-sm font-bold text-white font-['Syne']">
                        {project.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>Responsive Web Concept</span>
                      <span className="text-cyan-400 font-medium">Live Mockup</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-black/30 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-slate-700/80 backdrop-blur-sm">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <div className="text-xs text-slate-400 font-medium">
                  {project.category}
                </div>
                <h3 className="text-lg font-bold text-white font-['Syne'] group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Key features */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Key Implementations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Website Link Button if available */}
            {project.demoUrl && (
              <div className="px-5 pb-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl text-xs font-mono font-medium text-cyan-300 hover:text-white bg-slate-900/90 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-500/60 transition-colors flex items-center justify-between gap-1.5"
                >
                  <span className="truncate">{project.demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                </a>
              </div>
            )}

            {/* Bottom Card Actions */}
            <div className="p-5 pt-0 flex items-center gap-2">
              <button
                onClick={() => setSelectedProject(project)}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Details</span>
              </button>

              <button
                onClick={() => handleOrderLikeThis(project)}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-1"
              >
                <span>Order Similar</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* SHOWCASE NOTICE & FOOTNOTE (Section 22) */}
      {/* ========================================================================= */}
      <div className="rounded-2xl bg-[#0b0f17] border border-slate-800 p-6 sm:p-8 text-center space-y-3 max-w-4xl mx-auto">
        <h4 className="text-base font-bold text-white font-['Syne']">
          Client Website Community Showcase Notice
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          “When you order a website from us, your completed website may be displayed inside our website-development community/showcase with a link, where applicable, so visitors can view examples of websites created by us.”
        </p>
      </div>

      {/* ========================================================================= */}
      {/* PROJECT DETAILS MODAL */}
      {/* ========================================================================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0e1422] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl space-y-5 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60">
                {selectedProject.badge}
              </span>
              <h3 className="text-2xl font-bold text-white font-['Syne']">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-slate-400">
                Category: {selectedProject.category}
              </p>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
              {!imageErrors[selectedProject.id] ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(selectedProject.id)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">mimi-preview.live</span>
                  </div>
                  <div className="space-y-1.5 text-center my-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {selectedProject.category}
                    </span>
                    <h4 className="text-xl font-bold text-white font-['Syne']">
                      {selectedProject.title}
                    </h4>
                    <p className="text-xs text-slate-400">Custom Web Architecture Demonstration</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-2">
                    <span>Full-Stack Web Interface</span>
                    <span className="text-cyan-400 font-semibold">Active Mockup</span>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Project Architecture Overview:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Included Custom Elements:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedProject.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Website Link in Modal if available */}
            {selectedProject.demoUrl && (
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-cyan-400">Live Client Website Link:</span>
                </div>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold text-cyan-300 hover:text-white bg-slate-900 hover:bg-cyan-900 border border-cyan-700/60 transition-colors"
                >
                  <span>{selectedProject.demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleOrderLikeThis(selectedProject)}
                className="w-full sm:flex-1 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 shadow"
              >
                <span>Order Website in This Style</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`${CONFIG.WHATSAPP_ORDER_LINK}?text=${encodeURIComponent(
                  `Hello Mimi Web Developer Service, I like your Gallery demo for "${selectedProject.title}" (${selectedProject.category}). I want to build a similar website for my business.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/60 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
