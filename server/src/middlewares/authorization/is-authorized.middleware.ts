import {NextFunction, Request, RequestHandler, Response} from "express";
import {jwtService} from "@/services/services";

const isAuthorized: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.headers.authorization;
    const [bearer, token] = authHeader.split(' ')
    if (bearer !== 'Bearer' || !token) {
        throw new Error('User is unauthorized');
    }

    jwtService.verifyToken(token);

    next();

}

export {isAuthorized}