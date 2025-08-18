import React from "react";
import RollingGallery from '../../ui/RollingGallery';
import LogoLoop from '../../ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const PortfolioPreview = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  return (
    <section className="bg-black-500 py-16">
      <div className="max-w-7xl mx-auto ">
        {/* Portfolio Section with Side-by-Side Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Left Side - Rolling Gallery */}
          <div className="flex-1 w-8/10">
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </div>
          
          {/* Right Side - Our Portfolio Title */}
          {/* Right Side - Our Portfolio Title */}
<div className="flex-1 flex flex-col items-center justify-center text-center">
  <h2 
    className="text-4xl md:text-5xl font-bold text-white"
    style={{ fontFamily: "'Comfortaa', sans-serif" }}
  >
    Our Portfolio
  </h2>
  <p className="mt-4 text-lg text-gray-300 max-w-md">
    Explore a collection of our recent projects where design meets technology 
    to create impactful digital experiences.
  </p>
</div>

        </div>

        {/* Tech Stack Section */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-10"
          style={{ fontFamily: "'Comfortaa', sans-serif" }}
        >
          Our Tech Stack
        </h2>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden', marginTop: '5rem' }}>
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={68}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000ff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;