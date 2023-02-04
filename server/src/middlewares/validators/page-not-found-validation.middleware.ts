import {Response, Request, NextFunction} from "express";

function pageNotFoundValidationMiddleware(req: Request, res: Response, next: NextFunction){
    res.status(404).send(`Could not find page with url: https://${req.hostname}${req.path}`)
}
export {pageNotFoundValidationMiddleware}