import AppError from "../../../shared/errors/AppError";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class CreateClientService {
    public async execute(data: IClientDTO): Promise<Client> {
        const cpfRepository = new ClientRepository();
        const cpf = await cpfRepository.findByCpf(data.cpf);

        if (cpf) {
            throw new AppError("Cpf já Cadastrado");
        }

        const clientRepository = new ClientRepository();
        const client = await clientRepository.create(data);
        return client;
    }
}