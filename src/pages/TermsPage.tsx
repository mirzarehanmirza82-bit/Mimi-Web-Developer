import React from 'react';
import { PageId } from '../types';
import { CONFIG } from '../config';
import { FileText, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>Service Terms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Terms &amp; Conditions
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm">
          Effective Date: 2026 · Mimi Web Developer Service
        </p>
      </div>

      <div className="rounded-3xl bg-[#0e1422] border border-slate-800 p-6 sm:p-10 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
        {/* 1. Scope of Service */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Syne']">
            1. Website Development Service
          </h2>
          <p>
            Mimi Web Developer Service provides custom website engineering, responsive frontend design, and technical domain configuration. Services are delivered according to the package selected (Starter, Business, Advance, or Premium) and the verified requirements submitted by the client.
          </p>
        </section>

        {/* 2. Delivery Timelines & Process */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Syne']">
            2. Project Preparation &amp; Delivery Timelines
          </h2>
          <p>
            Standard preparation time for initial project drafts is <strong>1–3 business days</strong> from the receipt of complete requirements. Upon completion, a preview link is shared with the client for inspection and minor revisions. Once approved and payment is confirmed, the website normally goes live on the target domain within <strong>1–3 hours</strong>.
          </p>
        </section>

        {/* 3. Payment Process & Client Review */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Syne']">
            3. Client Review &amp; Payment Process
          </h2>
          <p>
            We operate on a transparent review model: once your website draft is completed, we present the working site for your inspection. You are entitled to review all pages and request included adjustments. Once you are satisfied with the final layout, payment is settled. Public domain publishing proceeds immediately after payment verification.
          </p>
        </section>

        {/* 4. Minor vs Major Changes Policy */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Syne']">
            4. Revisions: Minor Changes vs. Major Modifications
          </h2>
          <p>
            Minor adjustments (such as typographical edits, phone number updates, or photo swaps) requested during the review stage are included free of charge. If the website has already been formally approved, completed, and published, subsequent requests for major structural redesigns, additional pages, or newly added custom functionality carry transparent service charges:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong>Starter Package:</strong> PKR 499 per major change</li>
            <li><strong>Business Package:</strong> PKR 999 per major change</li>
            <li><strong>Advance Package:</strong> PKR 1,499 per major change</li>
            <li><strong>Premium Package:</strong> PKR 1,999 per major change</li>
          </ul>
        </section>

        {/* 5. Domain & Hosting Policies */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Syne']">
            5. Domain &amp; Hosting Connection Policies
          </h2>
          <p>
            Starter packages include a free local domain provided by us. If the client possesses a personal domain name, we provide DNS routing and SSL installation for a fixed setup fee (Starter: PKR 499; Business: PKR 999; Advance: PKR 1,499; Premium: PKR 1,999). If a 1-year professional domain is purchased through us for PKR 15,000, domain connection is rendered free of charge.
          </p>
        </section>

        {/* 6. Customer-Provided Information & Social Media */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Syne']">
            6. Customer-Provided Information &amp; Social Links
          </h2>
          <p>
            Clients are solely responsible for ensuring that all business descriptions, logos, images, and social media links provided for inclusion are lawful, accurate, and do not infringe upon any third-party copyrights or intellectual property.
          </p>
        </section>

        {/* 7. Client Showcase Agreement */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Syne']">
            7. Client Website Community Showcase
          </h2>
          <p>
            When you order a website from us, your completed website may be displayed inside our website-development community and gallery showcase with a link, where applicable, so visitors can view examples of websites created by our service.
          </p>
        </section>

        {/* 8. Cancellation & Communication */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Syne']">
            8. Communication &amp; Cancellation
          </h2>
          <p>
            Project communication is conducted via WhatsApp, Telegram, or Email during posted operational hours. Either party may terminate development prior to final publication if technical feasibility requirements cannot be reconciled.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => onNavigate('requirements')}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-cyan-600 hover:bg-cyan-500 transition-colors flex items-center gap-2"
          >
            <span>Proceed to Order Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
