import AppError from "../../../shared/errors/AppError";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class FindClientByCpfService {
  public async execute(cpf: string): Promise<Client> {
    const clientRepository = new ClientRepository();
    const client = await clientRepository.findByCpf(cpf);

    if (!client) {
      throw new AppError("Cliente não Existe");
    }

    return client;
  }
}