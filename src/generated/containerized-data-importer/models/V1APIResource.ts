/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../../runtime';
/**
 * APIResource specifies the name of a resource and whether it is namespaced.
 * @export
 * @interface V1APIResource
 */
export interface V1APIResource {
    /**
     * categories is a list of the grouped resources this resource belongs to (e.g. 'all')
     * @type {Array<string>}
     * @memberof V1APIResource
     */
    categories?: Array<string>;
    /**
     * group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale".
     * @type {string}
     * @memberof V1APIResource
     */
    group?: string;
    /**
     * kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')
     * @type {string}
     * @memberof V1APIResource
     */
    kind: string;
    /**
     * name is the plural name of the resource.
     * @type {string}
     * @memberof V1APIResource
     */
    name: string;
    /**
     * namespaced indicates if a resource is namespaced or not.
     * @type {boolean}
     * @memberof V1APIResource
     */
    namespaced: boolean;
    /**
     * shortNames is a list of suggested short names of the resource.
     * @type {Array<string>}
     * @memberof V1APIResource
     */
    shortNames?: Array<string>;
    /**
     * singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.
     * @type {string}
     * @memberof V1APIResource
     */
    singularName: string;
    /**
     * The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates.
     * @type {string}
     * @memberof V1APIResource
     */
    storageVersionHash?: string;
    /**
     * verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)
     * @type {Array<string>}
     * @memberof V1APIResource
     */
    verbs: Array<string>;
    /**
     * version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)".
     * @type {string}
     * @memberof V1APIResource
     */
    version?: string;
}

/**
 * Check if a given object implements the V1APIResource interface.
 */
export function instanceOfV1APIResource(value: object): value is V1APIResource {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('namespaced' in value) || value['namespaced'] === undefined) return false;
    if (!('singularName' in value) || value['singularName'] === undefined) return false;
    if (!('verbs' in value) || value['verbs'] === undefined) return false;
    return true;
}

export function V1APIResourceFromJSON(json: any): V1APIResource {
    return V1APIResourceFromJSONTyped(json, false);
}

export function V1APIResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1APIResource {
    if (json == null) {
        return json;
    }
    return {
        
        'categories': json['categories'] == null ? undefined : json['categories'],
        'group': json['group'] == null ? undefined : json['group'],
        'kind': json['kind'],
        'name': json['name'],
        'namespaced': json['namespaced'],
        'shortNames': json['shortNames'] == null ? undefined : json['shortNames'],
        'singularName': json['singularName'],
        'storageVersionHash': json['storageVersionHash'] == null ? undefined : json['storageVersionHash'],
        'verbs': json['verbs'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function V1APIResourceToJSON(value?: V1APIResource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'categories': value['categories'],
        'group': value['group'],
        'kind': value['kind'],
        'name': value['name'],
        'namespaced': value['namespaced'],
        'shortNames': value['shortNames'],
        'singularName': value['singularName'],
        'storageVersionHash': value['storageVersionHash'],
        'verbs': value['verbs'],
        'version': value['version'],
    };
}

