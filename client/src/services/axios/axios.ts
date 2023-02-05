import axiosLibInstance from 'axios';
import { ENV } from '@/common/enums/api/api-path.enum';

const axios = axiosLibInstance.create({
    baseURL: ENV.API.PATH,
});

export  { axios };