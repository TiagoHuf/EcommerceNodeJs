import AppError from "../../../shared/errors/AppError";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class FindOrderByIdService {
  public async execute(id: number): Promise<Order> {
    const orderRepository = new OrderRepository();
    const order = await orderRepository.findById(id);

    if (!order) {
      throw new AppError("Pedido não Existe");
    }

    return order;
  }
}