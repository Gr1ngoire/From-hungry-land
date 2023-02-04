// import { Repository } from "typeorm";
// import { Product } from "../../db/entities/product.entity";
//
// export class ProductRepository {
//   private repository : Repository<Product>;
//
//   constructor( repository: Repository<Product>) {
//     this.repository = repository;
//   }
//
//   public getAll = async (): Promise<Product[]> => {
//     return await this.repository.find();
//   }
//
//   public  getByProductTagId = async (id: number): Promise<Product[]> => {
//     return await this.repository.find({
//       relations: ["productTag"],
//       where: { productTag: { id } },
//     });
//   }
// }

import { dataSource } from "@/app-data-source";
import { Product } from "@/db/entities/product.entity";



export const productRepo = dataSource.getRepository(Product)
