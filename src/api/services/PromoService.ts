/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePromoDto } from '../models/CreatePromoDto';
import type { PromoEntity } from '../models/PromoEntity';
import type { UpdatePromoDto } from '../models/UpdatePromoDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PromoService {

    /**
     * @returns PromoEntity 
     * @throws ApiError
     */
    public static create({
formData,
}: {
formData: CreatePromoDto,
}): CancelablePromise<PromoEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/promo',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns PromoEntity 
     * @throws ApiError
     */
    public static findAll(): CancelablePromise<Array<PromoEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/promo',
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
            url: '/api/promo/image/{path}',
            path: {
                'path': path,
            },
        });
    }

    /**
     * @returns PromoEntity 
     * @throws ApiError
     */
    public static findOne({
id,
}: {
id: string,
}): CancelablePromise<PromoEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/promo/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns PromoEntity 
     * @throws ApiError
     */
    public static update({
id,
formData,
}: {
id: string,
formData: UpdatePromoDto,
}): CancelablePromise<PromoEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/promo/{id}',
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
    public static remove({
id,
}: {
id: string,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/promo/{id}',
            path: {
                'id': id,
            },
        });
    }

}
