import {RecipeDifficulty} from "../../enums/recipe/recipe";


export type RecipeQueryOptionType = {
    take?:number,
    skip?:number,
    searchQuery?:string
    difficulty?:RecipeDifficulty[] | RecipeDifficulty
}

