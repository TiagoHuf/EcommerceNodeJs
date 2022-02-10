import IClientDTO from "../../../../clients/dtos/IClientDTO";
import IClientRepository from "../../../repositories/IClientRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Client from "../entities/Client";
export default class ClientRepository implements IClientRepository {

    private ormRepository: Repository<Client>;

    constructor() {
        this.ormRepository = getRepository(Client);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.ormRepository.delete(id);
    }

    async update(data: IClientDTO): Promise<Client> {
        const client = await this.ormRepository.save(data);
        return client;
    }

    async findById(id: number): Promise<Client | undefined> {
        const client = await this.ormRepository.findOne(id);
        return client;
    }

    async findOrdersByClientId(id: number): Promise<Client | undefined> {
        return await this.ormRepository
            .createQueryBuilder("clientes")
            .leftJoinAndSelect("clientes.pedidos", "pc")
            .where("clientes.id = :id", { id })
            .getOne();
    }

    async findByCpf(cpf: string): Promise<Client | undefined> {
        const client = await this.ormRepository.findOne({ cpf: cpf });
        return client;
    }

    async list(): Promise<Client[]> {
        const clients = await this.ormRepository.find();
        return clients;
    }

    async create(data: IClientDTO): Promise<Client> {
        const client = this.ormRepository.create(data);
        return this.ormRepository.save(client);
    }
}