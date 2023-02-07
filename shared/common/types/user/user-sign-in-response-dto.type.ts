import type {UserResponseDto} from "./user-response-dto.type";

type UserSignInResponseDto = {
    token: string;
    user: UserResponseDto;
}

export {type UserSignInResponseDto}