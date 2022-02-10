import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class ListClientService {
    public async execute(): Promise<Client[]> {
        const clientRepository = new ClientRepository();
        const client = await clientRepository.list();
        return client;
    }
}