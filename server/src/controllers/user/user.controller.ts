import { NextFunction, Request, Response } from "express";
import { UserService, authService } from "@/services/services";


class UserController {

    constructor(private userService: UserService) {
    }

    public addProductToUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {  productId } = req.params;
            const token = req.headers.authorization.split(' ')[1];
            const {id} = await authService.getCurrentUser(token);
            await this.userService.addProductToUser(id, Number(productId));
            res.status(200);
            res.send();
        } catch (e) {
            next(e);
        }
    }

    public removeProductFromUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {  productId } = req.params;
            const token = req.headers.authorization.split(' ')[1];
            const {id} = await authService.getCurrentUser(token);
            await this.userService.removeProductFromUser(id, Number(productId));
            res.status(200);
            res.send();
        } catch (e) {
            next(e);
        }
    }

}

export { UserController }