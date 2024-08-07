# @kubev2v/types

Manual and auto generated typescript models and constants for Forklift console plugin.

## Auto generated

Auto generated [types](/src/generated):

  - [Forklift types](/src/generated/forklift)
  - [Kubernetes types](/src/generated/kubernetes)
  - [Kubevirt types](/src/generated/kubevirt)
  - [Containerized Data Importer types](/src/generated/containerized-data-importer)

## Manual

Manual [types](/src/types):

  - [Forklift inventory](/src/types)

### Setting the models color and abbr.

The [model constants](src/generated/forklift/constants) are auto generated with `abbr` that defaults to first two letters of the kind, and undefined `color`.
It is sometimes advisable to manual change the defaults.

For example:

``` ts
export const HostModel = {
  label: 'Host',
  labelPlural: 'Hosts',

  abbr: 'HO',
  color: undefined,
  ...
};
```
can be manually edited to:

``` ts
export const HostModel = {
  label: 'Forklift Host',
  labelPlural: 'Forklift Hosts',

  abbr: 'H',
  color: '#f00',
  ...
};
```
