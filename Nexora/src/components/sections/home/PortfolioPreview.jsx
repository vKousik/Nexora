import React from "react";

const PortfolioPreview = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      image: "https://via.placeholder.com/400x250.png?text=E-Commerce",
      category: "Web App",
    },
    {
      title: "Mobile Banking App",
      image: "https://via.placeholder.com/400x250.png?text=Banking+App",
      category: "Mobile App",
    },
    {
      title: "Portfolio Website",
      image: "https://via.placeholder.com/400x250.png?text=Portfolio",
      category: "Website",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Portfolio
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
