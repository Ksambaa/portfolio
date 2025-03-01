import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  // Enhanced t function with variable interpolation
  const t = (key, variables = {}) => {
    // Get the translation string or fallback to key
    const text = translations[language][key] || key;
    
    // If no variables, return the text as is
    if (Object.keys(variables).length === 0) {
      return text;
    }
    
    // Replace variables in the format {{varName}}
    let result = text;
    Object.keys(variables).forEach(varName => {
      result = result.replace(new RegExp(`{{${varName}}}`, 'g'), variables[varName]);
    });
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};