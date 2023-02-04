import { Router } from "express";
import { productController } from "@/controllers/controllers";
import {ProductRoutes} from "../../common/enums/enums";

const router = Router();

router.get(ProductRoutes.GETALL, productController.getAll);
router.get(ProductRoutes.GET_BY_TAG_ID, productController.getByProductTagId);

export { router as productRouter };
