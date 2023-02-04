import {ProductTagRepository} from "@/repositories/repositories";
import {ProductTag} from "@/db/entities/productTag.entity";
import {EntityNotFoundException} from "@/common/exceptions/entity/entity-not-found.exception";

export class ProductTagService {
    private readonly repo:ProductTagRepository

    constructor(repo: ProductTagRepository) {
        this.repo = repo;
    }

    public getAll = async (): Promise<ProductTag[]> => {
        return await this.repo.getAll();
    }

    async get(id: number) {
        const tag = await this.get(id)
        if (tag) {
            throw new EntityNotFoundException(`Tag with id = ${id} does not exist `)
        }
        return tag
    }
}
