import { TypedHypervResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/hyperv/network.go
export interface HypervNetwork extends TypedHypervResource {
  description?: string;
}
