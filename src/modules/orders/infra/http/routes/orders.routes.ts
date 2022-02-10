import { Router } from "express";
import OrderController from "../controllers/OrderController";

const routes = Router();

routes.post("/", OrderController.create);

routes.get("/", OrderController.list);

routes.get("/:id", OrderController.findById);

routes.put("/:id", OrderController.update);

routes.delete("/:id", OrderController.delete);

export default routes;