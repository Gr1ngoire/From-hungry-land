import {RoleResponseDto} from "../role/role-response-dto.type";

type UserResponseDto = {
    id: number
    nickname: string
    email: string
    role: RoleResponseDto
}

export {type UserResponseDto}