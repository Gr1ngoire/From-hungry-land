import { Repository } from "typeorm";
import { ProductTag } from "../../db/entities/productTag.entity";

class ProductTagRepository {
  constructor(private repository: Repository<ProductTag>) {
    this.repository = repository;
  }

  public getAll = async (): Promise<ProductTag[]> => {
    return await this.repository.find({
      select: {
        id: true,
        name: true,
      },
    });
  };
}

export { ProductTagRepository };