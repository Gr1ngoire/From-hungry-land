import {axiosService} from '../axios/axios.service';
import { ApiRoutes } from '@/common/enums/enums';

export class ProductTagService {
    public async getProductTags() {
        const {data} = await axiosService.get(ApiRoutes.PRODUCT_TAGS);
        return data;
    }
}