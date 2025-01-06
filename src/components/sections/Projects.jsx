// src/components/sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, BrainIcon, BellIcon } from 'lucide-react';

const projects = [
  {
    title: "Prédiction de Position d'Obstacles",
    description: "Pipeline complet de modélisation mathématique et ML avec MATLAB et Scikit-learn pour la prédiction précise des positions d'obstacles.",
    icon: CodeIcon,
    tech: ["MATLAB", "Scikit-learn", "Python"]
  },
  {
    title: "Robots de magasin guidés",
    description: "Système d'évitement de collision pour robots autonomes avec DNN en C++ et Python, intégration GPS.",
    icon: BrainIcon,
    tech: ["C++", "Python", "Deep Learning", "GPS"]
  },
  {
    title: "Système Intelligent d'Alerte de Collision",
    description: "Prototype IoT sur Raspberry Pi avec Python/C++, Arduino et impression 3D.",
    icon: BellIcon,
    tech: ["Python", "C++", "Arduino", "IoT"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <project.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;