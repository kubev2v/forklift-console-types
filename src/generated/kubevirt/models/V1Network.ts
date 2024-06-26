/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { V1MultusNetwork } from './V1MultusNetwork';
import {
    V1MultusNetworkFromJSON,
    V1MultusNetworkFromJSONTyped,
    V1MultusNetworkToJSON,
} from './V1MultusNetwork';
import type { V1PodNetwork } from './V1PodNetwork';
import {
    V1PodNetworkFromJSON,
    V1PodNetworkFromJSONTyped,
    V1PodNetworkToJSON,
} from './V1PodNetwork';

/**
 * Network represents a network type and a resource that should be connected to the vm.
 * @export
 * @interface V1Network
 */
export interface V1Network {
    /**
     * 
     * @type {V1MultusNetwork}
     * @memberof V1Network
     */
    multus?: V1MultusNetwork;
    /**
     * Network name. Must be a DNS_LABEL and unique within the vm. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1Network
     */
    name: string;
    /**
     * 
     * @type {V1PodNetwork}
     * @memberof V1Network
     */
    pod?: V1PodNetwork;
}

/**
 * Check if a given object implements the V1Network interface.
 */
export function instanceOfV1Network(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1NetworkFromJSON(json: any): V1Network {
    return V1NetworkFromJSONTyped(json, false);
}

export function V1NetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Network {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'multus': !exists(json, 'multus') ? undefined : V1MultusNetworkFromJSON(json['multus']),
        'name': json['name'],
        'pod': !exists(json, 'pod') ? undefined : V1PodNetworkFromJSON(json['pod']),
    };
}

export function V1NetworkToJSON(value?: V1Network | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'multus': V1MultusNetworkToJSON(value.multus),
        'name': value.name,
        'pod': V1PodNetworkToJSON(value.pod),
    };
}

