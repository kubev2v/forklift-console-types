## Auto generate typescritp types

Note I - Building and publishing

``` bash
# From pacjage root directory bump version
vim package.json

# Build the package
npm install
npm run build
npm run lint

# Publish no npm.io
npm publish
```

Note II - Updating models

``` bash
# From this direcotry
curl https://raw.githubusercontent.com/kubevirt/containerized-data-importer/main/api/openapi-spec/swagger.json -o swagger.json

npx openapi-generator-cli generate -g typescript-fetch --skip-validate-spec -o $(pwd) -i $(pwd)/swagger.json

rm -rf apis index.ts runtime.ts .openapi-generator*

find ./models -type f -exec sed -i 's/\.\.\/runtime/\.\.\/\.\.\/runtime/g' {} +

echo "export * from './models';" > index.ts
```