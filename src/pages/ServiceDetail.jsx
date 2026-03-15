import { Link, useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdArrowBackIos } from "react-icons/md";

const ServiceDetail = () => {
  const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);

  if (!service) return <div>Service not found</div>;

 return (
   <>
     <Navbar />
     <section className="py-24 px-6 bg-white lg:px-16">
       <Link to="/services">
         <div className="flex justify-start items-center mb-5 mt-5">
           <span className="text-3xl">
             <MdArrowBackIos />
           </span>

           <span className="text-xl font-bold">Back</span>
         </div>
       </Link>
       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
         {/* Image */}
         <div className="overflow-hidden rounded-2xl">
           <img
             src={service.image}
             alt={service.title}
             className="w-full h-full object-cover hover:scale-105 transition duration-700"
           />
         </div>

         {/* Content */}
         <div>
           <h1 className="text-3xl md:text-4xl font-bold mb-6">
             {service.title}
           </h1>

           <p className="text-lg text-gray-600 mb-8">{service.description}</p>

           <ul className="space-y-3 text-gray-700 mb-10">
             {service.points.map((p, i) => (
               <li key={i} className="flex items-start gap-2">
                 <span className="text-black font-bold">•</span>
                 {p}
               </li>
             ))}
           </ul>

           {/* CTA */}
           <a
             href="/contact"
             className="inline-block bg-[#fbba00] text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase  transition"
           >
             Start a Project
           </a>
         </div>
       </div>
     </section>
     <Footer />
   </>
 );
};

export default ServiceDetail;
