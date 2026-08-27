import { NutanixResource } from './Resource';

export interface TypedNutanixResource extends NutanixResource {
  // prop added by the UI to implement narrowing (discriminated union)
  providerType: 'nutanix';
}
