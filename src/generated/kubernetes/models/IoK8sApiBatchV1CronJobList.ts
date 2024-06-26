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
import type { IoK8sApiBatchV1CronJob } from './IoK8sApiBatchV1CronJob';
import {
    IoK8sApiBatchV1CronJobFromJSON,
    IoK8sApiBatchV1CronJobFromJSONTyped,
    IoK8sApiBatchV1CronJobToJSON,
} from './IoK8sApiBatchV1CronJob';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * CronJobList is a collection of cron jobs.
 * @export
 * @interface IoK8sApiBatchV1CronJobList
 */
export interface IoK8sApiBatchV1CronJobList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiBatchV1CronJobList
     */
    apiVersion?: string;
    /**
     * items is the list of CronJobs.
     * @type {Array<IoK8sApiBatchV1CronJob>}
     * @memberof IoK8sApiBatchV1CronJobList
     */
    items: Array<IoK8sApiBatchV1CronJob>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiBatchV1CronJobList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiBatchV1CronJobList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiBatchV1CronJobList interface.
 */
export function instanceOfIoK8sApiBatchV1CronJobList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiBatchV1CronJobListFromJSON(json: any): IoK8sApiBatchV1CronJobList {
    return IoK8sApiBatchV1CronJobListFromJSONTyped(json, false);
}

export function IoK8sApiBatchV1CronJobListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiBatchV1CronJobList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiBatchV1CronJobFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiBatchV1CronJobListToJSON(value?: IoK8sApiBatchV1CronJobList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiBatchV1CronJobToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

