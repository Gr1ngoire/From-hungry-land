import {Repository} from "typeorm";
import {User} from "@/db/entities/user.entity";
import {UserResponseDto, UserSignUpDto} from "@/common/types/types";

class UserRepository {
    constructor(private repository: Repository<User>) {}


    public getById(id: number): Promise<null | UserResponseDto>{
        return this.repository.findOne({
            where: {
                id
            },
            select: {
                nickname: true,
                email: true,
            },
            relations: {
                role: true
            }
        })
    }
    public getByEmail(email: string): Promise<null | UserResponseDto> {
        return this.repository.findOne({
            where: {
                email
            }
        })
    }
    public async create(userDto: UserSignUpDto): Promise<UserResponseDto> {
        const toInsert = this.repository.create(userDto);
        const createdUser = await this.repository.save(toInsert);
        return this.getById(createdUser.id);
    }
}

export {UserRepository}