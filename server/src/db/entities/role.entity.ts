import {Entity, Column, OneToMany} from "typeorm";
import {DbTablesNamesEnum} from "../../common/enums/enums";
import {Abstract} from "./abstract/abstract.entity";
import {User} from './user.entity'

enum Roles {
    USER = "user",
    ADMIN = "admin"
}

@Entity({name: DbTablesNamesEnum.ROLES})
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