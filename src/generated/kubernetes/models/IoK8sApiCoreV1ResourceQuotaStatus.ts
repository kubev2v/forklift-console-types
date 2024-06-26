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
/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 * @export
 * @interface IoK8sApiCoreV1ResourceQuotaStatus
 */
export interface IoK8sApiCoreV1ResourceQuotaStatus {
    /**
     * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1ResourceQuotaStatus
     */
    hard?: { [key: string]: string; };
    /**
     * Used is the current observed total usage of the resource in the namespace.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1ResourceQuotaStatus
     */
    used?: { [key: string]: string; };
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ResourceQuotaStatus interface.
 */
export function instanceOfIoK8sApiCoreV1ResourceQuotaStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1ResourceQuotaStatusFromJSON(json: any): IoK8sApiCoreV1ResourceQuotaStatus {
    return IoK8sApiCoreV1ResourceQuotaStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ResourceQuotaStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ResourceQuotaStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hard': !exists(json, 'hard') ? undefined : json['hard'],
        'used': !exists(json, 'used') ? undefined : json['used'],
    };
}

export function IoK8sApiCoreV1ResourceQuotaStatusToJSON(value?: IoK8sApiCoreV1ResourceQuotaStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hard': value.hard,
        'used': value.used,
    };
}

