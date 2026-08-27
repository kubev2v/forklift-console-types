/** Unified file containing typed provider secrets */

import { NutanixHost, OVirtHost, VSphereHost } from './provider';

/**
 * General provider host inventory
 */
export type ProviderHost = OVirtHost | VSphereHost | NutanixHost;
