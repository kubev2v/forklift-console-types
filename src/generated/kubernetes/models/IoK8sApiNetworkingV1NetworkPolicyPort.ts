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
/**
 * NetworkPolicyPort describes a port to allow traffic on
 * @export
 * @interface IoK8sApiNetworkingV1NetworkPolicyPort
 */
export interface IoK8sApiNetworkingV1NetworkPolicyPort {
    /**
     * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
     * @type {number}
     * @memberof IoK8sApiNetworkingV1NetworkPolicyPort
     */
    endPort?: number;
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1NetworkPolicyPort
     */
    port?: string;
    /**
     * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1NetworkPolicyPort
     */
    protocol?: string;
}

/**
 * Check if a given object implements the IoK8sApiNetworkingV1NetworkPolicyPort interface.
 */
export function instanceOfIoK8sApiNetworkingV1NetworkPolicyPort(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiNetworkingV1NetworkPolicyPortFromJSON(json: any): IoK8sApiNetworkingV1NetworkPolicyPort {
    return IoK8sApiNetworkingV1NetworkPolicyPortFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1NetworkPolicyPortFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1NetworkPolicyPort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endPort': !exists(json, 'endPort') ? undefined : json['endPort'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
    };
}

export function IoK8sApiNetworkingV1NetworkPolicyPortToJSON(value?: IoK8sApiNetworkingV1NetworkPolicyPort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endPort': value.endPort,
        'port': value.port,
        'protocol': value.protocol,
    };
}

