/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../../runtime';
/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 * @export
 * @interface V1TypedLocalObjectReference
 */
export interface V1TypedLocalObjectReference {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     * @type {string}
     * @memberof V1TypedLocalObjectReference
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced
     * @type {string}
     * @memberof V1TypedLocalObjectReference
     */
    kind: string;
    /**
     * Name is the name of resource being referenced
     * @type {string}
     * @memberof V1TypedLocalObjectReference
     */
    name: string;
}

/**
 * Check if a given object implements the V1TypedLocalObjectReference interface.
 */
export function instanceOfV1TypedLocalObjectReference(value: object): value is V1TypedLocalObjectReference {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1TypedLocalObjectReferenceFromJSON(json: any): V1TypedLocalObjectReference {
    return V1TypedLocalObjectReferenceFromJSONTyped(json, false);
}

export function V1TypedLocalObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TypedLocalObjectReference {
    if (json == null) {
        return json;
    }
    return {
        
        'apiGroup': json['apiGroup'] == null ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
    };
}

export function V1TypedLocalObjectReferenceToJSON(value?: V1TypedLocalObjectReference | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiGroup': value['apiGroup'],
        'kind': value['kind'],
        'name': value['name'],
    };
}

