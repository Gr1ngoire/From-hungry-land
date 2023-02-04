import {RoleResponseDto} from "shared/common/types/role/role-response-dto.type";

type UserWithPassword = {
    id: number
    nickname: string
    email: string
    password: string
    role: RoleResponseDto
}

export {type UserWithPassword};