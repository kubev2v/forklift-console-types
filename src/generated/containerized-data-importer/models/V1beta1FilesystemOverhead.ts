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
/**
 * FilesystemOverhead defines the reserved size for PVCs with VolumeMode: Filesystem
 * @export
 * @interface V1beta1FilesystemOverhead
 */
export interface V1beta1FilesystemOverhead {
    /**
     * Global is how much space of a Filesystem volume should be reserved for overhead. This value is used unless overridden by a more specific value (per storageClass)
     * @type {string}
     * @memberof V1beta1FilesystemOverhead
     */
    global?: string;
    /**
     * StorageClass specifies how much space of a Filesystem volume should be reserved for safety. The keys are the storageClass and the values are the overhead. This value overrides the global value
     * @type {{ [key: string]: string; }}
     * @memberof V1beta1FilesystemOverhead
     */
    storageClass?: { [key: string]: string; };
}

/**
 * Check if a given object implements the V1beta1FilesystemOverhead interface.
 */
export function instanceOfV1beta1FilesystemOverhead(value: object): value is V1beta1FilesystemOverhead {
    return true;
}

export function V1beta1FilesystemOverheadFromJSON(json: any): V1beta1FilesystemOverhead {
    return V1beta1FilesystemOverheadFromJSONTyped(json, false);
}

export function V1beta1FilesystemOverheadFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1FilesystemOverhead {
    if (json == null) {
        return json;
    }
    return {
        
        'global': json['global'] == null ? undefined : json['global'],
        'storageClass': json['storageClass'] == null ? undefined : json['storageClass'],
    };
}

export function V1beta1FilesystemOverheadToJSON(value?: V1beta1FilesystemOverhead | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'global': value['global'],
        'storageClass': value['storageClass'],
    };
}

