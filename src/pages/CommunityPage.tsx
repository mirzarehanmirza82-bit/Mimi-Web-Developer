import React from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import {
  Users,
  Bell,
  Sparkles,
  Network,
  Tag,
  ArrowRight,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

interface CommunityPageProps {
  onNavigate: (page: PageId) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const communityBenefits = [
    {
      title: 'Platform Updates',
      desc: 'Early announcements on new web framework releases, design trends, and performance optimizations.',
      icon: <Bell className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Exclusive Offers',
      desc: 'Member-only promotional packages, seasonal discounts, and domain registration credits.',
      icon: <Tag className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Business Information',
      desc: 'Actionable digital marketing strategies, SEO best practices, and local business conversion tips.',
      icon: <Briefcase className="w-5 h-5 text-sky-400" />,
    },
    {
      title: 'Networking Opportunities',
      desc: 'Connect with other entrepreneurs, shop owners, medical professionals, and service providers.',
      icon: <Network className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'Website & Service Updates',
      desc: 'Ongoing tutorials, security recommendations, and feature additions for existing client sites.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Promotional Opportunities',
      desc: 'Feature your newly launched website inside our client community directory to gain organic reach.',
      icon: <Users className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-semibold">
          <Users className="w-3.5 h-3.5 text-emerald-400" />
          <span>Professional Network</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Mimi Web Developer Community
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Join our business-oriented community of entrepreneurs, store owners, professionals, and digital innovators.
        </p>
      </div>

      {/* Hero Community Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-[#0e1422] border border-emerald-500/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Syne']">
            Connect, Learn, and Scale Your Online Presence
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Our WhatsApp group serves as an open knowledge-sharing network for clients and partners. Stay informed about the latest digital commerce updates and receive priority support from our development engineers.
          </p>
        </div>

        {/* Join Community Button */}
        <div>
          <a
            href={CONFIG.COMMUNITY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-xl shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Users className="w-5 h-5 text-slate-950" />
            <span>Join Community</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-400">
          Official WhatsApp Community Link: <span className="font-mono text-emerald-400 break-all">{CONFIG.COMMUNITY_LINK}</span>
        </p>
      </div>

      {/* What You Receive (Section 20 items) */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white font-['Syne'] text-center">
          What You Receive Inside the Community
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityBenefits.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0e1422] border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                {b.icon}
              </div>
              <h4 className="text-base font-bold text-white font-['Syne']">{b.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Realistic Expectations Notice (Section 20 constraint) */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 text-xs text-slate-400 text-center leading-relaxed max-w-3xl mx-auto">
        <ShieldCheck className="w-4 h-4 text-emerald-400 inline-block mr-1.5 mb-0.5" />
        <span>
          <strong>Community Guidelines:</strong> We maintain a clean, professional, spam-free environment. We do not make unrealistic guarantees about instant business growth, sales figures, or revenue. Success depends upon individual service quality and market execution.
        </span>
      </div>
    </div>
  );
};
