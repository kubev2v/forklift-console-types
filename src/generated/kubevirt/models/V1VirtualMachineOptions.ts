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
/**
 * VirtualMachineOptions holds the cluster level information regarding the virtual machine.
 * @export
 * @interface V1VirtualMachineOptions
 */
export interface V1VirtualMachineOptions {
    /**
     * 
     * @type {object}
     * @memberof V1VirtualMachineOptions
     */
    disableFreePageReporting?: object;
    /**
     * 
     * @type {object}
     * @memberof V1VirtualMachineOptions
     */
    disableSerialConsoleLog?: object;
}

/**
 * Check if a given object implements the V1VirtualMachineOptions interface.
 */
export function instanceOfV1VirtualMachineOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1VirtualMachineOptionsFromJSON(json: any): V1VirtualMachineOptions {
    return V1VirtualMachineOptionsFromJSONTyped(json, false);
}

export function V1VirtualMachineOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disableFreePageReporting': !exists(json, 'disableFreePageReporting') ? undefined : json['disableFreePageReporting'],
        'disableSerialConsoleLog': !exists(json, 'disableSerialConsoleLog') ? undefined : json['disableSerialConsoleLog'],
    };
}

export function V1VirtualMachineOptionsToJSON(value?: V1VirtualMachineOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'disableFreePageReporting': value.disableFreePageReporting,
        'disableSerialConsoleLog': value.disableSerialConsoleLog,
    };
}

