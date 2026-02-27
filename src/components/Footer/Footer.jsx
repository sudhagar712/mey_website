import React, { useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Phone, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (

        <footer className=" text-white shadow-lg border-t-100 border-white mt-4">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div data-aos="fade-up">
                    {/* Logo Section */}
                    {/* Removed brightness-0 invert to show original logo colors on light background */}
                    <Link to="/">
                        <img
                            src={logo}
                            alt="AJ Dento Aesthetic"
                            className="h-20 w-auto object-contain mb-6 "
                        />
                        <span className='text-yellow-500 text-sm font-bold tracking-widest mb-6'>AJ DENTO AESTHETIC CARE</span>
                    </Link>

                    <p className="mt-4 text-white text-sm leading-relaxed font-light">
                        Crafting Smiles with Precision. <br />
                        Premium dental care focused on early diagnosis,
                        precision treatment, and long-term oral health.
                    </p>
                </div>

                {/* Quick Links */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-sm uppercase text-yellow-400 font-bold tracking-widest mb-6">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link to="/" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Home</Link>
                        </li>

                        <li>
                            <Link to="/gallery" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Blog</Link>
                        </li>
                    </ul>
                </div>

                {/* Expertise */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-sm uppercase text-yellow-400 font-bold tracking-widest mb-6">
                        Expertise
                    </h3>

                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link to="#" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Root Canal Treatment</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Dental Implants</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Invisalign</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Cosmetic Dentistry</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div data-aos="fade-up" data-aos-delay="300">
                    <h3 className="text-sm uppercase text-yellow-400 font-bold tracking-widest mb-6">
                        Contact
                    </h3>

                    <div className="space-y-4 text-sm font-light">
                        <div className="flex items-start gap-3 group cursor-pointer">
                            <Phone size={18} className="text-[#D4AF37] mt-1" />
                            <span className="group-hover:text-yellow-400 transition-colors">+91 80984 49999</span>
                        </div>

                        <div className="flex items-start gap-3 group cursor-pointer">
                            <MapPin size={18} className="text-[#D4AF37] mt-1" />
                            <span className="group-hover:text-yellow-400 transition-colors">Anna Nagar, Chennai</span>
                        </div>


                        <div className="w-full h-32 rounded-lg overflow-hidden border border-[#D4AF37]/30 mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.175116744383!2d80.22129727409252!3d13.092089512316496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526431d49b77f9%3A0xcbbd307d145ba8fa!2s2%2F12%2C%201st%20Ave%2C%20L%20Block%2C%20Annanagar%20East%2C%20Chennai%2C%20Tamil%20Nadu%20600102!5e0!3m2!1sen!2sin!4v1708256306000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="AJ Dento Aesthetic Care Location"
                            ></iframe>
                        </div>




                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-300 bg-yellow-200 ">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-center items-center text-sm text-yellow-500 font-light gap-4">

                    <p className='text-black font-bold'>
                        © 2026 AJ Dento Aesthetic Care. All rights reserved.
                    </p>



                </div>
            </div>

        </footer>

    )

}
