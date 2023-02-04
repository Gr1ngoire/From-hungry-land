import {Router} from "express";
import {authRouter} from "@/routes/auth/auth.routes";
import {recipeRouter} from "@/routes/recipe/recipe.routes";
import {productRouter} from "@/routes/product/product.routes";
import {productTagRouter} from "@/routes/productTag/productTag.routes";
import {ApiRoutes} from "@/common/enums/enums";
import {finalValidationMiddleware} from "@/middlewares/middlewares";

const apiRouter: Router = Router();

apiRouter.use(ApiRoutes.AUTH, authRouter);
apiRouter.use(ApiRoutes.RECIPES, recipeRouter)
apiRouter.use(ApiRoutes.PRODUCTS, productRouter);
apiRouter.use(ApiRoutes.PRODUCT_TAGS, productTagRouter);
apiRouter.use(finalValidationMiddleware)

export {apiRouter}
