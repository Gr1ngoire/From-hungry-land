import {Router} from "express";
import {recipeController} from "@/controllers/controllers";
import {RecipeRoutes} from "@/common/enums/enums";
import { isAuthorized } from "@/middlewares/middlewares";

const recipeRouter = Router();

recipeRouter.get(RecipeRoutes.GET, recipeController.getRecipe)
recipeRouter.get(RecipeRoutes.GETALL, recipeController.getAllRecipes)
recipeRouter.get(RecipeRoutes.CHECK_RECIPE_INGREDIENTS, 
    isAuthorized ,
    recipeController.checkRecipeIngredients)


export {recipeRouter}