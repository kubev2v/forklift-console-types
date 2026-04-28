import { Ref } from '../base/model';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/model/vsphere/model.go
export interface VSphereDVSHost {
  // Host Ref
  host: Ref;
  // PNIC []string
  pnic: string[];
}

// Virtual Disk.
export interface VSphereDisk {
  // Key                   int32  `json:"key"`
  key: number;
  // UnitNumber            int32  `json:"unitNumber"`
  unitNumber: number;
  // ControllerKey         int32  `json:"controllerKey"`
  controllerKey: number;
  // File                  string `json:"file"`
  file: string;
  // Datastore             Ref    `json:"datastore"`
  datastore: Ref;
  // Capacity              int64  `json:"capacity"`
  capacity: number;
  // Shared                bool   `json:"shared"`
  shared: boolean;
  // RDM                   bool   `json:"rdm"`
  rdm: boolean;
  // Bus                   string `json:"bus"`
  bus: string;
  // Mode                  string `json:"mode,omitempty"`
  mode?: string;
  // Serial                string `json:"serial,omitempty"`
  serial?: string;
  // WinDriveLetter        string `json:"winDriveLetter,omitempty"`
  winDriveLetter?: string;
  // ChangeTrackingEnabled bool   `json:"changeTrackingEnabled"`
  changeTrackingEnabled: boolean;
  // ParentFile            string `json:"parent"`
  parent: string;
}

// Virtual Device.
export interface VSphereDevice {
  // Kind string `json:"kind"`
  kind: string;
}

// Virtual ethernet card.
export interface VSphereNIC {
  // Network   Ref    `json:"network"`
  network: Ref;
  // MAC       string `json:"mac"`
  mac: string;
  // Index     int    `json:"order"`
  order: number;
  // DeviceKey int32  `json:"deviceKey"`
  deviceKey: number;
}

// Guest network.
export interface VSphereGuestNetwork {
  // Device         string   `json:"device"`
  device: string;
  // DeviceConfigId int32    `json:"deviceConfigId"`
  deviceConfigId: number;
  // MAC            string   `json:"mac"`
  mac: string;
  // IP             string   `json:"ip"`
  ip: string;
  // Origin         string   `json:"origin"`
  origin: string;
  // PrefixLength   int32    `json:"prefix"`
  prefix: number;
  // DNS            []string `json:"dns"`
  dns: string[];
  // Network        string   `json:"network"`
  network: string;
}

// Guest ipStack
export interface VSphereGuestIpStack {
  // Device       string   `json:"device"`
  device: string;
  // Gateway      string   `json:"gateway"`
  gateway: string;
  // Network      string   `json:"network"`
  network: string;
  // PrefixLength int32    `json:"prefix"`
  prefix: number;
  // DNS          []string `json:"dns"`
  dns: string[];
}

// Guest disk.
export interface VSphereDiskMountPoint {
  // Key int32 `json:"key"`
  key: number;
  // DiskPath string `json:"diskPath,omitempty"`
  diskPath?: string;
  // Capacity int64 `json:"capacity,omitempty"`
  capacity?: number;
  // FreeSpace int64 `json:"freeSpace,omitempty"`
  freeSpace?: number;
  // FilesystemType string `json:"filesystemType,omitempty"`
  filesystemType?: string;
}

// Host SCSI disk.
export interface VSphereHostScsiDisk {
  // CanonicalName string `json:"canonicalName"`
  canonicalName: string;
  // Vendor string `json:"vendor"`
  vendor: string;
  // Model string `json:"model"`
  model: string;
  // Key string `json:"key"`
  key: string;
}
