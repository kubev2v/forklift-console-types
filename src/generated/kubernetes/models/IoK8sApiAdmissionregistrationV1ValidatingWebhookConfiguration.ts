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
import type { IoK8sApiAdmissionregistrationV1ValidatingWebhook } from './IoK8sApiAdmissionregistrationV1ValidatingWebhook';
import {
    IoK8sApiAdmissionregistrationV1ValidatingWebhookFromJSON,
    IoK8sApiAdmissionregistrationV1ValidatingWebhookFromJSONTyped,
    IoK8sApiAdmissionregistrationV1ValidatingWebhookToJSON,
} from './IoK8sApiAdmissionregistrationV1ValidatingWebhook';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
 */
export interface IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * Webhooks is a list of webhooks and the affected resources and operations.
     * @type {Array<IoK8sApiAdmissionregistrationV1ValidatingWebhook>}
     * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
     */
    webhooks?: Array<IoK8sApiAdmissionregistrationV1ValidatingWebhook>;
}

/**
 * Check if a given object implements the IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration interface.
 */
export function instanceOfIoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationFromJSON(json: any): IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration {
    return IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'webhooks': !exists(json, 'webhooks') ? undefined : ((json['webhooks'] as Array<any>).map(IoK8sApiAdmissionregistrationV1ValidatingWebhookFromJSON)),
    };
}

export function IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationToJSON(value?: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration | null): any {
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
        'webhooks': value.webhooks === undefined ? undefined : ((value.webhooks as Array<any>).map(IoK8sApiAdmissionregistrationV1ValidatingWebhookToJSON)),
    };
}

