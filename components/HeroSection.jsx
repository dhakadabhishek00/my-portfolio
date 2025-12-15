
import React from "react";
const HeroSection=()=>{
  return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
      <section className="max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm Akshansh 👋
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Full-Stack Developer | React • Tailwind • Express • SQL • C/C++
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>
      </div>
      </>
  )
};
export default HeroSection;