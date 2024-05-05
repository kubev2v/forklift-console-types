## Auto generate typescritp types

Note I - Building and publishing

``` bash
# From pacjage root directory bump version
vim package.json

# Build the package
npm run build
npm run lint

# Publish no npm.io
npm publish
```

Note II - Updating models

``` bash
npm install crdtoapi

# copy all CRD files from forklift git repository to ./crds:
https://github.com/kubev2v/forklift/tree/main/operator/config/crd/bases


# Use the CRDs in the ./crd directory to create an openapi.yaml file:
npx crdtoapi -i $(pwd)/crds/ > $(pwd)/openapi.yaml

# Create models:
npx crdtotypes -i $(pwd)/openapi.yaml -o $(pwd)/models

# Create openshift console UI model constants:
npx crdtomodel -i $(pwd)/crds/ -o ./constants

# Define the model directory relative to the current working directory.
MODEL_DIR="$(pwd)/models"

# Define the path for the index file within the model directory.
MODEL_INDEX_FILE="$MODEL_DIR/index.ts"

# Start the index file with the header using single quotes to avoid parsing.
echo "// @index(['./*', /IoK8sApimachineryPkgApisMetaV1ObjectMeta/g], f => \`export * from '\${f.path}';\`)" > "$MODEL_INDEX_FILE"

# Initialize an array to hold export statements.
declare -a EXPORTS
EXPORTS=()  # Reset the array

# Loop over all TypeScript files in the model directory.
for FILE in "$MODEL_DIR"/*.ts; do
  # Extract the filename from the path.
  FILENAME=$(basename "$FILE")
  
  # Ensure the current file is not the index file itself.
  if [ "$FILENAME" != "index.ts" ] && [ "$FILENAME" != "IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts" ]; then
    # Add an export statement for the current file to the array.
    EXPORTS+=("export * from './${FILENAME%.*}';")
  fi
done

# Sort the export statements alphabetically and append to the index file.
printf "%s\n" "${EXPORTS[@]}" | sort >> "$MODEL_INDEX_FILE"

# Append the index footer to the index file.
echo '// @endindex' >> "$MODEL_INDEX_FILE"

# Replace IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts with the one from kubernetes:
find ./models -type f -exec sed -i 's/\.\/IoK8sApimachineryPkgApisMetaV1ObjectMeta/\.\.\/\.\.\/kubernetes\/models\/IoK8sApimachineryPkgApisMetaV1ObjectMeta/g' {} +
```

# Model types (./models):

Auto generated constants for Forlklift k8s resources

# UI model constants (./constants):

Auto generated constants for Forlklift k8s resources

Each auto generated interface include the full model, GVK and a Ref.

Example:

``` ts
import { HookModel, HookModelGroupVersionKind, HookModelRef } from '@kubev2v/types';

// All constants represent the Hook resource model (for the generated apiVersion)
// GroupVersionKind - containe the { group, version, kind }
// Ref - contain a k8s URL reference used by the console to construct a query.
```

source: /ci/yaml/crds

## Manual overrides

Please edit and change needed properties like `color` and `abbr` where needed.

## Suggested manual changes:

| File | changed values |
|------|----------------|
| PlanModel.v1beta1.ts | color: '#0f930b' |
|                      | abbr: 'PL' |
| ProviderModel.v1beta1.ts | color: '#b51cb8' |
|                      | abbr: 'PR' |  |
| StorageMapModel.v1beta1.ts | color: '#f7b525' |
|                      | abbr: 'SM' |
| NetworkMapModel.v1beta1.ts | color: '#f7b525' |
|                      | abbr: 'NM' |
