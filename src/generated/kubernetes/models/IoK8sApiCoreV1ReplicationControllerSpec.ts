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
import type { IoK8sApiCoreV1PodTemplateSpec } from './IoK8sApiCoreV1PodTemplateSpec';
import {
    IoK8sApiCoreV1PodTemplateSpecFromJSON,
    IoK8sApiCoreV1PodTemplateSpecFromJSONTyped,
    IoK8sApiCoreV1PodTemplateSpecToJSON,
} from './IoK8sApiCoreV1PodTemplateSpec';

/**
 * ReplicationControllerSpec is the specification of a replication controller.
 * @export
 * @interface IoK8sApiCoreV1ReplicationControllerSpec
 */
export interface IoK8sApiCoreV1ReplicationControllerSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     * @type {number}
     * @memberof IoK8sApiCoreV1ReplicationControllerSpec
     */
    minReadySeconds?: number;
    /**
     * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
     * @type {number}
     * @memberof IoK8sApiCoreV1ReplicationControllerSpec
     */
    replicas?: number;
    /**
     * Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1ReplicationControllerSpec
     */
    selector?: { [key: string]: string; };
    /**
     * 
     * @type {IoK8sApiCoreV1PodTemplateSpec}
     * @memberof IoK8sApiCoreV1ReplicationControllerSpec
     */
    template?: IoK8sApiCoreV1PodTemplateSpec;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ReplicationControllerSpec interface.
 */
export function instanceOfIoK8sApiCoreV1ReplicationControllerSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1ReplicationControllerSpecFromJSON(json: any): IoK8sApiCoreV1ReplicationControllerSpec {
    return IoK8sApiCoreV1ReplicationControllerSpecFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ReplicationControllerSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ReplicationControllerSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minReadySeconds': !exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'selector': !exists(json, 'selector') ? undefined : json['selector'],
        'template': !exists(json, 'template') ? undefined : IoK8sApiCoreV1PodTemplateSpecFromJSON(json['template']),
    };
}

export function IoK8sApiCoreV1ReplicationControllerSpecToJSON(value?: IoK8sApiCoreV1ReplicationControllerSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minReadySeconds': value.minReadySeconds,
        'replicas': value.replicas,
        'selector': value.selector,
        'template': IoK8sApiCoreV1PodTemplateSpecToJSON(value.template),
    };
}

