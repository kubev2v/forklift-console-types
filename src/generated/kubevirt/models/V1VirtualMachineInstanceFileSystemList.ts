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
import type { K8sIoApimachineryPkgApisMetaV1ListMeta } from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSON,
} from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import type { V1VirtualMachineInstanceFileSystem } from './V1VirtualMachineInstanceFileSystem';
import {
    V1VirtualMachineInstanceFileSystemFromJSON,
    V1VirtualMachineInstanceFileSystemFromJSONTyped,
    V1VirtualMachineInstanceFileSystemToJSON,
} from './V1VirtualMachineInstanceFileSystem';

/**
 * VirtualMachineInstanceFileSystemList comprises the list of all filesystems on guest machine
 * @export
 * @interface V1VirtualMachineInstanceFileSystemList
 */
export interface V1VirtualMachineInstanceFileSystemList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstanceFileSystemList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1VirtualMachineInstanceFileSystem>}
     * @memberof V1VirtualMachineInstanceFileSystemList
     */
    items: Array<V1VirtualMachineInstanceFileSystem>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstanceFileSystemList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1VirtualMachineInstanceFileSystemList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1VirtualMachineInstanceFileSystemList interface.
 */
export function instanceOfV1VirtualMachineInstanceFileSystemList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function V1VirtualMachineInstanceFileSystemListFromJSON(json: any): V1VirtualMachineInstanceFileSystemList {
    return V1VirtualMachineInstanceFileSystemListFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceFileSystemListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceFileSystemList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1VirtualMachineInstanceFileSystemFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1VirtualMachineInstanceFileSystemListToJSON(value?: V1VirtualMachineInstanceFileSystemList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1VirtualMachineInstanceFileSystemToJSON)),
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

