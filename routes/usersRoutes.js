import express from "express";
import UserController from "../controllers/usersController.js";

const userRouter = express.Router();

userRouter.get("/users", UserController.getAllUsers);

export default userRouter;
