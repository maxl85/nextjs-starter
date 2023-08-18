/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryEntity } from '../models/CategoryEntity';
import type { CreateCategoryDto } from '../models/CreateCategoryDto';
import type { UpdateCategoryDto } from '../models/UpdateCategoryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoryService {

    /**
     * @returns CategoryEntity 
     * @throws ApiError
     */
    public static create({
formData,
}: {
formData: CreateCategoryDto,
}): CancelablePromise<CategoryEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/category',
            formData: formData,
            mediaType: 'multipart/form-data',
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
     * @returns any 
     * @throws ApiError
     */
    public static download({
path,
}: {
path: string,
}): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/category/image/{path}',
            path: {
                'path': path,
            },
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
formData,
}: {
id: string,
formData: UpdateCategoryDto,
}): CancelablePromise<CategoryEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/category/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
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
