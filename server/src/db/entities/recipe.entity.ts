import {Column, Entity} from "typeorm";
import {Abstract} from "./abstract/abstract.entity";
import {RecipeDifficulty} from "../../common/enums/enums";


@Entity("recipes")
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
}