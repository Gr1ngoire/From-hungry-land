import type { ProductTagDTO } from "../productTag/productTag.types";

export type ProductDTO = {
    id: number;
    name: string;
    imgUrl: string;
    productTag: ProductTagDTO;
};
