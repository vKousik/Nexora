import React from "react";

const ServicesPreview = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Web Development",
              desc: "High-quality, responsive websites using modern tech.",
              icon: "💻",
            },
            {
              title: "UI/UX Design",
              desc: "Intuitive and beautiful designs for seamless user experience.",
              icon: "🎨",
            },
            {
              title: "App Development",
              desc: "Cross-platform mobile apps with smooth performance.",
              icon: "📱",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-white/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
