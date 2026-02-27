import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const statsData = [
    {
        id: 1,
        value: 1000,
        suffix: '+',
        label: 'Consultations',
    },
    {
        id: 2,
        value: 500,
        suffix: '+',
        label: 'Restorative Cases',
    },
    {
        id: 3,
        value: 300,
        suffix: '+',
        label: 'Alignment Cases',
    },
    {
        id: 4,
        value: 98,
        suffix: '%',
        label: 'Patient Satisfaction',
    },
];

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                    setCount(0);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            setCount(Math.floor(end * easeOutQuart));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const Stats = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <section className="bg-white py-16 md:py-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statsData.map((stat, index) => (
                        <div
                            key={stat.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-2 group text-center"
                        >
                            {/* Decorative line */}
                            <div className="w-8 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6 group-hover:w-16 transition-all duration-300"></div>

                            {/* Number */}
                            <div className="flex items-center justify-center font-serif text-[#4D0013] mb-2">
                                <span className="text-4xl md:text-5xl font-bold tracking-tight">
                                    <Counter end={stat.value} />
                                </span>
                                <span className="text-[#D4AF37] text-2xl md:text-3xl ml-1 font-light">{stat.suffix}</span>
                            </div>

                            {/* Label */}
                            <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold group-hover:text-[#4D0013] transition-colors duration-300">
                                {stat.label}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;