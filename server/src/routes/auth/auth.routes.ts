import express, {Request, Response} from "express";
import {AuthRoutes} from "@/common/enums/enums";
import {type UserResponseDto, type UserSignInDto} from "@/common/types/types";

const authRouter = express.Router();

authRouter.post(AuthRoutes.SIGN_IN, (req: Request<any, any, UserSignInDto>, res: Response<UserResponseDto>) => {

})