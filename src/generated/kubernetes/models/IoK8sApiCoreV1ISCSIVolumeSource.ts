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
import type { IoK8sApiCoreV1LocalObjectReference } from './IoK8sApiCoreV1LocalObjectReference';
import {
    IoK8sApiCoreV1LocalObjectReferenceFromJSON,
    IoK8sApiCoreV1LocalObjectReferenceFromJSONTyped,
    IoK8sApiCoreV1LocalObjectReferenceToJSON,
} from './IoK8sApiCoreV1LocalObjectReference';

/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1ISCSIVolumeSource
 */
export interface IoK8sApiCoreV1ISCSIVolumeSource {
    /**
     * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
     * @type {boolean}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    chapAuthDiscovery?: boolean;
    /**
     * chapAuthSession defines whether support iSCSI Session CHAP authentication
     * @type {boolean}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    chapAuthSession?: boolean;
    /**
     * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
     * @type {string}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    fsType?: string;
    /**
     * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
     * @type {string}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    initiatorName?: string;
    /**
     * iqn is the target iSCSI Qualified Name.
     * @type {string}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    iqn: string;
    /**
     * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
     * @type {string}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    iscsiInterface?: string;
    /**
     * lun represents iSCSI Target Lun number.
     * @type {number}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    lun: number;
    /**
     * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    portals?: string[];
    /**
     * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {IoK8sApiCoreV1LocalObjectReference}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    secretRef?: IoK8sApiCoreV1LocalObjectReference;
    /**
     * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {string}
     * @memberof IoK8sApiCoreV1ISCSIVolumeSource
     */
    targetPortal: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ISCSIVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1ISCSIVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iqn" in value;
    isInstance = isInstance && "lun" in value;
    isInstance = isInstance && "targetPortal" in value;

    return isInstance;
}

export function IoK8sApiCoreV1ISCSIVolumeSourceFromJSON(json: any): IoK8sApiCoreV1ISCSIVolumeSource {
    return IoK8sApiCoreV1ISCSIVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ISCSIVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ISCSIVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chapAuthDiscovery': !exists(json, 'chapAuthDiscovery') ? undefined : json['chapAuthDiscovery'],
        'chapAuthSession': !exists(json, 'chapAuthSession') ? undefined : json['chapAuthSession'],
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'initiatorName': !exists(json, 'initiatorName') ? undefined : json['initiatorName'],
        'iqn': json['iqn'],
        'iscsiInterface': !exists(json, 'iscsiInterface') ? undefined : json['iscsiInterface'],
        'lun': json['lun'],
        'portals': !exists(json, 'portals') ? undefined : json['portals'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : IoK8sApiCoreV1LocalObjectReferenceFromJSON(json['secretRef']),
        'targetPortal': json['targetPortal'],
    };
}

export function IoK8sApiCoreV1ISCSIVolumeSourceToJSON(value?: IoK8sApiCoreV1ISCSIVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chapAuthDiscovery': value.chapAuthDiscovery,
        'chapAuthSession': value.chapAuthSession,
        'fsType': value.fsType,
        'initiatorName': value.initiatorName,
        'iqn': value.iqn,
        'iscsiInterface': value.iscsiInterface,
        'lun': value.lun,
        'portals': value.portals,
        'readOnly': value.readOnly,
        'secretRef': IoK8sApiCoreV1LocalObjectReferenceToJSON(value.secretRef),
        'targetPortal': value.targetPortal,
    };
}

