import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";

// Temporary placeholder pages until you create real ones
// const About = () => <div className="p-10 text-center text-2xl">About Page</div>;
// const Services = () => <div className="p-10 text-center text-2xl">Services Page</div>;
// const Portfolio = () => <div className="p-10 text-center text-2xl">Portfolio Page</div>;
// const Contact = () => <div className="p-10 text-center text-2xl">Contact Page</div>;
// const NotFound = () => <div className="p-10 text-center text-2xl">404 - Page Not Found</div>;

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
