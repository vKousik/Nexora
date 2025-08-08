import HeroSection from "../../components/sections/home/HeroSection";
import ServicesPreview from "../../components/sections/home/ServicesPreview";
import PortfolioPreview from "../../components/sections/home/PortfolioPreview";
import TestimonialsPreview from "../../components/sections/home/TestimonialsPreview";
import ContactBanner from "../../components/sections/home/ContactBanner";

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero with gradient and bold animations */}
      <HeroSection />

      {/* Neon-glow services section */}
      <section className="py-16 bg-gradient-to-br from-fuchsia-600 via-purple-700 to-indigo-800">
        <ServicesPreview />
      </section>

      {/* Portfolio with card hover effects */}
      <section className="py-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700">
        <PortfolioPreview />
      </section>

      {/* Testimonials with glassmorphism */}
      <section className="py-16 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 bg-opacity-90">
        <TestimonialsPreview />
      </section>

      {/* Contact CTA with pulse effect */}
      <section className="py-16 bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700">
        <ContactBanner />
      </section>
    </div>
  );
};

export default Home;
