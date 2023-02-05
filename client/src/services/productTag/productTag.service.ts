import {axios} from '../axios/axios';
import { ApiRoutes } from '@/common/enums/enums';

export class ProductTagService {
    public async getProductTags() {
        const {data} = await axios.get(ApiRoutes.PRODUCT_TAGS);
        return data;
    }
}