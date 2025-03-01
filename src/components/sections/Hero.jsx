import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, Code, Database, Cpu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import profilePic from '../../assets/profile.jpg';

const Hero = () => {
  const { t } = useLanguage();

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

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut'
      }
    }
  };

  // Rotate animation variants
  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  // Pulse animation variants
  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: 'loop',
            ease: 'easeInOut' 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-3xl"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            repeatType: 'loop',
            ease: 'easeInOut' 
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-200 dark:bg-indigo-900 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'loop',
            ease: 'easeInOut' 
          }}
        />
      </div>

      {/* Tech icons floating in background */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 text-blue-400 dark:text-blue-600 opacity-20"
      >
        <Cpu size={48} />
      </motion.div>
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-1/4 right-1/3 text-indigo-400 dark:text-indigo-600 opacity-20"
      >
        <Database size={48} />
      </motion.div>
      
      <motion.div
        variants={rotateVariants}
        animate="animate"
        className="absolute top-1/3 right-1/4 text-purple-400 dark:text-purple-600 opacity-20"
      >
        <Code size={48} />
      </motion.div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="relative inline-block mb-8"
            variants={pulseVariants}
            animate="animate"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-70 animate-pulse"></div>
            <img
              src={profilePic}  
              alt={t('hero.profileAlt')}
              className="relative w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-white dark:ring-gray-800"
            />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200"
          >
            Khalil SAMBA
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-200"
          >
            {t('hero.title')}
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-blue-600 dark:text-blue-400 mb-8 transition-colors duration-200"
          >
            {t('hero.tagline')}
          </motion.p>
          
          {/* Animated CTA button */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              {t('hero.cta')}
            </a>
          </motion.div>
          
          {/* Social links with hover animations */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a 
              href="https://github.com/Ksambaa" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/khalil-samba-b86947219" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedinIcon className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:khalil.samba@centrale.centralelille.fr" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="Email"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <MailIcon className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: 'loop',
              ease: 'easeInOut' 
            }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
              <motion.div 
                className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                animate={{ 
                  y: [0, 4, 0],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: 'loop',
                  ease: 'easeInOut' 
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;