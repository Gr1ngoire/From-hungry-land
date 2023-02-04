import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import {Product} from "./product.entity"
import {Abstract} from "./abstract/abstract.entity";
import {DbTablesNamesEnum} from "@/common/enums/enums";

@Entity({name: DbTablesNamesEnum.PRODUCT_TAGS})
class ProductTag extends Abstract{

    @Column()
    name: string

    @OneToMany(type => Product, product => product.productTag)
    products: Product[]
}

export {ProductTag}