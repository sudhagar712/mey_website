import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import { Clock, ShieldCheck, Smile } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Finalcontent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <section id="contact-section" className="py-24 md:py-32 px-4 relative overflow-hidden ">

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4D0013]/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24  relative z-10">

                {/* Left Side - Compelling Copy */}
                <div className="order-2 lg:order-1 text-center lg:text-left space-y-10 relative">

                    <div className="space-y-6" data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/10 backdrop-blur-sm mx-auto lg:mx-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Book Your Visit</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1]" data-aos="fade-up" data-aos-delay="200">
                            Your smile deserves protection<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">before damage</span>
                        </h2>



                        <p className="text-yellow-600 uppercase font-bold text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="400">
                            AJ dento aesthetic care
                        </p>

                        <p className="text-gray-100 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Anna Nagar, Chennai
                        </p>
                    </div>


                </div>

                {/* Right Side - Form */}
                <section className="order-1 lg:order-2" data-aos="zoom-in" data-aos-delay="300">

                    <div className="w-full relative ">
                        {/* Decorative element behind form */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#4D0013]/20 rounded-[2.5rem] blur-xl opacity-50 -z-10"></div>
                        <ContactForm />
                    </div>

                </section>


            </div>
        </section>
    )
}

export default Finalcontent;