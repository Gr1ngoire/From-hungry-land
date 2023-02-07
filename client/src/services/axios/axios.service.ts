import axiosLibInstance, {AxiosError, type AxiosResponse, type InternalAxiosRequestConfig} from 'axios';
import {ENV} from '@/common/enums/api/api-path.enum';
import {LocalStorageService, Notification} from '@/services/services'

const axiosService = axiosLibInstance.create({
    baseURL: ENV.API.PATH,
});

axiosService.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const localStorageService: LocalStorageService = new LocalStorageService();
    const userToken = localStorageService.getToken();

    const DEFAULT_TOKEN_FORMAT = 'Bearer';
    config.headers.setAuthorization(`${DEFAULT_TOKEN_FORMAT} ${userToken}`);

    return config
})

axiosService.interceptors.response.use(response => response, (error) => {
    const notificationService = new Notification();
    notificationService.error(error.response.data.message)
})

export {axiosService};