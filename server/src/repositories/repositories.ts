import {dataSource} from "@/app-data-source";

import {ProductRepository} from "./product/product.repository";
import {ProductTagRepository} from "./productTag/product-tag.repository";
import {UserRepository} from "@/repositories/user/user.repository";
import {RecipeRepository} from "@/repositories/recipe/recipe.repository";
import {RoleRepository} from "@/repositories/role/role.repository";

import {Product} from "@/db/entities/product.entity";
import {ProductTag} from "@/db/entities/productTag.entity";
import {User} from "@/db/entities/user.entity";
import {Recipe} from "@/db/entities/recipe.entity";
import {Role} from "@/db/entities/role.entity";


const productRepository: ProductRepository = new ProductRepository(dataSource.getRepository(Product))
const productTagRepository: ProductTagRepository = new ProductTagRepository(dataSource.getRepository(ProductTag))
const recipeRepository: RecipeRepository = new RecipeRepository(dataSource.getRepository(Recipe))
const roleRepository: RoleRepository = new RoleRepository(dataSource.getRepository(Role))
const userRepository: UserRepository = new UserRepository(dataSource.getRepository(User), roleRepository)

export {
    ProductRepository,
    ProductTagRepository,
    RecipeRepository,
    RoleRepository,
    UserRepository,
    productRepository,
    productTagRepository,
    recipeRepository,
    roleRepository,
    userRepository
}