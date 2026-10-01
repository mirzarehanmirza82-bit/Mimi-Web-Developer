export type PageId =
  | 'home'
  | 'packages'
  | 'gallery'
  | 'requirements'
  | 'faq'
  | 'contact'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'coupon'
  | 'community'
  | 'project';

export interface PackageTier {
  id: 'starter' | 'business' | 'advance' | 'premium';
  name: string;
  originalPrice?: string;
  offerPrice: string;
  tagline: string;
  badge?: string;
  majorBenefits: string[];
  fullFeatures: string[];
  domainConnectionFee: string;
  majorChangeFee: string;
  deliveryTime: string;
  recommendedFor?: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  badge: string;
  demoUrl?: string;
}

export interface SocialMediaLinks {
  youtube: string;
  facebook: string;
  tiktok: string;
  instagram: string;
  twitter: string;
  telegram: string;
  otherPlatformName: string;
  otherPlatformLink: string;
}

export interface RequirementsFormData {
  clientName: string;
  whatsappNumber: string;
  email: string;
  websiteName: string;
  businessName: string;
  businessType: string;
  websiteDetails: string;
  additionalRequirements: string;
  selectedPackage: 'starter' | 'business' | 'advance' | 'premium';
  couponCode: string;
  socials: SocialMediaLinks;
}
