/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PluginsService {

    /**
     * Plugin List
     * @param contentType
     * @returns SuccessResponse OK
     * @throws ApiError
     */
    public static pluginList(
        contentType: 'application/json',
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/challenges/plugins/fe-challenge.json',
            headers: {
                'Content-Type': contentType,
            },
        });
    }

}