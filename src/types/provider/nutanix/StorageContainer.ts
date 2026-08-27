import { TypedNutanixResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/nutanix/storage.go
export interface NutanixStorageContainer extends TypedNutanixResource {
  // StorageContainerUUID string `json:"storageContainerUuid"`
  storageContainerUuid: string;
  // Cluster              string `json:"cluster"`
  cluster: string;
  // ReplicationFactor    int    `json:"replicationFactor"`
  replicationFactor: number;
  // MaxCapacityBytes     int64  `json:"maxCapacityBytes"`
  maxCapacityBytes: number;
  // FreeBytes            int64  `json:"freeBytes"`
  freeBytes: number;
  // UsageBytes           int64  `json:"usageBytes"`
  usageBytes: number;
  // CompressionEnabled   bool   `json:"compressionEnabled"`
  compressionEnabled: boolean;
  // OnDiskDedup          string `json:"onDiskDedup"`
  onDiskDedup: string;
  // ErasureCode          string `json:"erasureCode"`
  erasureCode: string;
}
