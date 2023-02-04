import { RecipeService } from "./recipe/recipe.service";
import { ProductService } from "./product/product.service";
import { ProductTagService } from "./productTag/productTag.service";


const recipeService = new RecipeService();
const productService = new ProductService();
const productTagService = new ProductTagService();

export {recipeService, productService, productTagService}
export {RecipeService, ProductService, ProductTagService}