import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import profilePic from '../../assets/profile.jpg'; // Importez l'image

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <img
            src={profilePic}  // Utilisez la variable importée
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Khalil SAMBA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Data Science & AI Master's Student at École Centrale de Lille
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Ksambaa" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/khalil-samba-b86947219" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="mailto:khalil.samba@centrale.centralelille.fr" 
              className="text-gray-600 hover:text-gray-900"
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