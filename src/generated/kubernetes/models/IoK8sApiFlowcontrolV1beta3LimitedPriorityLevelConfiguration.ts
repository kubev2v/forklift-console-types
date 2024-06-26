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
import type { IoK8sApiFlowcontrolV1beta3LimitResponse } from './IoK8sApiFlowcontrolV1beta3LimitResponse';
import {
    IoK8sApiFlowcontrolV1beta3LimitResponseFromJSON,
    IoK8sApiFlowcontrolV1beta3LimitResponseFromJSONTyped,
    IoK8sApiFlowcontrolV1beta3LimitResponseToJSON,
} from './IoK8sApiFlowcontrolV1beta3LimitResponse';

/**
 * LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
 *   - How are requests for this priority level limited?
 *   - What should be done with requests that exceed the limit?
 * @export
 * @interface IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration
 */
export interface IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration {
    /**
     * `borrowingLimitPercent`, if present, configures a limit on how many seats this priority level can borrow from other priority levels. The limit is known as this level's BorrowingConcurrencyLimit (BorrowingCL) and is a limit on the total number of seats that this level may borrow at any one time. This field holds the ratio of that limit to the level's nominal concurrency limit. When this field is non-nil, it must hold a non-negative integer and the limit is calculated as follows.
     * 
     * BorrowingCL(i) = round( NominalCL(i) * borrowingLimitPercent(i)/100.0 )
     * 
     * The value of this field can be more than 100, implying that this priority level can borrow a number of seats that is greater than its own nominal concurrency limit (NominalCL). When this field is left `nil`, the limit is effectively infinite.
     * @type {number}
     * @memberof IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration
     */
    borrowingLimitPercent?: number;
    /**
     * `lendablePercent` prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels. The value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.
     * 
     * LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )
     * @type {number}
     * @memberof IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration
     */
    lendablePercent?: number;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1beta3LimitResponse}
     * @memberof IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration
     */
    limitResponse?: IoK8sApiFlowcontrolV1beta3LimitResponse;
    /**
     * `nominalConcurrencyShares` (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats available at this priority level. This is used both for requests dispatched from this priority level as well as requests dispatched from other priority levels borrowing seats from this level. The server's concurrency limit (ServerCL) is divided among the Limited priority levels in proportion to their NCS values:
     * 
     * NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)
     * 
     * Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of 30.
     * @type {number}
     * @memberof IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration
     */
    nominalConcurrencyShares?: number;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationFromJSON(json: any): IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration {
    return IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'borrowingLimitPercent': !exists(json, 'borrowingLimitPercent') ? undefined : json['borrowingLimitPercent'],
        'lendablePercent': !exists(json, 'lendablePercent') ? undefined : json['lendablePercent'],
        'limitResponse': !exists(json, 'limitResponse') ? undefined : IoK8sApiFlowcontrolV1beta3LimitResponseFromJSON(json['limitResponse']),
        'nominalConcurrencyShares': !exists(json, 'nominalConcurrencyShares') ? undefined : json['nominalConcurrencyShares'],
    };
}

export function IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationToJSON(value?: IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'borrowingLimitPercent': value.borrowingLimitPercent,
        'lendablePercent': value.lendablePercent,
        'limitResponse': IoK8sApiFlowcontrolV1beta3LimitResponseToJSON(value.limitResponse),
        'nominalConcurrencyShares': value.nominalConcurrencyShares,
    };
}

