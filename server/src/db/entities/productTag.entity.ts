import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import {Product} from "./product.entity"

@Entity()
class ProductTag {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(type => Product, product => product.productTag)
    products: Product[]
}

export {ProductTag}