const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateUser = function(req, res, next) {
  let auth = req.header('Authorization');
  
  if(auth){
  const authArray = auth.split(" ")
  const token = authArray[1]

  if (!token) {
    const nonAuthenticate= "utente non autenticato"
  }

  try {
    const decoded = jwt.verify(token,'Dbduzpa4547gts');    
    req.user = {username: decoded.username, role: decoded.role}
  } catch (error) {
    res.status(401).json({ error: 'Token non valido' });
  }
}

next();

};

module.exports = {authenticateUser};