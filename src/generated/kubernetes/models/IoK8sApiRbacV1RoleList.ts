/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { IoK8sApiRbacV1Role } from './IoK8sApiRbacV1Role';
import {
    IoK8sApiRbacV1RoleFromJSON,
    IoK8sApiRbacV1RoleFromJSONTyped,
    IoK8sApiRbacV1RoleToJSON,
} from './IoK8sApiRbacV1Role';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * RoleList is a collection of Roles
 * @export
 * @interface IoK8sApiRbacV1RoleList
 */
export interface IoK8sApiRbacV1RoleList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiRbacV1RoleList
     */
    apiVersion?: string;
    /**
     * Items is a list of Roles
     * @type {Array<IoK8sApiRbacV1Role>}
     * @memberof IoK8sApiRbacV1RoleList
     */
    items: Array<IoK8sApiRbacV1Role>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiRbacV1RoleList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiRbacV1RoleList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiRbacV1RoleList interface.
 */
export function instanceOfIoK8sApiRbacV1RoleList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiRbacV1RoleListFromJSON(json: any): IoK8sApiRbacV1RoleList {
    return IoK8sApiRbacV1RoleListFromJSONTyped(json, false);
}

export function IoK8sApiRbacV1RoleListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiRbacV1RoleList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiRbacV1RoleFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiRbacV1RoleListToJSON(value?: IoK8sApiRbacV1RoleList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiRbacV1RoleToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

