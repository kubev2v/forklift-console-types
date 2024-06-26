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
/**
 * UTC sets the guest clock to UTC on each boot.
 * @export
 * @interface V1ClockOffsetUTC
 */
export interface V1ClockOffsetUTC {
    /**
     * OffsetSeconds specifies an offset in seconds, relative to UTC. If set, guest changes to the clock will be kept during reboots and not reset.
     * @type {number}
     * @memberof V1ClockOffsetUTC
     */
    offsetSeconds?: number;
}

/**
 * Check if a given object implements the V1ClockOffsetUTC interface.
 */
export function instanceOfV1ClockOffsetUTC(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ClockOffsetUTCFromJSON(json: any): V1ClockOffsetUTC {
    return V1ClockOffsetUTCFromJSONTyped(json, false);
}

export function V1ClockOffsetUTCFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ClockOffsetUTC {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offsetSeconds': !exists(json, 'offsetSeconds') ? undefined : json['offsetSeconds'],
    };
}

export function V1ClockOffsetUTCToJSON(value?: V1ClockOffsetUTC | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offsetSeconds': value.offsetSeconds,
    };
}

