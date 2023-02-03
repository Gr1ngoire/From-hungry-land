import {Router} from "express";
import {authRouter} from "@/routes/auth/auth.routes";
import {recipeRouter} from "@/routes/recipe/recipe.routes";
import {ApiRoutes} from "@/common/enums/enums";

const apiRouter: Router = Router();

apiRouter.use(ApiRoutes.AUTH, authRouter);
apiRouter.use(ApiRoutes.RECIPES, recipeRouter)

export {apiRouter}
