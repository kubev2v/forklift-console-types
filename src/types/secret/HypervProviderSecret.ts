/**
 * Provider secret containing credentials and other confidential information
 * for Hyper-V
 *
 * @export
 * @interface HypervProviderSecret
 */
export interface HypervProviderSecret {
  providerType: 'hyperv';
  /**
   * Username for accessing the SMB share containing Hyper-V exported VMs,
   * for example: DOMAIN\username or username
   *
   * Provider type: Hyper-V
   * Conditions: Required
   * Validation Regexp: .*
   *
   * @type {string}
   * @memberof HypervProviderSecret
   */
  username: string;

  /**
   * Password for accessing the SMB share
   *
   * Provider type: Hyper-V
   * Conditions: Required
   * Validation Regexp: .*
   *
   * @type {string}
   * @memberof HypervProviderSecret
   */
  password: string;
}
