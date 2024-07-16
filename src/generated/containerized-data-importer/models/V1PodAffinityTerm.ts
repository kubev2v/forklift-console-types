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
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';

/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 * @export
 * @interface V1PodAffinityTerm
 */
export interface V1PodAffinityTerm {
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1PodAffinityTerm
     */
    labelSelector?: V1LabelSelector;
    /**
     * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
     * @type {Array<string>}
     * @memberof V1PodAffinityTerm
     */
    matchLabelKeys?: Array<string>;
    /**
     * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
     * @type {Array<string>}
     * @memberof V1PodAffinityTerm
     */
    mismatchLabelKeys?: Array<string>;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1PodAffinityTerm
     */
    namespaceSelector?: V1LabelSelector;
    /**
     * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
     * @type {Array<string>}
     * @memberof V1PodAffinityTerm
     */
    namespaces?: Array<string>;
    /**
     * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
     * @type {string}
     * @memberof V1PodAffinityTerm
     */
    topologyKey: string;
}

/**
 * Check if a given object implements the V1PodAffinityTerm interface.
 */
export function instanceOfV1PodAffinityTerm(value: object): value is V1PodAffinityTerm {
    if (!('topologyKey' in value) || value['topologyKey'] === undefined) return false;
    return true;
}

export function V1PodAffinityTermFromJSON(json: any): V1PodAffinityTerm {
    return V1PodAffinityTermFromJSONTyped(json, false);
}

export function V1PodAffinityTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodAffinityTerm {
    if (json == null) {
        return json;
    }
    return {
        
        'labelSelector': json['labelSelector'] == null ? undefined : V1LabelSelectorFromJSON(json['labelSelector']),
        'matchLabelKeys': json['matchLabelKeys'] == null ? undefined : json['matchLabelKeys'],
        'mismatchLabelKeys': json['mismatchLabelKeys'] == null ? undefined : json['mismatchLabelKeys'],
        'namespaceSelector': json['namespaceSelector'] == null ? undefined : V1LabelSelectorFromJSON(json['namespaceSelector']),
        'namespaces': json['namespaces'] == null ? undefined : json['namespaces'],
        'topologyKey': json['topologyKey'],
    };
}

export function V1PodAffinityTermToJSON(value?: V1PodAffinityTerm | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'labelSelector': V1LabelSelectorToJSON(value['labelSelector']),
        'matchLabelKeys': value['matchLabelKeys'],
        'mismatchLabelKeys': value['mismatchLabelKeys'],
        'namespaceSelector': V1LabelSelectorToJSON(value['namespaceSelector']),
        'namespaces': value['namespaces'],
        'topologyKey': value['topologyKey'],
    };
}

