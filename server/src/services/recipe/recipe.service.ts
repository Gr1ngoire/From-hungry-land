import {Recipe} from "@/db/entities/recipe.entity";
import {ILike, In} from "typeorm";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";
import {RecipeQueryOptionType} from "@/common/types/types";
import {EntityNotFoundException} from "@/common/exceptions/entity/entity-not-found.exception";
import {RecipeRepository} from "@/repositories/repositories";
import {UserService} from "@/services/user/user.service";

export class RecipeService{
    private readonly repo:RecipeRepository;
    private readonly userService: UserService

    constructor(repo: RecipeRepository, userService: UserService) {
        this.repo = repo;
        this.userService = userService
    }

    async get(id: number):Promise<Recipe>{
        const recipe  = this.repo.get(id)

        if(!recipe){
            throw new EntityNotFoundException(`Recipe with id = ${id} does not exist in db`)
        }

        return recipe;
    }

    async getAll({difficulty, searchQuery, skip, take, isPossibleRecipes}: RecipeQueryOptionType)
        :Promise<Recipe[]>{
        const whereOptions:FindOptionsWhere<Recipe> = {}

        if(searchQuery){
            whereOptions.name = ILike(`%${searchQuery.trim()}%`)
        }

        if(difficulty){
            if(typeof difficulty === "string"){
                whereOptions.difficult = difficulty
            }else {
                whereOptions.difficult = In(difficulty)
            }
        }

        if(isPossibleRecipes){

        }


        return await this.repo.getAll(take, skip, whereOptions);
    }

}

