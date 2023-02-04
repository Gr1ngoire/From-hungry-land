import {productTagRepo} from "@/repositories/repositories";
import { ProductTag } from "@/db/entities/productTag.entity";

export class ProductTagService {
  private readonly repo = productTagRepo

  public getAll = async (): Promise<ProductTag[]> => {
    return await this.repo.find({
      select: {
        id: true,
        name: true,
      },
    });
  }
}
