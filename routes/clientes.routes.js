import { Router } from "express";
import { addClientes, clienteForId, deleteClient, editClientes, loadClientes } from "../controllers/clientes.controllers.js";

const route = Router();

route.get("/clientes", loadClientes);
route.get("/clientes/:id", clienteForId);
route.post("/clientes", addClientes);
route.put("/clientes/:id", editClientes);
route.post("/clientes/deletes", deleteClient);

export default route;
