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
import type { V1alpha1MigrationPolicy } from './V1alpha1MigrationPolicy';
import {
    V1alpha1MigrationPolicyFromJSON,
    V1alpha1MigrationPolicyFromJSONTyped,
    V1alpha1MigrationPolicyToJSON,
} from './V1alpha1MigrationPolicy';

/**
 * MigrationPolicyList is a list of MigrationPolicy
 * @export
 * @interface V1alpha1MigrationPolicyList
 */
export interface V1alpha1MigrationPolicyList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1MigrationPolicyList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1alpha1MigrationPolicy>}
     * @memberof V1alpha1MigrationPolicyList
     */
    items: Array<V1alpha1MigrationPolicy>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1MigrationPolicyList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1alpha1MigrationPolicyList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1alpha1MigrationPolicyList interface.
 */
export function instanceOfV1alpha1MigrationPolicyList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function V1alpha1MigrationPolicyListFromJSON(json: any): V1alpha1MigrationPolicyList {
    return V1alpha1MigrationPolicyListFromJSONTyped(json, false);
}

export function V1alpha1MigrationPolicyListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1MigrationPolicyList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1MigrationPolicyFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1MigrationPolicyListToJSON(value?: V1alpha1MigrationPolicyList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1alpha1MigrationPolicyToJSON)),
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

