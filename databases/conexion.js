import mongoose from "mongoose";
import { RUTA_MONGO_DB } from "../env/configEnv.js";

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(RUTA_MONGO_DB);
  console.log("Conectado a mongodb...");
} catch (error) {
  console.log("error al conectar con mongodb");
}
