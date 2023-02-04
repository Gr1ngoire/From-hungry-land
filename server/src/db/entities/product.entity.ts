import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import {ProductTag} from "./productTag.entity"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    imgUrl: string

    @ManyToOne(type => ProductTag, productTag => productTag.products)
    productTag: ProductTag
}


