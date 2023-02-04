import {UserRepository} from "@/repositories/repositories";
import {type UserResponseDto, type UserSignUpDto} from "@/common/types/types";

class UserService {
    constructor(private repository: UserRepository) {}

    public getById(id: number): Promise<UserResponseDto> {
        return this.repository.getById(id);
    }

    public create(userDto: UserSignUpDto): Promise<UserResponseDto> {
        return this.repository.create(userDto);
    }
}

export {UserService}