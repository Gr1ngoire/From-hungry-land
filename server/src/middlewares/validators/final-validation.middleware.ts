import {NextFunction, Request, Response} from "express";

function finalValidationMiddleware(err:any, req:Request, res:Response, next:NextFunction){
    res.status(err.status || 500).json(err)
}

export {finalValidationMiddleware}