import {NextFunction, Request, Response, RequestHandler} from "express";
import {type UserSignInDto} from "@/common/types/types";
import {validate, ValidationError} from "class-validator";
import {plainToClass} from "class-transformer";
import {InvalidAuthDataException} from "@/common/exceptions/exceptions";

function dtoValidationMiddleware(type: any, whitelist = true): RequestHandler {
    return async (req: Request<any, any, UserSignInDto>, res: Response, next: NextFunction): Promise<void> => {
        console.log(req.body)
        const dtoObject: object = plainToClass(type, req.body)
        const errors: ValidationError[] = await validate(dtoObject, { whitelist })
        if (errors.length) {
            next(new InvalidAuthDataException(errors.join(', ')));
        }
        else {
            next();
        }
    }
}

export { dtoValidationMiddleware }