import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Abstract} from "@/db/entities/abstract/abstract.entity";
import {RecipeDifficulty} from "@/common/enums/enums";

@Entity("recipes")
export class Recipe extends Abstract{

    @PrimaryGeneratedColumn()
    id:number;

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