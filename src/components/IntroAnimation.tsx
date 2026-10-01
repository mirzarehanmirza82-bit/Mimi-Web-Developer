import React, { useEffect, useState } from 'react';
import { CONFIG } from '../config';
import { Code2, ArrowRight } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'reveal' | 'exit'>('enter');

  useEffect(() => {
    // Phase 1: enter in 200ms
    const timer1 = setTimeout(() => {
      setPhase('reveal');
    }, 400);

    // Phase 2: exit after 3.2s
    const timer2 = setTimeout(() => {
      setPhase('exit');
    }, 3200);

    // Phase 3: complete after 3.8s
    const timer3 = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#070a10] px-4 transition-opacity duration-700 ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle radial ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Skip button for quick navigation */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 text-xs text-slate-400 hover:text-cyan-400 px-3 py-1.5 rounded border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
      >
        <span>Skip intro</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      <div className="relative max-w-xl text-center space-y-6">
        {/* Animated Brand Emblem */}
        <div className="flex justify-center">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-sky-400 p-[1px] shadow-2xl shadow-cyan-500/20 transform transition-all duration-700 ${
              phase === 'enter' ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <div className="w-full h-full bg-[#0b0f17] rounded-2xl flex items-center justify-center">
              <Code2 className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div
          className={`space-y-3 transform transition-all duration-700 delay-150 ${
            phase === 'enter' ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-400/90 bg-cyan-950/40 border border-cyan-800/40 rounded-full">
            Official Web Engineering
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
            {CONFIG.BRAND_NAME}
          </h1>
        </div>

        {/* Exact Tagline Quote */}
        <p
          className={`text-slate-300 text-sm sm:text-base font-normal max-w-lg mx-auto leading-relaxed transform transition-all duration-700 delay-300 ${
            phase === 'enter' ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          “{CONFIG.BRAND_TAGLINE}”
        </p>

        {/* Minimal loading progress line */}
        <div className="w-48 h-1 bg-slate-800/80 rounded-full mx-auto overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-[3000ms] ease-out ${
              phase === 'enter' ? 'w-0' : 'w-full'
            }`}
          />
        </div>
      </div>
    </div>
  );
};
