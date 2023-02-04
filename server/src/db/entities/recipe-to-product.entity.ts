import {Abstract} from "../entities/abstract/abstract.entity";
import {Column, Entity, ManyToOne} from "typeorm";
import {DbTablesNamesEnum} from "../../common/enums/enums";
import {Recipe} from "../entities/recipe.entity";
import {Product} from "../entities/product.entity";

@Entity(DbTablesNamesEnum.RECIPES_TO_PROCUCTS)
export class RecipeToProductEntity extends Abstract{


    @Column({
        default: 1
    })
    quantity: Number

    @ManyToOne(type => Recipe, recipe => recipe.productRecipes)
    recipe: Recipe

    @ManyToOne(type => Product, product => product.productRecipes)
    product: Product


}