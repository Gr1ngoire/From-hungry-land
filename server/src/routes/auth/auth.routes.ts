import {Router} from "express";
import {AuthRoutes} from "@/common/enums/enums";
import {dtoValidationMiddleware} from "@/middlewares/middlewares";
import {UserSignInValidationDto, UserSignUpValidationDto} from "@/validation-dtos/validation-dtos";
import {authController} from "@/controllers/controllers";

const authRouter: Router = Router();

authRouter.post(AuthRoutes.SIGN_IN, dtoValidationMiddleware(UserSignInValidationDto), authController.signIn)
authRouter.post(AuthRoutes.SIGN_UP, dtoValidationMiddleware(UserSignUpValidationDto), authController.signUp)

export {authRouter}