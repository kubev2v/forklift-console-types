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
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 * @export
 * @interface IoK8sApiRbacV1Subject
 */
export interface IoK8sApiRbacV1Subject {
    /**
     * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
     * @type {string}
     * @memberof IoK8sApiRbacV1Subject
     */
    apiGroup?: string;
    /**
     * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
     * @type {string}
     * @memberof IoK8sApiRbacV1Subject
     */
    kind: string;
    /**
     * Name of the object being referenced.
     * @type {string}
     * @memberof IoK8sApiRbacV1Subject
     */
    name: string;
    /**
     * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
     * @type {string}
     * @memberof IoK8sApiRbacV1Subject
     */
    namespace?: string;
}

/**
 * Check if a given object implements the IoK8sApiRbacV1Subject interface.
 */
export function instanceOfIoK8sApiRbacV1Subject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiRbacV1SubjectFromJSON(json: any): IoK8sApiRbacV1Subject {
    return IoK8sApiRbacV1SubjectFromJSONTyped(json, false);
}

export function IoK8sApiRbacV1SubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiRbacV1Subject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroup': !exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function IoK8sApiRbacV1SubjectToJSON(value?: IoK8sApiRbacV1Subject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
        'namespace': value.namespace,
    };
}

