import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("recipes")
class recipe{

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