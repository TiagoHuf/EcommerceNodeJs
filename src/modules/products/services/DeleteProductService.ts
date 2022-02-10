import { DeleteResult } from "typeorm";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import FindProductByIdService from "./FindProductById";

export default class DeleteProductService {
  public async execute(id: number): Promise<DeleteResult> {
    const productRepository = new ProductRepository();
    const findProductByIDService = new FindProductByIdService();
    await findProductByIDService.execute(id);
    const result = await productRepository.delete(id);
    return result;
  }
}