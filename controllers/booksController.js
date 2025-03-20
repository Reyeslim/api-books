import Book from "../models/Book.js";

const BookController = {
  async getAllBooks(req, res) {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      console.log("Error al traer los libros", error);
    }
  },
};

export default BookController;
