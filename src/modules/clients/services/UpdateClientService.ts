import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import FindClientByIdService from "./FindOrdersByClientIdService";

export default class UpdateClientService {
    public async execute(data: IClientDTO): Promise<Client> {
        const clientRepository = new ClientRepository();
        const findClientById = new FindClientByIdService();
        const findClient = await findClientById.execute(Number(data.id));
        const client = await clientRepository.update(data);
        return client;
    }
}