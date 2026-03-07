import React, { useState } from 'react';

const serviceOptions = [
    'Brand Identity Design',
    'Social Media Marketing',
    'Website Design & Development',
    'Video Production',
    'Performance Marketing',
    'Outdoor Advertising',
    'Multiple Services',
    'Not sure yet',
];

const budgetOptions = [
    'Under ₹25,000',
    '₹25,000 – ₹75,000',
    '₹75,000 – ₹2,00,000',
    '₹2,00,000+',
    'Let’s discuss',
];

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        budget: '',
        details: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, connect to form backend
        setSubmitted(true);
    };

    return (
        <main>
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="section-tag section-tag--yellow">Get in Touch</span>
                    <h1 className="section-title text-[clamp(2.5rem,6vw,5rem)] text-white mb-6">
                        Start Your Project
                    </h1>
                    <p className="text-white/50 font-sans text-base max-w-[480px] leading-relaxed">
                        Tell us about your business and goals. We'll respond within 24 hours.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="bg-black pt-20 pb-28">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-20 items-start">

                        {/* Form Column */}
                        <div className="w-full">
                            {submitted ? (
                                <div className="bg-[var(--yellow)]/10 border border-[var(--yellow)]/25 rounded-[var(--radius-lg)] p-16 text-center">
                                    <div className="w-16 h-16 rounded-full bg-[var(--yellow)]/15 flex items-center justify-center mx-auto mb-6 text-3xl text-[var(--yellow)]">
                                        ✓
                                    </div>
                                    <h2 className="font-display text-3xl text-white mb-3 tracking-tight">
                                        Message Received
                                    </h2>
                                    <p className="text-white/50 font-sans leading-relaxed">
                                        Thank you for reaching out. We'll review your brief and get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} id="contact-form" noValidate className="w-full">

                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label htmlFor="contact-name" className="form-label">Your Name *</label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                className="form-field"
                                                placeholder="Full Name"
                                                required
                                                aria-required="true"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-company" className="form-label">Company</label>
                                            <input
                                                id="contact-company"
                                                type="text"
                                                name="company"
                                                value={form.company}
                                                onChange={handleChange}
                                                className="form-field"
                                                placeholder="Business Name"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label htmlFor="contact-phone" className="form-label">Phone *</label>
                                            <input
                                                id="contact-phone"
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className="form-field"
                                                placeholder="+91 XXXXX XXXXX"
                                                required
                                                aria-required="true"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-email" className="form-label">Email *</label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                className="form-field"
                                                placeholder="you@company.com"
                                                required
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label htmlFor="contact-service" className="form-label">Service Required</label>
                                            <select
                                                id="contact-service"
                                                name="service"
                                                value={form.service}
                                                onChange={handleChange}
                                                className="form-field appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select a service</option>
                                                {serviceOptions.map((s) => (
                                                    <option key={s} value={s} className="bg-[var(--black-card)] text-white">{s}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="contact-budget" className="form-label">Budget Range</label>
                                            <select
                                                id="contact-budget"
                                                name="budget"
                                                value={form.budget}
                                                onChange={handleChange}
                                                className="form-field appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select budget</option>
                                                {budgetOptions.map((b) => (
                                                    <option key={b} value={b} className="bg-[var(--black-card)] text-white">{b}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div className="mb-8">
                                        <label htmlFor="contact-details" className="form-label">Project Details</label>
                                        <textarea
                                            id="contact-details"
                                            name="details"
                                            value={form.details}
                                            onChange={handleChange}
                                            className="form-field resize-y min-h-[120px]"
                                            rows={5}
                                            placeholder="Tell us about your business, goals, and what you're looking to achieve..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        id="contact-submit"
                                        className="btn-primary w-full justify-center py-4 text-[0.9rem]"
                                    >
                                        Send Brief →
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Sidebar Column */}
                        <div className="w-full">
                            {/* Direct Contact Card */}
                            <div className="bg-white/5 border border-white/10 rounded-[var(--radius-lg)] p-10 mb-6">
                                <h3 className="font-display text-[1.15rem] font-bold text-white tracking-[-0.01em] mb-7">
                                    Direct Contact
                                </h3>

                                {[
                                    { label: 'Email', value: 'hello@mey.in', href: 'mailto:hello@mey.in' },
                                    { label: 'Phone', value: '+91 XX XXXX XXXX', href: 'tel:+91XXXXXXXXXX' },
                                    { label: 'Location', value: 'Chennai, Tamil Nadu', href: null },
                                ].map((item) => (
                                    <div key={item.label} className="mb-6 last:mb-0">
                                        <p className="font-sans text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[var(--yellow)] mb-1">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a href={item.href} className="text-white/75 text-[0.9rem] font-sans hover:text-white transition-colors duration-200">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white/75 text-[0.9rem] font-sans">
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* What Happens Next Card */}
                            <div className="bg-[var(--yellow)] rounded-[var(--radius-lg)] p-10">
                                <h3 className="font-display text-[1.15rem] font-bold text-black mb-6">
                                    What happens next
                                </h3>
                                {[
                                    'We review your brief',
                                    'Initial call to understand your business',
                                    'Proposal and timeline shared',
                                    'Project begins',
                                ].map((step, i) => (
                                    <div key={step} className="flex gap-3 mb-4 last:mb-0 items-start">
                                        <span className="shrink-0 w-6 h-6 rounded-full bg-black text-[var(--yellow)] flex items-center justify-center font-sans text-[0.65rem] font-bold mt-[2px]">
                                            {i + 1}
                                        </span>
                                        <p className="font-sans text-[0.88rem] text-black/70 leading-relaxed">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
