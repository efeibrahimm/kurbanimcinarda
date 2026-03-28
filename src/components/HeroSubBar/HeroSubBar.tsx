"use client";

import Image from "next/image";

// Placeholder for user's logos in public/logos.
// Duplicated here so the marquee looks full even with 2 logos.
const defaultLogos = [
  { src: "/logos/dinery_logo.png", alt: "Dinery" },
  { src: "/logos/morekod_logo.png", alt: "Morekod" },
  { src: "/logos/safelogger_logo.png", alt: "SafeLogger" },
  { src: "/logos/tansesuar_png-logo.png", alt: "Tansesuar" },
  // Duplicate to ensure seamless marquee looping on very wide screens
  { src: "/logos/dinery_logo.png", alt: "Dinery Partner" },
  { src: "/logos/morekod_logo.png", alt: "Morekod Partner" },
  { src: "/logos/safelogger_logo.png", alt: "SafeLogger Partner" },
  { src: "/logos/tansesuar_png-logo.png", alt: "Tansesuar Partner" },
];

export default function HeroSubBar() {
  return (
    <div className="w-full bg-white border-y border-gray-100 py-8 overflow-hidden flex flex-col items-center relative z-10">
      
      {/* Title and Subtitle matching reference image */}
      <div className="text-center mb-12 px-4 mt-4">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 mb-1.5">
          Güvenilir Kurumsal Çözüm Ortaklarımız.
        </h2>
        <p className="text-[17px] sm:text-[19px] text-gray-500 font-normal tracking-tight">
          Alanında öncü yerel işletmelerden, saygın kurumsal markalara.
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex w-full max-w-[100vw] overflow-hidden group">
        
        {/* Left/Right Fade Masks for elegance */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track 1 */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full items-center justify-around pl-4">
          {defaultLogos.map((logo, index) => (
            <div 
              key={`marquee-1-${index}`} 
              className="flex items-center justify-center mx-6 sm:mx-12 w-28 sm:w-40 h-10 sm:h-12 relative opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Scrolling Track 2 (Duplicate for infinite seamless loop) */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full items-center justify-around pl-4" aria-hidden="true">
          {defaultLogos.map((logo, index) => (
            <div 
              key={`marquee-2-${index}`} 
              className="flex items-center justify-center mx-6 sm:mx-12 w-28 sm:w-40 h-10 sm:h-12 relative opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}} />
      </div>
    </div>
  );
}
