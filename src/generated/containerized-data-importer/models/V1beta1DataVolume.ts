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
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1beta1DataVolumeSpec } from './V1beta1DataVolumeSpec';
import {
    V1beta1DataVolumeSpecFromJSON,
    V1beta1DataVolumeSpecFromJSONTyped,
    V1beta1DataVolumeSpecToJSON,
} from './V1beta1DataVolumeSpec';
import type { V1beta1DataVolumeStatus } from './V1beta1DataVolumeStatus';
import {
    V1beta1DataVolumeStatusFromJSON,
    V1beta1DataVolumeStatusFromJSONTyped,
    V1beta1DataVolumeStatusToJSON,
} from './V1beta1DataVolumeStatus';

/**
 * DataVolume is an abstraction on top of PersistentVolumeClaims to allow easy population of those PersistentVolumeClaims with relation to VirtualMachines
 * @export
 * @interface V1beta1DataVolume
 */
export interface V1beta1DataVolume {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1DataVolume
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1DataVolume
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta1DataVolume
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta1DataVolumeSpec}
     * @memberof V1beta1DataVolume
     */
    spec: V1beta1DataVolumeSpec;
    /**
     * 
     * @type {V1beta1DataVolumeStatus}
     * @memberof V1beta1DataVolume
     */
    status?: V1beta1DataVolumeStatus;
}

/**
 * Check if a given object implements the V1beta1DataVolume interface.
 */
export function instanceOfV1beta1DataVolume(value: object): value is V1beta1DataVolume {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1beta1DataVolumeFromJSON(json: any): V1beta1DataVolume {
    return V1beta1DataVolumeFromJSONTyped(json, false);
}

export function V1beta1DataVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolume {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1DataVolumeSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1beta1DataVolumeStatusFromJSON(json['status']),
    };
}

export function V1beta1DataVolumeToJSON(value?: V1beta1DataVolume | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1beta1DataVolumeSpecToJSON(value['spec']),
        'status': V1beta1DataVolumeStatusToJSON(value['status']),
    };
}

