import { Concern } from '../base/model';

import { TypedNutanixResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/model/nutanix/model.go
export interface NutanixNIC {
  // UUID        string   `json:"uuid"`
  uuid: string;
  // NicType     string   `json:"nicType"`
  nicType: string;
  // MACAddress  string   `json:"macAddress"`
  macAddress: string;
  // Model       string   `json:"model"`
  model: string;
  // IsConnected bool     `json:"isConnected"`
  isConnected: boolean;
  // SubnetUUID  string   `json:"subnetUuid"`
  subnetUuid: string;
  // SubnetName  string   `json:"subnetName"`
  subnetName: string;
  // IPAddresses []string `json:"ipAddresses"`
  ipAddresses: string[];
  // VlanMode    string   `json:"vlanMode"`
  vlanMode: string;
}

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/model/nutanix/model.go
export interface NutanixDisk {
  // UUID                 string `json:"uuid"`
  uuid: string;
  // DeviceType           string `json:"deviceType"`
  deviceType: string;
  // DiskSizeMiB          int64  `json:"diskSizeMib"`
  diskSizeMib: number;
  // DiskSizeBytes        int64  `json:"diskSizeBytes"`
  diskSizeBytes: number;
  // StorageContainerUUID string `json:"storageContainerUuid"`
  storageContainerUuid: string;
  // StorageContainerName string `json:"storageContainerName"`
  storageContainerName: string;
  // AdapterType          string `json:"adapterType"`
  adapterType: string;
  // DeviceIndex          int    `json:"deviceIndex"`
  deviceIndex: number;
  // SourceImageUUID      string `json:"sourceImageUuid"`
  sourceImageUuid: string;
  // IsCdrom              bool   `json:"isCdrom"`
  isCdrom: boolean;
  // FlashMode            bool   `json:"flashMode"`
  flashMode: boolean;
}

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/model/nutanix/model.go
export interface NutanixSerialPort {
  // Index       int  `json:"index"`
  index: number;
  // IsConnected bool `json:"isConnected"`
  isConnected: boolean;
}

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/nutanix/vm.go
export interface NutanixVM extends TypedNutanixResource {
  // UUID        string `json:"uuid"`
  uuid: string;
  // Cluster     string `json:"cluster"`
  cluster: string;
  // Host        string `json:"host"`
  host: string;
  // PowerState  string `json:"powerState"`
  powerState: string;
  // Description string `json:"description,omitempty"`
  description?: string;
  // NumSockets        int               `json:"numSockets"`
  numSockets: number;
  // NumVcpusPerSocket int               `json:"numVcpusPerSocket"`
  numVcpusPerSocket: number;
  // NumThreadsPerCore int               `json:"numThreadsPerCore"`
  numThreadsPerCore: number;
  // MemorySizeMiB     int64             `json:"memorySizeMib"`
  memorySizeMib: number;
  // BootType          string            `json:"bootType"`
  bootType: string;
  // BootDeviceOrder   string            `json:"bootDeviceOrder"`
  bootDeviceOrder: string;
  // MachineType       string            `json:"machineType"`
  machineType: string;
  // HardwareClockTZ   string            `json:"hardwareClockTimezone"`
  hardwareClockTimezone: string;
  // VGAConsoleEnabled bool              `json:"vgaConsoleEnabled"`
  vgaConsoleEnabled: boolean;
  // HypervisorType    string            `json:"hypervisorType"`
  hypervisorType: string;
  // GuestOSID         string            `json:"guestOsId"`
  guestOsId: string;
  // GuestOSVersion    string            `json:"guestOsVersion,omitempty"`
  guestOsVersion?: string;
  // NICs              []NIC             `json:"nics"`
  nics: NutanixNIC[];
  // Disks             []Disk             `json:"disks"`
  disks: NutanixDisk[];
  // SerialPorts       []SerialPort      `json:"serialPorts"`
  serialPorts: NutanixSerialPort[];
  // Categories        map[string]string `json:"categories,omitempty"`
  categories?: Record<string, string>;
  // RevisionValidated int64 `json:"revisionValidated"`
  revisionValidated: number;
  // Concerns []model.Concern `json:"concerns"`
  concerns: Concern[];
  // GuestToolsEnabled   bool   `json:"guestToolsEnabled"`
  guestToolsEnabled: boolean;
  // GuestToolsVersion   string `json:"guestToolsVersion"`
  guestToolsVersion: string;
  // GuestToolsReachable bool   `json:"guestToolsReachable"`
  guestToolsReachable: boolean;
  // GuestToolsMounted   bool   `json:"guestToolsMounted"`
  guestToolsMounted: boolean;
  // PolicyVersion int `json:"policyVersion"`
  policyVersion: number;
}
