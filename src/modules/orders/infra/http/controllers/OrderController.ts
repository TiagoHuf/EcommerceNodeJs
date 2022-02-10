import { request, Request, response, Response } from "express";
import { DeleteResult } from "typeorm";
import CreateOrderService from "../../../services/CreateOrderService";
import DeleteOrderService from "../../../services/DeleteOrderService";
import ListOrderService from "../../../services/FindAllOrderService";
import FindOrderByIdService from "../../../services/FindOrderById";
import UpdateOrderService from "../../../services/UpdateOrderService";

class OrdersController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createOrderService = new CreateOrderService();
        const order = await createOrderService.execute(data);
        return response.json(order);
    }

    async list(request: Request, response: Response) {
        const listOrderService = new ListOrderService();
        const order = await listOrderService.execute();
        return response.json(order);
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const findOrderById = new FindOrderByIdService();
        const order = await findOrderById.execute(Number(id));
        return response.json(order);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const data = request.body;
        const { id } = request.params; // desestruturação
        const updateOrderService = new UpdateOrderService();

        const data_to_update = {
            ...data, // rest / spread operator
            id: Number(id),
        }

        const client = await updateOrderService.execute(data_to_update);
        return response.json(client);
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteOrderService = new DeleteOrderService();
        const result = await deleteOrderService.execute(Number(id));
        return response.json(result);
    }
}

export default new OrdersController();