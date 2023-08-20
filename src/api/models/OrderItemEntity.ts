/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderEntity } from './OrderEntity';
import type { ProductEntity } from './ProductEntity';

export type OrderItemEntity = {
    id: number;
    order: OrderEntity;
    product: ProductEntity;
    productSizeId: number;
    quantity: number;
    price: number;
    totalPrice: number;
};
