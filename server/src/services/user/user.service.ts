import {UserRepository} from "@/repositories/repositories";
import {type UserResponseDto, type UserSignUpDto, UserWithPassword} from "@/common/types/types";
import { UserProductsDTO } from "shared/common/types/user/user-products-dto.type";

class UserService {
    constructor(private repository: UserRepository) {}

    public getById(id: number): Promise<UserResponseDto | null> {
        return this.repository.getById(id);
    }

    public getByEmail(email: string): Promise<UserResponseDto | null> {
        return this.repository.getByEmail(email);
    }

    public getByEmailWithPassword(email: string): Promise<UserWithPassword | null> {
        return this.repository.getByEmailWithPassword(email);
    }

    public create(userDto: UserSignUpDto): Promise<UserResponseDto> {
        return this.repository.create(userDto);
    }

    public async getUserProducts(id: number): Promise<UserProductsDTO> {
        return await this.repository.getUserProducts(id);
    }
}

export {UserService}