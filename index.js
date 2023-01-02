import express from "express";
import cors from "cors";
import { PUERTO } from "./env/configEnv.js";
import "./databases/conexion.js";
import clientesRoutes from "./routes/clientes.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors({origin: true, credentials: true}));

// Usamos el router con el controlador
app.use(clientesRoutes);

app.listen(PUERTO, () =>
  console.log(`Servidor corriendo en el puerto -> ${PUERTO}`)
);
