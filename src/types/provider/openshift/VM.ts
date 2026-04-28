import { V1VirtualMachine, V1VirtualMachineInstance } from '../../../generated';

import { TypedOpenshiftResource } from './TypedResource';

// https://github.com/kubev2v/forklift/blob/main/pkg/controller/provider/web/ocp/vm.go
export interface OpenshiftVM extends TypedOpenshiftResource {
  // Object   cnv.VirtualMachine          `json:"object"`
  object: V1VirtualMachine;
  // Instance *cnv.VirtualMachineInstance `json:"instance,omitempty"`
  instance?: V1VirtualMachineInstance;
}
