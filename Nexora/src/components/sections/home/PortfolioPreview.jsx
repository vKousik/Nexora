import React from "react";
import RollingGallery from '../../ui/RollingGallery';
import LogoLoop from '../../ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import Hyperspeed from '../../ui/Hyperspeed';

const PortfolioPreview = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  return (
    <section className="bg-black-500 py-16">
         <Hyperspeed
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }}
/>
      <div className="max-w-8xl mx-auto ">
        {/* Portfolio Section with Side-by-Side Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Left Side - Rolling Gallery */}
          <div className="flex-1 w-7/10">
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </div>
          
          {/* Right Side - Our Portfolio Title */}
          {/* Right Side - Our Portfolio Title */}
<div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-4">
  <h2 
    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
    style={{ fontFamily: "'Comfortaa', sans-serif" }}
  >
    Our Portfolio
  </h2>
  <p className="mt-4 text-base md:text-lg text-gray-300 max-w-md">
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
            logoHeight={62}
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