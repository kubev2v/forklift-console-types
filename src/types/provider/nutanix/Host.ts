import { TypedNutanixResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/nutanix/host.go
export interface NutanixHost extends TypedNutanixResource {
  // HostUUID          string `json:"hostUuid"`
  hostUuid: string;
  // Cluster           string `json:"cluster"`
  cluster: string;
  // SerialNumber      string `json:"serialNumber"`
  serialNumber: string;
  // BlockModel        string `json:"blockModel"`
  blockModel: string;
  // HypervisorType    string `json:"hypervisorType"`
  hypervisorType: string;
  // NumVMs            int    `json:"numVms"`
  numVms: number;
  // State             string `json:"state"`
  state: string;
  // HostType          string `json:"hostType"`
  hostType: string;
  // CPUModel          string `json:"cpuModel"`
  cpuModel: string;
  // CPUCapacityHz     int64  `json:"cpuCapacityHz"`
  cpuCapacityHz: number;
  // NumCpuSockets     int    `json:"numCpuSockets"`
  numCpuSockets: number;
  // NumCpuCores       int    `json:"numCpuCores"`
  numCpuCores: number;
  // NumCpuThreads     int    `json:"numCpuThreads"`
  numCpuThreads: number;
  // MemoryCapacityMiB int64  `json:"memoryCapacityMib"`
  memoryCapacityMib: number;
  // IPMIAddress       string `json:"ipmiAddress"`
  ipmiAddress: string;
}
