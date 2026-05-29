import { Concern } from '../base/model';

import { OVirtDiskAttachment, OVirtNIC } from './model';
import { TypedOVirtResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/ovirt/vm.go
export interface OVirtVM extends TypedOVirtResource {
  // Cluster           string           `json:"cluster"`
  cluster: string;
  // 'up' | 'down'
  // Status            string           `json:"status"`
  status: string;
  // Host              string           `json:"host"`
  host: string;
  // GuestName                   string `json:"guestName"`
  guestName: string;
  // OSType                      string `json:"osType"`
  osType: string;
  // Guest                       Guest  `json:"guest"`
  guest: OVirtGuest;
  // RevisionValidated int64            `json:"revisionValidated"`
  revisionValidated: number;
  // NICs              []OVirtNIC           `json:"nics"`
  nics: OVirtNIC[];
  // DiskAttachments   []DiskAttachment `json:"diskAttachments"`
  diskAttachments: OVirtDiskAttachment[];
  // Concerns          []Concern        `json:"concerns"`
  concerns: Concern[];
}

export interface OVirtGuest {
  // Distribution string `json:"distribution"`
  distribution: string;
  // FullVersion  string `json:"fullVersion"`
  fullVersion: string;
}
