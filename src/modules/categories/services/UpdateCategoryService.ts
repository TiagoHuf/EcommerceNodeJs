import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import FindCategoryByIdService from "./FindCategoryById";

export default class UpdateCategoryService {
    public async execute(data: ICategoryDTO): Promise<Category> {
        const categoryRepository = new CategoryRepository();
        const findCategoryById = new FindCategoryByIdService();
        const findCategory = await findCategoryById.execute(Number(data.id));
        const Category = await categoryRepository.update(data);
        return Category;
    }
}