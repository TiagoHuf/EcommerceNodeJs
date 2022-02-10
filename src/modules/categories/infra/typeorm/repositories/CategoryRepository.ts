import ICategoryDTO from "../../../dtos/ICategoryDTO";
import ICategoryRepository from "../../../repositories/ICategoryRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Category from "../entities/Category";
export default class CategoryRepository implements ICategoryRepository {
    
private ormRepository: Repository<Category>;

constructor() {
    this.ormRepository = getRepository(Category);
}

    async delete(id: number): Promise<DeleteResult> {
        return await this.ormRepository.delete(id);
    }

    async update(data: ICategoryDTO): Promise<Category> {
        const category = await this.ormRepository.save(data);
        return category;
    }

    async findById(id: number): Promise<Category | undefined> {
        const category = await this.ormRepository.findOne(id);   
        return category;
      }

    async list(): Promise<Category[]> {
        const categorys = await this.ormRepository.find();
        return categorys;
    }
    
    async create(data: ICategoryDTO): Promise<Category> {
        const category = this.ormRepository.create(data);
        return this.ormRepository.save(category);
    }

}