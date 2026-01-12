import express from "express";
import clienteController from "../controllers/clienteController.js";

const routes = express.Router();

routes.get("/clientes", clienteController.listarClientes);
routes.get("/clientes/:id", clienteController.listarClientePorId);
routes.post("/clientes", clienteController.cadastrarCliente);
routes.put("/clientes/:id", clienteController.atualizarCliente);
routes.delete("/clientes/:id", clienteController.excluirCliente);


export default routes;