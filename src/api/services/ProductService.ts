/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductDto } from '../models/CreateProductDto';
import type { ProductEntity } from '../models/ProductEntity';
import type { UpdateProductDto } from '../models/UpdateProductDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * @returns ProductEntity 
     * @throws ApiError
     */
    public static create({
formData,
}: {
formData: CreateProductDto,
}): CancelablePromise<ProductEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/product',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns ProductEntity 
     * @throws ApiError
     */
    public static findAll({
categoryId,
}: {
categoryId?: number,
}): CancelablePromise<Array<ProductEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product',
            query: {
                'categoryId': categoryId,
            },
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
            url: '/api/product/image/{path}',
            path: {
                'path': path,
            },
        });
    }

    /**
     * @returns ProductEntity 
     * @throws ApiError
     */
    public static findOne({
id,
}: {
id: string,
}): CancelablePromise<ProductEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns ProductEntity 
     * @throws ApiError
     */
    public static update({
id,
formData,
}: {
id: string,
formData: UpdateProductDto,
}): CancelablePromise<ProductEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/product/{id}',
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
            url: '/api/product/{id}',
            path: {
                'id': id,
            },
        });
    }

}
