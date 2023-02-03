import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {RecipeDifficulty} from "../../common/enums/enums"
import {Abstract} from "@/db/entities/abstract/abstract.entity";

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