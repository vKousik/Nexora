import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import Portfolio from "./pages/Portfolio/Portfolio";
// import Contact from "./pages/Contact/Contact";
// import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/teammembers" element={<TeamMembers />} />

          <Route path="/portfolio" element={<Portfolio />} />
          {/*<Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
