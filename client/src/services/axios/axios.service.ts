import axiosLibInstance, {type InternalAxiosRequestConfig} from 'axios';
import { ENV } from '@/common/enums/api/api-path.enum';
import {LocalStorageService} from '@/services/services'

const axiosService = axiosLibInstance.create({
    baseURL: ENV.API.PATH,
});

axiosService.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const localStorageService: LocalStorageService = new LocalStorageService();
    const userToken = localStorageService.getToken();

    if (userToken) {
        config.headers.setAuthorization(userToken);
    }

    return config
})

export  { axiosService };