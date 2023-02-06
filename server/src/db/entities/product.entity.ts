import {Entity, Column, ManyToOne, OneToMany} from "typeorm"
import {ProductTag} from "./productTag.entity"
import {Abstract} from "./abstract/abstract.entity";
import {RecipeToProductEntity} from "../entities/recipe-to-product.entity";

const tableName = 'product'

@Entity({name: tableName})
export class Product extends Abstract {

    @Column()
    name: string

    @Column()
    imgUrl: string

    @ManyToOne(type => ProductTag, productTag => productTag.products)
    productTag: ProductTag

    @OneToMany(type => RecipeToProductEntity, productRecipes => productRecipes.product)
    productRecipes: RecipeToProductEntity[]
}


