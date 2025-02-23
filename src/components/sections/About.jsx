import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t('about')}</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.background')}
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{t('education')}</h3>
              <ul className="space-y-2">
                <li className="text-gray-700 dark:text-gray-300">• {t('education.centraleEcole')}</li>
                <li className="text-gray-700 dark:text-gray-300">• {t('education.centraleCasablanca')}</li>
                <li className="text-gray-700 dark:text-gray-300">• {t('education.prepa')}</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{t('languages')}</h3>
              <ul className="space-y-2">
                <li className="text-gray-700 dark:text-gray-300">• {t('languages.english')}</li>
                <li className="text-gray-700 dark:text-gray-300">• {t('languages.french')}</li>
                <li className="text-gray-700 dark:text-gray-300">• {t('languages.arabic')}</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;