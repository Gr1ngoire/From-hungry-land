import {Entity, Column, OneToMany} from "typeorm"
import {Product} from "./product.entity"
import {Abstract} from "./abstract/abstract.entity";

const tableName = 'product_tag'

@Entity({name: tableName})
class ProductTag extends Abstract{

    @Column()
    name: string

    @OneToMany(type => Product, product => product.productTag)
    products: Product[]
}

export {ProductTag}