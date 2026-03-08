import React from 'react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';

const Work = () => {
  return (
    <main className="w-full min-h-screen bg-[#fcfcfc]">
      <SEO
        title="Branding & Marketing Projects | MEY Chennai"
        description="Explore branding, social media, website and advertising projects delivered by MEY."
      />
      <PageBanner title="Our Work" breadcrumb="Work" />
    </main>
  );
};

export default Work;