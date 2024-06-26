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
import type { IoK8sApiAdmissionregistrationV1ServiceReference } from './IoK8sApiAdmissionregistrationV1ServiceReference';
import {
    IoK8sApiAdmissionregistrationV1ServiceReferenceFromJSON,
    IoK8sApiAdmissionregistrationV1ServiceReferenceFromJSONTyped,
    IoK8sApiAdmissionregistrationV1ServiceReferenceToJSON,
} from './IoK8sApiAdmissionregistrationV1ServiceReference';

/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook
 * @export
 * @interface IoK8sApiAdmissionregistrationV1WebhookClientConfig
 */
export interface IoK8sApiAdmissionregistrationV1WebhookClientConfig {
    /**
     * `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1WebhookClientConfig
     */
    caBundle?: string;
    /**
     * 
     * @type {IoK8sApiAdmissionregistrationV1ServiceReference}
     * @memberof IoK8sApiAdmissionregistrationV1WebhookClientConfig
     */
    service?: IoK8sApiAdmissionregistrationV1ServiceReference;
    /**
     * `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
     * 
     * The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
     * 
     * Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
     * 
     * The scheme must be "https"; the URL must begin with "https://".
     * 
     * A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
     * 
     * Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1WebhookClientConfig
     */
    url?: string;
}

/**
 * Check if a given object implements the IoK8sApiAdmissionregistrationV1WebhookClientConfig interface.
 */
export function instanceOfIoK8sApiAdmissionregistrationV1WebhookClientConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAdmissionregistrationV1WebhookClientConfigFromJSON(json: any): IoK8sApiAdmissionregistrationV1WebhookClientConfig {
    return IoK8sApiAdmissionregistrationV1WebhookClientConfigFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1WebhookClientConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1WebhookClientConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caBundle': !exists(json, 'caBundle') ? undefined : json['caBundle'],
        'service': !exists(json, 'service') ? undefined : IoK8sApiAdmissionregistrationV1ServiceReferenceFromJSON(json['service']),
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function IoK8sApiAdmissionregistrationV1WebhookClientConfigToJSON(value?: IoK8sApiAdmissionregistrationV1WebhookClientConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caBundle': value.caBundle,
        'service': IoK8sApiAdmissionregistrationV1ServiceReferenceToJSON(value.service),
        'url': value.url,
    };
}

