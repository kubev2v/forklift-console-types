/**
 * 
 * 
 *
 * The version of the OpenAPI document: 
 * Contact Email: 
 * License: 
 *
 * NOTE: This file is auto generated by crdtotypes (https://github.com/yaacov/crdtoapi/).
 * https://github.com/yaacov/crdtoapi/README.crdtotypes
 */

import { V1beta1PlanSpecTargetAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector } from './V1beta1PlanSpecTargetAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector';
import { V1beta1PlanSpecTargetAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector } from './V1beta1PlanSpecTargetAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector';

/**
 * Defines a set of pods (namely those matching the labelSelector
relative to the given namespace(s)) that this pod should be
co-located (affinity) or not co-located (anti-affinity) with,
where co-located is defined as running on a node whose value of
the label with key &lt;topologyKey&gt; matches that of any node on which
a pod of the set of pods is running
 *
 * @export
 */
export interface V1beta1PlanSpecTargetAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** labelSelector
   * A label query over a set of resources, in this case pods.
If it's null, this PodAffinityTerm matches with no Pods.
   *
   * @required {false}
   */
  labelSelector?: V1beta1PlanSpecTargetAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /** matchLabelKeys
   *
   * @required {false}
   */
  matchLabelKeys?: string[];
  /** mismatchLabelKeys
   *
   * @required {false}
   */
  mismatchLabelKeys?: string[];
  /** namespaceSelector
   * A label query over the set of namespaces that the term applies to.
The term is applied to the union of the namespaces selected by this field
and the ones listed in the namespaces field.
null selector and null or empty namespaces list means "this pod's namespace".
An empty selector ({}) matches all namespaces.
   *
   * @required {false}
   */
  namespaceSelector?: V1beta1PlanSpecTargetAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /** namespaces
   *
   * @required {false}
   */
  namespaces?: string[];
  /** topologyKey
   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
the labelSelector in the specified namespaces, where co-located is defined as running on a node
whose value of the label with key topologyKey matches that of any node on which any of the
selected pods is running.
Empty topologyKey is not allowed.
   *
   * @required {true}
   */
  topologyKey: string;
}
