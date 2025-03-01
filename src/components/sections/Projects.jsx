import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Brain, Code, Monitor, ExternalLink, ChevronRight, Zap, Box, X, Activity, Network } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

const Projects = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Project category icons with dynamic color based on theme
  const projectIcons = {
    'RAG & LLMs': Database,
    'Multi-Agent Systems': Network,
    'LLMs': Code,
    'Machine Learning': Brain
  };

  // Project category colors (gradient pairs)
  const categoryColors = {
    'RAG & LLMs': {
      from: 'from-purple-500',
      to: 'to-indigo-500',
      text: 'text-purple-600 dark:text-purple-400',
      accent: 'bg-purple-100 dark:bg-purple-900/30'
    },
    'Multi-Agent Systems': {
      from: 'from-cyan-500',
      to: 'to-blue-500',
      text: 'text-cyan-600 dark:text-cyan-400',
      accent: 'bg-cyan-100 dark:bg-cyan-900/30'
    },
    'LLMs': {
      from: 'from-amber-500',
      to: 'to-red-500',
      text: 'text-amber-600 dark:text-amber-400',
      accent: 'bg-amber-100 dark:bg-amber-900/30'
    },
    'Machine Learning': {
      from: 'from-green-500',
      to: 'to-teal-500',
      text: 'text-green-600 dark:text-green-400',
      accent: 'bg-green-100 dark:bg-green-900/30'
    }
  };

  const projects = [
    {
      title: t('projects.nocode.title'),
      description: t('projects.nocode.description'),
      tech: ["Flowise", "Make.com", "n8n", "LangChain", "Pinecone", "OpenAI"],
      category: "Multi-Agent Systems",
      demo: null,
      achievements: t('projects.nocode.achievements'),
      workflow: t('projects.nocode.workflow')
    },
    {
      title: t('projects.obstacles.title'),
      description: t('projects.obstacles.description'),
      tech: ["MATLAB", "Scikit-learn", "NumPy", "Pandas", "SVM"],
      category: "Machine Learning",
      demo: null,
      achievements: t('projects.obstacles.achievements'),
      workflow: t('projects.obstacles.workflow')
    },
    {
      title: t('projects.robots.title'),
      description: t('projects.robots.description'),
      tech: ["Python", "C++", "GitHub Actions", "Deep Learning", "ROS"],
      category: "Multi-Agent Systems",
      demo: null,
      achievements: t('projects.robots.achievements'),
      workflow: t('projects.robots.workflow')
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: index => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: { 
      y: -10,
      boxShadow: darkMode 
        ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
        : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  // Handle project selection
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 opacity-5 dark:opacity-10">
          <Box size={200} />
        </div>
        <div className="absolute bottom-0 left-0 opacity-5 dark:opacity-10">
          <Zap size={200} />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              {t('projects')}
            </motion.h2>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
            ></motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Explorez mes projets d'IA générative, systèmes multi-agents et applications de machine learning
            </motion.p>
          </div>
          
          {/* Project Categories */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center mb-12 gap-2"
          >
            {categories.map((category, index) => {
              const isActive = filter === category;
              const categoryColor = category !== 'All' ? categoryColors[category] : {
                from: 'from-blue-500',
                to: 'to-indigo-500'
              };
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${categoryColor.from} ${categoryColor.to} text-white shadow-md`
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              );
            })}
          </motion.div>
          
          {/* Project Cards - Interactive Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredProjects.map((project, index) => {
              const IconComponent = projectIcons[project.category] || Monitor;
              const categoryColor = categoryColors[project.category];
              
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() => openProjectModal(project)}
                  className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer transform-gpu"
                >
                  {/* Card header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${categoryColor.from} ${categoryColor.to}`}></div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-lg ${categoryColor.accent} ${categoryColor.text}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColor.accent} ${categoryColor.text}`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">

                        {project.demo && (
                          <a 
                            href={project.demo}
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                        className="text-sm text-blue-600 dark:text-blue-400 flex items-center"
                      >
                        <span className="mr-1">Détails</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        
        {/* Project Detail Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Modal header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${categoryColors[selectedProject.category].from} ${categoryColors[selectedProject.category].to}`}></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start">
                      <div className={`p-3 rounded-lg ${categoryColors[selectedProject.category].accent} ${categoryColors[selectedProject.category].text} mr-4`}>
                        {React.createElement(projectIcons[selectedProject.category] || Monitor, { size: 24 })}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {selectedProject.title}
                        </h2>
                        <span className={`inline-block mt-1 text-sm font-semibold px-2 py-1 rounded-full ${categoryColors[selectedProject.category].accent} ${categoryColors[selectedProject.category].text}`}>
                          {selectedProject.category}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    {selectedProject.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Key Achievements */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                        Réalisations Clés
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mt-1 mr-2 text-green-500">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Workflow */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-blue-500" />
                        Processus de Travail
                      </h3>
                      <ol className="space-y-3 relative border-l border-gray-300 dark:border-gray-600 ml-3">
                        {selectedProject.workflow.map((step, i) => (
                          <li key={i} className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-3 ring-4 ring-white dark:ring-gray-700 text-blue-800 dark:text-blue-300 text-xs">
                              {i+1}
                            </span>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {step}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                      <Code className="w-5 h-5 mr-2 text-indigo-500" />
                      Technologies Utilisées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Footer links */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-4">
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          <span>Démo live</span>
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;