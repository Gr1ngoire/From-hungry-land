import type {RecipeDifficulty} from "../../enums/recipe/recipe-difficulty.enum";
import type {ProductDTO} from "../product/product.dto.type";

export type RecipeDtoType = {
    id:number,
    name:string,
    instruction:string
    imgUrl:string
    difficult: RecipeDifficulty

    productRecipes: ProductDTO[]


}