import React from "react";

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Founder, TechWave",
      image: "https://via.placeholder.com/100.png?text=A",
      feedback:
        "Nexora delivered our project ahead of schedule with exceptional quality. Highly recommended!",
    },
    {
      name: "Sophia Roy",
      role: "CEO, Brandify",
      image: "https://via.placeholder.com/100.png?text=S",
      feedback:
        "Their attention to detail and creativity blew us away. We couldn’t have asked for a better partner.",
    },
    {
      name: "Rahul Mehta",
      role: "Product Manager, FinPay",
      image: "https://via.placeholder.com/100.png?text=R",
      feedback:
        "Professional, reliable, and innovative — Nexora is our go-to for all digital solutions.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-300"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-yellow-200">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
