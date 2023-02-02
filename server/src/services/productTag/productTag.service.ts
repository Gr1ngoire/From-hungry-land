import { ProductTagRepository } from "@/repositories/repositories";
import { ProductTag } from "@/db/entities/productTag.entity";

export class ProductTagService {
  constructor(private productTagRepository: ProductTagRepository) {
    this.productTagRepository = productTagRepository;
  }

  public getAll = async (): Promise<ProductTag[]> => {
    return await this.productTagRepository.getAll();
  }
}
