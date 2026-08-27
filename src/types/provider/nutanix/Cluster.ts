import { TypedNutanixResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/nutanix/cluster.go
export interface NutanixCluster extends TypedNutanixResource {
  // ClusterUUID   string `json:"clusterUuid"`
  clusterUuid: string;
  // Version       string `json:"version"`
  version: string;
  // BuildVersion  string `json:"buildVersion"`
  buildVersion: string;
  // Timezone      string `json:"timezone"`
  timezone: string;
  // ClusterArch   string `json:"clusterArch"`
  clusterArch: string;
  // OperationMode string `json:"operationMode"`
  operationMode: string;
  // ExternalIP    string `json:"externalIp"`
  externalIp: string;
  // NumNodes      int    `json:"numNodes"`
  numNodes: number;
  // VMCount       int64  `json:"vmCount"`
  vmCount: number;
  // TotalCapacity int64  `json:"totalCapacity"`
  totalCapacity: number;
  // UsedCapacity  int64  `json:"usedCapacity"`
  usedCapacity: number;
}
