import {axios} from "../axios/axios";
import {AppRoutes} from "@/common/enums/enums";
import type {RecipeQueryOptionType} from "@/common/types/types";


export class RecipeService {
    public async getRecipe(id: number) {
        const {data} = await axios.get(AppRoutes.RECIPE + id)
        return data
    }

    public async getRecipes(options: RecipeQueryOptionType) {
        const {data} = await axios.get(AppRoutes.RECIPES)
        return data
    }
}