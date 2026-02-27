import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p1 from "../assets/servicesimg/p1.jpg"
import p2 from"../assets/servicesimg/p2.jpg"
import p3 from "../assets/servicesimg/p3.jpg"
import p4 from "../assets/servicesimg/p4.png"

const testimonials = [
    {
        id: 1,
        name: "Shalini",
        text: "I visited for dental implants. The consultation was detailed, and every step was explained clearly before starting treatment.",
        rating: 4,
        role: "Regular Patient",
        image: p1
    },
    {
        id: 2,
        name: "John",
        text: "I chose Invisalign here after my assessment. The planning felt precise, and the process was structured.",
        rating: 4,
        role: "Orthodontics",
        image: p2
    },
    {
        id: 3,
        name: "Smriti",
        text: "My root canal treatment was handled professionally. The pain was addressed immediately, and follow-up was systematic.",
        rating: 5,
        role: "Cosmetic Dentistry",
        image: p3
    },
    {
        id: 4,
        name: "Nirmala",
        text: "My child's dental checkup was thorough. The approach was calm and well explained.",
        rating: 5,
        role: "Parent",
        image: p4
    },

];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            let newItemsPerPage = 1;
            if (window.innerWidth >= 1024) {
                newItemsPerPage = 3;
            } else if (window.innerWidth >= 768) {
                newItemsPerPage = 2;
            }
            setItemsPerPage(newItemsPerPage);

            // Adjust current index to prevent overflow when resizing
            setCurrentIndex(prev => {
                const maxIdx = testimonials.length - newItemsPerPage;
                return Math.min(prev, maxIdx < 0 ? 0 : maxIdx);
            });
        };

        AOS.init({
            duration: 600,
            once: false,
            easing: 'ease-out-cubic'
        });

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? maxIndex : prevIndex - 1
        );
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [itemsPerPage, maxIndex]);

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-50">


            <div className="relative max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16 lg:mb-20 space-y-4" data-aos="fade-up">
                    <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#4D0013] drop-shadow-sm" data-aos="zoom-in" data-aos-delay="100">
                        Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B5952F]">Smiles</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full" data-aos="fade-right" data-aos-delay="200"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light" data-aos="fade-up" data-aos-delay="300">
                        Real experiences from our valued patients. Discover why AJ Dento is the trusted choice for dental care.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative" data-aos="fade-up" data-aos-delay="400">

                    {/* Navigation Buttons (Desktop: Outside, Mobile: Hidden/Bottom) */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center text-[#4D0013] hover:bg-[#4D0013] hover:text-white hover:scale-110 transition-all duration-300 group focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center text-[#4D0013] hover:bg-[#4D0013] hover:text-white hover:scale-110 transition-all duration-300 group focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Slider Wrapper */}
                    <div className="overflow-hidden px-2 -mx-2 pb-12 -mb-12"> {/* Padding Bottom for shadow */}
                        <div
                            className="flex transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1) py-10"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                        >
                            {testimonials.map((testimonial, index) => {
                                // Calculate position relative to the active window
                                const position = index - currentIndex;

                                // Determing specific styles based on position and items per page
                                let cardStyle = {};
                                let cardClass = "h-full bg-white rounded-3xl p-8 lg:p-10 transition-all duration-700 border border-gray-100 flex flex-col relative";

                                if (itemsPerPage >= 3) {
                                    if (position === 1) {
                                        // Center Card
                                        cardClass += " shadow-[0_20px_50px_rgba(212,175,55,0.15)] border-[#D4AF37] z-20 opacity-100 scale-100"; // Base scale is managed by transform
                                        cardStyle = {
                                            transform: 'scale(1.1)',
                                        };
                                    } else if (position === 0) {
                                        // Left Card
                                        cardClass += " shadow-none opacity-60 z-10 grayscale-[30%]";
                                        cardStyle = {
                                            transform: 'scale(0.85) perspective(1000px) rotateY(-25deg)',
                                            transformOrigin: 'right center'
                                        };
                                    } else if (position === 2) {
                                        // Right Card
                                        cardClass += " shadow-none opacity-60 z-10 grayscale-[30%]";
                                        cardStyle = {
                                            transform: 'scale(0.85) perspective(1000px) rotateY(25deg)',
                                            transformOrigin: 'left center'
                                        };
                                    } else {
                                        // Cards outside the view
                                        cardClass += " opacity-0 scale-75";
                                    }
                                } else {
                                    // Mobile / Tablet logic (Standard cards)
                                    cardClass += " shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-[#D4AF37]/30";
                                }

                                return (
                                    <div
                                        key={testimonial.id}
                                        className="flex-shrink-0 px-3 lg:px-4"
                                        style={{ width: `${100 / itemsPerPage}%` }}
                                    >
                                        <div
                                            className={cardClass}
                                            style={cardStyle}
                                        >

                                            {/* Large Quote Mark */}
                                            <div className="absolute top-6 right-8 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-colors duration-500 scale-150 transform origin-top-right">
                                                <Quote size={64} fill="currentColor" className="rotate-180" />
                                            </div>

                                            {/* Rating Stars */}
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37] drop-shadow-sm" />
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <blockquote className="text-gray-600 leading-relaxed text-lg mb-8 flex-grow font-light italic relative z-10">
                                                "{testimonial.text}"
                                            </blockquote>

                                            {/* Author Profile */}
                                            <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                                                {/* Avatar Image */}
                                                <div className="w-14 h-14 rounded-full ring-2 ring-[#D4AF37] ring-offset-2 shadow-md shrink-0 overflow-hidden">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                </div>

                                                <div>
                                                    <cite className="not-italic font-bold text-[#4D0013] text-lg block mb-0.5">
                                                        {testimonial.name}
                                                    </cite>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-8 lg:mt-12">
                        {Array.from({ length: Math.max(1, testimonials.length - itemsPerPage + 1) }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all duration-300 rounded-full h-3 ${currentIndex === idx ? 'w-10 bg-[#D4AF37] shadow-md scale-110' : 'w-3 bg-gray-300 hover:bg-[#D4AF37]/40'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;