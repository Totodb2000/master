
const express = require('express');
const router = express.Router();
const bookService = require('../services/book.Services');


module.exports = {

listBooks: async (req, res) => {
  try {
    const books = await bookService.getAllBooks(req.user);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Errore nel recupero dei libri.' });
  }
},

findBook: async (req, res) => {
  let id=req.params.id
  try {
    const book = await bookService.getBookById(id, req.user);
    res.json(book);
  } catch (error) {
    res.status(404).json({ error: 'Errore nel recupero dei libri.' });
  }
},


 addBook: async (req, res) => {
    const { visibility, title, author, year } = req.body;
  
    try {
      const newBook = await bookService.addBook(visibility,title, author, year);
      res.json(newBook);
    } catch (error) {
      res.status(500).json({ error: 'Errore nell aggiunta del libro.' })
    }
  },

 updateBook: async(req,res) => {
    const {id} = req.params; 
    const {title, author, year} = req.body

    try{
      const updatedBook = await bookService.updateBook(id,title,author,year)
      res.json(updatedBook)
    }catch(error){
      res.status(400).json({ error:"Errore nell'aggiornamento del libro."})
    }
 },

 deleteBook: async(req,res) => {
  const{id} =req.params

  try{
    const deletedBook = await bookService.deleteBook(id);
    res.json(deletedBook);
  }catch(error){
    res.status(404).json({error:"Libro non trovato."})
  }

 }


}