import React from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
     <div className="font-sans">
            {/* --- Premium Banner Section --- */}
            <div className="relative h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden bg-black">

                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 transform scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center mt-12">
                    <div className="flex flex-col items-center justify-center space-y-4">

                       

                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] tracking-tight drop-shadow-2xl">
                            Blog
                        </h1>

                        <div className="text-gray-300 text-sm md:text-base font-medium flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-[#D4AF37]">•</span>
                            <span>
                                Blog
                            </span>
                        </div>
                    </div>
                </div>
            </div>
  
  {/* gallery post */}

  <div>
    <div className="flex flex-col justify-center bg-white items-center h-[60vh]">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] tracking-tight drop-shadow-2xl">
            Our Blog
        </h1>

        <div className="text-gray-500 text-sm mt-10 md:text-base font-medium flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            No Blogs Available
        </div>

    </div>
  </div>



        </div>
  )
}

export default Blog