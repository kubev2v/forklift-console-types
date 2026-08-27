import { TypedNutanixResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/nutanix/image.go
export interface NutanixImage extends TypedNutanixResource {
  // ImageUUID    string `json:"imageUuid"`
  imageUuid: string;
  // ImageType    string `json:"imageType"`
  imageType: string;
  // SizeBytes    int64  `json:"sizeBytes"`
  sizeBytes: number;
  // Architecture string `json:"architecture"`
  architecture: string;
  // SourceURI    string `json:"sourceUri"`
  sourceUri: string;
}
