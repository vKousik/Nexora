import React from "react";
import DarkVeil from "../../ui/DarkVeil";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full text-white relative h-screen overflow-hidden">
      {/* DarkVeil Background */}
      <div className="absolute inset-0">
        <DarkVeil 
        colorStops={["#4b1a73", "#8382d9", "#2321ad"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
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
          <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition" onClick={() => navigate("/contact")}>
            Hire Us
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
