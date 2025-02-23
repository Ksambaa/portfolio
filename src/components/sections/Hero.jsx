import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import profilePic from '../../assets/profile.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <img
            src={profilePic}  
            alt={t('hero.profileAlt')}
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover ring-4 ring-gray-200 dark:ring-gray-700"
          />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Khalil SAMBA
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
            {t('hero.title')}
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Ksambaa" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/khalil-samba-b86947219" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="mailto:khalil.samba@centrale.centralelille.fr" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;