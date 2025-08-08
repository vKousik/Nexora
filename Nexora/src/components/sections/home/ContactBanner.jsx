import React from "react";

const ContactBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Something Amazing Together 🚀
        </h2>
        <p className="text-lg mb-8">
          Have a project in mind? We’d love to hear about it and help you make it a reality.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Contact Us
          </a>
          <a
            href="#portfolio"
            className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
