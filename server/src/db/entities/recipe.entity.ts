import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {RecipeDifficulty} from "../../common/enums/enums"

@Entity("recipes")
export class Recipe{

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