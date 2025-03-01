import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Database, Brain, BarChart, Code, Minimize2, 
  Calendar, ArrowRight, Layers, Zap, 
  Bot, ChevronRight, ChevronLeft
} from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();
  const [activeExp, setActiveExp] = useState(0);

  // Experience data
  const experiences = [
    {
      company: "Maia Space",
      position: t('experience.maia.position'),
      period: t('experience.maia.period'),
      description: t('experience.maia.description'),
      icon: Bot,
      technologies: ["BeautifulSoup", "Selenium", "LLaMA", "HuggingFace", "NLP"],
      color: "from-indigo-500 to-purple-500",
      highlights: ["35% performance improvement", "Web scraping", "Embedding fine-tuning"],
      bgAccent: "bg-purple-500"
    },
    {
      company: "ILEO - Métropole Européenne de Lille",
      position: t('experience.ileo.position'),
      period: t('experience.ileo.period'),
      description: t('experience.ileo.description'),
      icon: Database,
      technologies: ["Pandas", "LSTM", "XGBoost", "Flask", "Docker"],
      color: "from-blue-500 to-cyan-500",
      highlights: ["MSE: 0.12", "48h prediction window", "Hybrid ML models"],
      bgAccent: "bg-blue-500"
    },
    {
      company: "PULSE.digital Maroc",
      position: t('experience.pulse.position'),
      period: t('experience.pulse.period'),
      description: t('experience.pulse.description'),
      icon: Brain,
      technologies: ["Word2Vec", "Django REST", "React/Redux", "Git", "Docker"],
      color: "from-green-500 to-teal-500",
      highlights: ["CV/job matching", "Dashboard visualization", "Agile methodology"],
      bgAccent: "bg-green-500"
    },
    {
      company: "Lear Corporation Rabat",
      position: t('experience.lear.position'),
      period: t('experience.lear.period'),
      description: t('experience.lear.description'),
      icon: BarChart,
      technologies: ["Python", "Excel", "Automation", "Inventory Management"],
      color: "from-orange-500 to-amber-500",
      highlights: ["15h/week time saved", "Asset inventory", "Process automation"],
      bgAccent: "bg-orange-500"
    }
  ];

  // Navigate through experiences
  const navigateExperience = (direction) => {
    if (direction === 'next') {
      setActiveExp((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
    } else {
      setActiveExp((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  // Current experience
  const currentExp = experiences[activeExp];
  const CurrentIcon = currentExp.icon;

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-5">
          <Code size={180} />
        </div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 opacity-5">
          <Layers size={180} />
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">{t('experience')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
          
          {/* Main experience display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left: Timeline navigation */}
            <motion.div 
              className="hidden lg:block"
              variants={itemVariants}
            >
              <div className="relative pl-8 h-full">
                {/* Vertical timeline line */}
                <div className="absolute left-3 top-3 bottom-3 w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                
                {/* Timeline points */}
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="mb-8 relative cursor-pointer"
                    onClick={() => setActiveExp(index)}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-3 w-7 h-7 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 ${
                      index === activeExp 
                        ? currentExp.bgAccent + " shadow-lg" 
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}>
                      {index === activeExp && (
                        <motion.div 
                          className="w-3 h-3 bg-white rounded-full"
                          animate={{ scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                    
                    {/* Timeline content */}
                    <div className={`pl-6 ${
                      index === activeExp 
                        ? "text-gray-900 dark:text-white" 
                        : "text-gray-500 dark:text-gray-400"
                    }`}>
                      <h4 className="font-medium">{exp.company}</h4>
                      <p className="text-sm opacity-75">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Right: Detailed experience card */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Card header with gradient */}
                  <div className={`h-3 bg-gradient-to-r ${currentExp.color}`}></div>
                  
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start">
                      {/* Experience icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${currentExp.color} flex items-center justify-center mb-4 md:mb-0 md:mr-6 shadow-lg`}>
                        <CurrentIcon size={28} className="text-white" />
                      </div>
                      
                      {/* Experience details */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {currentExp.position} - {currentExp.company}
                        </h3>
                        
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                          <Calendar size={16} className="mr-1" />
                          <span className="text-sm">{currentExp.period}</span>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                          {currentExp.description}
                        </p>
                        
                        {/* Key highlights */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-3">
                            Key Highlights
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {currentExp.highlights.map((highlight, i) => (
                              <div 
                                key={i}
                                className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                              >
                                <Zap size={14} className="mr-1 text-yellow-500" />
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Technologies used */}
                        <div>
                          <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-3">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {currentExp.technologies.map((tech, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
          
          {/* Mobile navigation */}
          <div className="lg:hidden flex justify-center items-center space-x-4 mb-8">
            <button 
              onClick={() => navigateExperience('prev')}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous experience"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2 items-center">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExp(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeExp 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to experience ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={() => navigateExperience('next')}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next experience"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Journey path visualization */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-gray-700 dark:text-gray-300">
              <Minimize2 size={18} className="mr-2 text-blue-500" />
              <span>Mon parcours en IA: une progression constante</span>
              <ArrowRight size={18} className="ml-2 text-indigo-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;