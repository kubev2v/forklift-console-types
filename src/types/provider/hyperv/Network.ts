import { TypedHypervResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/hyperv/network.go
export interface HypervNetwork extends TypedHypervResource {
  // UUID        string `json:"uuid"`
  uuid: string;
  // SwitchName  string `json:"switchName"`
  switchName: string;
  // SwitchType  string `json:"switchType,omitempty"`
  switchType?: string;
  // Description string `json:"description,omitempty"`
  description?: string;
}
