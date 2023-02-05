import {RecipeDifficulty} from "../../enums/enums";


export type RecipeQueryOptionType = {
    take?:number,
    skip?:number,
    searchQuery?:string
    difficulty?:RecipeDifficulty[] | RecipeDifficulty
}

