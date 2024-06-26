/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
/**
 * ExecAction describes a "run in container" action.
 * @export
 * @interface IoK8sApiCoreV1ExecAction
 */
export interface IoK8sApiCoreV1ExecAction {
    /**
     * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1ExecAction
     */
    command?: string[];
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ExecAction interface.
 */
export function instanceOfIoK8sApiCoreV1ExecAction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1ExecActionFromJSON(json: any): IoK8sApiCoreV1ExecAction {
    return IoK8sApiCoreV1ExecActionFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ExecActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ExecAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'command': !exists(json, 'command') ? undefined : json['command'],
    };
}

export function IoK8sApiCoreV1ExecActionToJSON(value?: IoK8sApiCoreV1ExecAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'command': value.command,
    };
}

