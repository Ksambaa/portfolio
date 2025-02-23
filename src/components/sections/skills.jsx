import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.programming'),
      skills: ["Python", "C++", "JavaScript", "SQL"]
    },
    {
      title: t('skills.frameworks'),
      skills: ["Django", "Flask", "React", "Scikit-learn", "Pandas"]
    },
    {
      title: t('skills.devops'),
      skills: ["Git", "Docker", "VS Code", "MATLAB"]
    },
    {
      title: t('skills.datascience'),
      skills: ["Machine Learning", "Deep Learning", "NLP", "Time Series"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('skills')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 dark:bg-white-900 text-blue-800 dark:text-white-200 px-3 py-1 rounded-full text-sm"
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

export default Skills;