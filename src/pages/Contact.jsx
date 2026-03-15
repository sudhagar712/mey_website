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
        <PageBanner title="Contact Us" breadcrumb="Contact" />

        {/* Main Contact Section */}
        <section className=" pt-20 pb-28 bg-white">
          <div className="container md:px-10 ">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
              {/* Sidebar Column (Left) */}
              <div className="w-full">
                <ContactSidebar />
              </div>

              {/* Form Column (Right) */}
              <div className="w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="w-full  h-[500px] bg-white  md:px-10 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6042118807945!2d80.24194607454788!3d13.06084631291643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526668672d75f1%3A0x168bf45159b6b928!2s11%2C%20Jagannathan%20St%2C%20Ponnangipuram%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1773601855935!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="MEY Location"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale saturate-0 contrast-125 p-10"
          ></iframe>
        </section>
      </main>
    );
};

export default Contact;
