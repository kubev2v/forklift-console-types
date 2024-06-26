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
 * RemoveVolumeOptions is provided when dynamically hot unplugging volume and disk
 * @export
 * @interface V1RemoveVolumeOptions
 */
export interface V1RemoveVolumeOptions {
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type {Array<string>}
     * @memberof V1RemoveVolumeOptions
     */
    dryRun?: Array<string>;
    /**
     * Name represents the name that maps to both the disk and volume that should be removed
     * @type {string}
     * @memberof V1RemoveVolumeOptions
     */
    name: string;
}

/**
 * Check if a given object implements the V1RemoveVolumeOptions interface.
 */
export function instanceOfV1RemoveVolumeOptions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1RemoveVolumeOptionsFromJSON(json: any): V1RemoveVolumeOptions {
    return V1RemoveVolumeOptionsFromJSONTyped(json, false);
}

export function V1RemoveVolumeOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RemoveVolumeOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'dryRun') ? undefined : json['dryRun'],
        'name': json['name'],
    };
}

export function V1RemoveVolumeOptionsToJSON(value?: V1RemoveVolumeOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dryRun': value.dryRun,
        'name': value.name,
    };
}

