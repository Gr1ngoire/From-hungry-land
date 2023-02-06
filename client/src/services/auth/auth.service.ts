import {axiosService} from "../axios/axios.service";
import type {UserResponseDto, UserSignInDto, UserSignInResponseDto, UserSignUpDto} from "@/common/types/types";
import {ApiRoutes, AuthRoutes} from "@/common/enums/enums";

class AuthService {
    public async signIn(userData: UserSignInDto): Promise<UserSignInResponseDto> {
        const {data} = await axiosService.post<UserSignInResponseDto>(`${ApiRoutes.AUTH}/${AuthRoutes.SIGN_IN}`);
        return data;
    }

    public async signUp(userData: UserSignUpDto): Promise<UserSignInResponseDto> {
        const {data} = await axiosService.post<UserSignInResponseDto>(`${ApiRoutes.AUTH}/${AuthRoutes.SIGN_UP}`);
        return data;
    }

    public async getCurrentUser(): Promise<UserResponseDto> {
        const {data} = await axiosService.get<UserResponseDto>(`${ApiRoutes.AUTH}/${AuthRoutes.CURRENT_USER}`);
        return data;
    }
}

export {AuthService}