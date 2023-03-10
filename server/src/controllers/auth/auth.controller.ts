import {NextFunction, Request, Response} from "express";
import {type UserSignInDto, type UserSignInResponseDto, type UserSignUpDto} from "@/common/types/types";
import {AuthService} from "@/services/auth/auth.service";

class AuthController {
    constructor(private authService: AuthService) {
    }
    public signIn = async (req: Request<any, any, UserSignInDto>, res: Response<UserSignInResponseDto>, next: NextFunction) => {
        try {
            const signInDto = req.body
            const signInData = await this.authService.signIn(signInDto);
            res.status(200);
            res.send(signInData);
        } catch (error) {
            next(error)
        }
    }

    public signUp = async (req: Request<any, any, UserSignUpDto>, res: Response<UserSignInResponseDto>, next: NextFunction) => {
        try {
            const signUpDto = req.body;
            const signUpData = await this.authService.signUp(signUpDto);
            res.status(200);
            res.send(signUpData);
        } catch (e) {
            next(e);
        }
    }

    public getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const [_, token] = req.headers.authorization.split(' ')
            const userData = await this.authService.getCurrentUser(token);
            res.status(200);
            res.send(userData);
        } catch (e) {
            next(e)
        }
    }
}

export {AuthController}