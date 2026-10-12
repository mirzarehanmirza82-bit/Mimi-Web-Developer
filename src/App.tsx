import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CooperationNoticeBanner } from './components/CooperationNoticeBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { GalleryPage } from './pages/GalleryPage';
import { RequirementsPage } from './pages/RequirementsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CouponPage } from './pages/CouponPage';
import { CommunityPage } from './pages/CommunityPage';
import { ProjectPage } from './pages/ProjectPage';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);
  const [selectedWebsiteStyle, setSelectedWebsiteStyle] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageId, pkg?: string, websiteStyle?: string) => {
    setCurrentPage(page);
    if (pkg) setSelectedPackage(pkg);
    if (websiteStyle) setSelectedWebsiteStyle(websiteStyle);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Opening Animation / Intro Screen (Section 2) */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Continuous Update Notice Banner */}
      <CooperationNoticeBanner />

      {/* Persistent Sticky Navbar (Section 3) */}
      <Navbar currentPage={currentPage} onNavigate={(page) => handleNavigate(page)} />

      {/* Main Multi-Page Content with smooth transitions */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {currentPage === 'packages' && (
          <PackagesPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'requirements' && (
          <RequirementsPage
            initialPackage={selectedPackage}
            initialWebsiteStyle={selectedWebsiteStyle}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'faq' && (
          <FAQPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'terms' && (
          <TermsPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'coupon' && (
          <CouponPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'community' && (
          <CommunityPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'project' && (
          <ProjectPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Persistent Comprehensive Footer (Section 23) */}
      <Footer onNavigate={(page) => handleNavigate(page)} />
    </div>
  );
}
