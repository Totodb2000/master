
const express = require('express');
const router = express.Router();
const userServices = require('../services/user.Services');


module.exports = {

listUsers: async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Errore nel recupero degli utenti.' });
  }
},

findUser: async (req, res) => {
  let id=req.params.id
  try {
    const user = await userServices.getUserById(id);
    res.json(user);
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: 'Errore nel recupero degli utenti.' });
  }
},

 deleteUser: async(req,res) => {
  const{id} =req.params

  try{
    const deleteUser = await userServices.deleteUser(id);
    res.json(deleteUser);
  }catch(error){
    res.status(404).json({error:"Utente non trovato."})
  }

 }


}