import {Entity, Column, OneToMany} from "typeorm";
import {DbTablesNamesEnum} from "../../common/enums/enums";
import {Abstract} from "./abstract/abstract.entity";
import {User} from './user.entity'

@Entity({name: DbTablesNamesEnum.ROLES})
class Role extends Abstract {
    @Column()
    name: string

    @OneToMany(() => User, (user) => user.role)
    users: User[];
}

export { Role }