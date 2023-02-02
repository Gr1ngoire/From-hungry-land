import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}

export { Role }