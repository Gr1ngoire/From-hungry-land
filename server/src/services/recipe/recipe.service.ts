import {Recipe} from "@/db/entities/recipe.entity";
import {In, Like} from "typeorm";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";
import {RecipeQueryOptionType} from "@/common/types/types";
import {EntityNotFoundException} from "@/common/exceptions/entity/entity-not-found.exception";
import {RecipeRepository} from "@/repositories/repositories";

export class RecipeService{
    private readonly repo:RecipeRepository;

    constructor(repo: RecipeRepository) {
        this.repo = repo;
    }

    async get(id: number):Promise<Recipe>{
        const recipe  = this.repo.get(id)

        if(!recipe){
            throw new EntityNotFoundException(`Recipe with id = ${id} does not exist in db`, id)
        }

        return recipe;
    }

    async getAll({difficulty, searchQuery, skip, take}: RecipeQueryOptionType):Promise<Recipe[]>{
        const whereOptions:FindOptionsWhere<Recipe> = {}

        if(searchQuery){
            whereOptions.name = Like(`%${searchQuery.trim()}%`)
        }

        if(difficulty){
            if(typeof difficulty === "string"){
                whereOptions.difficult = difficulty
            }else {
                whereOptions.difficult = In(difficulty)
            }
        }


        return await this.repo.getAll(take, skip, whereOptions);
    }

}

