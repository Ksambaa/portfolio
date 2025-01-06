// src/components/sections/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "ILEO - Métropole Européenne de Lille",
    position: "Data Scientist",
    period: "3 mois - 2024",
    description: "Développement d'un système prédictif de détection de fuites d'eau avec Pandas, Prophet/XGBoost/Scikit-learn, déploiement via Flask/Docker."
  },
  {
    company: "PULSE.digital Maroc",
    position: "Développeur Full Stack",
    period: "5 mois - 2024",
    description: "Conception et développement d'une plateforme de recrutement avec IA: Python/Django REST, React.js/Redux, APIs RESTful, NLP."
  },
  {
    company: "Lear Corporation Rabat",
    position: "Stage en Inventaire des Actifs",
    period: "3 mois - 2023",
    description: "Gestion de projet d'inventaire avec Excel et Power BI. Méthodologie Agile/Scrum."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
              <p className="text-gray-600 mt-1">{exp.position}</p>
              <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
              <p className="text-gray-700 mt-4">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;