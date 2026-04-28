import { Concern } from '../base/model';

import { OvaNetwork } from './Network';
import { TypedOvaResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/ovfbase/vm.go
export interface OvaVM extends TypedOvaResource {
  // OvfPath               string          `json:"ovfPath"`
  ovfPath: string;
  // ExportSource          string          `json:"exportSource"`
  exportSource: string;
  // OsType                string          `json:"osType"`
  osType: string;
  // RevisionValidated     int64           `json:"revisionValidated"`
  revisionValidated: number;
  // PolicyVersion         int             `json:"policyVersion"`
  policyVersion: number;
  // UUID                  string          `json:"uuid"`
  uuid: string;
  // Firmware              string          `json:"firmware"`
  firmware: string;
  // SecureBoot            bool            `json:"secureBoot"`
  secureBoot: boolean;
  // CpuAffinity           []int32         `json:"cpuAffinity"`
  cpuAffinity: number[];
  // CpuHotAddEnabled      bool            `json:"cpuHotAddEnabled"`
  cpuHotAddEnabled: boolean;
  // CpuHotRemoveEnabled   bool            `json:"cpuHotRemoveEnabled"`
  cpuHotRemoveEnabled: boolean;
  // MemoryHotAddEnabled   bool            `json:"memoryHotAddEnabled"`
  memoryHotAddEnabled: boolean;
  // FaultToleranceEnabled bool            `json:"faultToleranceEnabled"`
  faultToleranceEnabled: boolean;
  // CpuCount              int32           `json:"cpuCount"`
  cpuCount: number;
  // CoresPerSocket        int32           `json:"coresPerSocket"`
  coresPerSocket: number;
  // MemoryMB              int32           `json:"memoryMB"`
  memoryMB: number;
  // MemoryUnits           string          `json:"memoryUnits"`
  memoryUnits: string;
  // CpuUnits              string          `json:"cpuUnits"`
  cpuUnits: string;
  // BalloonedMemory       int32           `json:"balloonedMemory"`
  balloonedMemory: number;
  // IpAddress             string          `json:"ipAddress"`
  ipAddress: string;
  // NumaNodeAffinity      []string        `json:"numaNodeAffinity"`
  numaNodeAffinity: string[];
  // StorageUsed           int64           `json:"storageUsed"`
  storageUsed: number;
  // ChangeTrackingEnabled bool            `json:"changeTrackingEnabled"`
  changeTrackingEnabled: boolean;
  // Devices               []model.Device  `json:"devices"`
  devices: OvaDevice[];
  // NICs                  []model.NIC     `json:"nics"`
  nics: OvaNIC[];
  // Disks                 []model.Disk    `json:"disks"`
  disks: OvaDisk[];
  // Networks              []model.Network `json:"networks"`
  networks: OvaNetwork[];
  // Concerns              []model.Concern `json:"concerns"`
  concerns: Concern[];
}

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/model/ovf/model.go
export interface OvaDevice {
  kind: string;
}

export interface OvaNICConf {
  key: string;
  value: string;
}

export interface OvaNIC {
  name: string;
  mac: string;
  network: string;
  config: OvaNICConf[];
}

export interface OvaDisk {
  id: string;
  name: string;
  filePath: string;
  capacity: number;
  capacityAllocationUnits: string;
  diskId: string;
  fileRef: string;
  format: string;
  populatedSize: number;
}
