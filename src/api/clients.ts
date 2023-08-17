import axios from 'axios';
import { env } from '~/env.mjs';

// console.log(env)
export const backInnerClient = axios.create({
    // baseURL: env.BACK_INTERNAL_URL,
    baseURL: 'http://127.0.0.1:7777',
});

export const backPublicClient = axios.create({
    // baseURL: env.BACK_PUBLIC_URL,
    baseURL: 'http://127.0.0.1:7777',
});

export const apiClient = axios.create({
    withCredentials: true,
    // baseURL: env.NEXT_PUBLIC_FRONT_PROXY,
    baseURL: 'http://127.0.0.1:7777',
});
