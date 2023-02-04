import {type RoleResponseDto} from "../role/role";

type UserTokenData = {
    id: number;
    email: string;
    role: RoleResponseDto;
}

export {type UserTokenData}