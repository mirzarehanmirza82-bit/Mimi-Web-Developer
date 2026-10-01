import React from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import { Tag, Sparkles, MessageCircle, ArrowRight, Check, Gift } from 'lucide-react';

interface CouponPageProps {
  onNavigate: (page: PageId) => void;
}

export const CouponPage: React.FC<CouponPageProps> = ({ onNavigate }) => {
  // Opening WhatsApp with pre-filled message: "Today Coupon Code"
  const couponWhatsAppUrl = `${CONFIG.WHATSAPP_COUPON_LINK}?text=${encodeURIComponent('Today Coupon Code')}`;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 space-y-10">
      {/* Header with Title: Today's Coupon */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-400 text-xs font-semibold">
          <Tag className="w-3.5 h-3.5 text-amber-400" />
          <span>Promotional Savings Desk</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Today’s Coupon
        </h1>
        {/* Exact required explanation from Section 19 */}
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          “To check whether today’s coupon is available, contact us through WhatsApp.”
        </p>
      </div>

      {/* Main Promo Card */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-[#0e1422] border border-amber-500/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/40 mx-auto flex items-center justify-center text-amber-400 shadow-inner">
          <Gift className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
            Save On Your Website Order
          </h2>
          {/* Exact required explanation from Section 19 */}
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            “Depending on the active offer, a valid coupon may provide a discount of PKR 1,000 up to PKR 3,000 or, during selected promotional campaigns, potentially higher discounts.”
          </p>
        </div>

        {/* Button: "Get Today's Coupon" with pre-filled message "Today Coupon Code" */}
        <div className="pt-2">
          <a
            href={couponWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-950/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-slate-950" />
            <span>Get Today’s Coupon</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-400">
          Clicking opens WhatsApp with the pre-filled message: <code className="text-amber-300 font-mono font-semibold">Today Coupon Code</code>
        </p>

        {/* How to use */}
        <div className="pt-6 border-t border-slate-800/80 text-left space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            How To Redeem Your Coupon:
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Tap <strong>Get Today’s Coupon</strong> to message our support desk on WhatsApp.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Our team verifies today's active promotion and issues your unique coupon code.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Enter the code into the <strong>Coupon Code</strong> box on the Requirements/Order page to apply your discount.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => onNavigate('requirements')}
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/40"
        >
          Already have a code? Go directly to Order Requirements Form →
        </button>
      </div>
    </div>
  );
};
