import {NextFunction, Request, RequestHandler, Response} from "express";
import {jwtService} from "@/services/services";
import {ValidationExceptionMessages} from "shared/common/enums/exception/validation/validation-exception-message.enum";
import { UnauthorizedException } from "@/common/exceptions/exceptions";

const isAuthorized: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.headers.authorization;
    const [tokenFormat, token] = authHeader.split(' ')

    if (tokenFormat !== 'Bearer' || !token) {
        throw new UnauthorizedException(ValidationExceptionMessages.USER_IS_UNAUTHORIZED);
    }

    jwtService.verifyToken(token);

    next();

}

export {isAuthorized}