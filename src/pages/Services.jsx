import React from 'react';
import PageBanner from '../components/PageBanner';
import DIFFERENTIATOR from '../components/DIFFERENTIATOR';

const Services = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <PageBanner title="Our Services" breadcrumb="Services" />
      {/* The DIFFERENTIATOR component contains Why MEY, Select Clients, and the Final CTA exactly as requesting */}
      <DIFFERENTIATOR />
    </main>
  );
};

export default Services;