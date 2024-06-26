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
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1VirtualMachineSpec } from './V1VirtualMachineSpec';
import {
    V1VirtualMachineSpecFromJSON,
    V1VirtualMachineSpecFromJSONTyped,
    V1VirtualMachineSpecToJSON,
} from './V1VirtualMachineSpec';
import type { V1VirtualMachineStatus } from './V1VirtualMachineStatus';
import {
    V1VirtualMachineStatusFromJSON,
    V1VirtualMachineStatusFromJSONTyped,
    V1VirtualMachineStatusToJSON,
} from './V1VirtualMachineStatus';

/**
 * 
 * @export
 * @interface V1alpha1VirtualMachine
 */
export interface V1alpha1VirtualMachine {
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1alpha1VirtualMachine
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1VirtualMachineSpec}
     * @memberof V1alpha1VirtualMachine
     */
    spec?: V1VirtualMachineSpec;
    /**
     * 
     * @type {V1VirtualMachineStatus}
     * @memberof V1alpha1VirtualMachine
     */
    status?: V1VirtualMachineStatus;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachine interface.
 */
export function instanceOfV1alpha1VirtualMachine(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1alpha1VirtualMachineFromJSON(json: any): V1alpha1VirtualMachine {
    return V1alpha1VirtualMachineFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachine {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1VirtualMachineSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1VirtualMachineStatusFromJSON(json['status']),
    };
}

export function V1alpha1VirtualMachineToJSON(value?: V1alpha1VirtualMachine | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': V1VirtualMachineSpecToJSON(value.spec),
        'status': V1VirtualMachineStatusToJSON(value.status),
    };
}

