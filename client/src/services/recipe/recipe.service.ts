import {axiosService} from "../axios/axios.service";
import {AppRoutes} from "@/common/enums/enums";
import type {RecipeQueryOptionType} from "@/common/types/types";


class RecipeService {
    public async getRecipe(id: number) {
        const {data} = await axiosService.get(AppRoutes.RECIPES_SINGLE + id)
        return data
    }

    public async getRecipes(options?: RecipeQueryOptionType) {
        const {data} = await axiosService.get(AppRoutes.RECIPES, {params:(options)})
        return data
    }
}

export const recipeService = new RecipeService()