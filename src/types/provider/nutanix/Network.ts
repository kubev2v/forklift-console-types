import { TypedNutanixResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/nutanix/network.go
export interface NutanixNetwork extends TypedNutanixResource {
  // NetworkUUID    string `json:"networkUuid"`
  networkUuid: string;
  // Cluster        string `json:"cluster"`
  cluster: string;
  // SubnetType     string `json:"subnetType"`
  subnetType: string;
  // VlanID         int    `json:"vlanId"`
  vlanId: number;
  // NetworkAddress string `json:"networkAddress"`
  networkAddress: string;
  // PrefixLength   int    `json:"prefixLength"`
  prefixLength: number;
  // DefaultGateway string `json:"defaultGateway"`
  defaultGateway: string;
  // DHCPServerIP   string `json:"dhcpServerIp"`
  dhcpServerIp: string;
  // DHCPDomainName string `json:"dhcpDomainName"`
  dhcpDomainName: string;
  // IPPoolRanges   string `json:"ipPoolRanges"`
  ipPoolRanges: string;
}
