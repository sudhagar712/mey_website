import React from 'react'
import Hero from '../components/Hero'

  import CAPABILITIES from '../components/CAPABILITIES'
import DIFFERENTIATOR from '../components/DIFFERENTIATOR'
import ContactForm from '../components/ContactForm'
import ContactSidebar from '../components/ContactSidebar'

const Home = () => {
  return (
    <div className="mt-30">
      <Hero />

      <CAPABILITIES />
      <DIFFERENTIATOR />
      <section className="bg-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1500px] mx-auto">
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
    </div>
  )
}

export default Home