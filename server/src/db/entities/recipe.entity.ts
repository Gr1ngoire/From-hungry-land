import {Column, Entity, OneToMany} from "typeorm";
import {Abstract} from "./abstract/abstract.entity";
import {DbTablesNamesEnum} from "../../common/enums/enums";
import {RecipeToProductEntity} from "../entities/recipe-to-product.entity";
export enum RecipeDifficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

@Entity({name: DbTablesNamesEnum.RECIPES})
export class Recipe extends Abstract{


    @Column({
        type: "text"
    })
    name:string;

    @Column()
    instruction:string;

    @Column()
    imgUrl:string;

    @Column({
        type: "enum",
        enum:RecipeDifficulty,
    })
    difficult: RecipeDifficulty

    @OneToMany(type => RecipeToProductEntity, productRecipe =>productRecipe.recipe)
    productRecipes: RecipeToProductEntity[]
}