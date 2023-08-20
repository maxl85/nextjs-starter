import axios from 'axios';
import { env } from '~/env.mjs';

// console.log(env)
export const backInnerClient = axios.create({
    // baseURL: env.BACK_INTERNAL_URL,
    baseURL: 'https://d5dsl4vbut4ulv4dt088.apigw.yandexcloud.net',
});

export const backPublicClient = axios.create({
    // baseURL: env.BACK_PUBLIC_URL,
    baseURL: 'https://d5dsl4vbut4ulv4dt088.apigw.yandexcloud.net',
});

export const apiClient = axios.create({
    withCredentials: true,
    // baseURL: env.NEXT_PUBLIC_FRONT_PROXY,
    baseURL: 'https://d5dsl4vbut4ulv4dt088.apigw.yandexcloud.net',
});

