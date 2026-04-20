import React, { useState } from "react";
import mk from "../assets/mk.jpg";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import { motion, AnimatePresence } from "framer-motion";

const articles = [
  {
    id: "branding-vs-marketing-agency",
    title: "Branding Agency vs Marketing Agency: What’s the Difference?",
    excerpt:
      "Many businesses confuse branding agencies with marketing agencies. Understanding the difference helps you make better investments for your business growth.",
    readTime: "7 min read",
    category: "Branding",
    date: "Mar 2024",
    image:
      "https://cdn.prod.website-files.com/64952a793c43f45d2d283b23/68c931fee7d76206b601bd29_Hootsuite%20Calendar%20alternatives%20(2).webp",
    featured: true,
  },
  {
    id: "social-media-strategy-matters",
    title: "Why Social Media Strategy Matters More Than Posting Frequency",
    excerpt:
      "Most businesses post on social media without a strategy. Here’s why that approach burns budget and what a structured approach looks like.",
    readTime: "6 min read",
    category: "Social Media",
    image:
      "https://cdn.prod.website-files.com/64952a793c43f45d2d283b23/68c931fee7d76206b601bd29_Hootsuite%20Calendar%20alternatives%20(2).webp",
    date: "Feb 2024",
  },
  {
    id: "website-design-mistakes",
    title: "Website Design Mistakes Businesses Make (And How to Fix Them)",
    excerpt:
      "A beautiful website that doesn’t convert is a liability. These are the most common design and structural mistakes we see and the fixes.",
    readTime: "8 min read",
    category: "Website",
    image:
      "https://www.walstartechnologies.com/wp-content/uploads/2025/02/Web-design-Mistakes1-1024x597.png",
    date: "Jan 2024",
  },
  {
    id: "roi-of-minimalism",
    title: "The ROI of Minimalist Design",
    excerpt:
      "Why clean, uncluttered design language actually converts better and builds longer-lasting trust with premium customers.",
    readTime: "5 min read",
    category: "Design",
    image:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/Minimalist-design-grid.jpg?auto=format&q=60&fit=max&w=930",
    date: "Dec 2023",
  },
  {
    id: "outdoor-advertising-digital-age",
    title: "Does Outdoor Advertising Still Work in the Digital Age?",
    excerpt:
      "Hoardings and digital ads serve two entirely different purposes. How to blend physical impact with digital tracking.",
    readTime: "6 min read",
    category: "Strategy",
    image:
      "https://etimg.etb2bimg.com/thumb/msid-126446866,imgsize-191489,width-1200,height=627,overlay-etbrandequity,resizemode-75/marketing/digital-technology-is-redefining-business-in-outdoor-advertising-from-visibility-to-intelligence.jpg",
    date: "Nov 2023",
  },
];

const Insights = () => {
  const featured = articles.find((a) => a.featured);
  const regular = articles.filter((a) => !a.featured);

  const [selectedArticle, setSelectedArticle] = useState(null);

  // Close modal functionality
  const closeModal = () => setSelectedArticle(null);

  return (
    <main>
      <SEO
        title="ThinkLab | Branding & Marketing Insights by MEY Chennai"
        description="Read MEY's ThinkLab — expert articles on branding, social media strategy, website design, performance marketing and digital growth from Chennai."
        keywords="branding insights Chennai, digital marketing blog India, social media strategy tips, MEY ThinkLab, website design tips, marketing articles"
      />
      <PageBanner
        title="ThinkLab"
        breadcrumb="Insights"
        bgImage="https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg"
      />

      <section className="bg-white py-20 pb-32 px-6 lg:px-16 text-black relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
        <div className="max-w-7xl mx-auto">
          {/* Featured Article */}
          {featured && (
            <div
              className="group block mb-24 cursor-pointer"
              onClick={() => setSelectedArticle(featured)}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={mk}
                    alt={featured.title}
                    className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-5 text-xs uppercase tracking-wider text-gray-500">
                    <span className="font-semibold">{featured.category}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                    <span>•</span>
                    <span>{featured.date}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-5 transition text-black group-hover:text-yellow-600">
                    {featured.title}
                  </h2>

                  <p className="text-lg mb-6 text-gray-700">
                    {featured.excerpt}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regular.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group block bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/*  Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4 text-xs uppercase tracking-wider text-gray-400">
                    <span className="font-semibold text-yellow-600">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 transition text-black group-hover:text-yellow-600">
                    {article.title}
                  </h3>

                  <p className="text-sm mb-6 flex-grow text-gray-600">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl max-h-[90vh] md:h-[85vh] flex flex-col md:flex-row overflow-hidden bg-white text-black rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 md:top-6 md:right-8 z-50 p-2 md:p-3 bg-black/40 hover:bg-black/60 md:bg-gray-100 md:hover:bg-gray-200 text-white md:text-black rounded-full backdrop-blur-md transition-colors shadow-sm"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              {/* Left Side: Image */}
              <div className="relative w-full h-[250px] md:h-auto md:w-[40%] lg:w-[45%] flex-shrink-0">
                <img
                  src={
                    selectedArticle.id === "branding-vs-marketing-agency"
                      ? mk
                      : selectedArticle.image
                  }
                  alt={selectedArticle.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16 md:pr-24">
                <div className="flex items-center gap-3 text-xs md:text-sm font-semibold text-yellow-600 mb-6 uppercase tracking-widest">
                  <span>{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-[1.2] tracking-tight">
                  {selectedArticle.title}
                </h2>

                <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed font-serif">
                  <p className="text-xl font-medium mb-8 text-black font-sans">
                    {selectedArticle.excerpt}
                  </p>

                  <p className="mb-6">
                    Understanding the core principles of{" "}
                    <strong>{selectedArticle.category.toLowerCase()}</strong> is
                    crucial for modern businesses looking to establish a
                    dominant market position. In today's hyper-competitive
                    landscape, making incremental changes is rarely enough.
                  </p>

                  <h3 className="text-2xl font-bold text-black font-sans mt-10 mb-4">
                    The Strategic Advantage
                  </h3>

                  <p className="mb-6">
                    Many founders and marketing executives spend too much time
                    focusing on the tactical execution without building a solid
                    strategic foundation first. This approach inevitably leads
                    to scattered efforts, inconsistent messaging, and
                    inefficiently deployed budgets.
                  </p>

                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>
                      Focus on long-term value creation over short-term vanity
                      metrics.
                    </li>
                    <li>
                      Align your internal culture with your external brand
                      promise.
                    </li>
                    <li>
                      Invest in foundational clarity before scaling your
                      advertising efforts.
                    </li>
                  </ul>

                  <p>
                    Instead, we advocate for a structured, deeply thoughtful
                    approach to building lasting brand value. It requires
                    discipline, research, and the willingness to make difficult
                    choices about what your brand will and will not stand for.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Insights;
