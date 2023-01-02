import express from "express";
import cors from "cors";
import { PUERTO } from "./env/configEnv.js";
import "./databases/conexion.js";
import clientesRoutes from "./routes/clientes.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({origin: true, credentials: true}));

// Usamos el router con el controlador
app.use(clientesRoutes);

app.listen(PUERTO, () =>
  console.log(`Servidor corriendo en el puerto -> ${PUERTO}`)
);
