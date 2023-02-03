import {Router} from "express";
import {recipeController} from "@/controllers/controllers";

export const recipeRouter = Router();

recipeRouter.get("/:id", recipeController.getRecipe)
recipeRouter.get("/", recipeController.getAllRecipes)
