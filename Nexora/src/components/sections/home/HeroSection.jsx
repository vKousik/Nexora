import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">Nexora</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Your vision, our code. We craft digital solutions that bring ideas to life.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400 transition">
            Hire Us
          </button>
          <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
            View Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
