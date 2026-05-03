/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Hero, HowItWorks, PointSystem } from './components/Sections';
import { PrizesShowcase, CommunityRanking, PassportSection, MerchantsSection, FAQ, LeadCaptureSection, FinalCTA, Footer, Nav } from './components/MoreSections';
import { ComingSoonModal } from './components/ComingSoonModal';
import { AboutModal } from './components/AboutModal';
import { MerchantDashboard } from './components/MerchantDashboard';
import { MerchantLanding } from './components/MerchantLanding';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [view, setView] = useState<'landing' | 'merchant-landing' | 'merchant-dashboard'>('landing');

  const handleCTA = () => {
    setIsModalOpen(true);
  };

  const handleAbout = () => {
    setIsAboutModalOpen(true);
  };

  if (view === 'merchant-dashboard') {
    return <MerchantDashboard onLogout={() => setView('merchant-landing')} />;
  }

  if (view === 'merchant-landing') {
    return <MerchantLanding onAccessDashboard={() => setView('merchant-dashboard')} onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-bgDark text-onSurface relative overflow-x-hidden">
      <Nav onCTA={handleCTA} onMerchantLogin={() => setView('merchant-landing')} />
      <Hero onCTA={handleCTA} />
      <HowItWorks />
      <PointSystem />
      <PrizesShowcase />
      <CommunityRanking />
      <PassportSection />
      <MerchantsSection onAccessDashboard={() => setView('merchant-dashboard')} onMerchantLanding={() => setView('merchant-landing')} />
      <FAQ />
      <LeadCaptureSection />
      <FinalCTA onCTA={handleCTA} />
      <Footer onOpenAbout={handleAbout} />
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </div>
  );
}

