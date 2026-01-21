import { Concern } from '../base/model';

import { HypervNetwork } from './Network';
import { TypedHypervResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/hyperv/vm.go
export interface HypervVM extends TypedHypervResource {
  path: string;
  revisionValidated: number;
  policyVersion: number;
  uuid: string;
  firmware: string;
  cpuAffinity: number[];
  cpuHotAddEnabled: boolean;
  cpuHotRemoveEnabled: boolean;
  memoryHotAddEnabled: boolean;
  faultToleranceEnabled: boolean;
  cpuCount: number;
  coresPerSocket: number;
  memoryMB: number;
  balloonedMemory: number;
  ipAddress: string;
  numaNodeAffinity: string[];
  storageUsed: number;
  changeTrackingEnabled: boolean;
  devices: HypervDevice[];
  nics: HypervNic[];
  disks: HypervDisk[];
  networks: HypervNetwork[];
  concerns: Concern[];
}

export interface HypervDevice {
  kind: string;
}

export interface HypervNicConf {
  key: string;
  value: string;
}

export interface HypervNic {
  name: string;
  mac: string;
  config: HypervNicConf[];
}

export interface HypervDisk {
  capacity: string;
  capacityAllocationUnits: string;
  diskId: string;
  fileRef: string;
  format: string;
  populatedSize: string;
}
