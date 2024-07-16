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
import type { V1beta1DataSourceStatus } from './V1beta1DataSourceStatus';
import {
    V1beta1DataSourceStatusFromJSON,
    V1beta1DataSourceStatusFromJSONTyped,
    V1beta1DataSourceStatusToJSON,
} from './V1beta1DataSourceStatus';
import type { V1beta1DataSourceSpec } from './V1beta1DataSourceSpec';
import {
    V1beta1DataSourceSpecFromJSON,
    V1beta1DataSourceSpecFromJSONTyped,
    V1beta1DataSourceSpecToJSON,
} from './V1beta1DataSourceSpec';

/**
 * DataSource references an import/clone source for a DataVolume
 * @export
 * @interface V1beta1DataSource
 */
export interface V1beta1DataSource {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1DataSource
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1DataSource
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta1DataSource
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta1DataSourceSpec}
     * @memberof V1beta1DataSource
     */
    spec: V1beta1DataSourceSpec;
    /**
     * 
     * @type {V1beta1DataSourceStatus}
     * @memberof V1beta1DataSource
     */
    status?: V1beta1DataSourceStatus;
}

/**
 * Check if a given object implements the V1beta1DataSource interface.
 */
export function instanceOfV1beta1DataSource(value: object): value is V1beta1DataSource {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1beta1DataSourceFromJSON(json: any): V1beta1DataSource {
    return V1beta1DataSourceFromJSONTyped(json, false);
}

export function V1beta1DataSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataSource {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1DataSourceSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1beta1DataSourceStatusFromJSON(json['status']),
    };
}

export function V1beta1DataSourceToJSON(value?: V1beta1DataSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1beta1DataSourceSpecToJSON(value['spec']),
        'status': V1beta1DataSourceStatusToJSON(value['status']),
    };
}
