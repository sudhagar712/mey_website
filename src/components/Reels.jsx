import React, { useState } from "react";



// const reelsData = [
//   {
//     title: "Reel 01",
//     videos: v1,
//   },
//   {
//     title: "Reel 02",
//     videos: v2,
//   },
//   {
//     title: "Reel 03",
//     videos: v3,
//   },
//   {
//     title: "Reel 04",
//     videos: v4,
//   },
//   {
//     title: "Reel 05",
//     videos: v5,
//   },
// ];

const Reels = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white text-black px-4 md:px-16 py-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 ">
        Reels Showcase
      </h2>

      <div className="flex flex-col md:flex-row gap-10  ">
        {/* LEFT SIDE - VERTICAL TABS */}
        <div className="md:w-1/3 flex md:flex-col overflow-x-auto md:overflow-visible gap-10">
          {/* {reelsData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-4 rounded-xl text-left transition border ${
                activeIndex === index
                  ? "bg-white text-black"
                  : "border-white/20 hover:bg-white/10"
              }`}
            >
              {item.title}
            </button>
          ))} */}
        </div>

        {/* RIGHT SIDE - VIDEO */}
       <div className="md:w-2/3 flex justify-center">
  <div className="w-full max-w-[400px] aspect-[9/14] rounded-3xl overflow-hidden border border-white/10 bg-black">
    
    {/* <video
      key={activeIndex}
      src={reelsData[activeIndex].videos}
      controls
      autoPlay
      muted
      playsInline
      className="w-full h-full object-cover"
    /> */}
    
  </div>
</div>
      </div>
    </div>
  );
};

export default Reels;