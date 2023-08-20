/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCartDto } from '../models/AddCartDto';
import type { CartEntity } from '../models/CartEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CartService {

    /**
     * @returns CartEntity 
     * @throws ApiError
     */
    public static add({
requestBody,
}: {
requestBody: AddCartDto,
}): CancelablePromise<CartEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/cart/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns CartEntity 
     * @throws ApiError
     */
    public static reduce({
id,
}: {
id: string,
}): CancelablePromise<CartEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/cart/reduce/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns CartEntity 
     * @throws ApiError
     */
    public static findAll(): CancelablePromise<Array<CartEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cart',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static delete({
id,
}: {
id: string,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/cart/{id}',
            path: {
                'id': id,
            },
        });
    }

}
