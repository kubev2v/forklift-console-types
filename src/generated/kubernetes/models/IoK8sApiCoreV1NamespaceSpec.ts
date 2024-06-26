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
 * NamespaceSpec describes the attributes on a Namespace.
 * @export
 * @interface IoK8sApiCoreV1NamespaceSpec
 */
export interface IoK8sApiCoreV1NamespaceSpec {
    /**
     * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1NamespaceSpec
     */
    finalizers?: string[];
}

/**
 * Check if a given object implements the IoK8sApiCoreV1NamespaceSpec interface.
 */
export function instanceOfIoK8sApiCoreV1NamespaceSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1NamespaceSpecFromJSON(json: any): IoK8sApiCoreV1NamespaceSpec {
    return IoK8sApiCoreV1NamespaceSpecFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NamespaceSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1NamespaceSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'finalizers': !exists(json, 'finalizers') ? undefined : json['finalizers'],
    };
}

export function IoK8sApiCoreV1NamespaceSpecToJSON(value?: IoK8sApiCoreV1NamespaceSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'finalizers': value.finalizers,
    };
}

