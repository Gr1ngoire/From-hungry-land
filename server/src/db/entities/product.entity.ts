import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import {ProductTag} from "./productTag.entity"
import {Abstract} from "./abstract/abstract.entity";

@Entity()
export class Product extends Abstract{

    @Column()
    name: string

    @Column()
    imgUrl: string

    @ManyToOne(type => ProductTag, productTag => productTag.products)
    productTag: ProductTag
}


