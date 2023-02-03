import { Router } from "express";

import { productRouter } from "./product/product.router";
import { productTagRouter } from "./productTag/productTag.router";

const router = Router();

router.use("/product", productRouter);
router.use("/productTag", productTagRouter);

export { router as apiRouter };

