const User = require('../models/user.Model');
const authService = require('../services/auth.Service');
const { generateJWTToken } = require('../utils/auth.Utils');

module.exports = {
  register: async (req, res) => {
    // Implementazione della registrazione
    try {
      const newUser = await authService.registerUser(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Errore durante la registrazione' });
    }
  },

  login: async (req, res) => {
    // Implementazione del login
    try {
      const { username, password } = req.body;
      const token = await authService.authenticateUser(username, password);

      if (!token) {      
        res.status(401).json({ error: 'Credenziali non valide' });
      }

      res.json({"token": token})
    } catch (error) {
      res.status(500).json({ error: 'Errore durante il login' });
    }
  },
};