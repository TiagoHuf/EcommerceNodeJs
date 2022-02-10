import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
import CategorysController from "../controllers/CategoryController";

const routes = Router();

routes.post("/", CategorysController.create);

routes.get("/", CategorysController.list);

routes.get("/:id", CategoryController.findById);

routes.put("/:id", CategoryController.update);

routes.delete("/:id", CategoryController.delete);

export default routes;