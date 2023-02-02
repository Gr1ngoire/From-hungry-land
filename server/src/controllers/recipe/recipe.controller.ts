import {recipeService} from "@/services/services";

class RecipeController{
    private readonly recipeService = recipeService;
}

export const recipeController = new RecipeController();