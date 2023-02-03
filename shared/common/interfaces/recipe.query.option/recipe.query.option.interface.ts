import {RecipeDifficulty} from "../../../../server/src/common/enums/recipe/recipe-difficulty.enum";

export default interface RecipeQueryOptionInterface{
    take?:number,
    skip?:number,
    searchQuery?:string
    difficulty?:RecipeDifficulty[]
}

