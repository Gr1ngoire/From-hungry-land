import {Router} from "express";
import {authRouter} from "@/routes/auth/auth.routes";
import {productRouter} from "@/routes/product/product.routes";
import {productTagRouter} from "@/routes/productTag/productTag.routes";
import {ApiRoutes} from "@/common/enums/enums";

const apiRouter: Router = Router();

apiRouter.use(ApiRoutes.AUTH, authRouter);
apiRouter.use(ApiRoutes.PRODUCTS, productRouter);
apiRouter.use(ApiRoutes.PRODUCT_TAGS, productTagRouter);

export {apiRouter}