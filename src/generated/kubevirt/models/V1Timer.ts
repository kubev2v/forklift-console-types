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
import type { V1HPETTimer } from './V1HPETTimer';
import {
    V1HPETTimerFromJSON,
    V1HPETTimerFromJSONTyped,
    V1HPETTimerToJSON,
} from './V1HPETTimer';
import type { V1HypervTimer } from './V1HypervTimer';
import {
    V1HypervTimerFromJSON,
    V1HypervTimerFromJSONTyped,
    V1HypervTimerToJSON,
} from './V1HypervTimer';
import type { V1KVMTimer } from './V1KVMTimer';
import {
    V1KVMTimerFromJSON,
    V1KVMTimerFromJSONTyped,
    V1KVMTimerToJSON,
} from './V1KVMTimer';
import type { V1PITTimer } from './V1PITTimer';
import {
    V1PITTimerFromJSON,
    V1PITTimerFromJSONTyped,
    V1PITTimerToJSON,
} from './V1PITTimer';
import type { V1RTCTimer } from './V1RTCTimer';
import {
    V1RTCTimerFromJSON,
    V1RTCTimerFromJSONTyped,
    V1RTCTimerToJSON,
} from './V1RTCTimer';

/**
 * Represents all available timers in a vmi.
 * @export
 * @interface V1Timer
 */
export interface V1Timer {
    /**
     * 
     * @type {V1HPETTimer}
     * @memberof V1Timer
     */
    hpet?: V1HPETTimer;
    /**
     * 
     * @type {V1HypervTimer}
     * @memberof V1Timer
     */
    hyperv?: V1HypervTimer;
    /**
     * 
     * @type {V1KVMTimer}
     * @memberof V1Timer
     */
    kvm?: V1KVMTimer;
    /**
     * 
     * @type {V1PITTimer}
     * @memberof V1Timer
     */
    pit?: V1PITTimer;
    /**
     * 
     * @type {V1RTCTimer}
     * @memberof V1Timer
     */
    rtc?: V1RTCTimer;
}

/**
 * Check if a given object implements the V1Timer interface.
 */
export function instanceOfV1Timer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1TimerFromJSON(json: any): V1Timer {
    return V1TimerFromJSONTyped(json, false);
}

export function V1TimerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Timer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hpet': !exists(json, 'hpet') ? undefined : V1HPETTimerFromJSON(json['hpet']),
        'hyperv': !exists(json, 'hyperv') ? undefined : V1HypervTimerFromJSON(json['hyperv']),
        'kvm': !exists(json, 'kvm') ? undefined : V1KVMTimerFromJSON(json['kvm']),
        'pit': !exists(json, 'pit') ? undefined : V1PITTimerFromJSON(json['pit']),
        'rtc': !exists(json, 'rtc') ? undefined : V1RTCTimerFromJSON(json['rtc']),
    };
}

export function V1TimerToJSON(value?: V1Timer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hpet': V1HPETTimerToJSON(value.hpet),
        'hyperv': V1HypervTimerToJSON(value.hyperv),
        'kvm': V1KVMTimerToJSON(value.kvm),
        'pit': V1PITTimerToJSON(value.pit),
        'rtc': V1RTCTimerToJSON(value.rtc),
    };
}

