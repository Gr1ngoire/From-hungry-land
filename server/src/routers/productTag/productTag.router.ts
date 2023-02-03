import { Router } from "express";
import { productTagController } from "../../controllers/controllers";

const router = Router();

router.get("/", productTagController.getAll);

export { router as productTagRouter };