// import { Repository } from "typeorm";
// import { ProductTag } from "../../db/entities/productTag.entity";
//
// class ProductTagRepository {
//   constructor(private repository: Repository<ProductTag>) {
//     this.repository = repository;
//   }
//
//   public getAll = async (): Promise<ProductTag[]> => {
//     return await this.repository.find({
//       select: {
//         id: true,
//         name: true,
//       },
//     });
//   };
// }
//
// export { ProductTagRepository };
import { dataSource } from "@/app-data-source";
import { ProductTag } from "@/db/entities/productTag.entity";



export const productTagRepo = dataSource.getRepository(ProductTag)
