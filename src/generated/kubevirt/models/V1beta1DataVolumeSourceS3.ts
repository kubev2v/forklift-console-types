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
 * DataVolumeSourceS3 provides the parameters to create a Data Volume from an S3 source
 * @export
 * @interface V1beta1DataVolumeSourceS3
 */
export interface V1beta1DataVolumeSourceS3 {
    /**
     * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
     * @type {string}
     * @memberof V1beta1DataVolumeSourceS3
     */
    certConfigMap?: string;
    /**
     * SecretRef provides the secret reference needed to access the S3 source
     * @type {string}
     * @memberof V1beta1DataVolumeSourceS3
     */
    secretRef?: string;
    /**
     * URL is the url of the S3 source
     * @type {string}
     * @memberof V1beta1DataVolumeSourceS3
     */
    url: string;
}

/**
 * Check if a given object implements the V1beta1DataVolumeSourceS3 interface.
 */
export function instanceOfV1beta1DataVolumeSourceS3(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function V1beta1DataVolumeSourceS3FromJSON(json: any): V1beta1DataVolumeSourceS3 {
    return V1beta1DataVolumeSourceS3FromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceS3FromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourceS3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'certConfigMap': !exists(json, 'certConfigMap') ? undefined : json['certConfigMap'],
        'secretRef': !exists(json, 'secretRef') ? undefined : json['secretRef'],
        'url': json['url'],
    };
}

export function V1beta1DataVolumeSourceS3ToJSON(value?: V1beta1DataVolumeSourceS3 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'certConfigMap': value.certConfigMap,
        'secretRef': value.secretRef,
        'url': value.url,
    };
}

