import React from 'react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import ContactSidebar from '../components/ContactSidebar';

const serviceOptions = [
    'Brand Identity Design',
    'Social Media Marketing',
    'Website Design & Development',
    'Video Production',
    'Performance Marketing',
    'Outdoor Advertising',
    'Multiple Services',
    'Not sure yet',
];

const budgetOptions = [
    'Under ₹25,000',
    '₹25,000 – ₹75,000',
    '₹75,000 – ₹2,00,000',
    '₹2,00,000+',
    'Let’s discuss',
];

const Contact = () => {

    return (
      <main>
        <SEO
          title="Contact MEY | Branding & Marketing Agency Chennai"
          description="Contact MEY to start your next branding or digital marketing project with us."
        />
        {/* 1. Page Banner */}
        <PageBanner
          breadcrumb="Contact"
          bgImage="https://i.pinimg.com/1200x/da/a6/0a/daa60a6f17f98c28ed50f47b1c144b0c.jpg"
        />

        {/* Main Contact Section */}
        <section className=" pt-15 pb-28 bg-black relative">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
          />
          <div className="md:px-10 ">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
              {/* Sidebar Column (Left) */}
              <div className="w-full p-2 order-2 lg:order-1">
                <ContactSidebar />
              </div>

              {/* Form Column (Right) */}
              <div className="w-full p-2 order-1 lg:order-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="relative bg-black w-full h-[300px] md:h-[500px] lg:h-[600px] md:px-10 shadow-lg  overflow-hidden">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6042118807945!2d80.24194607454788!3d13.06084631291643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526668672d75f1%3A0x168bf45159b6b928!2s11%2C%20Jagannathan%20St%2C%20Ponnangipuram%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1773601855935!5m2!1sen!2sin"
            className="w-full h-full filter p-2 md:p-5 grayscale contrast-125 brightness-90"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="MEY Location"
          ></iframe>

          {/* 🔴 Custom Red Pin */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-5 h-5 bg-red-500 rounded-full shadow-lg animate-ping"></div>
            <div className="absolute w-4 h-4 bg-red-600 rounded-full"></div>
          </div>
        </section>
      </main>
    );
};

export default Contact;
