// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/nutanix/base.go
export interface NutanixResource {
  // Object ID.
  id: string;
  // Revision
  revision: number;
  // Path
  path?: string;
  // Object name.
  name: string;
  // Self link.
  selfLink: string;
}
