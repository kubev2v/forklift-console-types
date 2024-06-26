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
 * NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule
 */
export interface IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule {
    /**
     * `nonResourceURLs` is a set of url prefixes that a user should have access to and may not be empty. For example:
     *   - "/healthz" is legal
     *   - "/hea*" is illegal
     *   - "/hea" is legal but matches nothing
     *   - "/hea/*" also matches nothing
     *   - "/healthz/*" matches all per-component health checks.
     * "*" matches all non-resource urls. if it is present, it must be the only entry. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule
     */
    nonResourceURLs: string[];
    /**
     * `verbs` is a list of matching verbs and may not be empty. "*" matches all verbs. If it is present, it must be the only entry. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule
     */
    verbs: string[];
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1beta3NonResourcePolicyRule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nonResourceURLs" in value;
    isInstance = isInstance && "verbs" in value;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleFromJSON(json: any): IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule {
    return IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonResourceURLs': json['nonResourceURLs'],
        'verbs': json['verbs'],
    };
}

export function IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleToJSON(value?: IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonResourceURLs': value.nonResourceURLs,
        'verbs': value.verbs,
    };
}

