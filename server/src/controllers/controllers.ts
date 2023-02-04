import {ProductController} from "./product/product.controller";
import {ProductTagController} from "./productTag/productTag.controller";
import {AuthController} from './auth/auth.controller'
import {RecipeController} from "@/controllers/recipe/recipe.controller";


const authController = new AuthController();
const recipeController = new RecipeController();
const productController = new ProductController();
const productTagController = new ProductTagController();
export {authController, recipeController, productController, productTagController}

