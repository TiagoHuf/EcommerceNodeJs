import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import FindProductByIdService from "./FindProductById";

export default class UpdateProductService {
    public async execute(data: IProductDTO): Promise<Product> {
        const productRepository = new ProductRepository();
        const findProductById = new FindProductByIdService();
        const findProduct = await findProductById.execute(Number(data.id));
        const product = await productRepository.update(data);
        return product;
    }
}