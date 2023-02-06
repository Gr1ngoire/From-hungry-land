import {Entity, Column, OneToMany} from "typeorm";
import {Abstract} from "./abstract/abstract.entity";
import {User} from './user.entity'

enum Roles {
    USER = "user",
    ADMIN = "admin"
}

const tableName = "roles"

@Entity({name: tableName})
class Role extends Abstract {
    @Column({
        type: "enum",
        enum: Roles,
    })
    name: Roles

    @OneToMany(() => User, (user) => user.role)
    users: User[];
}

export { Role }