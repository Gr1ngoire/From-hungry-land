import { Product } from "@/db/entities/product.entity";
import {productRepo} from "@/repositories/repositories";

export class ProductService {
  private readonly repo = productRepo

  public getAll = async (): Promise<Product[]> => {
    return await this.repo.find();
  };

  public async getByProductTagId(id: number): Promise<Product[]> {
    return await this.repo.find({
      relations: ["productTag"],
      where: { productTag: { id } },
    });
  }
}
