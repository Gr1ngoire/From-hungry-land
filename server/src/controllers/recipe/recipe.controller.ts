import {recipeService} from "@/services/services"
import {NextFunction, Request, Response} from "express";
import {RecipeQueryOptionType} from "@/common/types/types";
import {Recipe} from "@/db/entities/recipe.entity";



export class RecipeController{

    async getRecipe (req: Request<{id:number}>, res: Response<Recipe>, next: NextFunction):Promise<void>{
        try {
            res.json(await recipeService.get(req.params.id))
        }catch (e){
            next(e)
        }

    }

    async getAllRecipes (req: Request<any, any, any, RecipeQueryOptionType>, res: Response<Recipe[]>, next: NextFunction):Promise<void>{
        try {
            res.json(await recipeService.getAll(req.query))
        }catch (e){
            next(e)
        }
    }
}
