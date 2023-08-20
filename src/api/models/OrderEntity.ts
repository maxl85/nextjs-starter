/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderItemEntity } from './OrderItemEntity';

export type OrderEntity = {
    id: number;
    userName: string;
    phone: string;
    address: string;
    payment: number;
    items: Array<OrderItemEntity>;
    totalPrice: number;
};
