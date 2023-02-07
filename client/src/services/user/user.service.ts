import {axiosService} from "../axios/axios.service";
import {ApiRoutes, UserRoutes} from "@/common/enums/enums";

class UserService {

    public addProductToUser(productId: number): Promise<any> {
        return axiosService.put(ApiRoutes.USER + UserRoutes.ADD_PRODUCTS.replace(":productId", productId.toString()));
    }

    public removeProductFromUser(productId: number): Promise<any> {
        return axiosService.delete(ApiRoutes.USER + UserRoutes.REMOVE_PRODUCTS.replace(":productId", productId.toString()));
    }
}

export {UserService}
