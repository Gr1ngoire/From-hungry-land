import {ProductRepository} from "@/repositories/product/product.repository";
import {dataSource} from "@/app-data-source";
import {Recipe} from "@/db/entities/recipe.entity";
import {Product} from "@/db/entities/product.entity";
import {ProductTag} from "@/db/entities/productTag.entity";
import {ProductTagRepository} from "@/repositories/productTag/product-tag.repository";
import {RecipeRepository} from "@/repositories/recipe/recipe.repository";

const productRepository:ProductRepository = new ProductRepository(dataSource.getRepository(Product))
const productTagRepository:ProductTagRepository = new ProductTagRepository(dataSource.getRepository(ProductTag))
const recipeRepository:RecipeRepository = new RecipeRepository(dataSource.getRepository(Recipe))

export {productRepository, productTagRepository, recipeRepository}
export {RecipeRepository, ProductRepository, ProductTagRepository}
