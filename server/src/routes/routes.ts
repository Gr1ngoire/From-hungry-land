import {Router} from "express";
import {authRouter} from "@/routes/auth/auth.routes";
import {ApiRoutes} from "@/common/enums/enums";

const apiRouter: Router = Router();

apiRouter.use(ApiRoutes.AUTH, authRouter);

export {apiRouter}
export {recipeRouter} from "./recipe/recipe.routes"