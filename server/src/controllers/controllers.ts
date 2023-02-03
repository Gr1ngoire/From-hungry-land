import {AuthController} from './auth/auth.controller'
import {RecipeController} from "@/controllers/recipe/recipe.controller";

const authController = new AuthController();
const recipeController = new RecipeController();

export {authController, recipeController}
