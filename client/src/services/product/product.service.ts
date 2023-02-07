import {axiosService} from '../axios/axios.service';
import { ApiRoutes } from '@/common/enums/enums';
import type { ProductDTO } from 'shared/common/types/product/product.dto.type';

export class ProductService {
    public async getProducts(options?: {
        take?: number,
        skip?: number,
        name?: string,
        filters?: string[] | string,
        all?: boolean,
    }): Promise<ProductDTO[]> {
        const {data} = await axiosService.get(ApiRoutes.PRODUCTS, {params: options})
        return data;
    }

}