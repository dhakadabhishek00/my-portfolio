import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="mt-16 max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I'm passionate about building practical web applications with dynamic
          UIs and robust backend logic. I thrive on solving algorithmic
          challenges, optimizing databases, and designing clean, maintainable
          code libraries.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-600">
              A responsive portfolio built with React and Tailwind CSS.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Data Structures Library</h3>
            <p className="text-gray-600">
              Modular C/C++ implementations of stacks, queues, and graphs with
              menu-driven programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-16 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Interested in collaborating or hiring? Let’s connect!
        </p>
        <a
          href="mailto:akshansh@example.com"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Email Me
        </a>
      </section>
    </div>
  );
};

export default HomePage;