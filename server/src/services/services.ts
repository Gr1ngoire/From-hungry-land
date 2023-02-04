import { RecipeService } from "./recipe/recipe.service";
import { ProductService } from "./product/product.service";
import { ProductTagService } from "./productTag/productTag.service";
import {recipeRepository, productRepository, productTagRepository} from "@/repositories/repositories";


const recipeService = new RecipeService(recipeRepository);
const productService = new ProductService(productRepository);
const productTagService = new ProductTagService(productTagRepository);

export {recipeService, productService, productTagService}
export {RecipeService, ProductService, ProductTagService}