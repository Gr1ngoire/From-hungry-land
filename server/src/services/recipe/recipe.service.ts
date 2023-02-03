import {dataSource} from "@/app-data-source";
import {Recipe} from "@/db/entities/recipe.entity";
import RecipeQueryOptionInterface from "shared/common/interfaces/recipe.query.option/recipe.query.option.interface";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {Like} from "typeorm";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";
import {RecipeDifficulty} from "@/common/enums/RecipeDifficulty/recipeDifficulty.enum";

class RecipeService{
    repo = dataSource.getRepository(Recipe)

    async get(id: number):Promise<Recipe>{
        const recipe  = await this.repo.findOne({
            where:{
                id
            }
        });

        if(recipe){
            throw new Error(`Recipe with id = ${id} does not exist in db`)
        }

        return recipe;
    }

    async getAll(query:RecipeQueryOptionInterface):Promise<Recipe[]>{

        const dbQueryOption:FindManyOptions<Recipe> = {
            take:query.take || 50,
            skip: query.skip || 0,
            where:{
                difficult: RecipeDifficulty.EASY,
            }
        }
        const whereOptions:FindOptionsWhere<Recipe> = {}

        if(query.searchQuery){
            whereOptions.name = Like(`%${query.searchQuery.trim()}%`)
        }

        const diff =query.difficulty
        if(diff){
            if(diff[0]){
                whereOptions.difficult =
                    diff[0]
            }
            if(diff[1]){
                whereOptions.difficult =
                    diff[0] || diff[1]
            }
            if(diff[2]){
                whereOptions.difficult =
                    diff[0] || diff[1] || diff[2]
            }
        }
        dbQueryOption.where = whereOptions;


        return await this.repo.find(dbQueryOption);
    }




}

export const recipeService = new RecipeService();