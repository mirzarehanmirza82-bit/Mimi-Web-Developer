import { PackageTier } from '../types';

export const PACKAGES: PackageTier[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    originalPrice: 'PKR 9,999',
    offerPrice: 'PKR 7,499',
    tagline: 'Ideal for small businesses and service providers taking their first steps online with an advanced, modern aesthetic.',
    majorBenefits: [
      'Professional customized website (One-page or Multi-page)',
      'Free local domain provided by us included',
      'Free connection with Google Business Profile',
      'Minor revisions & adjustments included',
      'Goes live in 1–3 hours after payment confirmation'
    ],
    fullFeatures: [
      'Professional customized website design',
      'Free local domain provided by us',
      'Basic-level package engineered with a premium-looking final design',
      'One-page website OR multi-page website configured strictly to your requirements',
      'Free integration with existing Google Business Profile if available',
      'Minor changes included free of charge during review',
      'Major structural/design changes after completion: PKR 499 per major change',
      'Fast turnaround: Website prepared in 1–3 days, live within 1–3 hours after approval & payment'
    ],
    domainConnectionFee: 'PKR 499',
    majorChangeFee: 'PKR 499',
    deliveryTime: '1–3 Days preparation, 1–3 Hours live deployment'
  },
  {
    id: 'business',
    name: 'Business Package',
    originalPrice: 'PKR 14,999',
    offerPrice: 'PKR 12,499',
    badge: 'Recommended for Established Businesses',
    tagline: 'Our most popular tier, specifically designed for established shops, clinics, offices, and growing service firms.',
    recommendedFor: 'Most businesses choose this package for a professional online presence.',
    majorBenefits: [
      'Everything in Starter with custom business sections',
      'Elevated business presentation & conversion focus',
      'Tailored layout matching your unique industry branding',
      'Minor changes included free of charge',
      'Recommended for established & scaling businesses'
    ],
    fullFeatures: [
      'Everything available in the Starter Package',
      'Dedicated business-focused website architecture',
      'High-impact visual presentation and structured content hierarchy',
      'Customized sections created according to specific operational needs',
      'Minor changes completely free of charge during project cycle',
      'Major changes after completion: PKR 999 per major change',
      'Professional business layout optimized for mobile and desktop conversions',
      'Ideal for retail, medical, salons, clinics, consultants, and established enterprises'
    ],
    domainConnectionFee: 'PKR 999',
    majorChangeFee: 'PKR 999',
    deliveryTime: '1–3 Days preparation, 1–3 Hours live deployment'
  },
  {
    id: 'advance',
    name: 'Advance Package',
    offerPrice: 'PKR 19,999',
    tagline: 'High-end custom architecture with rich social media connectivity and custom interactive layouts for any business.',
    majorBenefits: [
      'Everything in Business with bespoke industry layout',
      'Full social media integration (YouTube, FB, TikTok, IG, X, Telegram)',
      'Advanced presentation with subtle interactive motion',
      'Comprehensive multi-page structure with tailored sections',
      'Minor changes included free of charge'
    ],
    fullFeatures: [
      'Everything available in previous packages where applicable',
      'Website uniquely designed from scratch according to customer specific industry',
      'Premium-level design aesthetics with refined typography and micro-interactions',
      'More advanced responsive layouts with dedicated conversion touchpoints',
      'Comprehensive business presentation suitable for almost any type of commercial venture',
      'Minor changes included free of charge',
      'Major changes after completion: PKR 1,499 per major change',
      'Full social media platforms connected free of charge (YouTube, Facebook, TikTok, Instagram, X/Twitter, Telegram, and more)'
    ],
    domainConnectionFee: 'PKR 1,499',
    majorChangeFee: 'PKR 1,499',
    deliveryTime: '1–3 Days preparation, 1–3 Hours live deployment'
  },
  {
    id: 'premium',
    name: 'Premium Package',
    offerPrice: 'PKR 30,999',
    badge: 'Premium / Pro Level',
    tagline: 'The ultimate digital flagship for premium brands, corporate companies, and high-standard commercial leaders.',
    majorBenefits: [
      'Pro-level flagship website with ultra-fast performance',
      'Bespoke luxury UI & advanced business presentation',
      'Full social media suite & omnichannel contact routing',
      'Highly customized sections with smooth motion styling',
      'Dedicated priority revisions and rapid turnaround'
    ],
    fullFeatures: [
      'Flagship pro-level website engineered for top-tier market positioning',
      'Ultra-fast performance-focused build ensuring instantaneous page loads',
      'High-end premium UI with executive visual hierarchy and refined contrast',
      'Advanced corporate and brand storytelling sections',
      'Highly customized interactive sections built specifically to specifications',
      'Suitable for brands, established companies, corporate enterprises, and high-ticket services',
      'Minor changes included free of charge',
      'Major changes after completion: PKR 1,999 per major change',
      'Comprehensive social media integration & omnichannel contact triggers included free',
      'Premium presentation and tasteful, modern high-fidelity animations'
    ],
    domainConnectionFee: 'PKR 1,999',
    majorChangeFee: 'PKR 1,999',
    deliveryTime: '1–3 Days preparation, 1–3 Hours live deployment'
  }
];

export const DOMAIN_INFO = {
  connectionCharges: {
    starter: 'PKR 499',
    business: 'PKR 999',
    advance: 'PKR 1,499',
    premium: 'PKR 1,999'
  },
  oneYearDomainPrice: 'PKR 15,000',
  description: 'If you already own a personal domain, we can connect your website to it seamlessly.',
  purchaseNote: 'If the 1-year professional domain is purchased through us for PKR 15,000, domain connection will be completely free of charge.',
  recommendation: 'For a more professional online presence, we recommend launching your website with your own professional domain and hosting. You can also upgrade to professional hosting and domain as your business grows.'
};

export const CHANGES_POLICY = {
  intro: 'Minor changes are included according to the selected package. If the website has already been completed and you request major structural, design or functionality changes, additional service charges may apply according to your package.',
  charges: [
    { package: 'Starter Package', fee: 'PKR 499' },
    { package: 'Business Package', fee: 'PKR 999' },
    { package: 'Advance Package', fee: 'PKR 1,499' },
    { package: 'Premium Package', fee: 'PKR 1,999' }
  ],
  clarification: 'We do not charge for every tiny edit or minor text adjustment during the project. Only major structural, design, or newly added functionality requested after project completion carries the stated transparent fee.'
};
