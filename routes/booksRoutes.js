import express from "express";
import BookController from "../controllers/booksController.js";

const bookRouter = express.Router();

bookRouter.get("/books", BookController.getAllBooks);

export default bookRouter;
