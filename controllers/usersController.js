import User from "../models/User.js";

const UserController = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log("Error al traer los usuarios", error);
    }
  },
};

export default UserController;
