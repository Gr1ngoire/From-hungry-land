import {Repository} from "typeorm";
import {ProductTag} from "@/db/entities/productTag.entity";

export class ProductTagRepository{
    private readonly repo:Repository<ProductTag>

    constructor(repo: Repository<ProductTag>) {
        this.repo = repo;
    }
    public getAll = async (): Promise<ProductTag[]> => {
        return await this.repo.find({
            select: {
                id: true,
                name: true,
            },
        });
    }

    async get(id: number):Promise<ProductTag> {
        return await this.repo.findOne({
            select: {
                id: true,
                name: true,
            },
            where: {
                id
            }
        })
    }
}