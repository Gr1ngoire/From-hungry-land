import { Router } from "express";
import { productTagController } from "@/controllers/controllers";
import {ProductTagRoutes} from "@/common/enums/enums";

const productTagRouter = Router();

productTagRouter.get(ProductTagRoutes.GETALL, productTagController.getAll);

export { productTagRouter };