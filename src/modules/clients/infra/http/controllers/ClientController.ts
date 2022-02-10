import { request, Request, response, Response } from "express";
import FindOrderByIdService from "../../../../orders/services/FindOrderById";
import CreateClientService from "../../../services/CreateClientService";
import DeleteClientService from "../../../services/DeleteClientService";
import ListClientService from "../../../services/FindAllClientService";
import FindClientByCpfService from "../../../services/FindClientByCpfService";
import FindOrdersByClientIdService from "../../../services/FindOrdersByClientIdService";
import FindClientByIdService from "../../../services/FindClientByIdService";
import UpdateClientService from "../../../services/UpdateClientService";

class ClientsController {
  async create(request: Request, response: Response) {
    const data = request.body;
    const createClientService = new CreateClientService();
    const client = await createClientService.execute(data);
    return response.json(client);
  }

  async list(request: Request, response: Response) {
    const listClientService = new ListClientService();
    const client = await listClientService.execute();
    return response.json(client);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findClientById = new FindClientByIdService();
    const client = await findClientById.execute(Number(id));
    return response.json(client);
  }

  async findOrdersByClientId(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findOrdersByClientId = new FindOrdersByClientIdService();
    const client = await findOrdersByClientId.execute(Number(id));
    return response.json(client);
  }

  async findByCpf(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;
    const findClientByCpf = new FindClientByCpfService();
    const client = await findClientByCpf.execute(cpf);
    return response.json(client);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const { id } = request.params; // desestruturação    
    const updateClientService = new UpdateClientService();
    const data_to_update = {
      ...data, // rest / spread operator
      id: Number(id),
    }
    const client = await updateClientService.execute(data_to_update);
    return response.json(client);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteClientService = new DeleteClientService();
    const result = await deleteClientService.execute(Number(id));
    return response.json(result);
  }
}

export default new ClientsController();