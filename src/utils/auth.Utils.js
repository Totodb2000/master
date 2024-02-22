const jwt = require('jsonwebtoken');

module.exports = {
  generateJWTToken: (user) => {
    console.log("USER DI MIMMO", user)
    console.log("USER-ROLE ", user["role"])
    const secretKey = 'Dbduzpa4547gts'; 
    const token = jwt.sign({surname: user.surname, role: user.role}, secretKey, { expiresIn: '1h' });
    // const token = jwt.sign({ userIld: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
    return token;
  },
};