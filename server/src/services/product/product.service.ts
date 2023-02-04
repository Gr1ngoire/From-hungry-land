import { Product } from "@/db/entities/product.entity";
import {productTagService} from "@/services/services";
import {ProductRepository} from "@/repositories/product/product.repository";

export class ProductService {
  private readonly repo:ProductRepository

  constructor(repo: ProductRepository) {
    this.repo = repo;
  }

  public getAll = async (): Promise<Product[]> => {
    return await this.repo.getAll()
  };

  public async getByProductTagId(id: number): Promise<Product[]> {
    await productTagService.get(id)
    return await this.repo.getByTagId(id)
  }
}
