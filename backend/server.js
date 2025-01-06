const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Configuration CORS
const corsOptions = {
  origin: ['https://ksambaa.github.io', 'http://localhost:3000'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());

// Configuration du transporteur email avec plus de logs
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  },
  debug: true, // Active les logs détaillés
  logger: true // Active le logging
});

// Vérification de la configuration email au démarrage
transporter.verify(function(error, success) {
  if (error) {
    console.error('Erreur de configuration email:', error);
  } else {
    console.log('Serveur prêt à envoyer des emails');
  }
});

app.post('/send-email', async (req, res) => {
  console.log('Requête reçue:', req.body); // Log de la requête

  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'khalil.samba@centrale.centralelille.fr',
    subject: `Nouveau message de ${name}`,
    html: `
      <h3>Nouveau message de votre portfolio</h3>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    console.log('Tentative d\'envoi d\'email avec les options:', mailOptions);
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès');
    res.status(200).json({ message: 'Email envoyé avec succès!' });
  } catch (error) {
    console.error('Erreur détaillée:', error);
    res.status(500).json({ 
      message: 'Erreur lors de l\'envoi de l\'email',
      error: error.message 
    });
  }
});

// Route test
app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend Portfolio en ligne!',
    email: process.env.EMAIL ? 'Email configuré' : 'Email non configuré'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log('Variables d\'environnement:', {
    EMAIL: process.env.EMAIL ? 'Configuré' : 'Non configuré',
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? 'Configuré' : 'Non configuré'
  });
});