import {productTagRepo} from "@/repositories/repositories";
import {ProductTag} from "@/db/entities/productTag.entity";
import {EntityNotFoundException} from "@/common/exceptions/entity/entity-not-found.exception";

export class ProductTagService {
    private readonly repo = productTagRepo

    public getAll = async (): Promise<ProductTag[]> => {
        return await this.repo.find({
            select: {
                id: true,
                name: true,
            },
        });
    }

    async get(id: number) {
        const tag = await this.repo.findOneBy({id})
        if (tag) {
            throw new EntityNotFoundException(`Tag with id = ${id} does not exist `, id, 500)
        }
        return tag
    }
}
