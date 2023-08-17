/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryEntity } from './CategoryEntity';

export type ProductEntity = {
    id: number;
    image: string;
    name: string;
    description: string;
    sizes: Array<number>;
    prices: Array<number>;
    category: CategoryEntity;
};
