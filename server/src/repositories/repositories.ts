import { dataSource } from "@/app-data-source";

import { ProductRepository } from "./product/product.repository";
import { ProductTagRepository } from "./productTag/productTag.repository";

import { Product } from "@/db/entities/product.entity";
import { ProductTag } from "@/db/entities/productTag.entity";

export {
    ProductRepository,
    ProductTagRepository,
}

export const productRepository = new ProductRepository(
  dataSource.getRepository(Product)
)
export const productTagRepository = new ProductTagRepository(
  dataSource.getRepository(ProductTag)
)
