/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductEntity } from './ProductEntity';

export type CartEntity = {
    id: number;
    userIP: string;
    product: ProductEntity;
    productSizeId: number;
    quantity: number;
    price: number;
    totalPrice: number;
};
