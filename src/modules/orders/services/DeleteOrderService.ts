import { DeleteResult } from "typeorm";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";
import FindOrderByIdService from "./FindOrderById";

export default class DeleteOrderService {
  public async execute(id: number): Promise<DeleteResult> {
    const orderRepository = new OrderRepository();
    const findOrderByIDService = new FindOrderByIdService();
    await findOrderByIDService.execute(id);
    const result = await orderRepository.delete(id);
    return result;
  }
}