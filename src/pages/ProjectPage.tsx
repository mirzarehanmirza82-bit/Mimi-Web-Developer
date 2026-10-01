import React from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import {
  Rocket,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  Code2,
  FileCheck,
  Cpu,
  Layers
} from 'lucide-react';

interface ProjectPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-semibold">
          <Rocket className="w-3.5 h-3.5 text-indigo-400" />
          <span>Informational Briefing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Digital Business &amp; Web3 Projects
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Technical digital project concepts and modern platform engineering for eligible brands and ventures.
        </p>
      </div>

      {/* Main Concept Section */}
      <div className="rounded-3xl bg-[#0e1422] border border-slate-800 p-6 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white font-['Syne']">
          Digital Project Concepts &amp; Platform Architecture
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Mimi Web Developer Service engineers customized digital project concepts, landing engines, and Web3 / tokenized digital architecture for qualified businesses and creative brands. We handle the frontend code, token dashboard integrations, documentation layouts, and interactive visual presentation.
        </p>

        {/* Feature pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <h4 className="text-sm font-bold text-white">Full-Stack Code</h4>
            <p className="text-xs text-slate-400">High-performance frontend and cloud architecture customized for community engagement.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <h4 className="text-sm font-bold text-white">Interactive Dashboards</h4>
            <p className="text-xs text-slate-400">Real-time statistics, tokenomics breakdowns, and roadmap visualizations.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <FileCheck className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">Whitepaper &amp; Pitch Sites</h4>
            <p className="text-xs text-slate-400">Clean, legible documentation designs formatted for serious technical stakeholders.</p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MANDATORY REGULATORY & COMPLIANCE DISCLAIMER (Section 21) */}
      {/* ========================================================================= */}
      <div className="rounded-3xl bg-slate-950 border-2 border-amber-500/50 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3 text-amber-400">
          <ShieldAlert className="w-6 h-6 shrink-0" />
          <h3 className="text-lg font-bold font-['Syne'] text-white">
            Regulatory Compliance &amp; Non-Financial Advice Notice
          </h3>
        </div>

        {/* Exact Required Phrasing from Section 21 */}
        <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed bg-amber-950/30 p-4 rounded-xl border border-amber-500/30">
          “Any such project is subject to applicable laws, regulations, technical feasibility, platform rules and independent professional/legal review. No investment return or profit is guaranteed.”
        </p>

        <p className="text-slate-400 text-xs leading-relaxed">
          Mimi Web Developer Service acts strictly as a web design and software engineering provider. We do not provide financial advice, broker investments, solicit funds, guarantee token listings, or promise monetary yields of any nature.
        </p>
      </div>

      {/* Button: "View Project Requirements" opening [PROJECT_LINK] */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-indigo-950/60 border border-indigo-500/40 p-8 text-center space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-['Syne']">
          Ready to review the technical project criteria?
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
          If your project meets our compliance prerequisites, click below to review specific requirements and framework models.
        </p>

        <div>
          <a
            href={CONFIG.PROJECT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-950/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View Project Requirements</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[11px] text-slate-400">
          External Portal Link: <span className="font-mono text-indigo-300">{CONFIG.PROJECT_LINK}</span>
        </p>
      </div>
    </div>
  );
};
