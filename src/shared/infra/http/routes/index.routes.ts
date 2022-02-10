import { Router } from "express";
import categoriesRoutes from "../../../../modules/categories/infra/http/routes/categories.routes";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import ordersRoutes from "../../../../modules/orders/infra/http/routes/orders.routes";
import productsRoutes from "../../../../modules/products/infra/http/routes/products.routes";

const routes = Router();

routes.use("/clients", clientsRoutes);

routes.use("/categories", categoriesRoutes);

routes.use("/products", productsRoutes);

routes.use("/orders", ordersRoutes);

export default routes;