import {NextFunction, Request, Response} from "express";
import {RecipeQueryOptionType} from "@/common/types/types";
import {Recipe} from "@/db/entities/recipe.entity";
import {RecipeService, authService} from "@/services/services";



export class RecipeController{
    private readonly recipeService: RecipeService;
    constructor(recipeService: RecipeService) {
        this.recipeService = recipeService;
    }
      getRecipe = async (req: Request<{id:number}>, res: Response<Recipe>, next: NextFunction):Promise<void> => {
        try {
            res.json(await this.recipeService.get(req.params.id))
        }catch (e){
            next(e)
        }

    }

    getAllRecipes = async (req: Request<any, any, any, RecipeQueryOptionType>, res: Response<Recipe[]>, next: NextFunction):Promise<void> => {
        try {
            res.json(await this.recipeService.getAll(req.headers.authorization, req.query))
        }catch (e){
            next(e)
        }
    }

    checkRecipeIngredients = async (req: Request, res: Response<{id: number, isPresent: boolean}[]>, next: NextFunction):Promise<void> => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const {id} = await authService.getCurrentUser(token);

            res.json(await this.recipeService.checkRecipeIngredients(id, Number(req.params.id)))

        } catch (e){
            next(e)
        }
    }
}
