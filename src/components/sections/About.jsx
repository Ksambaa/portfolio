// src/components/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-3xl font-bold mb-6">À Propos</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Étudiant en Master 2 Data Science et Intelligence Artificielle à l'École Centrale de Lille, 
              passionné par le développement et l'IA appliquée.
            </p>
            <p className="text-gray-700">
              Formation solide en ingénierie des systèmes complexes à l'École Centrale Casablanca, 
              complétée par des certifications en gestion de projet et méthodologies Agile.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Formation</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">• École Centrale de Lille - Master 2 Data Science et IA</li>
                <li className="text-gray-700">• École Centrale Casablanca - Ingénierie des systèmes complexes</li>
                <li className="text-gray-700">• Classes Préparatoires Ibn Timiya - MP</li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Langues</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">• Anglais C1 (TOEIC : 945/990)</li>
                <li className="text-gray-700">• Français B2 (Dalf C1)</li>
                <li className="text-gray-700">• Arabe (Langue Maternelle)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;