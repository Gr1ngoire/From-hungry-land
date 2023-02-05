import {axios} from '../axios/axios';
import { ApiRoutes } from '@/common/enums/enums';

export class ProductService {
    public async getProducts() {
        const {data} = await axios.get(ApiRoutes.PRODUCTS);
        return data;
    }


}