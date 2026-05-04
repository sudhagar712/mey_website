import React from 'react';

const ContactSidebar = () => {
  return (
    <div className="w-full flex flex-col gap-8 h-full ">
      {/* Direct Contact Card */}
      <div className="bg-black border border-white/10 rounded-[2.5rem] p-10 lg:p-12 shadow-2xl relative overflow-hidden flex-1">
        {/* Decorative Glow inside black card */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#ffff00]/20 rounded-full blur-[80px] pointer-events-none"></div>

        <h3
          className="text-2xl font-bold text-white tracking-tight mb-10"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
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
              value:
                "11, Jagannathan St, Ponnangipuram, Nungambakkam, Chennai, Tamil Nadu - 600034",
              href: null,
            },
          ].map((item) => (
            <div key={item.label} className="group ">
              <p
                className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#fbba00] mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white/80 text-lg md:text-xl font-medium hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.value}
                </a>
              ) : (
                <p
                  className="text-white/80 text-lg md:text-xl font-medium"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* What Happens Next Card */}
      <div className="bg-[#fbba00] rounded-[2.5rem] p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden flex-1">
        <h3
          className="text-2xl font-bold text-black mb-8 tracking-tight"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          What happens next
        </h3>
        <div className="space-y-6">
          {[
            {
              title: "Your brief enters the war room",
              desc: "We analyse, challenge, and refine it.",
            },
            {
              title: "Clarity call",
              desc: "We align on where you are and where you should be.",
            },
            {
              title: "Strategic blueprint",
              desc: "Not ideas. A clear, executable growth direction.",
            },
            {
              title: "Execution begins",
              desc: "Focused. Measured. Built to win.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="flex gap-5 items-start group transition-all duration-300 hover:translate-x-1"
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-black text-[#fbba00] flex items-center justify-center text-xs font-bold mt-1 shadow-md">
                {i + 1}
              </span>

              <div>
                <h4 className="text-sm md:text-base font-semibold text-black transition">
                  {step.title}
                </h4>
                <p className="text-black/70 text-sm md:text-base mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
