import AppError from "../../../shared/errors/AppError";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class FindOrdersByClientIdService {
  public async execute(id: number): Promise<Client> {
    const clientRepository = new ClientRepository();
    const client = await clientRepository.findOrdersByClientId(id);

    if (!client) {
      throw new AppError("Cliente não Existe");
    }

    return client;
  }
}