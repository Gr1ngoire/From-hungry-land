import {Router} from "express";
import {userController} from "@/controllers/controllers";
import {UserRoutes} from "@/common/enums/enums";
import { isAuthorized } from "@/middlewares/middlewares";

const router = Router();

router.put(UserRoutes.ADD_PRODUCTS, isAuthorized, userController.addProductToUser);
router.delete(UserRoutes.REMOVE_PRODUCTS, isAuthorized, userController.removeProductFromUser);

export {router as userRouter};