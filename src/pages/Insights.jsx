import React from "react";
import mk from "../assets/mk.jpg"
import PageBanner from "../components/PageBanner";

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
      "A beautiful website that doesn’t convert is a liability. These are the most common design and structural mistakes we see—and the fixes.",
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

  return (
    <main>
      <PageBanner
        title="Recharge"
        breadcrumb="Insights"
        bgImage="https://peekage.com/blog/wp-content/uploads/2024/04/consumer-insights.jpg"
      />

      <section className="bg-white py-20 pb-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Featured Article */}
          {featured && (
            <div className="group block mb-24">
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
                  <div className="flex items-center gap-4 mb-5 text-xs uppercase tracking-wider">
                    <span className=" font-semibold">{featured.category}</span>

                    <span className="">•</span>

                    <span className="">{featured.readTime}</span>

                    <span className="">•</span>

                    <span className="">{featured.date}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bol mb-5  transition">
                    {featured.title}
                  </h2>

                  <p className=" text-lg mb-6">{featured.excerpt}</p>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regular.map((article) => (
              <div
                key={article.id}
                className="group block  border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition"
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
                  <div className="flex justify-between items-center mb-4 text-xs uppercase tracking-wider">
                    <span className=" font-semibold">{article.category}</span>

                    <span className="text-white/40">{article.date}</span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 transition">
                    {article.title}
                  </h3>

                  <p className=" text-sm mb-6 flex-grow">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Insights;
