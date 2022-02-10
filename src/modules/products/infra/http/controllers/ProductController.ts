import { request, Request, response, Response } from "express";
import CreateProductService from "../../../services/CreateProductService";
import DeleteProductService from "../../../services/DeleteProductService";
import ListProductService from "../../../services/FindAllProductService";
import FindProductByIdService from "../../../services/FindProductById";
import UpdateProductService from "../../../services/UpdateProductService";

class ProductsController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createProductService = new CreateProductService();
        const product = await createProductService.execute(data);
        return response.json(product);
    }

    async list(request: Request, response: Response) {
        const listProductService = new ListProductService();
        const product = await listProductService.execute();
        return response.json(product);
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const findProductById = new FindProductByIdService();
        const product = await findProductById.execute(Number(id));
        return response.json(product);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const data = request.body;
        const { id } = request.params;
        const updateProductService = new UpdateProductService();
        const data_to_update = {
            ...data,
            id: Number(id),
        }
        const product = await updateProductService.execute(data_to_update);
        return response.json(product);
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteProductService = new DeleteProductService();
        const result = await deleteProductService.execute(Number(id));
        return response.json(result);
    }
}

export default new ProductsController();