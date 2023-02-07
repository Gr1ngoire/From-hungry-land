import {FindOptionsWhere, Repository} from "typeorm";
import {Product} from "@/db/entities/product.entity";

export class ProductRepository{
    private readonly repo:Repository<Product>

    constructor(repo: Repository<Product>) {
        this.repo = repo;
    }

    public getAll = async (take: number, skip: number, whereOptions: FindOptionsWhere<Product>): Promise<Product[]> => {
        return await this.repo.find({
            relations:{
                productTag:true
            },
            select:{
                id:true,
                name:true,
                imgUrl:true
            },
            take: take || 20,
            skip: skip || 0,
            where: whereOptions,
            
        })
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