import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  titulo: String,
  autor: String,
  fechaPublicacion: Date,
  imagen: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
