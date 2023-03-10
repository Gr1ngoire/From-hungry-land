import {Entity, Column, JoinColumn, JoinTable, ManyToOne, ManyToMany} from "typeorm";
import {Abstract} from "./abstract/abstract.entity";
import {Role} from './role.entity'
import {Product} from "./product.entity";

const tableName = 'users'

@Entity({name: tableName})
class User extends Abstract {
    @Column()
    nickname: string

    @Column()
    email: string

    @Column()
    password: string

    @ManyToOne(() => Role, (role) => role.users, {
        onDelete: 'CASCADE', nullable: false
    })
    @JoinColumn({ name: 'role_id' })
    role: Role;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]
}

export {User}