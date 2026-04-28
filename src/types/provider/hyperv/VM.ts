import { Concern, Ref } from '../base/model';

import { TypedHypervResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/hyperv/vm.go

export interface HypervVM extends TypedHypervResource {
  // RevisionValidated int64           `json:"revisionValidated"`
  revisionValidated: number;
  // Disks             []model.Disk    `json:"disks"`
  disks: HypervDisk[];
  // NICs              []model.NIC     `json:"nics"`
  nics: HypervNIC[];
  // Networks          []model.Ref     `json:"networks"`
  networks: Ref[];
  // Concerns          []model.Concern `json:"concerns"`
  concerns: Concern[];
  // UUID          string               `json:"uuid"`
  uuid: string;
  // PowerState    string               `json:"powerState"`
  powerState: string;
  // CpuCount      int32                `json:"cpuCount"`
  cpuCount: number;
  // MemoryMB      int32                `json:"memoryMB"`
  memoryMB: number;
  // Firmware      string               `json:"firmware"`
  firmware: string;
  // GuestOS       string               `json:"guestOS,omitempty"`
  guestOS?: string;
  // TpmEnabled    bool                 `json:"tpmEnabled"`
  tpmEnabled: boolean;
  // SecureBoot    bool                 `json:"secureBoot"`
  secureBoot: boolean;
  // HasCheckpoint bool                 `json:"hasCheckpoint"`
  hasCheckpoint: boolean;
  // GuestNetworks []model.GuestNetwork `json:"guestNetworks"`
  guestNetworks: HypervGuestNetwork[];
}

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/model/hyperv/model.go
export interface HypervDisk {
  // ID from Base
  id: string;
  // Name from Base
  name: string;
  // Revision from Base
  revision: number;
  // WindowsPath string `json:"windowsPath,omitempty"`
  windowsPath?: string;
  // SMBPath    string `json:"smbPath,omitempty"`
  smbPath?: string;
  // Capacity   int64  `json:"capacity"`
  capacity: number;
  // Format     string `json:"format,omitempty"`
  format?: string;
  // RCTEnabled bool   `json:"rctEnabled"`
  rctEnabled: boolean;
  // Datastore  Ref    `json:"datastore"`
  datastore: Ref;
}

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/model/hyperv/model.go
export interface HypervNIC {
  // Name        string `json:"name"`
  name: string;
  // MAC         string `json:"mac"`
  mac: string;
  // DeviceIndex int    `json:"deviceIndex"`
  deviceIndex: number;
  // Network     Ref    `json:"network"`
  network: Ref;
  // NetworkName string `json:"networkName,omitempty"`
  networkName?: string;
}

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/model/hyperv/model.go
export interface HypervGuestNetwork {
  // MAC          string   `json:"mac"`
  mac: string;
  // IP           string   `json:"ip"`
  ip: string;
  // DeviceIndex  int      `json:"deviceIndex"`
  deviceIndex: number;
  // Origin       string   `json:"origin"`
  origin: string;
  // PrefixLength int32    `json:"prefix"`
  prefix: number;
  // DNS          []string `json:"dns"`
  dns: string[];
  // Gateway      string   `json:"gateway"`
  gateway: string;
}
