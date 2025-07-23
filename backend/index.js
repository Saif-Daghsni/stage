require('dotenv').config();
const express = require('express');
const connectToDatabase = require('../backend/Models/db');
const User = require('./Models/User');
const authRouter = require('./Routes/AuthRouter');
const cors = require('cors');

const app = express();
// Autoriser toutes les origines
app.use(cors());

// Middleware
app.use(express.json());
app.use(cors());
// Connexion à MongoDB
connectToDatabase();

// Routes
app.use('/api/auth', authRouter);

app.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur le port ${PORT}`);
});
