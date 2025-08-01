/**
 * 
 * 
 *
 * The version of the OpenAPI document: 
 * Contact Email: 
 * License: 
 *
 * NOTE: This file is auto generated by crdtotypes (https://github.com/yaacov/crdtoapi/).
 * https://github.com/yaacov/crdtoapi/README.crdtotypes
 */

export interface V1beta1VSphereXcopyVolumePopulatorSpec {
  /** secretName
   * The secret name with vsphere and storage credentials
   *
   * @required {true}
   */
  secretName: string;
  /** storageVendorProduct
   * StorageVendorProduct is the storage vendor the target disk and PVC are connected to
Supported values [vantara, ontap, primera3par]
   *
   * @required {true}
   */
  storageVendorProduct: string;
  /** vmId
   * VmId is the VM object id in vSphere
   *
   * @required {true}
   */
  vmId: string;
  /** vmdkPath
   * VmdkPath is the full path the vmdk disk. A valid path format is
'[$DATASTORE_NAME] $VM_HOME/$DISK_NAME.vmdk'
   *
   * @required {true}
   */
  vmdkPath: string;
}
