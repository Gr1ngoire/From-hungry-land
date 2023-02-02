import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nickname: string

    @Column()
    email: string

    @Column()
    password: string
}

export {User}