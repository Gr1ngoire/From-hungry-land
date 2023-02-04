import {Repository} from "typeorm";
import {Recipe} from "@/db/entities/recipe.entity";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";

export class RecipeRepository {
    private readonly repo: Repository<Recipe>

    constructor(repo: Repository<Recipe>) {
        this.repo = repo;
    }

    async get(id: number): Promise<Recipe> {
        return await this.repo.findOne({
            select: {
                id: true,
                name: true,
                instruction: true,
                imgUrl: true,
                difficult: true
            },
            where: {
                id
            }
        });
    }

    async getAll(take: number, skip: number, whereOptions: FindOptionsWhere<Recipe>): Promise<Recipe[]> {
        return await this.repo.find({
            select: {
                id: true,
                name: true,
                instruction: true,
                imgUrl: true,
                difficult: true
            },
            take: take || 50,
            skip: skip || 0,
            where: whereOptions
        })
    };
}