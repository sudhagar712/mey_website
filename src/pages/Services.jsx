import React from 'react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import DIFFERENTIATOR from '../components/DIFFERENTIATOR';

const Services = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <SEO
        title="Branding, Social Media & Website Design Services in Chennai | MEY"
        description="Explore MEY’s branding, social media marketing, website development, video production and advertising services in Chennai."
      />
      <PageBanner title="Our Services" breadcrumb="Services" />
      {/* The DIFFERENTIATOR component contains Why MEY, Select Clients, and the Final CTA exactly as requesting */}
      <DIFFERENTIATOR />
    </main>
  );
};

export default Services;