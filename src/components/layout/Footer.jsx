import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300 dark:text-gray-400">{t('footer.rights')}</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Ksambaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/khalil-samba-b86947219/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="mailto:khalil.samba@centrale.centralelille.fr"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;