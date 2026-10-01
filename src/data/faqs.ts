export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'timeline' | 'payment' | 'integration' | 'package' | 'technical';
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to prepare my website?',
    answer: 'Your website is normally prepared within 1–3 days, depending on the requirements and project details.',
    category: 'timeline'
  },
  {
    id: 'faq-2',
    question: 'How will I pay?',
    answer: 'Once your website is ready, we will contact you and show you the website. You can review it and request the included changes. Once you are satisfied with the final website, payment can be completed. After payment confirmation, your website can normally be made live within 1–3 hours.',
    category: 'payment'
  },
  {
    id: 'faq-3',
    question: 'Can you connect my website with my Google Business Profile?',
    answer: 'Yes. If you already have a Google Business Profile, we can connect your website with it where technically appropriate, without an additional connection fee.',
    category: 'integration'
  },
  {
    id: 'faq-4',
    question: 'Can you connect my website with my social media?',
    answer: 'Yes. Your existing social media profiles can be added to the website according to the selected package (YouTube, Facebook, TikTok, Instagram, X/Twitter, Telegram, and other custom links).',
    category: 'integration'
  },
  {
    id: 'faq-5',
    question: 'What if I have a small business?',
    answer: 'For a small business or small service, we recommend starting with the Starter Package. As your business grows, you can upgrade to a more advanced professional website.',
    category: 'package'
  },
  {
    id: 'faq-6',
    question: 'Can I use my own custom personal domain name?',
    answer: 'Yes! If you already own a personal domain (such as yourcompany.com), we can connect your website to it. Connection charges are PKR 499 for Starter, PKR 999 for Business, PKR 1,499 for Advance, and PKR 1,999 for Premium. Alternatively, if you purchase a 1-year professional domain through us for PKR 15,000, domain connection is completely free.',
    category: 'technical'
  },
  {
    id: 'faq-7',
    question: 'What is your policy on website revisions and changes?',
    answer: 'Minor changes and text adjustments are included free of charge during review. If the website has already been completed, approved, and launched, major structural, design, or functionality changes carry a clear fixed fee: Starter (PKR 499), Business (PKR 999), Advance (PKR 1,499), and Premium (PKR 1,999).',
    category: 'technical'
  },
  {
    id: 'faq-8',
    question: 'What if I have difficulty filling the requirements form?',
    answer: 'If you have any difficulty filling out the online requirements form, simply reach out to us on WhatsApp and send your business details, photos, or voice messages. Our team will guide you through the process.',
    category: 'package'
  },
  {
    id: 'faq-9',
    question: 'Will my website look great on mobile phones and tablets?',
    answer: 'Absolutely. Every website created by Mimi Web Developer Service is built with a responsive design philosophy, ensuring seamless presentation, quick loading speeds, and responsive typography across iPhones, Android devices, iPads, laptops, and desktop screens.',
    category: 'technical'
  }
];
