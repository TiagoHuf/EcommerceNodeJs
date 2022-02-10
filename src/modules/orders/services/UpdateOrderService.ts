import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";
import FindOrderByIdService from "./FindOrderById";

export default class UpdateOrderService {
    public async execute(data: IOrderDTO): Promise<Order> {
        const orderRepository = new OrderRepository();
        const findOrderById = new FindOrderByIdService();
        const findOrder = await findOrderById.execute(Number(data.id));
        const order = await orderRepository.update(data);
        return order;
    }
}