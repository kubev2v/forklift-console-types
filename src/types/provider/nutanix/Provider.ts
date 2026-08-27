import { V1beta1Provider } from '../../../generated';
import { OpenshiftResource } from '../openshift/Resource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/nutanix/provider.go
export interface NutanixProvider extends OpenshiftResource {
  // Type                  string       `json:"type"`
  type: string;
  // Object                api.Provider `json:"object"`
  object: V1beta1Provider;
  // ClusterCount          int64        `json:"clusterCount"`
  clusterCount: number;
  // HostCount             int64        `json:"hostCount"`
  hostCount: number;
  // VMCount               int64        `json:"vmCount"`
  vmCount: number;
  // NetworkCount          int64        `json:"networkCount"`
  networkCount: number;
  // StorageContainerCount int64        `json:"storageContainerCount"`
  storageContainerCount: number;
  // ImageCount            int64        `json:"imageCount"`
  imageCount: number;
}
