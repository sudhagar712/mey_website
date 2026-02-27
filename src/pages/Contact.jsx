import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <div className="font-sans">
            {/* --- Premium Banner Section --- */}
            <div className="relative h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden bg-black">

                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 transform scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center mt-12">
                    <div className="flex flex-col items-center justify-center space-y-4">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/10 backdrop-blur-sm mb-2" data-aos="fade-down" data-aos-delay="100">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                            <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Enquiry Form</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] tracking-tight drop-shadow-2xl" data-aos="zoom-in" data-aos-delay="200">
                            Contact Us
                        </h1>

                        <div className="text-gray-300 text-sm md:text-base font-medium flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-[#D4AF37]">•</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Main Content Section --- */}
            <div className="py-20 lg:py-28  relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-bl-[200px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* --- Left Side: High Impact Copy --- */}
                        <div className="space-y-12 pt-10">

                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight" data-aos="fade-right">
                                    Let's Connect
                                </h2>

                                <div className="space-y-4">
                                    <p className="text-xl md:text-2xl text-white font-thin border-l-4 border-[#D4AF37] pl-6 py-1" data-aos="fade-right" data-aos-delay="200">
                                        Wait until discomfort forces action.
                                    </p>
                                    <p className="text-xl md:text-2xl text-white font-thin border-l-4 border-gray-200 pl-6 py-1" data-aos="fade-right" data-aos-delay="400">
                                        Or take control before it does.
                                    </p>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="grid grid-cols-1 gap-6 pt-8">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-[#FFF8E1] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Zero Waiting Time</h4>
                                        <p className="text-sm text-yellow-500">For scheduled priority appointments</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-[#FFF8E1] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Detailed Consultation</h4>
                                        <p className="text-sm text-yellow-500">Comprehensive analysis & treatment plan</p>
                                    </div>
                                </div>
                            </div>

                            {/* Location Snippet */}
                            <div className="flex items-center gap-3 text-gray-500 text-sm mt-8 border-t border-gray-100 pt-8">
                                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-white">No. 12, 1st Avenue, Anna Nagar East, Chennai</span>
                            </div>

                        </div>

                        {/* --- Right Side: Revenue Focused Form --- */}
                        {/* --- Right Side: Revenue Focused Form --- */}
                        <ContactForm />

                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-10 gap-3">
                    <h1 className="text-4xl font-bold text-center " >Visit us</h1>
                    <span className="text-xl font-bold text-center" >Find us map location</span>
                </div>


                {/* iframe map */}
                {/* iframe map - Centered & Resized */}
                <div className="w-full max-w-4xl mx-auto h-[350px] md:h-[400px] mb-10 mt-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">


                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.175116744383!2d80.22129727409252!3d13.092089512316496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526431d49b77f9%3A0xcbbd307d145ba8fa!2s2%2F12%2C%201st%20Ave%2C%20L%20Block%2C%20Annanagar%20East%2C%20Chennai%2C%20Tamil%20Nadu%20600102!5e0!3m2!1sen!2sin!4v1708256306000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) brightness(0.9)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AJ Dento Aesthetic Care Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;