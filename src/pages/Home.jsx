import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import SmartConversations from '../components/SmartConversations'
import { Element } from "react-scroll";
import CAPABILITIES from '../components/CAPABILITIES'
import DIFFERENTIATOR from '../components/DIFFERENTIATOR'
import ContactForm from '../components/ContactForm'
import ContactSidebar from '../components/ContactSidebar'

const Home = () => {
  return (
    <div className="mt-30">
      <SEO
        title="MEY | Branding & Digital Marketing Agency in Chennai"
        description="MEY is a premium branding and digital marketing agency in Chennai offering brand identity, social media management, website development, performance marketing and outdoor advertising."
      />
      <Hero />
      <SmartConversations />
      <CAPABILITIES />
      <DIFFERENTIATOR />
      <section className="bg-white py-24  md:px-12 lg:px-24">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            {/* Sidebar Column (Left) */}
            <div className="w-full">
              <ContactSidebar />
            </div>

            {/* Form Column (Right) */}
            <div className="w-full">
              <Element name="contact">
                <ContactForm />
              </Element>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full  h-[500px] bg-white  md:px-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5493060592915!2d80.201460314823!3d13.064372290795495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52669b3f9dc3eb%3A0x6e2697b0a708eb6c!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711204856037!5m2!1sen!2sin"
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
    </div>
  );
}

export default Home