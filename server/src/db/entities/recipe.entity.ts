import {Column, Entity} from "typeorm";
import {Abstract} from "./abstract/abstract.entity";
import {DbTablesNamesEnum} from "../../common/enums/enums";

enum RecipeDifficulty{
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
}