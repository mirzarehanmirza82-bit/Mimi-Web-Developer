import React from 'react';
import { LIVE_WEBSITES } from '../data/showcaseSites';
import { ExternalLink, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

interface LiveWebsitesShowcaseProps {
  title?: string;
  subtitle?: string;
  showNote?: boolean;
}

export const LiveWebsitesShowcase: React.FC<LiveWebsitesShowcaseProps> = ({
  title = 'Live Client Websites Showcase',
  subtitle = 'Explore active live websites engineered and deployed by Mimi Web Developer Service across diverse industries.',
  showNote = true,
}) => {
  return (
    <section className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#0e1526] to-slate-900 border-2 border-cyan-500/40 p-6 sm:p-10 shadow-2xl space-y-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>Real Deployed Production Websites</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne'] tracking-tight">
          {title}
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      </div>

      {/* Grid of Live Website Cards with Direct Link Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10">
        {LIVE_WEBSITES.map((site) => (
          <div
            key={site.id}
            className="group rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/60 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60">
                  {site.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Online
                </span>
              </div>

              <h3 className="text-base font-bold text-white font-['Syne'] group-hover:text-cyan-300 transition-colors">
                {site.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                {site.tagline}
              </p>
            </div>

            {/* Required Button with exact website name as the button text */}
            <div className="pt-4 mt-3 border-t border-slate-800/80">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${site.name}`}
                className="w-full py-2.5 px-3.5 rounded-xl font-mono text-xs font-semibold text-cyan-300 hover:text-white bg-slate-900 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 border border-cyan-800/60 hover:border-transparent transition-all flex items-center justify-between gap-2 group/btn shadow-sm"
              >
                <span className="truncate">{site.name}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 text-cyan-400 group-hover/btn:text-white transition-colors" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Access Button Bar for All 7 Links */}
      <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-4 sm:p-5 space-y-3 relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
          <span className="font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Website Link Buttons:</span>
          </span>
          <span className="text-slate-500 text-[11px]">Click any link to visit live demo</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {LIVE_WEBSITES.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-500/60 transition-all active:scale-95 shadow-sm"
            >
              <span>{site.name}</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          ))}
        </div>
      </div>

      {/* Mandatory Section 22 Showcase Policy Notice */}
      {showNote && (
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5 relative z-10">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            <strong>Client Website Showcase Notice:</strong> “When you order a website from us, your completed website may be displayed inside our website-development community/showcase with a link, where applicable, so visitors can view examples of websites created by us.”
          </p>
        </div>
      )}
    </section>
  );
};
