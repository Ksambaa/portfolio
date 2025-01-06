const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Configuration CORS pour la production
const corsOptions = {
  origin: [
    'https://ksambaa.github.io', // Votre URL de portfolio
    'http://localhost:3000' // Pour le développement local
  ],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/send-email', async (req, res) => {
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
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email envoyé avec succès!' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
  }
});

// Route de test pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.json({ message: 'Backend Portfolio en ligne!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});