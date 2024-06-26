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
import type { IoK8sApiCoreV1PersistentVolumeSpec } from './IoK8sApiCoreV1PersistentVolumeSpec';
import {
    IoK8sApiCoreV1PersistentVolumeSpecFromJSON,
    IoK8sApiCoreV1PersistentVolumeSpecFromJSONTyped,
    IoK8sApiCoreV1PersistentVolumeSpecToJSON,
} from './IoK8sApiCoreV1PersistentVolumeSpec';
import type { IoK8sApiCoreV1PersistentVolumeStatus } from './IoK8sApiCoreV1PersistentVolumeStatus';
import {
    IoK8sApiCoreV1PersistentVolumeStatusFromJSON,
    IoK8sApiCoreV1PersistentVolumeStatusFromJSONTyped,
    IoK8sApiCoreV1PersistentVolumeStatusToJSON,
} from './IoK8sApiCoreV1PersistentVolumeStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 * @export
 * @interface IoK8sApiCoreV1PersistentVolume
 */
export interface IoK8sApiCoreV1PersistentVolume {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolume
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolume
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1PersistentVolume
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCoreV1PersistentVolumeSpec}
     * @memberof IoK8sApiCoreV1PersistentVolume
     */
    spec?: IoK8sApiCoreV1PersistentVolumeSpec;
    /**
     * 
     * @type {IoK8sApiCoreV1PersistentVolumeStatus}
     * @memberof IoK8sApiCoreV1PersistentVolume
     */
    status?: IoK8sApiCoreV1PersistentVolumeStatus;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1PersistentVolume interface.
 */
export function instanceOfIoK8sApiCoreV1PersistentVolume(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1PersistentVolumeFromJSON(json: any): IoK8sApiCoreV1PersistentVolume {
    return IoK8sApiCoreV1PersistentVolumeFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PersistentVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PersistentVolume {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiCoreV1PersistentVolumeSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiCoreV1PersistentVolumeStatusFromJSON(json['status']),
    };
}

export function IoK8sApiCoreV1PersistentVolumeToJSON(value?: IoK8sApiCoreV1PersistentVolume | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiCoreV1PersistentVolumeSpecToJSON(value.spec),
        'status': IoK8sApiCoreV1PersistentVolumeStatusToJSON(value.status),
    };
}

