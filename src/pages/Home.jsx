import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import SmartConversations from '../components/SmartConversations'
import { Element } from "react-scroll";
import CAPABILITIES from '../components/CAPABILITIES'
import DIFFERENTIATOR from '../components/DIFFERENTIATOR'
import ContactForm from '../components/ContactForm'
import ContactSidebar from '../components/ContactSidebar'
// import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <div className="">
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
            <div className="w-full order-2 lg:order-1 p-2">
              <ContactSidebar />
            </div>

            {/* Form Column (Right) */}
            <div className="w-full lg:order-2 order-1 p-3 md:p-0">
              <Element name="contact">
                <ContactForm />
              </Element>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
     <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] md:px-10 rounded-2xl shadow-lg mb-3 overflow-hidden">
  
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6042118807945!2d80.24194607454788!3d13.06084631291643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526668672d75f1%3A0x168bf45159b6b928!2s11%2C%20Jagannathan%20St%2C%20Ponnangipuram%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1773601855935!5m2!1sen!2sin"
    className="w-full h-full filter grayscale contrast-125 brightness-90"
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
    </div>
  );
}

export default Home