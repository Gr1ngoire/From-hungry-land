import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

}