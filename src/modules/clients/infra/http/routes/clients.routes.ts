import { Router } from "express";
import ClientController from "../controllers/ClientController";
import ClientsController from "../controllers/ClientController";

const routes = Router();

routes.post("/", ClientsController.create);

routes.get("/", ClientsController.list);

routes.get("/:id", ClientController.findById);

routes.get("/:id/orders", ClientController.findOrdersByClientId);

routes.get("/:cpf/cpf", ClientController.findByCpf);

routes.put("/:id", ClientController.update);

routes.delete("/:id", ClientController.delete);

export default routes;