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
import type { V1BlockSize } from './V1BlockSize';
import {
    V1BlockSizeFromJSON,
    V1BlockSizeFromJSONTyped,
    V1BlockSizeToJSON,
} from './V1BlockSize';
import type { V1CDRomTarget } from './V1CDRomTarget';
import {
    V1CDRomTargetFromJSON,
    V1CDRomTargetFromJSONTyped,
    V1CDRomTargetToJSON,
} from './V1CDRomTarget';
import type { V1DiskTarget } from './V1DiskTarget';
import {
    V1DiskTargetFromJSON,
    V1DiskTargetFromJSONTyped,
    V1DiskTargetToJSON,
} from './V1DiskTarget';
import type { V1LunTarget } from './V1LunTarget';
import {
    V1LunTargetFromJSON,
    V1LunTargetFromJSONTyped,
    V1LunTargetToJSON,
} from './V1LunTarget';

/**
 * 
 * @export
 * @interface V1Disk
 */
export interface V1Disk {
    /**
     * 
     * @type {V1BlockSize}
     * @memberof V1Disk
     */
    blockSize?: V1BlockSize;
    /**
     * BootOrder is an integer value > 0, used to determine ordering of boot devices. Lower values take precedence. Each disk or interface that has a boot order must have a unique value. Disks without a boot order are not tried if a disk with a boot order exists.
     * @type {number}
     * @memberof V1Disk
     */
    bootOrder?: number;
    /**
     * Cache specifies which kvm disk cache mode should be used. Supported values are: CacheNone, CacheWriteThrough.
     * @type {string}
     * @memberof V1Disk
     */
    cache?: string;
    /**
     * 
     * @type {V1CDRomTarget}
     * @memberof V1Disk
     */
    cdrom?: V1CDRomTarget;
    /**
     * dedicatedIOThread indicates this disk should have an exclusive IO Thread. Enabling this implies useIOThreads = true. Defaults to false.
     * @type {boolean}
     * @memberof V1Disk
     */
    dedicatedIOThread?: boolean;
    /**
     * 
     * @type {V1DiskTarget}
     * @memberof V1Disk
     */
    disk?: V1DiskTarget;
    /**
     * If specified, it can change the default error policy (stop) for the disk
     * @type {string}
     * @memberof V1Disk
     */
    errorPolicy?: string;
    /**
     * IO specifies which QEMU disk IO mode should be used. Supported values are: native, default, threads.
     * @type {string}
     * @memberof V1Disk
     */
    io?: string;
    /**
     * 
     * @type {V1LunTarget}
     * @memberof V1Disk
     */
    lun?: V1LunTarget;
    /**
     * Name is the device name
     * @type {string}
     * @memberof V1Disk
     */
    name: string;
    /**
     * Serial provides the ability to specify a serial number for the disk device.
     * @type {string}
     * @memberof V1Disk
     */
    serial?: string;
    /**
     * If specified the disk is made sharable and multiple write from different VMs are permitted
     * @type {boolean}
     * @memberof V1Disk
     */
    shareable?: boolean;
    /**
     * If specified, disk address and its tag will be provided to the guest via config drive metadata
     * @type {string}
     * @memberof V1Disk
     */
    tag?: string;
}

/**
 * Check if a given object implements the V1Disk interface.
 */
export function instanceOfV1Disk(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1DiskFromJSON(json: any): V1Disk {
    return V1DiskFromJSONTyped(json, false);
}

export function V1DiskFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Disk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockSize': !exists(json, 'blockSize') ? undefined : V1BlockSizeFromJSON(json['blockSize']),
        'bootOrder': !exists(json, 'bootOrder') ? undefined : json['bootOrder'],
        'cache': !exists(json, 'cache') ? undefined : json['cache'],
        'cdrom': !exists(json, 'cdrom') ? undefined : V1CDRomTargetFromJSON(json['cdrom']),
        'dedicatedIOThread': !exists(json, 'dedicatedIOThread') ? undefined : json['dedicatedIOThread'],
        'disk': !exists(json, 'disk') ? undefined : V1DiskTargetFromJSON(json['disk']),
        'errorPolicy': !exists(json, 'errorPolicy') ? undefined : json['errorPolicy'],
        'io': !exists(json, 'io') ? undefined : json['io'],
        'lun': !exists(json, 'lun') ? undefined : V1LunTargetFromJSON(json['lun']),
        'name': json['name'],
        'serial': !exists(json, 'serial') ? undefined : json['serial'],
        'shareable': !exists(json, 'shareable') ? undefined : json['shareable'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
    };
}

export function V1DiskToJSON(value?: V1Disk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockSize': V1BlockSizeToJSON(value.blockSize),
        'bootOrder': value.bootOrder,
        'cache': value.cache,
        'cdrom': V1CDRomTargetToJSON(value.cdrom),
        'dedicatedIOThread': value.dedicatedIOThread,
        'disk': V1DiskTargetToJSON(value.disk),
        'errorPolicy': value.errorPolicy,
        'io': value.io,
        'lun': V1LunTargetToJSON(value.lun),
        'name': value.name,
        'serial': value.serial,
        'shareable': value.shareable,
        'tag': value.tag,
    };
}

