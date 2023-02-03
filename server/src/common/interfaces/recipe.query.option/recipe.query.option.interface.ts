import {RecipeDifficulty} from "../../enums/enums";

export interface RecipeQueryOptionInterface {
    take?:number,
    skip?:number,
    searchQuery?:string
    difficulty?:RecipeDifficulty[]
}

