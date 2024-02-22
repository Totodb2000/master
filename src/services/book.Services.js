const Book = require('../models/book.Model');

module.exports = {

getAllBooks : async function (usr) {
  try {
    console.log("TT", usr)
    if(!usr){
        const publicbooks = await Book.find({visibility: 'public'});
        return publicbooks;
    }
    else{
      const userBooks = await Book.find({
        $or: [
          { visibility: 'public' },
          { $and: [{ visibility: 'private' }, { author: usr.username }] },
        ],
      });

      return userBooks;
    }
  } catch (error) {
    throw error;
  }
},

getBookById : async function (id,usr) {
  try {
    console.log("Usr", usr)
    if(!usr){
    const publicbook = await Book.findOne({_id: id,visibility: 'public'});
    return publicbook;
    }
    else{
      const myBook = await Book.findOne({ _id:id, $and: [{ visibility: 'private' }, { author: usr.username }] })
      return myBook
    }
  } catch (error) {
    throw error;
  }
},

addBook: async function ( visibility,title, author, year) {
  try {
    const newBook = new Book({  visibility, title, author, year });
    const savedBook = await newBook.save();
    return savedBook;
  } catch (error) {
    throw error;
  }
},

updateBook: async function (id,title,author,year){
  try{
    const updatedBook = await Book.findByIdAndUpdate(id, { title, author, year }, { new: true });
    return updatedBook;
    } catch (error) {
        throw error;
  }
},

deleteBook:  async function (id) {
    try {
      const deletedBook = await Book.findByIdAndDelete(id);
      return deletedBook;
    } catch (error) {
      throw error;
    }
  }
  
}