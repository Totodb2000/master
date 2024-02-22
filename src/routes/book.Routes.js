const express = require('express')
const router = express.Router()
let ctrl = require('../controllers/books.controllers')
let mw = require('../middleware/authMiddleware')

router.get('/books', mw.authenticateUser,ctrl.listBooks)
router.get('/book/:id', mw.authenticateUser,ctrl.findBook)
router.post('/books',ctrl.addBook)
router.put('/book/:id',ctrl.updateBook)
router.delete('/book/:id', ctrl.deleteBook)

module.exports = router