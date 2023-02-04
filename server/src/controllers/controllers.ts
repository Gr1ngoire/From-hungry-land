import {ProductController} from "./product/product.controller";
import {ProductTagController} from "./productTag/productTag.controller";
import {AuthController} from './auth/auth.controller'
import {RecipeController} from "@/controllers/recipe/recipe.controller";
import {recipeService, productService, productTagService} from "@/services/services";


const authController = new AuthController();
const recipeController = new RecipeController(recipeService);
const productController = new ProductController(productService);
const productTagController = new ProductTagController(productTagService);

export {authController, recipeController, productController, productTagController}

