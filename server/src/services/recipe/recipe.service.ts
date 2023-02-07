import {Recipe} from "@/db/entities/recipe.entity";
import {ILike, In} from "typeorm";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";
import {RecipeQueryOptionType} from "@/common/types/types";
import {EntityNotFoundException} from "@/common/exceptions/entity/entity-not-found.exception";
import {RecipeRepository} from "@/repositories/repositories";
import {UserService} from "@/services/services";
import {AuthService} from "@/services/auth/auth.service";
import {isAuthorizedFunction} from "@/middlewares/authorization/is-authorized.function";

export class RecipeService {
    private readonly repo: RecipeRepository;
    private readonly userService: UserService

    private readonly authService: AuthService

    constructor(repo: RecipeRepository, userService: UserService, authService: AuthService) {
        this.repo = repo;
        this.userService = userService;
        this.authService = authService
    }

    async get(id: number): Promise<Recipe> {
        const recipe = this.repo.get(id)

        if (!recipe) {
            throw new EntityNotFoundException(`Recipe with id = ${id} does not exist in db`)
        }

        return recipe;
    }

    async getAll(authHeader:string,
                 {searchQuery, isPossibleRecipes, skip, take, difficulty}: RecipeQueryOptionType
    ): Promise<Recipe[]> {
        const whereOptions: FindOptionsWhere<Recipe> = {}
        if (searchQuery) {
            whereOptions.name = ILike(`%${searchQuery.trim()}%`)
        }

        if (difficulty) {
            if (typeof difficulty === "string") {
                whereOptions.difficult = difficulty
            } else {
                whereOptions.difficult = In(difficulty)
            }
        }
        const recipes = await this.repo.getAll(take, skip, whereOptions)
        let finalRecipes:Recipe[] = recipes;
        if (String(isPossibleRecipes) === "true") {
            const token = isAuthorizedFunction(authHeader)
            const user = await this.authService.getCurrentUser(token)
            console.log(user)
            const possibleRecipes = await this.calcPossibleRecipes(user.id)
            finalRecipes = recipes.filter(recipe => possibleRecipes.find(item => item.id === recipe.id))
        }

        return finalRecipes
    }

    async calcPossibleRecipes(userId: number) {
        const recipes: Recipe[] = await this.repo.getAllWithRelations()
        const possibleRecipes:Recipe[] = []
        const user = await this.userService.getByIdWithProducts(userId)
    
        for (const recipe of recipes) {
            let isPossible = true
            for (const productRecipe of recipe.productRecipes) {
                const isExist = user.products.find((userProduct) => userProduct.id === productRecipe.product.id );
                if(!isExist){
                    isPossible = false
                    console.log("Break")
                    break
                }
            }
            if(isPossible){
               possibleRecipes.push(recipe)
            }
        }
        return possibleRecipes
    }

    async checkRecipeIngredients(userId: number, recipeId: number) {
        const recipe = await this.repo.get(recipeId)
        const user = await this.userService.getByIdWithProducts(userId)
        let possibleIngredients: {id: number, isPresent: boolean}[] = []
        for (const productRecipe of recipe.productRecipes) {
            const isExist = user.products.find((userProduct) => userProduct.id === productRecipe.product.id );
            possibleIngredients.push({id: productRecipe.product.id, isPresent: Boolean(isExist)})
        }
        return possibleIngredients

    }

}

