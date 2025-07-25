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

import { V1beta1NetworkMapStatusConditions } from './V1beta1NetworkMapStatusConditions';
import { V1beta1NetworkMapStatusReferences } from './V1beta1NetworkMapStatusReferences';

/**
 * MapStatus defines the observed state of Maps.
 *
 * @export
 */
export interface V1beta1NetworkMapStatus {
  /** conditions
   * Condition
   *
   * @required {false}
   */
  conditions?: V1beta1NetworkMapStatusConditions[];
  /** observedGeneration
   * The most recent generation observed by the controller.
   *
   * @required {false}
   * @format {int64}
   * @originalType {integer}
   */
  observedGeneration?: number;
  /** references
   * Source reference.
Either the ID or Name must be specified.
   *
   * @required {false}
   */
  references?: V1beta1NetworkMapStatusReferences[];
}
