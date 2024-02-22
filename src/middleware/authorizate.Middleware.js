const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateUser = function(req, res, next) {
  const auth = req.header('Authorization');
  const authArray = auth.split(" ");
  const token = authArray[1];

  try {
    const decoded = jwt.verify(token, 'Dbduzpa4547gts');
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token non valido' });
  }
};

module.exports = { authenticateUser };