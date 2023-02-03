import {Request, Response} from "express";
import {UserSignInDto} from "@/common/types/types";
import {UserResponseDto} from "@/common/types/types";

class AuthController {
    public signIn(req: Request<any, any, UserSignInDto>, res: Response<UserResponseDto>) {
        console.log('sign in', req.body)
        res.send({
            id: 1,
            nickname: 'AAAAAAA',
            email: 'Aboba',
            role: {
                id: 1,
                name: 'BBBBBBBB'
            }
        })
    }

    public signUp(req: Request<any, any, UserSignInDto>, res: Response<UserResponseDto>) {
        console.log('sign up', req.body)
    }
}

export {AuthController}