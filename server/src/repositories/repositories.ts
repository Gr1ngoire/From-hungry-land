import { dataSource } from "@/app-data-source";

import { ProductRepository } from "./product/product.repository";
import { ProductTagRepository } from "./productTag/productTag.repository";
import {UserRepository} from "@/repositories/user/user.repository";
import {RecipeRepository} from "@/repositories/recipe/recipe.repository";

import { Product } from "@/db/entities/product.entity";
import { ProductTag } from "@/db/entities/productTag.entity";
import { User } from "@/db/entities/user.entity";
import {Recipe} from "@/db/entities/recipe.entity";


const productRepository: ProductRepository = new ProductRepository(dataSource.getRepository(Product))
const productTagRepository: ProductTagRepository = new ProductTagRepository(dataSource.getRepository(ProductTag))
const recipeRepository: RecipeRepository = new RecipeRepository(dataSource.getRepository(Recipe))

const userRepository: UserRepository = new UserRepository(
    dataSource.getRepository(User)
)

export {
    ProductRepository,
    ProductTagRepository,
    RecipeRepository,
    UserRepository,
    productRepository,
    productTagRepository,
    recipeRepository,
    userRepository
}