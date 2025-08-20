import { Routes, Route } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Contact from "./pages/Contact/Contact";
// import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      
      <main className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
          
          {/*
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
