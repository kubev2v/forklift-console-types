import { V1beta1Provider } from '../../../generated';

import { HypervResource } from './Resource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/hyperv/provider.go
export interface HypervProvider extends HypervResource {
  // Type
  type: string;
  // Object
  object: V1beta1Provider;
  // APIVersion
  apiVersion: string;
  // Product
  product: string;
  // VMCount
  vmCount: number;
  // NetworkCount
  networkCount: number;
  // DiskCount
  diskCount: number;
  // StorageCount
  storageCount: number;
}
