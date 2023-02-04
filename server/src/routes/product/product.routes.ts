import { Router } from "express";
import { productController } from "../../controllers/controllers";

const router = Router();

router.get("/", productController.getAll);
router.get("/:id", productController.getByProductTagId);

export { router as productRouter };
