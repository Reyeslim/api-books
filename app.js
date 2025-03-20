import express from "express";
import "dotenv/config";
import userRouter from "./routes/usersRoutes.js";
import bookRouter from "./routes/booksRoutes.js";
import { dbConnection } from "./config/config.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);
app.use("/", bookRouter);

dbConnection();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
