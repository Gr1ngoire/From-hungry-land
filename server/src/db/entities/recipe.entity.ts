import {Column, Entity, OneToMany} from "typeorm";
import {Abstract} from "./abstract/abstract.entity";
import {DbTablesNamesEnum, RecipeDifficulty} from "../../common/enums/enums";
import {RecipeToProductEntity} from "../entities/recipe-to-product.entity";


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