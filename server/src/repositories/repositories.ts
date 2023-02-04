import { dataSource } from "@/app-data-source";

import { ProductRepository } from "./product/product.repository";
import { ProductTagRepository } from "./productTag/productTag.repository";
import {UserRepository} from "@/repositories/user/user.repository";

import { Product } from "@/db/entities/product.entity";
import { ProductTag } from "@/db/entities/productTag.entity";
import { User } from "@/db/entities/user.entity";


const productRepository = new ProductRepository(
  dataSource.getRepository(Product)
)
const productTagRepository = new ProductTagRepository(
  dataSource.getRepository(ProductTag)
)

const userRepository = new UserRepository(
    dataSource.getRepository(User)
)


export {
    ProductRepository,
    ProductTagRepository,
    UserRepository,
    productRepository,
    productTagRepository,
    userRepository
}