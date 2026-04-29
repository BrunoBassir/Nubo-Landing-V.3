/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Hero, HowItWorks, PointSystem } from './components/Sections';
import { PrizesShowcase, CommunityRanking, PassportSection, MerchantsSection, FAQ, LeadCaptureSection, FinalCTA, Footer, Nav } from './components/MoreSections';
import { ComingSoonModal } from './components/ComingSoonModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTA = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bgDark text-onSurface relative overflow-x-hidden">
      <Nav onCTA={handleCTA} />
      <Hero onCTA={handleCTA} />
      <HowItWorks />
      <PointSystem />
      <PrizesShowcase />
      <CommunityRanking />
      <PassportSection />
      <MerchantsSection />
      <FAQ />
      <LeadCaptureSection />
      <FinalCTA onCTA={handleCTA} />
      <Footer />
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

