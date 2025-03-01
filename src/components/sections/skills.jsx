import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { BrainCog, Bot, Code, Cloud, Layers, GitBranch } from 'lucide-react';

const Skills = () => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  
  // Skills data extracted from resume
  const skillCategories = [
    {
      id: "ai",
      name: "AI Générative",
      icon: <BrainCog />,
      color: "from-purple-500 to-indigo-500",
      bgLight: "bg-purple-50",
      bgDark: "bg-purple-900/20",
      borderLight: "border-purple-200",
      borderDark: "border-purple-700",
      textLight: "text-purple-800",
      textDark: "text-purple-300",
      skills: ["LangChain", "RAG", "LLM Fine-tuning", "Flowise", "make.com", "n8n"]
    },
    {
      id: "ml",
      name: "Machine Learning",
      icon: <Bot />,
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      bgDark: "bg-blue-900/20",
      borderLight: "border-blue-200",
      borderDark: "border-blue-700",
      textLight: "text-blue-800",
      textDark: "text-blue-300",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "LSTM", "Transformers"]
    },
    {
      id: "mlops",
      name: "MLOps",
      icon: <Cloud />,
      color: "from-green-500 to-teal-500",
      bgLight: "bg-teal-50",
      bgDark: "bg-teal-900/20",
      borderLight: "border-teal-200",
      borderDark: "border-teal-700",
      textLight: "text-teal-800",
      textDark: "text-teal-300",
      skills: ["Docker", "Kubernetes", "MLflow", "CI/CD", "FastAPI"]
    },
    {
      id: "dev",
      name: "Développement",
      icon: <Code />,
      color: "from-orange-500 to-amber-500",
      bgLight: "bg-amber-50",
      bgDark: "bg-amber-900/20",
      borderLight: "border-amber-200",
      borderDark: "border-amber-700",
      textLight: "text-amber-800",
      textDark: "text-amber-300",
      skills: ["Python", "JavaScript/React", "C++", "APIs RESTful"]
    }
  ];
  
  // Certification data
  const certifications = [
    { name: "Prompt Engineering for LLMs", issuer: "DeepLearning.AI", year: "2024" },
    { name: "Architectures d'IA Générative", issuer: "Coursera", year: "2025" },
    { name: "Scrum Master", issuer: "Coursera", year: null }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Function to get background class based on theme and category
  const getBgClass = (category) => {
    return darkMode ? category.bgDark : category.bgLight;
  };

  // Function to get border class based on theme and category
  const getBorderClass = (category) => {
    return darkMode ? category.borderDark : category.borderLight;
  };

  // Function to get text class based on theme and category  
  const getTextClass = (category) => {
    return darkMode ? category.textDark : category.textLight;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200 relative overflow-hidden">
      {/* Background Pattern/Wallpaper */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 select-none pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-36 right-36 w-80 h-80 bg-green-500 dark:bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Tech-inspired pattern */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.5 + 0.25
              }}
            >
              {i % 3 === 0 ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400 dark:text-gray-500">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 4V2M12 22V20M4 12H2M22 12H20M6.34 6.34L4.93 4.93M19.07 19.07L17.66 17.66M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : i % 3 === 1 ? (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-indigo-400 dark:text-indigo-500">
                  <path d="M20 12H4M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-purple-400 dark:text-purple-500">
                  <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 30s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {t('skills')}
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
          />
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="flex flex-col"
            >
              {/* Category Header */}
              <motion.div variants={itemVariants} className="flex items-center mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
              </motion.div>
              
              {/* Skills Pills */}
              <motion.div variants={containerVariants} className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-full ${getBgClass(category)} border ${getBorderClass(category)} 
                      ${getTextClass(category)} text-sm font-medium transition-all duration-300`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-8">
            <div className="p-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 mr-3 text-white">
              <Layers size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('certifications.title')}</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="px-6 py-4 rounded-lg border border-gray-200 dark:border-gray-700 
                  bg-gray-50 dark:bg-gray-700/50 shadow-sm max-w-xs w-full"
              >
                <div className="flex items-start gap-3">
                  <GitBranch className="mt-1 flex-shrink-0 text-violet-500 dark:text-violet-400" size={18} />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.issuer} {cert.year && `• ${cert.year}`}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;