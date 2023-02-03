import {Entity, Column, JoinColumn, ManyToOne} from "typeorm";
import {DbTablesNamesEnum} from "../../common/enums/enums";
import {Abstract} from "./abstract/abstract.entity";
import {Role} from './role.entity'

@Entity({name: DbTablesNamesEnum.USERS})
class User extends Abstract {
    @Column()
    nickname: string

    @Column()
    email: string

    @Column()
    password: string

    @ManyToOne(() => Role, (role) => role.users, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'role_id' })
    role: Role;
}

export {User}