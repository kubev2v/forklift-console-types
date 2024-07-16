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
import type { V1beta1DataVolumeSourcePVC } from './V1beta1DataVolumeSourcePVC';
import {
    V1beta1DataVolumeSourcePVCFromJSON,
    V1beta1DataVolumeSourcePVCFromJSONTyped,
    V1beta1DataVolumeSourcePVCToJSON,
} from './V1beta1DataVolumeSourcePVC';
import type { V1beta1DataVolumeSourceRegistry } from './V1beta1DataVolumeSourceRegistry';
import {
    V1beta1DataVolumeSourceRegistryFromJSON,
    V1beta1DataVolumeSourceRegistryFromJSONTyped,
    V1beta1DataVolumeSourceRegistryToJSON,
} from './V1beta1DataVolumeSourceRegistry';
import type { V1beta1DataVolumeSourceImageIO } from './V1beta1DataVolumeSourceImageIO';
import {
    V1beta1DataVolumeSourceImageIOFromJSON,
    V1beta1DataVolumeSourceImageIOFromJSONTyped,
    V1beta1DataVolumeSourceImageIOToJSON,
} from './V1beta1DataVolumeSourceImageIO';
import type { V1beta1DataVolumeSourceVDDK } from './V1beta1DataVolumeSourceVDDK';
import {
    V1beta1DataVolumeSourceVDDKFromJSON,
    V1beta1DataVolumeSourceVDDKFromJSONTyped,
    V1beta1DataVolumeSourceVDDKToJSON,
} from './V1beta1DataVolumeSourceVDDK';
import type { V1beta1DataVolumeSourceGCS } from './V1beta1DataVolumeSourceGCS';
import {
    V1beta1DataVolumeSourceGCSFromJSON,
    V1beta1DataVolumeSourceGCSFromJSONTyped,
    V1beta1DataVolumeSourceGCSToJSON,
} from './V1beta1DataVolumeSourceGCS';
import type { V1beta1DataVolumeSourceHTTP } from './V1beta1DataVolumeSourceHTTP';
import {
    V1beta1DataVolumeSourceHTTPFromJSON,
    V1beta1DataVolumeSourceHTTPFromJSONTyped,
    V1beta1DataVolumeSourceHTTPToJSON,
} from './V1beta1DataVolumeSourceHTTP';
import type { V1beta1DataVolumeSourceS3 } from './V1beta1DataVolumeSourceS3';
import {
    V1beta1DataVolumeSourceS3FromJSON,
    V1beta1DataVolumeSourceS3FromJSONTyped,
    V1beta1DataVolumeSourceS3ToJSON,
} from './V1beta1DataVolumeSourceS3';
import type { V1beta1DataVolumeSourceSnapshot } from './V1beta1DataVolumeSourceSnapshot';
import {
    V1beta1DataVolumeSourceSnapshotFromJSON,
    V1beta1DataVolumeSourceSnapshotFromJSONTyped,
    V1beta1DataVolumeSourceSnapshotToJSON,
} from './V1beta1DataVolumeSourceSnapshot';

/**
 * DataVolumeSource represents the source for our Data Volume, this can be HTTP, Imageio, S3, GCS, Registry or an existing PVC
 * @export
 * @interface V1beta1DataVolumeSource
 */
