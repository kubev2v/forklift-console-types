/** Unified file containing typed provider virtual machines */

import { HypervVM, NutanixVM, OpenshiftVM, OpenstackVM, OvaVM, OVirtVM, VSphereVM } from './provider';

/**
 * General provider virtual machine inventory
 */
export type ProviderVirtualMachine =
  | OpenshiftVM
  | OVirtVM
  | VSphereVM
  | OpenstackVM
  | OvaVM
  | HypervVM
  | NutanixVM;
