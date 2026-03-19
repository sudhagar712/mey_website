import React from "react";

const Marquee = ({ text, speed = 40 }) => {
  return (
    <div className="overflow-hidden w-full relative h-[160px]  flex items-center bg-[#fbba00]">
      <div
        className="whitespace-nowrap  flex"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {/* Duplicate content for seamless loop */}
        <div className="mx-4 text-white text-5xl font-semibold">{text}</div>
        <div className="mx-4 text-white text-5xl font-semibold">{text}</div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
