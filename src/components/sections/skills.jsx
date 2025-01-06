// src/components/sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Langages de Programmation",
    skills: ["Python", "C++", "JavaScript", "SQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Django", "Flask", "React", "Scikit-learn", "Pandas"]
  },
  {
    title: "DevOps & Outils",
    skills: ["Git", "Docker", "VS Code", "MATLAB"]
  },
  {
    title: "Data Science & IA",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Time Series"]
  }
];

const skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
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

export default skills;