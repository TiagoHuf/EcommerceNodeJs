import { request, Request, response, Response } from "express";
import { DeleteResult } from "typeorm";
import CreateCategoryService from "../../../services/CreateCategoryService";
import DeleteCategoryService from "../../../services/DeleteCategoryService";
import ListCategoryService from "../../../services/FindAllCategoryService";
import FindCategoryByIdService from "../../../services/FindCategoryById";
import UpdateCategoryService from "../../../services/UpdateCategoryService";

class CategorysController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createCategoryService = new CreateCategoryService();
        const Category = await createCategoryService.execute(data);
        return response.json(Category);
    }

    async list(request: Request, response: Response) {
        const listCategoryService = new ListCategoryService();
        const Category = await listCategoryService.execute();
        return response.json(Category);
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const findCategoryById = new FindCategoryByIdService();
        const Category = await findCategoryById.execute(Number(id));
        return response.json(Category);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const data = request.body;
        const { id } = request.params; // desestruturação

        const updateCategoryService = new UpdateCategoryService();

        const data_to_update = {
            ...data, // rest / spread operator
            id: Number(id),
        }

        const client = await updateCategoryService.execute(data_to_update);
        return response.json(client);
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteCategoryService = new DeleteCategoryService();
        const result = await deleteCategoryService.execute(Number(id));
        return response.json(result);
    }
}

export default new CategorysController();