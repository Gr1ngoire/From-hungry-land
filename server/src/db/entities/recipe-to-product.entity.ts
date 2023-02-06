import {Abstract} from "../entities/abstract/abstract.entity";
import {Column, Entity, ManyToOne} from "typeorm";
import {Recipe} from "../entities/recipe.entity";
import {Product} from "../entities/product.entity";

const tableName = 'recipes_to_products';

@Entity({name: tableName})
export class RecipeToProductEntity extends Abstract{


    @Column({
        default: 1
    })
    quantity: number

    @ManyToOne(type => Recipe, recipe => recipe.productRecipes)
    recipe: Recipe

    @ManyToOne(type => Product, product => product.productRecipes)
    product: Product


}