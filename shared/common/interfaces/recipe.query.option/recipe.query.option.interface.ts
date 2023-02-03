import {RecipeDifficulty} from "../../../../server/src/common/enums/recipeDifficulty/recipeDifficulty.enum";

export default interface RecipeQueryOptionInterface{
    take?:number,
    skip?:number,
    searchQuery?:string
    difficulty?:RecipeDifficulty[]
}

