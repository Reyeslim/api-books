import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("BBDD conectada correctamente");
  } catch (error) {
    console.error("Error al conectar", error);
  }
};
