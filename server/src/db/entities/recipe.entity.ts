import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {Abstract} from "./abstract/abstract.entity";
import {DbTablesNamesEnum} from "../../common/enums/enums";
import {Product} from "../entities/product.entity";
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

    @ManyToMany(() => Product)
    @JoinTable({
        name: "recipes_to_products",
        joinColumn: {
            name: "recipe_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "product_id",
            referencedColumnName: "id"
        }
    })
    products: Product[]
}