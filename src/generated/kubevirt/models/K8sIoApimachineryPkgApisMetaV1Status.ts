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
import type { K8sIoApimachineryPkgApisMetaV1ListMeta } from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSON,
} from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import type { K8sIoApimachineryPkgApisMetaV1StatusDetails } from './K8sIoApimachineryPkgApisMetaV1StatusDetails';
import {
    K8sIoApimachineryPkgApisMetaV1StatusDetailsFromJSON,
    K8sIoApimachineryPkgApisMetaV1StatusDetailsFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1StatusDetailsToJSON,
} from './K8sIoApimachineryPkgApisMetaV1StatusDetails';

/**
 * Status is a return value for calls that don't return other objects.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1Status
 */
export interface K8sIoApimachineryPkgApisMetaV1Status {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1Status
     */
    apiVersion?: string;
    /**
     * Suggested HTTP return code for this status, 0 if not set.
     * @type {number}
     * @memberof K8sIoApimachineryPkgApisMetaV1Status
     */
    code?: number;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1StatusDetails}
     * @memberof K8sIoApimachineryPkgApisMetaV1Status
     */
    details?: K8sIoApimachineryPkgApisMetaV1StatusDetails;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1Status
     */
    kind?: string;
    /**
     * A human-readable description of the status of this operation.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1Status
     */
    message?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof K8sIoApimachineryPkgApisMetaV1Status
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
    /**
     * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1Status
     */
    reason?: string;
    /**
     * Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1Status
     */
    status?: string;
}

/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1Status interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1Status(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function K8sIoApimachineryPkgApisMetaV1StatusFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1Status {
    return K8sIoApimachineryPkgApisMetaV1StatusFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1Status {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'details': !exists(json, 'details') ? undefined : K8sIoApimachineryPkgApisMetaV1StatusDetailsFromJSON(json['details']),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function K8sIoApimachineryPkgApisMetaV1StatusToJSON(value?: K8sIoApimachineryPkgApisMetaV1Status | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'code': value.code,
        'details': K8sIoApimachineryPkgApisMetaV1StatusDetailsToJSON(value.details),
        'kind': value.kind,
        'message': value.message,
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
        'reason': value.reason,
        'status': value.status,
    };
}

