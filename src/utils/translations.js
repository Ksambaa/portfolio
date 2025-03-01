export const translations = {
  fr: {
    // Hero section
    'hero.profileAlt': 'Photo de profil',
    'hero.title': "Étudiant en M2 IA & Data Science à l'École Centrale de Lille",
    'hero.tagline': "Passionné par les systèmes multi-agents et l'IA générative",
    'hero.cta': "Voir mes projets IA",
    
    // Navigation (added Certifications)
    'about': 'À Propos',
    'experience': 'Expérience',
    'projects': 'Projets IA',
    'skills': 'Compétences',
    'certifications': 'Certifications',
    'education': 'Formation',
    'languages': 'Langues',
    'contact': 'Contact',
    
    // About section
    'about.description': "Étudiant en M2 IA & Data Science passionné par les systèmes multi-agents et l'IA générative. Expérience en conception d'architectures NLP et déploiement de modèles prédictifs à impact opérationnel.",
    'about.background': "Formation solide en ingénierie des systèmes complexes complétée par des spécialisations en architectures d'IA avancées (RAG, LLMs, Multi-agents) et méthodologies MLOps.",
    'about.vision': "Je m'intéresse au développement de systèmes IA symbiotiques amplifiant l'intelligence collective humaine.",
    'about.journey.title': "Mon Parcours",
    'about.journey.marrakech': "Né à Marrakech, j'ai grandi entre les montagnes de l'Atlas et les jardins historiques, un environnement qui a forgé ma capacité à naviguer entre tradition et innovation.",
    'about.journey.math': "Passionné par les mathématiques et la physique depuis mon enfance, j'ai toujours été fasciné par leur capacité à modéliser le monde qui nous entoure. Cette passion m'a naturellement guidé vers l'intelligence artificielle.",
    'about.journey.music': "En parallèle de mes études, je joue de la guitare. La musique m'a appris la patience, la précision et la créativité - des qualités que j'apporte dans mes projets d'IA.",
    'about.journey.transition': "Mon parcours des équations différentielles à l'IA générative représente ma quête constante pour créer des systèmes intelligents qui amplifient les capacités humaines.",
    'about.journey.vision': "Je crois fermement que les systèmes multi-agents et l'IA générative peuvent transformer notre façon de résoudre les problèmes complexes, en combinant la rigueur mathématique et l'intuition créative.",
    'education.centraleEcole': 'École Centrale de Lille - M2, Intelligence Artificielle & Data Science',
    'education.courses': 'Cours spécialisés: IA Générative, Systèmes Multi-Agents, Apprentissage par Renforcement',
    'education.centraleCasablanca': 'École Centrale Casablanca - Diplôme d\'Ingénieur en Systèmes Complexes',
    'education.prepa': 'Classes Préparatoires Ibn Timiya - MP',
    'languages.english': 'Anglais C1 (TOEIC : 945/990)',
    'languages.french': 'Français B2 (Dalf C1)',
    'languages.arabic': 'Arabe (Langue Maternelle)',
    
    // Experience section
    'experience.maia.position': 'Ingénieur IA & NLP',
    'experience.maia.period': '2024-2025',
    'experience.maia.description': "Fine-tuning de modèles d'embedding avec 35% d'amélioration des performances. Création d'une pipeline d'acquisition de données (scraping) et prétraitement pour optimisation des embeddings.",
    
    'experience.ileo.position': 'Data Scientist',
    'experience.ileo.period': '2024-2025',
    'experience.ileo.description': "Système de prédiction des fuites hydrauliques (MSE: 0.12) déployé via une API Flask, intégrant des modèles hybrides LSTM/Gradient Boosting pour une détection 48h avant les incidents.",
    
    'experience.pulse.position': 'Développeur Full Stack & IA',
    'experience.pulse.period': 'Avr-Juil 2024',
    'experience.pulse.description': "API RESTful Django avec NLP (Word2Vec) pour matching CV/offres. Dashboard React/Redux pour la visualisation des résultats de matching. Méthodologie Agile, Git, Docker et documentation technique complète.",
    
    'experience.lear.position': 'Stage Opérateur',
    'experience.lear.period': 'Été 2023',
    'experience.lear.description': "Gestion d'inventaire des actifs avec Excel. Développement de scripts Python permettant de réduire de 15 heures le temps de travail manuel par semaine.",
    
    // Projects section - Nouveaux projets
    'projects.nocode.title': "Plateforme No-Code pour RAG et Agents",
    'projects.nocode.description': "Développement d'un écosystème complet d'agents IA et de pipelines RAG utilisant des outils no-code, permettant une création et déploiement rapides de solutions IA avancées.",
    'projects.nocode.achievements': [
      'Création de 8+ workflows automatisés',
      'Réduction de 70% du temps de développement de solutions RAG',
      'Intégration avec des systèmes d\'entreprise'
    ],
    'projects.nocode.workflow': [
      'Conception de workflows visuels',
      'Création d\'agents spécialisés avec mémoire',
      'Automatisation des tâches de gestion de données',
      'Orchestration de services multi-APIs'
    ],

    'projects.obstacles.title': "Prédiction de Position d'Obstacles",
    'projects.obstacles.description': "Système de prédiction temps réel pour anticiper les positions d'obstacles mobiles dans des environnements complexes, permettant des évacuations plus sûres et efficaces.",
    'projects.obstacles.tech': "MATLAB, Scikit-learn, NumPy, Pandas, SVM",
    'projects.obstacles.category': "Machine Learning",
    'projects.obstacles.achievements': [
      'Précision de prédiction >92% à 5 secondes',
      'Modélisation mathématique des trajectoires',
      'Algorithme optimisé pour calcul en temps réel'
    ],
    'projects.obstacles.workflow': [
      'Génération de dataset synthétique',
      'Preprocessing et feature engineering',
      'Sélection et entraînement de modèles prédictifs',
      'Validation par simulation et tests réels'
    ],

    'projects.robots.title': "Robots Autonomes avec Évitement de Collision",
    'projects.robots.description': "Système avancé d'évitement de collision pour robots autonomes basé sur des réseaux de neurones profonds, assurant une navigation sécurisée dans des environnements dynamiques.",
    'projects.robots.tech': "Python, C++, GitHub Actions, Deep Learning, ROS",
    'projects.robots.category': "Multi-Agent Systems",
    'projects.robots.achievements': [
      'Réduction des collisions de 40% en environnement dynamique',
      'Architecture neuronale optimisée pour décision en temps réel',
      'Pipeline CI/CD pour déploiement continu des modèles'
    ],
    'projects.robots.workflow': [
      'Conception de l\'architecture du réseau neuronal',
      'Implémentation du système en C++ et Python',
      'Tests en environnement simulé',
      'Intégration continue via GitHub Actions'
    ],
    
    // Skills section - Reorganized for AI focus
    'skills.aiModels': 'Modèles & Architectures IA',
    'skills.aiModels.items': ["LLMs", "RAG", "Transformers", "Fine-tuning (LoRA)", "Systèmes Multi-Agents"],
    
    'skills.aiTools': 'Outils & Frameworks IA',
    'skills.aiTools.items': ["LangChain", "HuggingFace", "AutoGPT", "TensorFlow", "PyTorch", "Scikit-learn"],
    
    'skills.mlops': 'MLOps & Déploiement',
    'skills.mlops.items': ["MLflow", "Docker", "Kubernetes", "FastAPI", "CI/CD", "GitHub Actions"],
    
    'skills.programming': 'Programmation',
    'skills.programming.items': ["Python", "JavaScript/React", "C++", "SQL"],
    
    // Certifications section
    'certifications.title': 'Certifications',
    'certifications.prompt': 'Prompt Engineering for LLMs (DeepLearning.AI, 2024)',
    'certifications.architecture': 'Architectures d\'IA Générative (Coursera, 2025)',
    'certifications.scrum': 'Scrum Master (Coursera)',
    
    // Footer
    'footer.rights': '© 2024 Khalil SAMBA. Tous droits réservés.',
    'footer.contactMe': 'Me Contacter'
  },
  en: {
    // Hero section
    'hero.profileAlt': 'Profile picture',
    'hero.title': "Data Science & AI Master's Student at École Centrale de Lille",
    'hero.tagline': "Passionate about multi-agent systems and generative AI",
    'hero.cta': "View my AI projects",
    
    // Navigation
    'about': 'About',
    'experience': 'Experience',
    'projects': 'AI Projects',
    'skills': 'Skills',
    'certifications': 'Certifications',
    'education': 'Education',
    'languages': 'Languages',
    'contact': 'Contact',
    
    // About section
    'about.description': "Master's student in AI & Data Science passionate about multi-agent systems and generative AI. Experience in designing NLP architectures and deploying predictive models with operational impact.",
    'about.background': "Strong foundation in complex systems engineering complemented by specializations in advanced AI architectures (RAG, LLMs, Multi-agents) and MLOps methodologies.",
    'about.vision': "I'm interested in developing symbiotic AI systems that amplify human collective intelligence.",
    'about.journey.title': "My Journey",
    'about.journey.marrakech': "Born in Marrakech, I grew up between the Atlas mountains and historic gardens, an environment that shaped my ability to navigate between tradition and innovation.",
    'about.journey.math': "Passionate about mathematics and physics since childhood, I've always been fascinated by their ability to model the world around us. This passion naturally guided me toward artificial intelligence.",
    'about.journey.music': "Alongside my studies, I play guitar. Music has taught me patience, precision, and creativity - qualities I bring to my AI projects.",
    'about.journey.transition': "My journey from differential equations to generative AI represents my constant quest to create intelligent systems that amplify human capabilities.",
    'about.journey.vision': "I firmly believe that multi-agent systems and generative AI can transform how we solve complex problems, combining mathematical rigor with creative intuition.",
    'education.centraleEcole': "École Centrale de Lille - Master's in AI & Data Science",
    'education.courses': 'Specialized courses: Generative AI, Multi-Agent Systems, Reinforcement Learning',
    'education.centraleCasablanca': 'École Centrale Casablanca - Complex Systems Engineering',
    'education.prepa': 'Ibn Timiya Preparatory Classes - MP',
    'languages.english': 'English C1 (TOEIC: 945/990)',
    'languages.french': 'French B2 (Dalf C1)',
    'languages.arabic': 'Arabic (Native)',
    
    // Experience section
    'experience.maia.position': 'AI & NLP Engineer',
    'experience.maia.period': '2024-2025',
    'experience.maia.description': "Fine-tuning of embedding models with 35% performance improvement. Creation of data acquisition pipeline (scraping) and preprocessing for embedding optimization.",
    
    'experience.ileo.position': 'Data Scientist',
    'experience.ileo.period': '2024-2025',
    'experience.ileo.description': "Hydraulic leak prediction system (MSE: 0.12) deployed via Flask API, integrating hybrid LSTM/Gradient Boosting models for detection 48h before incidents.",
    
    'experience.pulse.position': 'Full Stack & AI Developer',
    'experience.pulse.period': 'Apr-Jul 2024',
    'experience.pulse.description': "Design of a CV/job matching API using Word2Vec and BERT, improving candidate pre-selection by 30%. Implementation of CI/CD pipeline for automatic retraining of NLP models.",
    
    'experience.lear.position': 'Operator Intern',
    'experience.lear.period': 'Summer 2023',
    'experience.lear.description': "Asset inventory management using Excel. Development of Python scripts reducing manual work time by 15 hours per week.",
    
    // Projects section - New AI Projects
    'projects.nocode.title': "No-Code Platform for RAG and Agents",
    'projects.nocode.description': "Development of a complete ecosystem of AI agents and RAG pipelines using no-code tools, enabling rapid creation and deployment of advanced AI solutions.",
    'projects.nocode.achievements': [
      'Creation of 8+ automated workflows',
      '70% reduction in RAG solution development time',
      'Integration with enterprise systems'
    ],
    'projects.nocode.workflow': [
      'Visual workflow design',
      'Specialized agents creation with memory',
      'Data management task automation',
      'Multi-API service orchestration'
    ],

    'projects.obstacles.title': "Obstacle Position Prediction",
    'projects.obstacles.description': "Real-time prediction system to anticipate mobile obstacle positions in complex environments, enabling safer and more efficient evacuations.",
    'projects.obstacles.tech': "MATLAB, Scikit-learn, NumPy, Pandas, SVM",
    'projects.obstacles.category': "Machine Learning",
    'projects.obstacles.achievements': [
      'Prediction accuracy >92% at 5 seconds',
      'Mathematical trajectory modeling',
      'Algorithm optimized for real-time computation'
    ],
    'projects.obstacles.workflow': [
      'Synthetic dataset generation',
      'Preprocessing and feature engineering',
      'Predictive model selection and training',
      'Validation through simulation and real tests'
    ],

    'projects.robots.title': "Autonomous Robots with Collision Avoidance",
    'projects.robots.description': "Advanced collision avoidance system for autonomous robots based on deep neural networks, ensuring safe navigation in dynamic environments.",
    'projects.robots.tech': "Python, C++, GitHub Actions, Deep Learning, ROS",
    'projects.robots.category': "Multi-Agent Systems",
    'projects.robots.achievements': [
      '40% reduction in collisions in dynamic environments',
      'Neural architecture optimized for real-time decision making',
      'CI/CD pipeline for continuous model deployment'
    ],
    'projects.robots.workflow': [
      'Neural network architecture design',
      'System implementation in C++ and Python',
      'Testing in simulated environment',
      'Continuous integration via GitHub Actions'
    ],
    
    // Skills section - Reorganized for AI focus
    'skills.aiModels': 'AI Models & Architectures',
    'skills.aiModels.items': ["LLMs", "RAG", "Transformers", "Fine-tuning (LoRA)", "Multi-Agent Systems"],
    
    'skills.aiTools': 'AI Tools & Frameworks',
    'skills.aiTools.items': ["LangChain", "HuggingFace", "AutoGPT", "TensorFlow", "PyTorch", "Scikit-learn"],
    
    'skills.mlops': 'MLOps & Deployment',
    'skills.mlops.items': ["MLflow", "Docker", "Kubernetes", "FastAPI", "CI/CD", "GitHub Actions"],
    
    'skills.programming': 'Programming',
    'skills.programming.items': ["Python", "JavaScript/React", "C++", "SQL"],
    
    // Certifications section
    'certifications.title': 'Certifications',
    'certifications.prompt': 'Prompt Engineering for LLMs (DeepLearning.AI, 2024)',
    'certifications.architecture': 'Generative AI Architectures (Coursera, 2025)',
    'certifications.scrum': 'Scrum Master (Coursera)',
    
    // Footer
    'footer.rights': '© 2024 Khalil SAMBA. All rights reserved.',
    'footer.contactMe': 'Contact Me'
  }
};