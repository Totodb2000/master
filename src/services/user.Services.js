const user = require('../models/user.Model');

module.exports = {

getAllUsers : async function () {
  try {
    return await user.find();
  } catch (error) {
    throw error;
  }
},

getUserById : async function (id) {
  try {
    return await user.findById(id);
  } catch (error) {
    throw error;
  }
},

deleteUser:  async function (id) {
    try {
      const deletedUser = await user.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
  
}