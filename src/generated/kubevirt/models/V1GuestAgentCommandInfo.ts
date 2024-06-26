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
 * List of commands that QEMU guest agent supports
 * @export
 * @interface V1GuestAgentCommandInfo
 */
export interface V1GuestAgentCommandInfo {
    /**
     * 
     * @type {boolean}
     * @memberof V1GuestAgentCommandInfo
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1GuestAgentCommandInfo
     */
    name: string;
}

/**
 * Check if a given object implements the V1GuestAgentCommandInfo interface.
 */
export function instanceOfV1GuestAgentCommandInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1GuestAgentCommandInfoFromJSON(json: any): V1GuestAgentCommandInfo {
    return V1GuestAgentCommandInfoFromJSONTyped(json, false);
}

export function V1GuestAgentCommandInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GuestAgentCommandInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'name': json['name'],
    };
}

export function V1GuestAgentCommandInfoToJSON(value?: V1GuestAgentCommandInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'name': value.name,
    };
}

