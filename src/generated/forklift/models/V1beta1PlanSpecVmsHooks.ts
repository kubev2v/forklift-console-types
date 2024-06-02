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

import { V1beta1PlanSpecVmsHooksHook } from './V1beta1PlanSpecVmsHooksHook';

/**
 * Plan hook.
 *
 * @export
 */
export interface V1beta1PlanSpecVmsHooks {
  /** hook
   * Hook reference.
   *
   * @required {true}
   */
  hook: V1beta1PlanSpecVmsHooksHook;
  /** step
   * Pipeline step.
   *
   * @required {true}
   */
  step: string;
}
