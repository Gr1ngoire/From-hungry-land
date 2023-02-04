import {dataSource} from "@/app-data-source";
import {Recipe} from "@/db/entities/recipe.entity";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {In, Like} from "typeorm";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";
import {RecipeQueryOptionType} from "@/common/types/types";
import {recipeRepo} from "@/repositories/repositories";

export class RecipeService{
    private readonly repo = recipeRepo

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

    async getAll({difficulty, searchQuery, skip, take}: RecipeQueryOptionType):Promise<Recipe[]>{

        const dbQueryOption:FindManyOptions<Recipe> = {
            take:take || 50,
            skip: skip || 0,

        }
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

        dbQueryOption.where = whereOptions;


        return await this.repo.find(dbQueryOption);
    }

}

