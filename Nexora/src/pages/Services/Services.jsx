import { motion } from "framer-motion";
import { Code, ShoppingCart, Globe, RefreshCcw, Search, Wrench } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Website Development Services
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-400">
          We create modern, responsive, and business-focused websites that help your brand grow online.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-12">
        {[
          { icon: Code, title: "Custom Website Design", desc: "Tailored, mobile-friendly designs.", price: "$100 - $175" },
          { icon: ShoppingCart, title: "E-Commerce Websites", desc: "Sell products with secure payments.", price: "$120 - $300" },
          { icon: Globe, title: "Business Websites", desc: "Professional websites for your brand.", price: "$500 - $1000" },
          { icon: Search, title: "SEO Optimization", desc: "Improve your visibility on search engines." },
          { icon: Wrench, title: "Maintenance & Support", desc: "Keep your site updated & secure.", price: "$100/month" },
          { icon: RefreshCcw, title: "Website Redesign", desc: "Modernize your old website with a fresh look.", price: "$70 - $90" },
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <service.icon className="w-12 h-12 mb-4 text-indigo-400" />
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-3">{service.desc}</p>
            <p className="text-indigo-400 font-bold text-lg">{service.price}</p>
          </motion.div>
        ))}
      </section>

      {/* Process Section */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Consultation", desc: "We discuss your needs & goals." },
            { step: "2", title: "Planning & Design", desc: "Wireframes and mockups." },
            { step: "3", title: "Development", desc: "We build and test your website." },
            { step: "4", title: "Launch & Support", desc: "Deploy & maintain your site." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-indigo-400 text-4xl font-bold mb-2">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-8 py-16 text-center bg-gray-950">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <ul className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "Affordable Pricing",
            "Fast Delivery",
            "100% Responsive Design",
            "SEO-Friendly Websites",
            "Ongoing Support",
            "Modern & Clean UI",
          ].map((point, i) => (
            <li key={i} className="bg-gray-900 p-6 rounded-xl shadow-md">
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
        <p className="text-lg text-gray-400 mb-6">
          Contact us today for a free consultation and let’s start your project.
        </p>
        <a
          href="/contact"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-500 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
