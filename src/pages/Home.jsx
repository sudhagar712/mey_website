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
      <section className="w-full  h-[500px]   md:px-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6042118807945!2d80.24194607454788!3d13.06084631291643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526668672d75f1%3A0x168bf45159b6b928!2s11%2C%20Jagannathan%20St%2C%20Ponnangipuram%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1773601855935!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="MEY Location"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter p-10"
        ></iframe>
      </section>
    </div>
  );
}

export default Home