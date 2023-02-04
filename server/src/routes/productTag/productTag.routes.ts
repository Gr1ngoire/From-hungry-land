import { Router } from "express";
import { productTagController } from "@/controllers/controllers";
import {ProductTagRoutes} from "../../common/enums/enums";

const router = Router();

router.get(ProductTagRoutes.GETALL, productTagController.getAll);

export { router as productTagRouter };