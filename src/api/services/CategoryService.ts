/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDto } from '../models/CategoryDto';
import type { CategoryEntity } from '../models/CategoryEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoryService {

    /**
     * @returns CategoryEntity 
     * @throws ApiError
     */
    public static create({
requestBody,
}: {
requestBody: CategoryDto,
}): CancelablePromise<CategoryEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/category',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns CategoryEntity 
     * @throws ApiError
     */
    public static findAll(): CancelablePromise<Array<CategoryEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/category',
        });
    }

    /**
     * @returns CategoryEntity 
     * @throws ApiError
     */
    public static findOne({
id,
}: {
id: string,
}): CancelablePromise<CategoryEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/category/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns CategoryEntity 
     * @throws ApiError
     */
    public static update({
id,
requestBody,
}: {
id: string,
requestBody: CategoryDto,
}): CancelablePromise<CategoryEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/category/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
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
            url: '/api/category/{id}',
            path: {
                'id': id,
            },
        });
    }

}
