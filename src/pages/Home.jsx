import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import SmartConversations from '../components/SmartConversations'
import { Element } from "react-scroll";
import CAPABILITIES from '../components/CAPABILITIES'
import DIFFERENTIATOR from '../components/DIFFERENTIATOR'
import ContactForm from '../components/ContactForm'
import ContactSidebar from '../components/ContactSidebar'
// import Mobileui from '../components/Mobileui';
// import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <div>
      <SEO
        title="MEY | Best Branding & Digital Marketing Agency in Chennai"
        description="MEY is Chennai's #1 branding and digital marketing agency. We offer brand identity design, social media marketing, website development, performance marketing, video production and outdoor advertising. Call +91 8939009966."
        keywords="MEY, MEY digital marketing, MEY branding, digital marketing agency Chennai, branding agency Chennai, social media marketing Chennai, website design Chennai, performance marketing Chennai, best marketing agency Chennai"
      />
      <Hero />
      <div >
        <SmartConversations />
      </div>
      {/* 
      <Mobileui/> */}

      <CAPABILITIES />

      <DIFFERENTIATOR />

      <section className="bg-black py-24 md:py-32 px-6 md:px-12 relative flex justify-center">
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sidebar Column (Left) */}
            <div className="w-full lg:col-span-5 order-2 lg:order-1">
              <ContactSidebar />
            </div>

            {/* Form Column (Right) */}
            <div className="w-full lg:col-span-7 order-1 lg:order-2 p-3 md:p-0">
              <Element name="contact">
                <ContactForm />
              </Element>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="relative  bg-black w-full h-[300px] md:h-[500px] lg:h-[600px] md:px-10  shadow-lg  overflow-hidden">
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
          className="w-full h-full p-2 filter grayscale contrast-125 brightness-90"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="MEY Location"
        ></iframe>

     
      </section>
    </div>
  );
}

export default Home