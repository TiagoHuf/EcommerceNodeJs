import { Router } from "express";
import ProductController from "../controllers/ProductController";
import ProductsController from "../controllers/ProductController";

const routes = Router();

routes.post("/", ProductsController.create);

routes.get("/", ProductsController.list);

routes.get("/:id", ProductController.findById);

routes.put("/:id", ProductController.update);

routes.delete("/:id", ProductController.delete);

export default routes;