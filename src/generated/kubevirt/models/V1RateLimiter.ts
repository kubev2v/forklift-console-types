/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { V1TokenBucketRateLimiter } from './V1TokenBucketRateLimiter';
import {
    V1TokenBucketRateLimiterFromJSON,
    V1TokenBucketRateLimiterFromJSONTyped,
    V1TokenBucketRateLimiterToJSON,
} from './V1TokenBucketRateLimiter';

/**
 * 
 * @export
 * @interface V1RateLimiter
 */
export interface V1RateLimiter {
    /**
     * 
     * @type {V1TokenBucketRateLimiter}
     * @memberof V1RateLimiter
     */
    tokenBucketRateLimiter?: V1TokenBucketRateLimiter;
}

/**
 * Check if a given object implements the V1RateLimiter interface.
 */
export function instanceOfV1RateLimiter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RateLimiterFromJSON(json: any): V1RateLimiter {
    return V1RateLimiterFromJSONTyped(json, false);
}

export function V1RateLimiterFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RateLimiter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokenBucketRateLimiter': !exists(json, 'tokenBucketRateLimiter') ? undefined : V1TokenBucketRateLimiterFromJSON(json['tokenBucketRateLimiter']),
    };
}

export function V1RateLimiterToJSON(value?: V1RateLimiter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tokenBucketRateLimiter': V1TokenBucketRateLimiterToJSON(value.tokenBucketRateLimiter),
    };
}

