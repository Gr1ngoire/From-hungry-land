import {Repository} from "typeorm";
import {User} from "@/db/entities/user.entity";
import {UserResponseDto, UserSignUpDto, UserWithPassword} from "@/common/types/types";
import {AlreadyExistsException} from "@/common/exceptions/user/already-exists.exception";

class UserRepository {
    constructor(private dbRepository: Repository<User>) {}


    public getById(id: number): Promise<null | UserResponseDto>{
        return this.dbRepository.findOne({
            where: {
                id
            },
            select: {
                id: true,
                nickname: true,
                email: true,
            },
            relations: {
                role: true
            }
        })
    }
    public getByEmail(email: string): Promise<UserResponseDto | null> {
        return this.dbRepository.findOne({
            where: {
                email
            },
            select: {
                id: true,
                nickname: true,
                email: true
            },
            relations: {
                role: true
            }
        })
    }

    public getByEmailWithPassword(email: string): Promise<UserWithPassword | null> {
        return this.dbRepository.findOne({
            where: {
                email
            },
            select: {
                id: true,
                nickname: true,
                email: true,
                password: true,
            },
            relations: {
                role: true
            }
        })
    }
    public async create(userDto: UserSignUpDto): Promise<UserResponseDto> {

        const userWithSameEmail = await this.getByEmail(userDto.email);

        if (userWithSameEmail) {
            throw new AlreadyExistsException('User with such email already exists');
        }

        const newUser = this.dbRepository.create(userDto);
        const createdUser = await this.dbRepository.save(newUser);
        return this.getById(createdUser.id);
    }
}

export {UserRepository}