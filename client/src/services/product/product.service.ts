import {axiosService} from '../axios/axios.service';
import { ApiRoutes } from '@/common/enums/enums';

export class ProductService {
    public async getProducts() {
        const {data} = await axiosService.get(ApiRoutes.PRODUCTS);
        return data;
    }


}