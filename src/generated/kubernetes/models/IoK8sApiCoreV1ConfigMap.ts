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
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * ConfigMap holds configuration data for pods to consume.
 * @export
 * @interface IoK8sApiCoreV1ConfigMap
 */
export interface IoK8sApiCoreV1ConfigMap {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1ConfigMap
     */
    apiVersion?: string;
    /**
     * BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1ConfigMap
     */
    binaryData?: { [key: string]: string; };
    /**
     * Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1ConfigMap
     */
    data?: { [key: string]: string; };
    /**
     * Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1ConfigMap
     */
    immutable?: boolean;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1ConfigMap
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1ConfigMap
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ConfigMap interface.
 */
export function instanceOfIoK8sApiCoreV1ConfigMap(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1ConfigMapFromJSON(json: any): IoK8sApiCoreV1ConfigMap {
    return IoK8sApiCoreV1ConfigMapFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ConfigMapFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ConfigMap {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'binaryData': !exists(json, 'binaryData') ? undefined : json['binaryData'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'immutable': !exists(json, 'immutable') ? undefined : json['immutable'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiCoreV1ConfigMapToJSON(value?: IoK8sApiCoreV1ConfigMap | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'binaryData': value.binaryData,
        'data': value.data,
        'immutable': value.immutable,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    };
}

