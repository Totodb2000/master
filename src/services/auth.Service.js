const User = require('../models/user.Model');
const { generateJWTToken } = require('../utils/auth.Utils');


module.exports = {
  registerUser: async (userData) => {
    try {
      const newUser = new User(userData);
      newUser.setPassword(userData.password);
      await newUser.save();
      return newUser;
    } catch (error) {
      throw error;
    }
  },

  authenticateUser: async (username, password) => {
    try {
      const user = await User.findOne({ username });

      if (user && user.validatePassword(password)) {
        const token = generateJWTToken(user);
        return token ;
      } 
    } catch (error) {
      throw error;
    }
  },
};