import {RecipeDifficulty} from "../../../../server/src/common/enums/RecipeDifficulty/recipeDifficulty.enum";

export default interface RecipeQueryOptionInterface{
    take?:number,
    skip?:number,
    searchQuery?:string
    difficulty?:RecipeDifficulty[]
}

