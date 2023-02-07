import {NextFunction, Request, RequestHandler, Response} from "express";
import {isAuthorizedFunction} from "@/middlewares/authorization/is-authorized.function";

const isAuthorized: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        const authHeader = req.headers.authorization;
        isAuthorizedFunction(authHeader)
        next()
    }catch (e){
        next(e)
    }

}

export {isAuthorized}