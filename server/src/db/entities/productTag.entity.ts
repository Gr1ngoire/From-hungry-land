import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import {Product} from "./product.entity"
import {Abstract} from "./abstract/abstract.entity";

@Entity()
class ProductTag extends Abstract{

    @Column()
    name: string

    @OneToMany(type => Product, product => product.productTag)
    products: Product[]
}

export {ProductTag}