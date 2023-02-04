import { ProductController } from "./product/product.controller";
import { ProductTagController } from "./productTag/productTag.controller";
import { AuthController } from './auth/auth.controller'
import {RecipeController} from "@/controllers/recipe/recipe.controller";
import { productService } from "../services/services";
import { productTagService } from "../services/services";

const authController = new AuthController();
const recipeController = new RecipeController();


export {authController, recipeController}
export const productController = new ProductController(productService);
export const productTagController = new ProductTagController(productTagService);

