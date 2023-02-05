import {Repository} from "typeorm";
import {User} from "@/db/entities/user.entity";
import {UserResponseDto, UserSignUpDto, UserWithPassword} from "@/common/types/types";
import {AlreadyExistsException} from "@/common/exceptions/user/already-exists.exception";
import {RoleRepository} from "@/repositories/role/role.repository";
import {Roles} from "shared/common/enums/role/roles.enum";
import {ValidationExceptionMessages} from "shared/common/enums/exception/validation/validation-exception-message.enum";

class UserRepository {
    constructor(private dbUserRepository: Repository<User>, private roleRepository: RoleRepository) {}


    public getById(id: number): Promise<null | UserResponseDto>{
        return this.dbUserRepository.findOne({
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
        return this.dbUserRepository.findOne({
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
        return this.dbUserRepository.findOne({
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
            throw new AlreadyExistsException(ValidationExceptionMessages.USER_WITH_SUCH_EMAIL_ALREADY_EXISTS);
        }

        const role = await this.roleRepository.getIdByName(Roles.USER);

        const newUser = this.dbUserRepository.create({
            ...userDto,
            role
        });
        const createdUser = await this.dbUserRepository.save(newUser);
        return this.getById(createdUser.id);
    }
}

export {UserRepository}