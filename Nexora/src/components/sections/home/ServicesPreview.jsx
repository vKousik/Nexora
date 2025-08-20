import React, { useState } from "react";
import CardSwap, { Card } from "../../ui/CardSwap";

const ServicesPreview = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
const services = [
  {
    title: "Custom Website",
    desc: "Tailor-made websites designed to match your unique brand and goals.",
    img: "/images/customweb.png",
    bg: "from-purple-500/80 via-indigo-500/80 to-blue-500/80",
  },
  
  {
    title: "Business Website",
    desc: "Professional websites to showcase your services and grow your presence.",
    img: "/images/buissweb.png",
    bg: "from-green-500/80 via-emerald-500/80 to-teal-400/80",
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable ongoing updates, bug fixes, and technical assistance.",
    img: "/images/maintenance.png",
    bg: "from-yellow-500/80 via-amber-500/80 to-orange-400/80",
  },
  {
    title: "Website Redesign",
    desc: "Modern redesigns to give your website a fresh, engaging look.",
    img: "/images/redesignweb.png",
    bg: "from-blue-500/80 via-cyan-500/80 to-sky-400/80",
  },
  {
    title: "E-commerce Website",
    desc: "Robust online stores with secure payments and smooth shopping experiences.",
    img: "/images/ecommweb.png",
    bg: "from-pink-500/80 via-rose-500/80 to-orange-400/80",
  },
  {
    title: "SEO Optimization",
    desc: "Boost visibility and rank higher on search engines with proven strategies.",
    img: "/images/seooptiweb.png",
    bg: "from-indigo-500/80 via-violet-500/80 to-purple-400/80",
  },
];


  return (
    <section className="bg-black-500 py-26">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
            Our Services
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            We provide high-quality solutions in web development, design, 
            and app development. Our team ensures modern, scalable, 
            and user-friendly digital experiences tailored for your needs.
          </p>
          
          
        </div>

        {/* RIGHT SIDE */}
        <div style={{ height: "400px", position: "relative" , marginBottom:"6px"}}>
          <CardSwap
            cardDistance={60}
            verticalDistance={65}
            delay={5000}
            pauseOnHover={false}
            onCardChange={(index) => setActiveCardIndex(index)}
          >
            {services.map((service, index) => (
              <Card key={index}>
                <div
                  className="relative rounded-2xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '400px',
                    width: "600px"
                  }}
                >
                  {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`}></div>
                  
                  {/* TEXT CONTENT OVER BACKGROUND */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-base drop-shadow-md">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;