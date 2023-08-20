/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { OrderEntity } from '../models/OrderEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrderService {

    /**
     * @returns OrderEntity 
     * @throws ApiError
     */
    public static create({
requestBody,
}: {
requestBody: CreateOrderDto,
}): CancelablePromise<OrderEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
