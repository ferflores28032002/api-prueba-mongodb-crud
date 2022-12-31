import dotenv from "dotenv";

dotenv.config({ path: "./env/.env" });

export const PUERTO = process.env.PORT;
export const RUTA_MONGO_DB = process.env.RUTA_MONGO_DB;


