import {Repository} from "typeorm";
import {Product} from "@/db/entities/product.entity";

export class ProductRepository{
    private readonly repo:Repository<Product>

    constructor(repo: Repository<Product>) {
        this.repo = repo;
    }

    public getAll = async (): Promise<Product[]> => {
        return await this.repo.find({
            relations:{
                productTag:true
            },
            select:{
                name:true,
                imgUrl:true
            }
        });
    };

    public async getByTagId(id: number): Promise<Product[]> {
        return await this.repo.find({
            relations: ["productTag"],
            where: { productTag: { id } },
            select:{
                name:true,
                imgUrl:true
            }
        });
    }
}