import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectToDatabase from '../backend/Models/db.js';  // add .js extension for ESM
import User from './Models/User.js';
import authRouter from './Routes/AuthRouter.js';
import cors from 'cors';
import verifyToken from './Middlewares/Auth.js';

const app = express();

app.use(cors());
app.use(express.json());

// Connect to DB
connectToDatabase();

// Mount your auth routes
app.use('/api/auth', authRouter);

// Route to get all users
app.get('/getAllUsers', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

// Route for logged-in user info
app.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});
