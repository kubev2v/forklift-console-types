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

import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../../kubernetes/models/IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { V1beta1ProviderSpec } from './V1beta1ProviderSpec';
import { V1beta1ProviderStatus } from './V1beta1ProviderStatus';

export interface V1beta1Provider {
  /** apiVersion
   * APIVersion defines the versioned schema of this representation of an object.
Servers should convert recognized schemas to the latest internal value, and
may reject unrecognized values.
More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   *
   * @required {true}
   */
  apiVersion: string;
  /** kind
   * Kind is a string value representing the REST resource this object represents.
Servers may infer this from the endpoint the client submits requests to.
Cannot be updated.
In CamelCase.
More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   *
   * @required {true}
   */
  kind: string;
  /** metadata
   *
   * @required {false}
   * @originalType {V1beta1ProviderMetadata}
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** spec
   * Defines the desired state of Provider.
   *
   * @required {false}
   */
  spec?: V1beta1ProviderSpec;
  /** status
   * ProviderStatus defines the observed state of Provider
   *
   * @required {false}
   */
  status?: V1beta1ProviderStatus;
}
