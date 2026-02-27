import React, { useState } from 'react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import s1 from "../assets/servicesimg/1.webp"
import s2 from "../assets/servicesimg/2.jpg"
import s3 from "../assets/servicesimg/3.jpg"
import s4 from "../assets/servicesimg/4.jpeg"
import s5 from "../assets/servicesimg/5.webp"
import s6 from "../assets/servicesimg/6.jpg"




const services = [
    {
        id: 1,
        title: "Root Canal Treatment",
        description: "Precisely treating infection to save your natural tooth.",
        image: s1,
        content: {
            title: "Root Canal Treatment in Anna Nagar, Chennai",
            p1: "Tooth pain is often a signal of infection deep within the tooth structure. Root canal treatment is a restorative procedure designed to remove infected pulp tissue, disinfect the canal system, and seal the tooth to prevent reinfection. At AJ Dento Aesthetic Care in Anna Nagar, we approach root canal treatment with precision-driven planning supported by digital X-ray diagnostics.",
            p2: "When bacteria enter the inner layers of a tooth due to decay, cracks, or trauma, inflammation and discomfort may follow. Early intervention prevents further complications and helps preserve the natural tooth. Our process begins with detailed clinical evaluation to assess the extent of infection. The infected pulp tissue is carefully removed, the canal is cleaned and disinfected, and the tooth is sealed. When required, a crown is placed to restore structural strength.",
            p3: "Modern techniques and controlled anesthesia ensure that treatment is focused on relieving pain rather than causing it. Root canal therapy allows patients in Anna Nagar and Chennai to retain their natural teeth while restoring function and comfort. Consultation and evaluation determine the appropriate treatment pathway and long-term care plan."
        }
    },
    {
        id: 2,
        title: "Dental Implants",
        description: "Restoring function and aesthetics with stable foundations.",
        image: s2,
        content: {
            title: "Dental Implants in Anna Nagar, Chennai",
            p1: "Dental implants are advanced tooth replacement solutions designed to restore both function and aesthetics. They integrate with the jawbone and serve as stable foundations for crowns, bridges, or full-arch restorations. At AJ Dento Aesthetic Care in Anna Nagar, implant dentistry is planned through detailed evaluation and digital diagnostics to ensure structural accuracy.",
            p2: "Implants are often recommended for individuals with missing teeth who seek a long-term, fixed alternative to removable dentures. The process begins with clinical examination and imaging to evaluate bone support and overall oral health. After structured planning, the implant fixture is placed precisely within the jawbone. Following a healing phase that allows integration with bone, the final restoration is secured to complete the process.",
            p3: "Implant-based rehabilitation restores chewing efficiency, preserves jawbone structure, and enhances smile confidence. Each implant case is customized based on anatomical considerations and long-term stability goals. Consultation ensures clarity before treatment begins."
        }
    },
    {
        id: 3,
        title: "Invisalign",
        description: "Discreet clear aligners for modern smile correction.",
        image: s3,
        content: {
            title: "Invisalign in Anna Nagar, Chennai",
            p1: "Invisalign treatment uses clear, removable aligners to gradually reposition teeth without visible metal brackets. At AJ Dento Aesthetic Care in Anna Nagar, Invisalign planning begins with structured orthodontic assessment supported by diagnostic evaluation.",
            p2: "Clear aligners are often chosen by working professionals, college students, and adults seeking discreet smile correction. Treatment is designed to address mild to moderate crowding, spacing, or bite alignment concerns. Each aligner is custom fabricated to guide tooth movement progressively, with periodic monitoring to ensure controlled alignment.",
            p3: "Unlike traditional braces, aligners are removable, allowing easier oral hygiene and minimal disruption to daily life. Treatment duration varies depending on alignment complexity and patient compliance. Invisalign offers a modern approach to orthodontic correction while maintaining aesthetic discretion. Consultation determines suitability and expected outcomes."
        }
    },
    {
        id: 4,
        title: "Laser Periodontal Care",
        description: "Advanced gum treatment for health and precision.",
        image: s4,
        content: {
            title: "Laser Periodontal Care",
            p1: "Advanced laser technology provides a minimally invasive option for treating gum disease and enhancing oral health. Our procedures prioritize patient comfort and rapid healing.",
            p2: "From deep cleaning to gum contouring, laser therapy offers precision that traditional methods often cannot match. This reduces recovery time and improves overall treatment outcomes.",
            p3: "We evaluate each patient's periodontal health to determine the most effective laser treatment plan, ensuring long-term stability and aesthetics."
        }
    },
    {
        id: 5,
        title: "Cosmetic Dentistry",
        description: "Crafting smiles that enhance your natural beauty.",
        image: s5,
        content: {
            title: "Cosmetic Dentistry",
            p1: "Our cosmetic solutions range from teeth whitening to veneers, designed to enhance the appearance of your smile while maintaining natural harmony.",
            p2: "We use high-quality materials and digital smile design principles to create results that are both beautiful and functional.",
            p3: "Consultation allows us to understand your aesthetic goals and create a personalized treatment plan that transforms your smile confidence."
        }
    },
    {
        id: 6,
        title: "Pediatric Dentistry",
        description: "Gentle, specialized care for growing smiles.",
        image: s6,
        content: {
            title: "Pediatric Dentistry",
            p1: "We provide a welcoming and safe environment for children, focusing on preventive care and early education for lifelong oral health.",
            p2: "Our team is trained to manage the unique dental needs of children, from routine checkups to cavity management, with a gentle approach.",
            p3: "Building trust early ensures that children grow up with positive associations with dental care, fostering healthy habits for the future."
        }
    }

];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 25, stiffness: 300 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const ServicesCard = () => {
    const [activeService, setActiveService] = useState(null);

    const openModal = (service) => {
        setActiveService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setActiveService(null);
        document.body.style.overflow = 'unset';
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = services.findIndex(s => s.id === activeService.id);
        const nextIndex = (currentIndex + 1) % services.length;
        setActiveService(services[nextIndex]);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = services.findIndex(s => s.id === activeService.id);
        const prevIndex = (currentIndex - 1 + services.length) % services.length;
        setActiveService(services[prevIndex]);
    };

    return (

        <section className="bg-white py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            onClick={() => openModal(service)}
                            className="bg-black border border-white/20 h-72 flex flex-col justify-end cursor-pointer group hover:border-[#D4AF37]/50 transition-all duration-700 relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10"
                        >
                            {/* Background Image with Gradient Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 ease-out"
                                style={{ backgroundImage: `url(${service.image})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/60 transition-colors duration-700"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-6 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0 text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-300 drop-shadow-md">
                                    {service.title}
                                </h3>

                                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                    <div className="w-12 h-[1px] bg-[#D4AF37]/70 mt-3 mb-3 mx-auto md:mx-0 group-hover:w-16 transition-all duration-500"></div>
                                    <p className="text-gray-300 text-xs font-light tracking-wide drop-shadow-sm mb-3 line-clamp-2">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold">
                                        Read More <ArrowUpRight size={12} />
                                    </span>
                                </div>
                            </div>

                            {/* Corner Icon */}
                            <div className="absolute top-4 right-4 z-20 p-2 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
                                <ArrowUpRight className="text-white" size={16} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeService && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                            onClick={closeModal}
                        ></motion.div>

                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row group/modal"
                        >

                            {/* Navigation Buttons */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-black/50 backdrop-blur-md rounded-full text-white hover:scale-110 transition-all duration-300 border border-white/20 hidden md:block"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/5 hover:bg-black/50 backdrop-blur-md rounded-full text-[#4D0013] hover:text-white hover:scale-110 transition-all duration-300 border border-[#4D0013]/10 hover:border-white/20 hidden md:block"
                            >
                                <ChevronRight size={24} />
                            </button>

                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2  bg-[#4D0013] text-white transition-colors rounded-full z-50 hover:bg-[#3a000e]"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Left: Image */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src={activeService.image}
                                    alt={activeService.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>

                                {/* Mobile Nav Overlay */}
                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:hidden">
                                    <button onClick={handlePrev} className="p-2 bg-black/30 rounded-full text-white backdrop-blur-sm"><ChevronLeft size={20} /></button>
                                    <button onClick={handleNext} className="p-2 bg-black/30 rounded-full text-white backdrop-blur-sm"><ChevronRight size={20} /></button>
                                </div>
                            </div>

                            {/* Modal Right: Content */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white">
                                <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                                    Service Detail
                                </span>

                                <h2 className="text-3xl md:text-5xl font-serif text-[#4D0013] mb-8 leading-tight">
                                    {activeService.content.title}
                                </h2>

                                <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                                    <p>{activeService.content.p1}</p>
                                    <p>{activeService.content.p2}</p>
                                    <p>{activeService.content.p3}</p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <Link
                                        to="/contact"
                                        onClick={closeModal}
                                        className="inline-flex items-center gap-3 bg-[#4D0013] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#3a000e] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300 w-full md:w-auto justify-center rounded-xl"
                                    >
                                        Book Your Consultation
                                        <ArrowUpRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ServicesCard;