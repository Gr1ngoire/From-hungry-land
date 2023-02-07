
import { ProductController } from "./product/product.controller";
import { ProductTagController } from "./productTag/productTag.controller";
import { AuthController } from './auth/auth.controller'
import {RecipeController} from "@/controllers/recipe/recipe.controller";
import { UserController } from "./user/user.controller";
import {authService, recipeService, productService, productTagService, userService} from "@/services/services";


const authController = new AuthController(authService);
const recipeController = new RecipeController(recipeService);
const productController = new ProductController(productService);
const productTagController = new ProductTagController(productTagService);
const userController = new UserController(userService);


export {authController, recipeController, productController, productTagController, userController}