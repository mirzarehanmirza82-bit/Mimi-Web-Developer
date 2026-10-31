export interface LiveWebsite {
  id: string;
  name: string; // The website name used as button text
  url: string;  // The live link
  title: string;
  category: string;
  tagline: string;
}

export const LIVE_WEBSITES: LiveWebsite[] = [
  {
    id: 'subhan-allah-store',
    name: 'subhan-allah-store.vercel.app',
    url: 'https://subhan-allah-store.vercel.app/',
    title: 'Subhan Allah Store',
    category: 'E-commerce & Retail Store',
    tagline: 'Modern online shopping store with complete product catalog and instant order processing.'
  },
  {
    id: 'mimi-web-employee-xi',
    name: 'mimi-web-employee-xi.vercel.app',
    url: 'https://mimi-web-employee-xi.vercel.app/',
    title: 'Mimi Web Portal Platform',
    category: 'Web Platform & Portal',
    tagline: 'Interactive web applications portal with responsive interfaces and digital service management.'
  },
  {
    id: 'mimi-web-developer',
    name: 'mimi-web-developer.vercel.app',
    url: 'https://mimi-web-developer.vercel.app/',
    title: 'Mimi Web Developer Live',
    category: 'Agency Portfolio & Services',
    tagline: 'Official high-speed web engineering service showcase with interactive packages and consultation tools.'
  },
  {
    id: 'meme-coin-elite',
    name: 'meme-coin-elite.vercel.app',
    url: 'https://meme-coin-elite.vercel.app/',
    title: 'Meme Coin Elite',
    category: 'Web3 & Digital Token Platform',
    tagline: 'High-performance crypto token portal featuring tokenomics visuals, interactive charts, and community hubs.'
  },
  {
    id: 'wok-on-wheels-1',
    name: 'wok-on-wheels-1.vercel.app',
    url: 'https://wok-on-wheels-1.vercel.app/',
    title: 'Wok On Wheels',
    category: 'Restaurant & Street Food',
    tagline: 'Appetizing culinary dining website with live interactive food menus, specials, and quick takeaway ordering.'
  },
  {
    id: 'bonbite-omega',
    name: 'bonbite-omega.vercel.app',
    url: 'https://bonbite-omega.vercel.app/',
    title: 'BonBite Cafe & Bistro',
    category: 'Cafe & Gourmet Dining',
    tagline: 'Artisanal dining and cafe experience portal with signature recipe showcases and booking reservations.'
  },
  {
    id: 'kf-furniture-house',
    name: 'kf-furniture-house.vercel.app',
    url: 'https://kf-furniture-house.vercel.app/',
    title: 'KF Furniture House',
    category: 'Furniture & Interior Showroom',
    tagline: 'Bespoke wood furniture showroom catalog with living room collections, custom dimensions, and instant quotes.'
  }
];
