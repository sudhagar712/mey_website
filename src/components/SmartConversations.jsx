import React from 'react';
import brandVideo from '../assets/brandvideo.mp4';

const SmartConversations = () => {
  return (
    <section className=" py-16 ">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="text-center text-[22px] sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-gray-900 mb-8 md:mb-10">
          Engage Your Customers with Smart Conversations
        </h2>

        {/* Card + Stats combined */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          {/* Video Card with real video */}
          <div className="relative w-full pt-[56.25%] bg-black">
            <video
              src={brandVideo}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                It&apos;s an Experience
              </p>
            </div>

            {/* Play button visual (video already autoplaying) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="relative flex items-center justify-center">
                <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/25 blur-lg" />
                <span className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000000] text-white shadow-lg shadow-black/40 flex items-center justify-center">
                  <span className="ml-0.5 inline-block w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[15px] border-l-white" />
                </span>
              </span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="bg-[#000000] text-white py-8 sm:py-10 px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-semibold mb-1">8500+</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Happy
                  <br />
                  Customer
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold mb-1">1 Billion+</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Billion
                  <br />
                  Message
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold mb-1">99%</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  API
                  <br />
                  Delivery
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold mb-1">70%</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Reducing
                  <br />
                  Manual work
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold mb-1">85%</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Increasing
                  <br />
                  Customer Engagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartConversations;

