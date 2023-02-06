import axiosLibInstance from 'axios';
import { ENV } from '@/common/enums/api/api-path.enum';

const axiosService = axiosLibInstance.create({
    baseURL: ENV.API.PATH,
});

export  { axiosService };