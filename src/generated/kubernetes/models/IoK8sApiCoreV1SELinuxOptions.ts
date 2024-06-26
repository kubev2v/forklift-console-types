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
 * SELinuxOptions are the labels to be applied to the container
 * @export
 * @interface IoK8sApiCoreV1SELinuxOptions
 */
export interface IoK8sApiCoreV1SELinuxOptions {
    /**
     * Level is SELinux level label that applies to the container.
     * @type {string}
     * @memberof IoK8sApiCoreV1SELinuxOptions
     */
    level?: string;
    /**
     * Role is a SELinux role label that applies to the container.
     * @type {string}
     * @memberof IoK8sApiCoreV1SELinuxOptions
     */
    role?: string;
    /**
     * Type is a SELinux type label that applies to the container.
     * @type {string}
     * @memberof IoK8sApiCoreV1SELinuxOptions
     */
    type?: string;
    /**
     * User is a SELinux user label that applies to the container.
     * @type {string}
     * @memberof IoK8sApiCoreV1SELinuxOptions
     */
    user?: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1SELinuxOptions interface.
 */
export function instanceOfIoK8sApiCoreV1SELinuxOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1SELinuxOptionsFromJSON(json: any): IoK8sApiCoreV1SELinuxOptions {
    return IoK8sApiCoreV1SELinuxOptionsFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1SELinuxOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1SELinuxOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'level': !exists(json, 'level') ? undefined : json['level'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function IoK8sApiCoreV1SELinuxOptionsToJSON(value?: IoK8sApiCoreV1SELinuxOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'level': value.level,
        'role': value.role,
        'type': value.type,
        'user': value.user,
    };
}

