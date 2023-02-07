import {Repository} from "typeorm";
import {User} from "@/db/entities/user.entity";
import {UserResponseDto, UserSignUpDto, UserWithPassword} from "@/common/types/types";
import {AlreadyExistsException} from "@/common/exceptions/user/already-exists.exception";
import {RoleRepository} from "@/repositories/role/role.repository";
import {Roles} from "shared/common/enums/role/roles.enum";
import {ValidationExceptionMessages} from "shared/common/enums/exception/validation/validation-exception-message.enum";
import { UserProductsDTO } from "shared/common/types/user/user-products-dto.type";
import { Product } from "@/db/entities/product.entity";

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
                role: true,
            }
        })
    }

    public async getUserProducts(id: number): Promise<UserProductsDTO> {
        return await this.dbUserRepository.findOne({
            where: {
                id
            },
            relations: {
                products: true
            }
        })
    }
    public getByIdWithProducts(id:number): Promise<User | null>{
        return this.dbUserRepository.findOne({
            where: {
                id
            },
            select: {
                id: true,
                nickname: true,
                email: true,
                products: true
            },
            relations: {
                products:true
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

    public async addProductToUser(userId: number, productId: number): Promise<void> {
        const user = await this.getByIdWithProducts(userId);
        if (!user) {
            throw new Error('User not found');
        }
        const product = await this.dbUserRepository.manager.findOne(Product,
            {
                where: { 
                    id: productId
                },
            }
        );
        if (!product) {
            throw new Error('Product not found');
        }
        user.products.push(product);
   
        await this.dbUserRepository.save(user);
    }

    public async removeProductFromUser(userId: number, productId: number): Promise<void> {
        const user = await this.getByIdWithProducts(userId);
        if (!user) {
            throw new Error('User not found');
        }
        user.products = user.products.filter(product => product.id !== productId);
        await this.dbUserRepository.save(user);
    }

}

export {UserRepository}