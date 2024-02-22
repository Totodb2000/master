const express = require('express')
const router = express.Router()
let ctrl = require('../controllers/users.controllers')

router.get('/users', ctrl.listUsers)
router.get('/user/:id', ctrl.findUser)
router.delete('/user/:id', ctrl.deleteUser)
module.exports = router