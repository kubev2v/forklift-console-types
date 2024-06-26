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
import type { IoK8sApiFlowcontrolV1GroupSubject } from './IoK8sApiFlowcontrolV1GroupSubject';
import {
    IoK8sApiFlowcontrolV1GroupSubjectFromJSON,
    IoK8sApiFlowcontrolV1GroupSubjectFromJSONTyped,
    IoK8sApiFlowcontrolV1GroupSubjectToJSON,
} from './IoK8sApiFlowcontrolV1GroupSubject';
import type { IoK8sApiFlowcontrolV1ServiceAccountSubject } from './IoK8sApiFlowcontrolV1ServiceAccountSubject';
import {
    IoK8sApiFlowcontrolV1ServiceAccountSubjectFromJSON,
    IoK8sApiFlowcontrolV1ServiceAccountSubjectFromJSONTyped,
    IoK8sApiFlowcontrolV1ServiceAccountSubjectToJSON,
} from './IoK8sApiFlowcontrolV1ServiceAccountSubject';
import type { IoK8sApiFlowcontrolV1UserSubject } from './IoK8sApiFlowcontrolV1UserSubject';
import {
    IoK8sApiFlowcontrolV1UserSubjectFromJSON,
    IoK8sApiFlowcontrolV1UserSubjectFromJSONTyped,
    IoK8sApiFlowcontrolV1UserSubjectToJSON,
} from './IoK8sApiFlowcontrolV1UserSubject';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 * @export
 * @interface IoK8sApiFlowcontrolV1Subject
 */
export interface IoK8sApiFlowcontrolV1Subject {
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1GroupSubject}
     * @memberof IoK8sApiFlowcontrolV1Subject
     */
    group?: IoK8sApiFlowcontrolV1GroupSubject;
    /**
     * `kind` indicates which one of the other fields is non-empty. Required
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1Subject
     */
    kind: string;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1ServiceAccountSubject}
     * @memberof IoK8sApiFlowcontrolV1Subject
     */
    serviceAccount?: IoK8sApiFlowcontrolV1ServiceAccountSubject;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1UserSubject}
     * @memberof IoK8sApiFlowcontrolV1Subject
     */
    user?: IoK8sApiFlowcontrolV1UserSubject;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1Subject interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1Subject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1SubjectFromJSON(json: any): IoK8sApiFlowcontrolV1Subject {
    return IoK8sApiFlowcontrolV1SubjectFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1SubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1Subject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': !exists(json, 'group') ? undefined : IoK8sApiFlowcontrolV1GroupSubjectFromJSON(json['group']),
        'kind': json['kind'],
        'serviceAccount': !exists(json, 'serviceAccount') ? undefined : IoK8sApiFlowcontrolV1ServiceAccountSubjectFromJSON(json['serviceAccount']),
        'user': !exists(json, 'user') ? undefined : IoK8sApiFlowcontrolV1UserSubjectFromJSON(json['user']),
    };
}

export function IoK8sApiFlowcontrolV1SubjectToJSON(value?: IoK8sApiFlowcontrolV1Subject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': IoK8sApiFlowcontrolV1GroupSubjectToJSON(value.group),
        'kind': value.kind,
        'serviceAccount': IoK8sApiFlowcontrolV1ServiceAccountSubjectToJSON(value.serviceAccount),
        'user': IoK8sApiFlowcontrolV1UserSubjectToJSON(value.user),
    };
}

