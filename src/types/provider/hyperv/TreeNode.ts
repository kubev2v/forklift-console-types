import { TreeNode } from '../base/TreeNode';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/model/hyperv/tree.go
export interface HypervTreeNode extends TreeNode {
  kind: '' | 'Datacenter' | 'Folder' | 'VM' | 'Cluster' | 'Host' | 'Network' | 'Datastore';
  children: HypervTreeNode[] | null;
}
