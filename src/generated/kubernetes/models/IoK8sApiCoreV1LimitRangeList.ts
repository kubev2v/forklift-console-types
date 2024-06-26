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
import type { IoK8sApiCoreV1LimitRange } from './IoK8sApiCoreV1LimitRange';
import {
    IoK8sApiCoreV1LimitRangeFromJSON,
    IoK8sApiCoreV1LimitRangeFromJSONTyped,
    IoK8sApiCoreV1LimitRangeToJSON,
} from './IoK8sApiCoreV1LimitRange';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * LimitRangeList is a list of LimitRange items.
 * @export
 * @interface IoK8sApiCoreV1LimitRangeList
 */
export interface IoK8sApiCoreV1LimitRangeList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1LimitRangeList
     */
    apiVersion?: string;
    /**
     * Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {Array<IoK8sApiCoreV1LimitRange>}
     * @memberof IoK8sApiCoreV1LimitRangeList
     */
    items: Array<IoK8sApiCoreV1LimitRange>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1LimitRangeList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiCoreV1LimitRangeList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1LimitRangeList interface.
 */
export function instanceOfIoK8sApiCoreV1LimitRangeList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiCoreV1LimitRangeListFromJSON(json: any): IoK8sApiCoreV1LimitRangeList {
    return IoK8sApiCoreV1LimitRangeListFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1LimitRangeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1LimitRangeList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiCoreV1LimitRangeFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiCoreV1LimitRangeListToJSON(value?: IoK8sApiCoreV1LimitRangeList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiCoreV1LimitRangeToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

