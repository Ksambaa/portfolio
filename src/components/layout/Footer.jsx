// src/components/layout/Footer.jsx
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 Khalil SAMBA. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Ksambaa" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/khalil-samba-b86947219/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="mailto:khalil.samba@centrale.centralelille.fr">
              <MailIcon className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;