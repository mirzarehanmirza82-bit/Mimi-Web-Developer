import { GalleryProject } from '../types';

import imgTechShop from '../assets/images/gallery_tech_shop_1790835219985.jpg';
import imgRestaurant from '../assets/images/gallery_restaurant_1790835239559.jpg';
import imgDoctor from '../assets/images/gallery_doctor_1790835252828.jpg';
import imgSalon from '../assets/images/gallery_salon_1790835263607.jpg';
import imgProperty from '../assets/images/gallery_property_1790835274940.jpg';
import imgWebDev from '../assets/images/hero_web_development_1790833818545.jpg';
import imgBusinessWeb from '../assets/images/hero_business_website_1790833832733.jpg';
import imgResponsiveDevices from '../assets/images/hero_responsive_devices_1790833845528.jpg';

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'restaurant',
    title: 'The Spice Grill & Bistro',
    category: 'Restaurant & Dining',
    badge: 'Food & Beverage',
    description: 'An appetizing culinary website featuring interactive digital menu cards, table reservations, location directions, and instant WhatsApp ordering for takeaways.',
    features: ['Digital Food Menu', 'WhatsApp Takeaway Order', 'Google Map Location', 'Reservation Form'],
    image: imgRestaurant,
    demoUrl: 'https://wok-on-wheels-1.vercel.app/'
  },
  {
    id: 'doctor',
    title: 'Al-Shifa Healthcare Clinic',
    category: 'Doctor & Medical',
    badge: 'Healthcare',
    description: 'A clean, trustworthy medical clinic portal with doctor profile, list of specialized treatments, appointment booking request, and clinic timing schedule.',
    features: ['Doctor Credentials', 'Treatment Catalog', 'Online Appointment Request', 'Clinic Timings'],
    image: imgDoctor
  },
  {
    id: 'drink-corner',
    title: 'Pure Chill Juice & Boba Corner',
    category: 'Drink Corner & Cafe',
    badge: 'Beverage & Cafe',
    description: 'A vibrant, modern website for a fresh juice, smoothie, and bubble tea spot with mouth-watering flavor showcases and direct delivery contact.',
    features: ['Flavor Showcase', 'Seasonal Specials', 'WhatsApp Quick Order', 'Social Media Feeds'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://bonbite-omega.vercel.app/'
  },
  {
    id: 'salon',
    title: 'Aura Luxury Salon & Spa',
    category: 'Salon & Beauty',
    badge: 'Lifestyle & Care',
    description: 'An elegant beauty salon website with treatment packages, bridal salon galleries, stylist profiles, and WhatsApp booking integration.',
    features: ['Treatment Pricing Card', 'Bridal Gallery', 'Stylist Profiles', 'Direct Booking'],
    image: imgSalon
  },
  {
    id: 'property',
    title: 'Prime Estate & Land Advisors',
    category: 'Property Dealer & Real Estate',
    badge: 'Real Estate',
    description: 'A high-impact property portal showcasing residential and commercial plots, floor plans, verified listings, and direct agent inquiry buttons.',
    features: ['Featured Plots & Villas', 'Price Calculator', 'Location Highlights', 'Direct Agent WhatsApp'],
    image: imgProperty
  },
  {
    id: 'gym',
    title: 'IronForge Fitness & CrossFit',
    category: 'Gym & Fitness',
    badge: 'Health & Sports',
    description: 'A high-energy gym website displaying training programs, membership tiers, trainer bios, and workout schedule timings.',
    features: ['Membership Tiers', 'Trainer Profiles', 'Class Schedule', 'WhatsApp Free Trial Pass'],
    image: imgResponsiveDevices
  },
  {
    id: 'furniture',
    title: 'Noble Oak Furniture & Living',
    category: 'Furniture Business',
    badge: 'Interior & Decor',
    description: 'A rich showroom catalog website highlighting handcrafted wood furniture, living room sets, custom dimensions, and quotation requests.',
    features: ['Product Showcase', 'Custom Sizing Inquiries', 'Interior Lookbooks', 'Catalog Download'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://kf-furniture-house.vercel.app/'
  },
  {
    id: 'mobile-shop',
    title: 'TechHub Mobile & Laptop Mart',
    category: 'Mobile & Laptop Shop',
    badge: 'Electronics & Retail',
    description: 'A tech retail website presenting smartphones, laptops, genuine accessories, warranty details, and instant stock availability inquiries.',
    features: ['Brand Category Filter', 'Specs Comparison Table', 'Daily Price Updates', 'WhatsApp Stock Check'],
    image: imgTechShop
  },
  {
    id: 'ecommerce',
    title: 'Urban Trend Boutique & Apparel',
    category: 'E-commerce & Fashion',
    badge: 'Online Shopping',
    description: 'A slick multi-product e-commerce front featuring product categories, image zoom, customer reviews, and order-via-WhatsApp checkout.',
    features: ['Collection Grid', 'Size Guide Modal', 'WhatsApp Checkout', 'Customer Reviews'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://subhan-allah-store.vercel.app/'
  },
  {
    id: 'portfolio',
    title: 'Kashif Ali Architectural Studio',
    category: 'Personal & Portfolio',
    badge: 'Creative Portfolio',
    description: 'A minimalist portfolio website showcasing architectural case studies, project photographs, awards, and direct client consultation contact.',
    features: ['Case Study Slider', 'High-Res Galleries', 'Client Testimonials', 'Direct Inquiry Form'],
    image: imgWebDev,
    demoUrl: 'https://meme-coin-elite.vercel.app/'
  },
  {
    id: 'service',
    title: 'SwiftPro Home Repairs & AC Services',
    category: 'Local Service & Contractor',
    badge: 'On-Demand Service',
    description: 'A conversion-engineered website for home maintenance, HVAC, electrical, and plumbing contractors with same-day booking requests.',
    features: ['Emergency Service Callout', 'Pricing Estimates', 'Service Area Coverage', 'WhatsApp Dispatch'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://mimi-web-employee-xi.vercel.app/'
  },
  {
    id: 'corporate',
    title: 'Nexus Venture Partners & Advisory',
    category: 'Corporate & Consulting',
    badge: 'B2B Enterprise',
    description: 'An authoritative corporate presence for financial, management, or legal advisory firms with team directory and client engagement forms.',
    features: ['Practice Area Overviews', 'Partner Directory', 'Industry Insights', 'Consultation Scheduler'],
    image: imgBusinessWeb,
    demoUrl: 'https://mimi-web-developer.vercel.app/'
  }
];

export const BUSINESS_CATEGORIES = [
  'Restaurant & Cafes',
  'Doctors & Medical Clinics',
  'Fitness Gyms & CrossFit',
  'Salons & Beauty Spas',
  'Drink Corners & Juice Bars',
  'Property Dealers & Real Estate',
  'Furniture & Interior Design',
  'Mobile & Laptop Retailers',
  'Clothing & Fashion Brands',
  'E-commerce & Online Stores',
  'Personal Portfolios & CVs',
  'Consultants & Lawyers',
  'Local Services & Contractors',
  'Digital Agencies',
  'Tech Startups',
  'Professional B2B Services'
];
