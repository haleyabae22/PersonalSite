"use client";

import Image from "next/image";
import DarkVeil from "../components/DarkVeil";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* DarkVeil background - full screen */}
      <div className="fixed inset-0 w-full h-full">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1.8}
        />
      </div>

      {/* Page content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8">
          Hi, I'm Haley Bae
        </h1>
         <br />

        {/* Profile Picture */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mb-8">
          <Image
            src="/1760816796407.jpg"
            fill
            alt="Haley Bae"
            className="object-cover"
            priority
          />
        </div>

        {/* Intro */}
        <div className="space-y-6 max-w-3xl">
           <br />
          <p className="text-2xl md:text-3xl text-gray-200">
            I'm a junior Computer Science student at UCF interested in software engineering and cloud technologies.
          </p>
           <br />
          <p className="text-2xl md:text-3xl text-gray-200">
            Welcome to my personal portfolio website!
          </p>
        </div>
      </div>
    </div>
  );
}
