import React from "react";

const services = [
  {
    title: "Brand Identity Design",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200",
    points: [
      "Professional logo design",
      "Brand naming",
      "Colour and typography systems",
      "Brand guidelines",
      "Business stationery",
    ],
  },
  {
    title: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
    points: [
      "Instagram marketing",
      "Facebook management",
      "LinkedIn content",
      "YouTube support",
      "Monthly content calendars",
      "Reels production",
      "Caption writing",
      "Profile optimisation",
    ],
  },
  {
    title: "Website Design & Development",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200",
    points: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "SEO setup",
      "Maintenance support",
    ],
  },
  {
    title: "Video Production",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
    points: [
      "Corporate videos",
      "Brand introduction films",
      "Product shoots",
      "Short-form reels",
      "Event coverage",
    ],
  },
  {
    title: "Performance Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    points: [
      "Instagram ads",
      "Facebook ads",
      "Google ads",
      "Lead generation campaigns",
    ],
  },
  {
    title: "Outdoor Advertising",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    points: [
      "Hoarding design",
      "Bus stop branding",
      "Exhibition stall design",
      "Print advertisements",
    ],
  },
];

const Services = () => {
  return (
    <section className="  py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Branding & Digital Marketing Services
          </h2>
          <p className=" max-w-3xl mx-auto text-lg">
            At MEY, every service connects back to one principle —
            <span className="text-yellow-400 font-semibold">
              {" "}
              Truth Before Business.
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition duration-300 group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2  text-sm">
                  {service.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              See How We Build Brands
            </h3>

            <p className="text-gray-300 mb-6">
              We combine strategy, creativity, and technology to help brands
              stand out in the market. Our digital marketing and branding
              approach ensures businesses build credibility, attract the right
              audience, and grow consistently.
            </p>

            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition">
              Start Your Project
            </button>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-full object-cover"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
