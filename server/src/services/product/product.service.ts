import { Product } from "@/db/entities/product.entity";
import {productTagService} from "@/services/services";
import {ProductRepository} from "@/repositories/product/product.repository";
import { FindOptionsWhere, In, ILike } from "typeorm";
import { userService } from "@/services/services";
import { ProductQueryOptionType } from "shared/common/types/types";

export class ProductService {
  private readonly repo:ProductRepository

  constructor(repo: ProductRepository) {
    this.repo = repo;
  }

  public getAll = async ({take, skip, name, filters, userId}: ProductQueryOptionType): Promise<Product[]> => {
    const whereOptions:FindOptionsWhere<Product> = {}


    if (userId) {
      const user = await userService.getUserProducts(userId)
      console.log("USERNAME" + user)
      whereOptions.id = In(user.products.map(product => product.id))
    }

    if (name) {
      whereOptions.name = ILike(`%${name.trim()}%`)
    }

    if (filters) {
      if (typeof filters === "string") {
        whereOptions.productTag = { name: filters }
      } else {
        whereOptions.productTag = { name: In(filters) }
      }
    }

    return await this.repo.getAll(take, skip, whereOptions);
  };


  public async getByProductTagId(id: number): Promise<Product[]> {
    await productTagService.get(id)
    return await this.repo.getByTagId(id)
  }
}
