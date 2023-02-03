import {dataSource} from "@/app-data-source";
import {Recipe} from "@/db/entities/recipe.entity";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {In, Like} from "typeorm";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";
import {RecipeDifficulty} from "@/common/enums/RecipeDifficulty/recipeDifficulty.enum";
import {RecipeQueryOptionType} from "@/common/types/types";

class RecipeService{
    private readonly repo = dataSource.getRepository(Recipe)

    async get(id: number):Promise<Recipe>{
        const recipe  = await this.repo.findOne({
            where:{
                id
            }
        });

        if(!recipe){
            throw new Error(`Recipe with id = ${id} does not exist in db`)
        }

        return recipe;
    }

    async getAll(query:RecipeQueryOptionType):Promise<Recipe[]>{

        const dbQueryOption:FindManyOptions<Recipe> = {
            take:query.take || 50,
            skip: query.skip || 0,

        }
        const whereOptions:FindOptionsWhere<Recipe> = {}

        if(query.searchQuery){
            whereOptions.name = Like(`%${query.searchQuery.trim()}%`)
        }

        if(query.difficulty){
            if(typeof query.difficulty === "string"){
                whereOptions.difficult = query.difficulty
            }else {
                whereOptions.difficult = In(query.difficulty)
            }
        }

        dbQueryOption.where = whereOptions;


        return await this.repo.find(dbQueryOption);
    }




}

export const recipeService = new RecipeService();