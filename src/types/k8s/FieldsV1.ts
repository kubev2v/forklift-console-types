/**
 * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
 *
 * Matches @openshift/api-types FieldsV1 for compatibility with
 * @openshift-console/dynamic-plugin-sdk K8sResourceCommon metadata.
 *
 * @see https://pkg.go.dev/sigs.k8s.io/structured-merge-diff
 */
export interface FieldsV1 {
  [field: string]: FieldsV1 | Record<string, never>;
}
