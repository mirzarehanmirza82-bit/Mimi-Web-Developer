import React, { useState } from 'react';
import { AlertCircle, X, Sparkles } from 'lucide-react';

export const CooperationNoticeBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border-b border-cyan-800/60 px-4 py-2.5 text-xs text-slate-200 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/40">
            <Sparkles className="w-3 h-3" />
          </div>
          <p className="line-clamp-2 sm:line-clamp-1 leading-snug">
            <strong className="text-cyan-300 font-semibold mr-1.5 uppercase tracking-wide text-[11px]">
              Please Cooperate:
            </strong>
            This website is continuously updated. If any feature, policy, section, or information is currently being updated, removed, or added, please cooperate with the administration as we maintain and enhance service quality.
          </p>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800/80 shrink-0 transition-colors"
          aria-label="Dismiss notice"
          title="Dismiss notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
