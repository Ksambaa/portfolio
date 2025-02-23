import { motion } from 'framer-motion';
import { CodeIcon, BrainIcon, BellIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.obstacle.title'),
      description: t('projects.obstacle.description'),
      icon: CodeIcon,
      tech: ["MATLAB", "Scikit-learn", "Python"]
    },
    {
      title: t('projects.robots.title'),
      description: t('projects.robots.description'),
      icon: BrainIcon,
      tech: ["C++", "Python", "Deep Learning", "GPS"]
    },
    {
      title: t('projects.collision.title'),
      description: t('projects.collision.description'),
      icon: BellIcon,
      tech: ["Python", "C++", "Arduino", "IoT"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('projects')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <project.icon className="w-12 h-12 text-dark-600 dark:text-white-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 dark:bg-white-900 text-blue-800 dark:text-dark-200 text-sm px-3 py-1 rounded-full"
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