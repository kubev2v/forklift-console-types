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

import { V1beta1MigrationStatusVmsConditions } from './V1beta1MigrationStatusVmsConditions';
import { V1beta1MigrationStatusVmsError } from './V1beta1MigrationStatusVmsError';
import { V1beta1MigrationStatusVmsHooks } from './V1beta1MigrationStatusVmsHooks';
import { V1beta1MigrationStatusVmsLuks } from './V1beta1MigrationStatusVmsLuks';
import { V1beta1MigrationStatusVmsPipeline } from './V1beta1MigrationStatusVmsPipeline';
import { V1beta1MigrationStatusVmsWarm } from './V1beta1MigrationStatusVmsWarm';

/**
 * VM Status
 *
 * @export
 */
export interface V1beta1MigrationStatusVms {
  /** completed
   * Completed timestamp.
   *
   * @required {false}
   * @format {date-time}
   */
  completed?: string;
  /** conditions
   * Condition
   *
   * @required {false}
   */
  conditions?: V1beta1MigrationStatusVmsConditions[];
  /** error
   * Errors
   *
   * @required {false}
   */
  error?: V1beta1MigrationStatusVmsError;
  /** firmware
   * The firmware type detected from the OVF file produced by virt-v2v.
   *
   * @required {false}
   */
  firmware?: string;
  /** hooks
   * Plan hook.
   *
   * @required {false}
   */
  hooks?: V1beta1MigrationStatusVmsHooks[];
  /** id
   * The object ID. vsphere: The managed object ID.
   *
   * @required {false}
   */
  id?: string;
  /** luks
   * Disk decryption LUKS keys
   *
   * @required {false}
   */
  luks?: V1beta1MigrationStatusVmsLuks;
  /** name
   * An object Name. vsphere: A qualified name.
   *
   * @required {false}
   */
  name?: string;
  /** namespace
   * The VM Namespace Only relevant for an openshift source.
   *
   * @required {false}
   */
  namespace?: string;
  /** phase
   * Phase
   *
   * @required {true}
   */
  phase: string;
  /** pipeline
   * Pipeline step.
   *
   * @required {true}
   */
  pipeline: V1beta1MigrationStatusVmsPipeline[];
  /** restorePowerState
   * Source VM power state before migration.
   *
   * @required {false}
   */
  restorePowerState?: string;
  /** started
   * Started timestamp.
   *
   * @required {false}
   * @format {date-time}
   */
  started?: string;
  /** type
   * Type used to qualify the name.
   *
   * @required {false}
   */
  type?: string;
  /** warm
   * Warm migration status
   *
   * @required {false}
   */
  warm?: V1beta1MigrationStatusVmsWarm;
}
