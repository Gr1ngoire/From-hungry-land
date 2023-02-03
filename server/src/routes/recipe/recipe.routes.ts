import {Router} from "express";
import {recipeController} from "@/controllers/controllers";
import {RecipeRoutes} from "@/common/enums/recipe/recipe";

const recipeRouter = Router();

recipeRouter.get(RecipeRoutes.GET, recipeController.getRecipe)
recipeRouter.get(RecipeRoutes.GETALL, recipeController.getAllRecipes)


export {recipeRouter}