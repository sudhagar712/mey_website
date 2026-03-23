import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSidebar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 h-full">
      {/* Direct Contact Card */}
      <div
        data-aos="fade-right"
        className="bg-black border border-white/10 rounded-[2.5rem] p-10 lg:p-12 shadow-2xl relative overflow-hidden flex-1"
      >
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#ffff00]/20 rounded-full blur-[80px] pointer-events-none"></div>

        <h3 className="text-2xl font-bold text-white tracking-tight mb-10">
          Direct Contact
        </h3>

        <div className="space-y-8 relative z-10">
          {[
            {
              label: "Email",
              value: "info@mey.co.in",
              href: "mailto:info@mey.co.in",
            },
            {
              label: "Phone",
              value: "+918939009966",
              href: "tel:918939009966",
            },
            {
              label: "Location",
              value: "11, Jaganathan st, Nungambakkam, Chennai - 600034",
              href: null,
            },
          ].map((item, i) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group"
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#fbba00] mb-2">
                {item.label}
              </p>

              {item.href ? (
                <a
                  href={item.href}
                  className="text-white/80 text-lg md:text-xl font-medium hover:text-white transition"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* What Happens Next Card */}
      <div
        data-aos="fade-left"
        className="bg-[#fbba00] rounded-[2.5rem] p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden flex-1"
      >
        <h3 className="text-2xl font-bold text-black mb-8 tracking-tight">
          What happens next
        </h3>

        <div className="space-y-6">
          {[
            "We review your brief",
            "Initial call to understand your business",
            "Proposal and timeline shared",
            "Project begins",
          ].map((step, i) => (
            <div
              key={step}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="flex gap-4 items-start"
            >
              <span className="w-8 h-8 rounded-full bg-black text-[#ffff00] flex items-center justify-center text-xs font-bold mt-1">
                {i + 1}
              </span>

              <p className="text-black/80 text-base md:text-lg font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
