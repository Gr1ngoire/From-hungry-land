import { Router } from "express";
import { productController } from "@/controllers/controllers";
import {ProductRoutes} from "@/common/enums/enums";
import { isAuthorized } from "@/middlewares/middlewares";

const productRouter = Router();

productRouter.get(ProductRoutes.GETALL, isAuthorized, productController.getAll);
productRouter.get(ProductRoutes.GET_BY_TAG_ID, productController.getByProductTagId);

export { productRouter };
