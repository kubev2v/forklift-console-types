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
import type { IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding } from './IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding';
import {
    IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingFromJSONTyped,
    IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingToJSON,
} from './IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * ValidatingAdmissionPolicyBindingList is a list of ValidatingAdmissionPolicyBinding.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList
 */
export interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList
     */
    apiVersion?: string;
    /**
     * List of PolicyBinding.
     * @type {Array<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding>}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList
     */
    items?: Array<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList interface.
 */
export function instanceOfIoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingListFromJSON(json: any): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList {
    return IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingListFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingListToJSON(value?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

