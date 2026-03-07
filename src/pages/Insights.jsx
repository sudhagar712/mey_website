import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
    {
        id: 'branding-vs-marketing-agency',
        title: 'Branding Agency vs Marketing Agency: What’s the Difference?',
        excerpt: 'Many businesses confuse branding agencies with marketing agencies. Understanding the difference helps you make better investments for your business growth.',
        readTime: '7 min read',
        category: 'Branding',
        date: 'Mar 2024',
        featured: true,
    },
    {
        id: 'social-media-strategy-matters',
        title: 'Why Social Media Strategy Matters More Than Posting Frequency',
        excerpt: 'Most businesses post on social media without a strategy. Here’s why that approach burns budget and what a structured approach looks like.',
        readTime: '6 min read',
        category: 'Social Media',
        date: 'Feb 2024',
    },
    {
        id: 'website-design-mistakes',
        title: 'Website Design Mistakes Businesses Make (And How to Fix Them)',
        excerpt: 'A beautiful website that doesn’t convert is a liability. These are the most common design and structural mistakes we see—and the fixes.',
        readTime: '8 min read',
        category: 'Website',
        date: 'Jan 2024',
    },
    {
        id: 'roi-of-minimalism',
        title: 'The ROI of Minimalist Design',
        excerpt: 'Why clean, uncluttered design language actually converts better and builds longer-lasting trust with premium customers.',
        readTime: '5 min read',
        category: 'Design',
        date: 'Dec 2023',
    },
    {
        id: 'outdoor-advertising-digital-age',
        title: 'Does Outdoor Advertising Still Work in the Digital Age?',
        excerpt: 'Hoardings and digital ads serve two entirely different purposes. How to blend physical impact with digital tracking.',
        readTime: '6 min read',
        category: 'Strategy',
        date: 'Nov 2023',
    },
];

const Insights = () => {
    const featured = articles.find(a => a.featured);
    const regular = articles.filter(a => !a.featured);

    return (
        <main>
            <section className="page-hero">
                <div className="container">
                    <span className="section-tag section-tag--yellow">Journal</span>
                    <h1 className="section-title text-[clamp(2.5rem,6vw,5rem)] text-white max-w-[700px] mb-6 leading-tight">
                        Agency Insights
                    </h1>
                    <p className="text-white/55 font-sans text-[1.05rem] max-w-[560px] leading-relaxed">
                        Our thoughts on building strong brands, designing clear systems, and navigating the digital marketing landscape in Chennai.
                    </p>
                </div>
            </section>

            <section className="bg-black py-20 pb-32">
                <div className="container">

                    {/* Featured Article */}
                    {featured && (
                        <div className="group block no-underline mb-24 cursor-pointer">
                            <span className="section-tag section-tag--yellow mb-8 block">Featured Reading</span>
                            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 items-center">

                                {/* Image Placeholder */}
                                <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10 w-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--yellow)]/10 to-transparent" />
                                    <span className="font-display italic text-[2.5rem] text-white/15">
                                        {featured.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex gap-4 items-center mb-6">
                                        <span className="font-sans text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--yellow)]">
                                            {featured.category}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span className="font-sans text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white/30">
                                            {featured.readTime}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span className="font-sans text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white/30">
                                            {featured.date}
                                        </span>
                                    </div>

                                    <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight text-white leading-tight mb-5 transition-colors duration-200 group-hover:text-[var(--yellow)]">
                                        {featured.title}
                                    </h2>
                                    <p className="font-sans text-[1.05rem] leading-relaxed text-white/55 mb-8">
                                        {featured.excerpt}
                                    </p>

                                    <div className="inline-flex items-center gap-2 font-sans text-[0.82rem] font-bold tracking-[0.1em] uppercase text-white border-b border-white/30 pb-0.5 transition-colors duration-200 group-hover:text-[var(--yellow)] group-hover:border-[var(--yellow)]">
                                        Read Article &rarr;
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Grid Articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                        {regular.map(article => (
                            <div
                                key={article.id}
                                className="group flex flex-col pt-6 border-t border-white/10 cursor-pointer"
                            >
                                <div className="flex justify-between items-center mb-5">
                                    <span className="font-sans text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--yellow)]">
                                        {article.category}
                                    </span>
                                    <div className="flex gap-3">
                                        <span className="font-sans text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/30">
                                            {article.date}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="font-display text-[1.4rem] font-bold tracking-tight text-white mb-3 transition-colors duration-200 group-hover:text-[var(--yellow)]">
                                    {article.title}
                                </h3>

                                <p className="font-sans text-[0.9rem] leading-[1.6] text-white/50 mb-6 flex-grow">
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <div className="inline-flex items-center gap-2 font-sans text-[0.75rem] font-bold tracking-[0.1em] uppercase text-white/75 transition-colors duration-200 group-hover:text-[var(--yellow)]">
                                        Read Article &rarr;
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA Strip */}
            <section className="section-yellow text-center py-24">
                <div className="container">
                    <p className="font-sans text-[0.75rem] font-bold tracking-[0.18em] uppercase text-black/40 mb-3">
                        Newsletter
                    </p>
                    <h2 className="section-title text-[clamp(2rem,4vw,3rem)] text-black mb-6">
                        Get clarity delivered.
                    </h2>
                    <p className="text-black/55 font-sans text-[0.95rem] mb-10 max-w-[480px] mx-auto">
                        Once a month, we send an email on branding, growth, and design strategy. No spam.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-5 py-4 bg-black/5 border border-black/10 rounded-lg font-sans text-[0.9rem] text-black w-full outline-none focus:border-black/30 placeholder:text-black/30"
                            required
                        />
                        <button type="submit" className="btn-primary py-4 whitespace-nowrap">Subscribe</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Insights;
