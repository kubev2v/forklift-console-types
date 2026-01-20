import { HypervResource } from './Resource';

export interface TypedHypervResource extends HypervResource {
  // prop added by the UI to implement narrowing (discriminated union)
  providerType: 'hyperv';
}
