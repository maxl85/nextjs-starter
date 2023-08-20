/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CartEntity } from './CartEntity';
import type { CategoryEntity } from './CategoryEntity';
import type { OrderItemEntity } from './OrderItemEntity';

export type ProductEntity = {
    id: number;
    image: string;
    name: string;
    description: string;
    sizes: Array<number>;
    prices: Array<number>;
    category: CategoryEntity;
    cart: Array<CartEntity>;
    orderItem: Array<OrderItemEntity>;
};
