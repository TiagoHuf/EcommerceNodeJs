import { DeleteResult } from "typeorm";
import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";

export default interface IClientRepository {
    create(data: IOrderDTO): Promise<Order>;
    list(): Promise<Order[]>;
    findById(id: number) : Promise<Order | undefined>;
    update(data: IOrderDTO): Promise<Order>;
    delete(id: number) : Promise<DeleteResult>;
}