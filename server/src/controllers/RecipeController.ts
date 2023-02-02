import recipeService from "@/services/RecipeService";

class RecipeController{
    private readonly recipeServise = recipeService;
}

export default new RecipeController();