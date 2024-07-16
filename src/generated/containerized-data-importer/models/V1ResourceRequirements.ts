/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../../runtime';
import type { V1ResourceClaim } from './V1ResourceClaim';
import {
    V1ResourceClaimFromJSON,
    V1ResourceClaimFromJSONTyped,
    V1ResourceClaimToJSON,
} from './V1ResourceClaim';

/**
 * ResourceRequirements describes the compute resource requirements.
 * @export
 * @interface V1ResourceRequirements
 */
export interface V1ResourceRequirements {
    /**
     * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
     * 
     * This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
     * 
     * This field is immutable. It can only be set for containers.
     * @type {Array<V1ResourceClaim>}
     * @memberof V1ResourceRequirements
     */
    claims?: Array<V1ResourceClaim>;
    /**
     * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {{ [key: string]: string; }}
     * @memberof V1ResourceRequirements
     */
    limits?: { [key: string]: string; };
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {{ [key: string]: string; }}
     * @memberof V1ResourceRequirements
     */
    requests?: { [key: string]: string; };
}

/**
 * Check if a given object implements the V1ResourceRequirements interface.
 */
export function instanceOfV1ResourceRequirements(value: object): value is V1ResourceRequirements {
    return true;
}

export function V1ResourceRequirementsFromJSON(json: any): V1ResourceRequirements {
    return V1ResourceRequirementsFromJSONTyped(json, false);
}

export function V1ResourceRequirementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceRequirements {
    if (json == null) {
        return json;
    }
    return {
        
        'claims': json['claims'] == null ? undefined : ((json['claims'] as Array<any>).map(V1ResourceClaimFromJSON)),
        'limits': json['limits'] == null ? undefined : json['limits'],
        'requests': json['requests'] == null ? undefined : json['requests'],
    };
}

export function V1ResourceRequirementsToJSON(value?: V1ResourceRequirements | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'claims': value['claims'] == null ? undefined : ((value['claims'] as Array<any>).map(V1ResourceClaimToJSON)),
        'limits': value['limits'],
        'requests': value['requests'],
    };
}

