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
import type { K8sIoApiCoreV1Affinity } from './K8sIoApiCoreV1Affinity';
import {
    K8sIoApiCoreV1AffinityFromJSON,
    K8sIoApiCoreV1AffinityFromJSONTyped,
    K8sIoApiCoreV1AffinityToJSON,
} from './K8sIoApiCoreV1Affinity';
import type { K8sIoApiCoreV1Toleration } from './K8sIoApiCoreV1Toleration';
import {
    K8sIoApiCoreV1TolerationFromJSON,
    K8sIoApiCoreV1TolerationFromJSONTyped,
    K8sIoApiCoreV1TolerationToJSON,
} from './K8sIoApiCoreV1Toleration';

/**
 * NodePlacement describes node scheduling configuration.
 * @export
 * @interface V1NodePlacement
 */
export interface V1NodePlacement {
    /**
     * 
     * @type {K8sIoApiCoreV1Affinity}
     * @memberof V1NodePlacement
     */
    affinity?: K8sIoApiCoreV1Affinity;
    /**
     * nodeSelector is the node selector applied to the relevant kind of pods It specifies a map of key-value pairs: for the pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as labels (it can have additional labels as well). See https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector
     * @type {{ [key: string]: string; }}
     * @memberof V1NodePlacement
     */
    nodeSelector?: { [key: string]: string; };
    /**
     * tolerations is a list of tolerations applied to the relevant kind of pods See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ for more info. These are additional tolerations other than default ones.
     * @type {Array<K8sIoApiCoreV1Toleration>}
     * @memberof V1NodePlacement
     */
    tolerations?: Array<K8sIoApiCoreV1Toleration>;
}

/**
 * Check if a given object implements the V1NodePlacement interface.
 */
export function instanceOfV1NodePlacement(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1NodePlacementFromJSON(json: any): V1NodePlacement {
    return V1NodePlacementFromJSONTyped(json, false);
}

export function V1NodePlacementFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodePlacement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'affinity': !exists(json, 'affinity') ? undefined : K8sIoApiCoreV1AffinityFromJSON(json['affinity']),
        'nodeSelector': !exists(json, 'nodeSelector') ? undefined : json['nodeSelector'],
        'tolerations': !exists(json, 'tolerations') ? undefined : ((json['tolerations'] as Array<any>).map(K8sIoApiCoreV1TolerationFromJSON)),
    };
}

export function V1NodePlacementToJSON(value?: V1NodePlacement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'affinity': K8sIoApiCoreV1AffinityToJSON(value.affinity),
        'nodeSelector': value.nodeSelector,
        'tolerations': value.tolerations === undefined ? undefined : ((value.tolerations as Array<any>).map(K8sIoApiCoreV1TolerationToJSON)),
    };
}

