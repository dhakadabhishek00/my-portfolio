import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "src/assets/profile.jpg",
    github: "https://github.com/yourname/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Task Manager",
    description: "Full-stack task manager with auth and filtering.",
    tech: ["React", "Node", "MongoDB"],
    image: "src/assets/react.svg",
    github: "https://github.com/yourname/task-manager",
    demo: "https://taskapp.com",
  },
  // add more...
];

const ProjectsSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;