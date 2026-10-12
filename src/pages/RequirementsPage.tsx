import React, { useState, useEffect } from 'react';
import { PageId, RequirementsFormData } from '../types';
import { PACKAGES } from '../data/packages';
import { CONFIG } from '../config';
import {
  Send,
  MessageCircle,
  Mic,
  Tag,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Sparkles,
  Share2,
  FileCheck
} from 'lucide-react';

interface RequirementsPageProps {
  initialPackage?: string;
  initialWebsiteStyle?: string;
  onNavigate: (page: PageId) => void;
}

export const RequirementsPage: React.FC<RequirementsPageProps> = ({
  initialPackage,
  initialWebsiteStyle,
  onNavigate,
}) => {
  const [formData, setFormData] = useState<RequirementsFormData>({
    clientName: '',
    whatsappNumber: '',
    email: '',
    websiteName: '',
    businessName: '',
    businessType: '',
    websiteDetails: initialWebsiteStyle ? `I would like a website similar to "${initialWebsiteStyle}". ` : '',
    additionalRequirements: '',
    selectedPackage: (initialPackage as any) || 'business',
    couponCode: '',
    socials: {
      youtube: '',
      facebook: '',
      tiktok: '',
      instagram: '',
      twitter: '',
      telegram: '',
      otherPlatformName: '',
      otherPlatformLink: '',
    },
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPackage && ['starter', 'business', 'advance', 'premium'].includes(initialPackage)) {
      setFormData((prev) => ({ ...prev, selectedPackage: initialPackage as any }));
    }
  }, [initialPackage]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.clientName.trim()) {
      newErrors.clientName = 'Client Name is required';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp Number is required';
    }
    if (!formData.websiteName.trim()) {
      newErrors.websiteName = 'Website Name is required';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business / Service Name is required';
    }
    if (!formData.businessType.trim()) {
      newErrors.businessType = 'Business Type is required';
    }
    if (!formData.websiteDetails.trim()) {
      newErrors.websiteDetails = 'Website Details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [name]: value,
      },
    }));
  };

  const generateWhatsAppMessage = () => {
    const selectedPkgObj = PACKAGES.find((p) => p.id === formData.selectedPackage);

    let msg = `*NEW WEBSITE ORDER INQUIRY*\n`;
    msg += `------------------------------------\n`;
    msg += `*Client Name:* ${formData.clientName}\n`;
    msg += `*WhatsApp Number:* ${formData.whatsappNumber}\n`;
    if (formData.email.trim()) {
      msg += `*Email:* ${formData.email}\n`;
    }
    msg += `*Selected Package:* ${selectedPkgObj?.name || formData.selectedPackage} (${selectedPkgObj?.offerPrice || ''})\n`;
    msg += `*Website Name:* ${formData.websiteName}\n`;
    msg += `*Business / Service:* ${formData.businessName}\n`;
    msg += `*Business Type:* ${formData.businessType}\n`;
    msg += `*Website Details:* ${formData.websiteDetails}\n`;
    if (formData.additionalRequirements.trim()) {
      msg += `*Additional Requirements:* ${formData.additionalRequirements}\n`;
    }

    // Social Media Links (if provided)
    const activeSocials: string[] = [];
    if (formData.socials.youtube) activeSocials.push(`- YouTube: ${formData.socials.youtube}`);
    if (formData.socials.facebook) activeSocials.push(`- Facebook: ${formData.socials.facebook}`);
    if (formData.socials.tiktok) activeSocials.push(`- TikTok: ${formData.socials.tiktok}`);
    if (formData.socials.instagram) activeSocials.push(`- Instagram: ${formData.socials.instagram}`);
    if (formData.socials.twitter) activeSocials.push(`- X / Twitter: ${formData.socials.twitter}`);
    if (formData.socials.telegram) activeSocials.push(`- Telegram: ${formData.socials.telegram}`);
    if (formData.socials.otherPlatformName && formData.socials.otherPlatformLink) {
      activeSocials.push(`- ${formData.socials.otherPlatformName}: ${formData.socials.otherPlatformLink}`);
    }

    if (activeSocials.length > 0) {
      msg += `\n*Social Media Profiles:*\n${activeSocials.join('\n')}\n`;
    }

    if (formData.couponCode.trim()) {
      msg += `\n*Coupon Code Applied:* ${formData.couponCode.trim().toUpperCase()}\n`;
    }

    msg += `------------------------------------\n`;
    msg += `Sent via Mimi Web Developer Service Official Order Portal`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // scroll to top of form
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    const message = generateWhatsAppMessage();
    setSubmittedMessage(message);

    // Build the WhatsApp target URL
    const targetUrl = `${CONFIG.WHATSAPP_ORDER_LINK}?text=${encodeURIComponent(message)}`;

    // Automatically attempt redirect to WhatsApp
    try {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Popup might be blocked, dialog below allows direct clicking
    }
  };

  const handleCopyMessage = () => {
    if (submittedMessage) {
      navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
          <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Project Onboarding Portal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Syne']">
          Submit Your Website Requirements
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Fill in your project specifications below. Our engineering team reviews all briefs directly before initiating deployment.
        </p>
      </div>

      {/* Top Note as required in Section 9 */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-950/70 via-slate-900 to-indigo-950/70 border border-cyan-800/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-900/60 border border-cyan-700/60 flex items-center justify-center text-cyan-400 shrink-0">
            <Mic className="w-5 h-5" />
          </div>
          <p className="text-slate-200 text-xs sm:text-sm font-medium">
            “If you have difficulty filling the requirements form, simply contact us on WhatsApp and send your details by voice message.”
          </p>
        </div>
        <a
          href={CONFIG.WHATSAPP_ORDER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-700/60 hover:bg-emerald-900/60 transition-colors flex items-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Voice Message</span>
        </a>
      </div>

      {/* Main Order Form */}
      <form onSubmit={handleSubmit} className="space-y-8 bg-[#0e1422] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
        {/* Package Selector */}
        <div className="space-y-3">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Choose Your Package Tier <span className="text-cyan-400">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PACKAGES.map((pkg) => {
              const isSelected = formData.selectedPackage === pkg.id;
              return (
                <button
                  type="button"
                  key={pkg.id}
                  onClick={() => setFormData({ ...formData, selectedPackage: pkg.id })}
                  className={`p-3.5 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs">{pkg.name}</span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-slate-700'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                    </span>
                  </div>
                  <div className="text-sm font-extrabold text-cyan-400 mt-1 font-mono tabular-nums">
                    {pkg.offerPrice}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section: Client & Business Basic Information */}
        <div className="pt-4 border-t border-slate-800/80 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            Client &amp; Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field 1: Client Name - Required */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Client Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                placeholder="e.g. Mirza Rehan"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                  errors.clientName ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {errors.clientName && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.clientName}
                </p>
              )}
            </div>

            {/* Field 2: WhatsApp Number - Required + Note */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                WhatsApp Number <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                placeholder="e.g. +92 300 1234567"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                  errors.whatsappNumber ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {errors.whatsappNumber && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.whatsappNumber}
                </p>
              )}
              {/* Mandatory note under WhatsApp field from Section 11 */}
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                “Your WhatsApp number is required so we can contact you about your website, requirements and updates.”
              </p>
            </div>
          </div>

          {/* Field 3: Email - Optional */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Email Address <span className="text-slate-500 text-[11px]">(Optional)</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. client@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Section: Website & Business Specification */}
        <div className="pt-4 border-t border-slate-800/80 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            Website &amp; Business Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field 4: Website Name - Required */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Website Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="websiteName"
                value={formData.websiteName}
                onChange={handleInputChange}
                placeholder="e.g. Royal Spice Bistro"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                  errors.websiteName ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {errors.websiteName && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.websiteName}
                </p>
              )}
            </div>

            {/* Field 5: Business / Service Name - Required */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Business / Service Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="e.g. Royal Spice Restaurant &amp; Catering"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                  errors.businessName ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {errors.businessName && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.businessName}
                </p>
              )}
            </div>
          </div>

          {/* Field 6: Business Type - Required */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Business Type <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
              placeholder="e.g. Restaurant, Medical Clinic, Gym, Salon, Property Dealer, Shop, etc."
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                errors.businessType ? 'border-rose-500' : 'border-slate-800'
              }`}
            />
            {errors.businessType && (
              <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.businessType}
              </p>
            )}
          </div>

          {/* Field 7: Website Details - Required */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Website Details <span className="text-cyan-400">*</span>
            </label>
            <textarea
              name="websiteDetails"
              rows={4}
              value={formData.websiteDetails}
              onChange={handleInputChange}
              placeholder="Describe what pages, sections, colors, or features you want on your website (e.g. Home, Menu, WhatsApp order button, Contact info, About Us)..."
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                errors.websiteDetails ? 'border-rose-500' : 'border-slate-800'
              }`}
            />
            {errors.websiteDetails && (
              <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.websiteDetails}
              </p>
            )}
          </div>

          {/* Field 8: Additional Website Requirements - Optional */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Additional Website Requirements <span className="text-slate-500 text-[11px]">(Optional)</span>
            </label>
            <textarea
              name="additionalRequirements"
              rows={2}
              value={formData.additionalRequirements}
              onChange={handleInputChange}
              placeholder="Any specific delivery dates, domain preferences, special logo guidelines, or third-party links..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Section: Social Media Section (Section 11) */}
        <div className="pt-4 border-t border-slate-800/80 space-y-4">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              Social Media Connections (Optional)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Provide profiles you would like integrated directly into your website header, footer, or contact blocks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">YouTube Link</label>
              <input
                type="text"
                name="youtube"
                value={formData.socials.youtube}
                onChange={handleSocialChange}
                placeholder="https://youtube.com/@channel"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Facebook Link</label>
              <input
                type="text"
                name="facebook"
                value={formData.socials.facebook}
                onChange={handleSocialChange}
                placeholder="https://facebook.com/page"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">TikTok Link</label>
              <input
                type="text"
                name="tiktok"
                value={formData.socials.tiktok}
                onChange={handleSocialChange}
                placeholder="https://tiktok.com/@account"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Instagram Link</label>
              <input
                type="text"
                name="instagram"
                value={formData.socials.instagram}
                onChange={handleSocialChange}
                placeholder="https://instagram.com/profile"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">X / Twitter Link</label>
              <input
                type="text"
                name="twitter"
                value={formData.socials.twitter}
                onChange={handleSocialChange}
                placeholder="https://x.com/profile"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Telegram Link</label>
              <input
                type="text"
                name="telegram"
                value={formData.socials.telegram}
                onChange={handleSocialChange}
                placeholder="https://t.me/username"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Other Platform Custom Section */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Other Platform Name
              </label>
              <input
                type="text"
                name="otherPlatformName"
                value={formData.socials.otherPlatformName}
                onChange={handleSocialChange}
                placeholder="e.g. LinkedIn, Pinterest, Google Drive"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Other Platform Account / Link
              </label>
              <input
                type="text"
                name="otherPlatformLink"
                value={formData.socials.otherPlatformLink}
                onChange={handleSocialChange}
                placeholder="https://..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COUPON CODE SECTION (Section 9) */}
        {/* Immediately before the Order Now button */}
        {/* Label: “Coupon Code” */}
        {/* Empty input field */}
        {/* Do NOT add a submit button beside it */}
        {/* Under it write: “Enter a valid coupon code and you may receive a discount from PKR 999 up to PKR 2,999.” */}
        {/* ========================================================================= */}
        <div className="pt-4 border-t border-slate-800/80 space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Coupon Code
          </label>
          <div className="max-w-md">
            <input
              type="text"
              name="couponCode"
              value={formData.couponCode}
              onChange={handleInputChange}
              placeholder="e.g. MIMI2026"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm placeholder:text-slate-600 uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
            />
          </div>
          <p className="text-[11px] text-slate-400">
            Enter a valid coupon code and you may receive a discount from PKR 499 up to PKR 2,999.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ORDER NOW BUTTON (Section 12) */}
        {/* ========================================================================= */}
        <div className="pt-4 border-t border-slate-800/80">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-cyan-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-cyan-500 shadow-xl shadow-cyan-950/50 transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            <span>Order Now</span>
            <Send className="w-4 h-4" />
          </button>
          <p className="text-center text-[11px] text-slate-500 mt-2">
            Clicking "Order Now" formats your complete project requirements and connects directly to our WhatsApp service desk.
          </p>
        </div>
      </form>

      {/* ========================================================================= */}
      {/* SUBMISSION CONFIRMATION MODAL & DIRECT LINK */}
      {/* ========================================================================= */}
      {submittedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-[#0e1422] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-['Syne']">
                  Order Brief Generated Successfully!
                </h3>
                <p className="text-xs text-slate-400">
                  Your requirements are prepared for WhatsApp dispatch.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Formatted WhatsApp Payload:</span>
                <button
                  onClick={handleCopyMessage}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-56 overflow-y-auto leading-relaxed">
                {submittedMessage}
              </pre>
            </div>

            <div className="space-y-3">
              <a
                href={`${CONFIG.WHATSAPP_ORDER_LINK}?text=${encodeURIComponent(submittedMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Directly</span>
              </a>

              <button
                onClick={() => setSubmittedMessage(null)}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Close &amp; Return to Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
