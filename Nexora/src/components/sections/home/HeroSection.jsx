import React from "react";
import DarkVeil from "../../ui/DarkVeil";

const HeroSection = () => {
  return (
    <section className="w-full text-white relative h-screen overflow-hidden">
      {/* DarkVeil Background */}
      <div className="absolute inset-0">
        <DarkVeil 
        speed={5}
  scale={1}
  color="#9F7A7A"
  noiseIntensity={0.9}
  rotation={0} />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 text-center flex flex-col justify-center items-center h-full z-10">
        <h1
      style={{
        color: "white",
        textShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
      className="text-4xl md:text-6xl font-bold mb-6"
    >
      Welcome to   {" "}
      <span
        style={{
          fontFamily: '"TAN - PEARL", serif',
          fontSize: "4rem",
          color: "#F5E6D3",
        }}
      >
        NEXORA
      </span>
    </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{
            color: "rgba(255,255,255,0.9)",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Your vision, our code. We craft digital solutions that bring ideas to
          life.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
            Hire Us
          </button>
          <button className="px-6 py-3 bg-black/40 text-white border border-white rounded-full hover:bg-white hover:text-black transition">
            View Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
