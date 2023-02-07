import {axiosService} from "../axios/axios.service";
import {ApiRoutes} from "@/common/enums/enums";
import type {RecipeQueryOptionType} from "@/common/types/types";
import { RecipeRoutes } from "shared/common/enums/enums";

class RecipeService {
    public async getRecipe(id: number) {
        const {data} = await axiosService.get(`${ApiRoutes.RECIPES}/${id}`)
        return data
    }

    public async getRecipes(options: RecipeQueryOptionType) {
        const {data} = await axiosService.get(ApiRoutes.RECIPES, {params: options})
        return data
    }

    public async checkRecipeIngredients(recipeId: number) {
        const {data} = await axiosService.get(
            `${ApiRoutes.RECIPES}${RecipeRoutes.CHECK_RECIPE_INGREDIENTS.replace(':id', recipeId.toString())}`)
        return data
    }
}

export const recipeService = new RecipeService()