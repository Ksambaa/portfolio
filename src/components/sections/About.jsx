import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Calculator, Music, MapPin, BookOpen, Code, MountainSnow, 
  Sparkles, Compass, ChevronRight, ChevronLeft
} from 'lucide-react';


const About = () => {
  const { t } = useLanguage();
  const [activeStory, setActiveStory] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  // Story elements with icons
  const storyElements = [
    {
      title: t('about.journey.marrakech'),
      icon: MapPin,
      color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
    },
    {
      title: t('about.journey.math'),
      icon: Calculator,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      title: t('about.journey.music'),
      icon: Music,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    },
    {
      title: t('about.journey.transition'),
      icon: Compass,
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
    },
    {
      title: t('about.journey.vision'),
      icon: Sparkles,
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
    }
  ];

  // Navigate through story elements
  const navigateStory = (direction) => {
    if (direction === 'next') {
      setActiveStory((prev) => (prev === storyElements.length - 1 ? 0 : prev + 1));
    } else {
      setActiveStory((prev) => (prev === 0 ? storyElements.length - 1 : prev - 1));
    }
  };

  // Current story element
  const currentStory = storyElements[activeStory];
  const StoryIcon = currentStory.icon;

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          {/* Background decorative elements */}
          <div className="absolute -top-12 -left-12 opacity-10 dark:opacity-5">
            <MountainSnow size={120} />
          </div>
          <div className="absolute -bottom-12 -right-12 opacity-10 dark:opacity-5">
            <Code size={120} />
          </div>
          
          {/* Heading */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{t('about')}</h2>
            <p className="text-xl text-blue-600 dark:text-blue-400">{t('about.journey.title')}</p>
          </motion.div>
          
          {/* Story Navigator */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 relative"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Visual element - Icon with background */}
              <motion.div 
                className={`flex-shrink-0 w-24 h-24 ${currentStory.color} rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8`}
                key={activeStory}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <StoryIcon size={40} />
              </motion.div>
              
              {/* Story text */}
              <div className="flex-1">
                <motion.div
                  key={activeStory}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                >
                  {currentStory.title}
                </motion.div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={() => navigateStory('prev')}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex space-x-2 items-center">
                {storyElements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeStory 
                        ? 'bg-blue-600 dark:bg-blue-400' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={() => navigateStory('next')}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next story"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
          
          {/* Education and Languages Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('education')}</h3>
              </div>
              <ul className="space-y-4">
                <li className="pl-4 border-l-2 border-blue-500">
                  <p className="font-medium text-gray-900 dark:text-white">{t('education.centraleEcole')}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{t('education.courses')}</p>
                </li>
                <li className="pl-4 border-l-2 border-blue-300">
                  <p className="font-medium text-gray-900 dark:text-white">{t('education.centraleCasablanca')}</p>
                </li>
                <li className="pl-4 border-l-2 border-blue-200">
                  <p className="font-medium text-gray-900 dark:text-white">{t('education.prepa')}</p>
                </li>
              </ul>
            </motion.div>
            
            {/* Languages */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <MapPin className="text-red-600 dark:text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t('languages')}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{t('languages.english').split('(')[0]}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">C1</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{t('languages.french').split('(')[0]}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">B2</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{t('languages.arabic').split('(')[0]}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Natif</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;