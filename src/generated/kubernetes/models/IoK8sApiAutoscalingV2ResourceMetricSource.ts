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
import type { IoK8sApiAutoscalingV2MetricTarget } from './IoK8sApiAutoscalingV2MetricTarget';
import {
    IoK8sApiAutoscalingV2MetricTargetFromJSON,
    IoK8sApiAutoscalingV2MetricTargetFromJSONTyped,
    IoK8sApiAutoscalingV2MetricTargetToJSON,
} from './IoK8sApiAutoscalingV2MetricTarget';

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 * @export
 * @interface IoK8sApiAutoscalingV2ResourceMetricSource
 */
export interface IoK8sApiAutoscalingV2ResourceMetricSource {
    /**
     * name is the name of the resource in question.
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2ResourceMetricSource
     */
    name: string;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2MetricTarget}
     * @memberof IoK8sApiAutoscalingV2ResourceMetricSource
     */
    target: IoK8sApiAutoscalingV2MetricTarget;
}

/**
 * Check if a given object implements the IoK8sApiAutoscalingV2ResourceMetricSource interface.
 */
export function instanceOfIoK8sApiAutoscalingV2ResourceMetricSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "target" in value;

    return isInstance;
}

export function IoK8sApiAutoscalingV2ResourceMetricSourceFromJSON(json: any): IoK8sApiAutoscalingV2ResourceMetricSource {
    return IoK8sApiAutoscalingV2ResourceMetricSourceFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2ResourceMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2ResourceMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'target': IoK8sApiAutoscalingV2MetricTargetFromJSON(json['target']),
    };
}

export function IoK8sApiAutoscalingV2ResourceMetricSourceToJSON(value?: IoK8sApiAutoscalingV2ResourceMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'target': IoK8sApiAutoscalingV2MetricTargetToJSON(value.target),
    };
}

