import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  nombre: String,
  apellidos: String,
  correo: String,
  coleccion: [Number],
  wishlist: [Number],
});

const User = mongoose.model("User", userSchema);

export default User;
