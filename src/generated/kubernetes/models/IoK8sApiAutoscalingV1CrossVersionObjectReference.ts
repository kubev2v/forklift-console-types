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
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 * @export
 * @interface IoK8sApiAutoscalingV1CrossVersionObjectReference
 */
export interface IoK8sApiAutoscalingV1CrossVersionObjectReference {
    /**
     * apiVersion is the API version of the referent
     * @type {string}
     * @memberof IoK8sApiAutoscalingV1CrossVersionObjectReference
     */
    apiVersion?: string;
    /**
     * kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAutoscalingV1CrossVersionObjectReference
     */
    kind: string;
    /**
     * name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof IoK8sApiAutoscalingV1CrossVersionObjectReference
     */
    name: string;
}

/**
 * Check if a given object implements the IoK8sApiAutoscalingV1CrossVersionObjectReference interface.
 */
export function instanceOfIoK8sApiAutoscalingV1CrossVersionObjectReference(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiAutoscalingV1CrossVersionObjectReferenceFromJSON(json: any): IoK8sApiAutoscalingV1CrossVersionObjectReference {
    return IoK8sApiAutoscalingV1CrossVersionObjectReferenceFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV1CrossVersionObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV1CrossVersionObjectReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': json['kind'],
        'name': json['name'],
    };
}

export function IoK8sApiAutoscalingV1CrossVersionObjectReferenceToJSON(value?: IoK8sApiAutoscalingV1CrossVersionObjectReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'name': value.name,
    };
}

