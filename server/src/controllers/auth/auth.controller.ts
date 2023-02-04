import {Request, Response} from "express";
import {type UserSignInDto, type UserSignInResponseDto, type UserSignUpDto} from "@/common/types/types";
import {UserResponseDto} from "@/common/types/types";
import {AuthService} from "@/services/auth/auth.service";

class AuthController {
    constructor(private authService: AuthService) {
    }
    public async signIn(req: Request<any, any, UserSignInDto>, res: Response<UserSignInResponseDto>) {
        const signInDto = req.body
        const signInData = await this.authService.signIn(signInDto);
        res.status(200);
        res.send(signInData);
    }

    public async signUp(req: Request<any, any, UserSignUpDto>, res: Response<UserSignInResponseDto>) {
        const signUpDto = req.body;
        const signUpData = await this.authService.signUp(signUpDto);
        res.status(200);
        res.send(signUpData);
    }
}

export {AuthController}