export interface V1beta1DataVolumeSource {
    /**
     * DataVolumeBlankImage provides the parameters to create a new raw blank image for the PVC
     * @type {object}
     * @memberof V1beta1DataVolumeSource
     */
    blank?: object;
    /**
     * 
     * @type {V1beta1DataVolumeSourceGCS}
     * @memberof V1beta1DataVolumeSource
     */
    gcs?: V1beta1DataVolumeSourceGCS;
    /**
     * 
     * @type {V1beta1DataVolumeSourceHTTP}
     * @memberof V1beta1DataVolumeSource
     */
    http?: V1beta1DataVolumeSourceHTTP;
    /**
     * 
     * @type {V1beta1DataVolumeSourceImageIO}
     * @memberof V1beta1DataVolumeSource
     */
    imageio?: V1beta1DataVolumeSourceImageIO;
    /**
     * 
     * @type {V1beta1DataVolumeSourcePVC}
     * @memberof V1beta1DataVolumeSource
     */
    pvc?: V1beta1DataVolumeSourcePVC;
    /**
     * 
     * @type {V1beta1DataVolumeSourceRegistry}
     * @memberof V1beta1DataVolumeSource
     */
    registry?: V1beta1DataVolumeSourceRegistry;
    /**
     * 
     * @type {V1beta1DataVolumeSourceS3}
     * @memberof V1beta1DataVolumeSource
     */
    s3?: V1beta1DataVolumeSourceS3;
    /**
     * 
     * @type {V1beta1DataVolumeSourceSnapshot}
     * @memberof V1beta1DataVolumeSource
     */
    snapshot?: V1beta1DataVolumeSourceSnapshot;
    /**
     * DataVolumeSourceUpload provides the parameters to create a Data Volume by uploading the source
     * @type {object}
     * @memberof V1beta1DataVolumeSource
     */
    upload?: object;
    /**
     * 
     * @type {V1beta1DataVolumeSourceVDDK}
     * @memberof V1beta1DataVolumeSource
     */
    vddk?: V1beta1DataVolumeSourceVDDK;
}

/**
 * Check if a given object implements the V1beta1DataVolumeSource interface.
 */
export function instanceOfV1beta1DataVolumeSource(value: object): value is V1beta1DataVolumeSource {
    return true;
}

export function V1beta1DataVolumeSourceFromJSON(json: any): V1beta1DataVolumeSource {
    return V1beta1DataVolumeSourceFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'blank': json['blank'] == null ? undefined : json['blank'],
        'gcs': json['gcs'] == null ? undefined : V1beta1DataVolumeSourceGCSFromJSON(json['gcs']),
        'http': json['http'] == null ? undefined : V1beta1DataVolumeSourceHTTPFromJSON(json['http']),
        'imageio': json['imageio'] == null ? undefined : V1beta1DataVolumeSourceImageIOFromJSON(json['imageio']),
        'pvc': json['pvc'] == null ? undefined : V1beta1DataVolumeSourcePVCFromJSON(json['pvc']),
        'registry': json['registry'] == null ? undefined : V1beta1DataVolumeSourceRegistryFromJSON(json['registry']),
        's3': json['s3'] == null ? undefined : V1beta1DataVolumeSourceS3FromJSON(json['s3']),
        'snapshot': json['snapshot'] == null ? undefined : V1beta1DataVolumeSourceSnapshotFromJSON(json['snapshot']),
        'upload': json['upload'] == null ? undefined : json['upload'],
        'vddk': json['vddk'] == null ? undefined : V1beta1DataVolumeSourceVDDKFromJSON(json['vddk']),
    };
}

export function V1beta1DataVolumeSourceToJSON(value?: V1beta1DataVolumeSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'blank': value['blank'],
        'gcs': V1beta1DataVolumeSourceGCSToJSON(value['gcs']),
        'http': V1beta1DataVolumeSourceHTTPToJSON(value['http']),
        'imageio': V1beta1DataVolumeSourceImageIOToJSON(value['imageio']),
        'pvc': V1beta1DataVolumeSourcePVCToJSON(value['pvc']),
        'registry': V1beta1DataVolumeSourceRegistryToJSON(value['registry']),
        's3': V1beta1DataVolumeSourceS3ToJSON(value['s3']),
        'snapshot': V1beta1DataVolumeSourceSnapshotToJSON(value['snapshot']),
        'upload': value['upload'],
        'vddk': V1beta1DataVolumeSourceVDDKToJSON(value['vddk']),
    };
}

