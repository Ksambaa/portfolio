import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "ILEO - Métropole Européenne de Lille",
      position: t('experience.ileo.position'),
      period: t('experience.ileo.period'),
      description: t('experience.ileo.description')
    },
    {
      company: "PULSE.digital Maroc",
      position: t('experience.pulse.position'),
      period: t('experience.pulse.period'),
      description: t('experience.pulse.description')
    },
    {
      company: "Lear Corporation Rabat",
      position: t('experience.lear.position'),
      period: t('experience.lear.period'),
      description: t('experience.lear.description')
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('experience')}</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{exp.position}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.period}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;