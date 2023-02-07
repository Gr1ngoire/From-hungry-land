import {ProductDTO} from '../product/product.types';

export type UserProductsDTO = {
    id: number,
    products: ProductDTO[]
}