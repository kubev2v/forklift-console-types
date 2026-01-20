// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/hyperv/resource.go
export interface HypervResource {
  // Object ID.
  id: string;
  // Variant
  variant?: string;
  // Path
  path?: string;
  // Revision
  revision: number;
  // Object name.
  name: string;
  // Self link.
  selfLink: string;
}
