import { ProductRepository } from "@/repositories/repositories";
import { Product } from "@/db/entities/product.entity";

export class ProductService {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  public getAll = async (): Promise<Product[]> => {
    return await this.productRepository.getAll();
  };

  public async getByProductTagId(id: number): Promise<Product[]> {
    return await this.productRepository.getByProductTagId(id);
  }
}
