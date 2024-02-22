const express=require('express')
const mongoose=require('mongoose')
require("dotenv").config()
const bodyParser=require('body-parser')
const bookRoutes = require('./routes/book.Routes')
const userRoutes = require('./routes/users.Routes')
const authRoutes = require('./routes/auth.Routes');

const app=express()
const PORT=process.env.PORT||3000

const db = process.env.MONGO_ADDRES + "/" + process.env.BOOKS_COLLECTION + process.env.USER_COLLECTION

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.json())
app.use('/api', bookRoutes) // Prefixa tutte le route dei libri con '/api'
app.use('/api',userRoutes)
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});