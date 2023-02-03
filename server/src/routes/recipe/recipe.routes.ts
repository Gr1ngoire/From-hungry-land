import {Router} from "express";
import {recipeController} from "@/controllers/controllers";
import {RecipeRoutes} from "@/common/enums/enums";

const recipeRouter = Router();

recipeRouter.get(RecipeRoutes.GET, recipeController.getRecipe)
recipeRouter.get(RecipeRoutes.GETALL, recipeController.getAllRecipes)


export {recipeRouter}