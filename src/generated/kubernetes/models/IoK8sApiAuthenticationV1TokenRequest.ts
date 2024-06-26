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
import type { IoK8sApiAuthenticationV1TokenRequestSpec } from './IoK8sApiAuthenticationV1TokenRequestSpec';
import {
    IoK8sApiAuthenticationV1TokenRequestSpecFromJSON,
    IoK8sApiAuthenticationV1TokenRequestSpecFromJSONTyped,
    IoK8sApiAuthenticationV1TokenRequestSpecToJSON,
} from './IoK8sApiAuthenticationV1TokenRequestSpec';
import type { IoK8sApiAuthenticationV1TokenRequestStatus } from './IoK8sApiAuthenticationV1TokenRequestStatus';
import {
    IoK8sApiAuthenticationV1TokenRequestStatusFromJSON,
    IoK8sApiAuthenticationV1TokenRequestStatusFromJSONTyped,
    IoK8sApiAuthenticationV1TokenRequestStatusToJSON,
} from './IoK8sApiAuthenticationV1TokenRequestStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * TokenRequest requests a token for a given service account.
 * @export
 * @interface IoK8sApiAuthenticationV1TokenRequest
 */
export interface IoK8sApiAuthenticationV1TokenRequest {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1TokenRequest
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1TokenRequest
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAuthenticationV1TokenRequest
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAuthenticationV1TokenRequestSpec}
     * @memberof IoK8sApiAuthenticationV1TokenRequest
     */
    spec: IoK8sApiAuthenticationV1TokenRequestSpec;
    /**
     * 
     * @type {IoK8sApiAuthenticationV1TokenRequestStatus}
     * @memberof IoK8sApiAuthenticationV1TokenRequest
     */
    status?: IoK8sApiAuthenticationV1TokenRequestStatus;
}

/**
 * Check if a given object implements the IoK8sApiAuthenticationV1TokenRequest interface.
 */
export function instanceOfIoK8sApiAuthenticationV1TokenRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function IoK8sApiAuthenticationV1TokenRequestFromJSON(json: any): IoK8sApiAuthenticationV1TokenRequest {
    return IoK8sApiAuthenticationV1TokenRequestFromJSONTyped(json, false);
}

export function IoK8sApiAuthenticationV1TokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAuthenticationV1TokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': IoK8sApiAuthenticationV1TokenRequestSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAuthenticationV1TokenRequestStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAuthenticationV1TokenRequestToJSON(value?: IoK8sApiAuthenticationV1TokenRequest | null): any {
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
        'spec': IoK8sApiAuthenticationV1TokenRequestSpecToJSON(value.spec),
        'status': IoK8sApiAuthenticationV1TokenRequestStatusToJSON(value.status),
    };
}

