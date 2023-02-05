import {axios} from "../axios/axios";
import {AppRoutes} from "@/common/enums/enums";


export class RecipeService {
    public async getRecipe(id: number) {
        const {data} = await axios.get(AppRoutes.RECIPE + id)
        return data
    }

    public async getRecipes(options: object) {
        const {data} = await axios.get(AppRoutes.RECIPES)
        return data
    }
}