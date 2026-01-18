#!/bin/bash
#
# Update Forklift types from upstream CRDs
#
# Usage: ./scripts/update-forklift.sh [version]
#   version: Branch or tag name (default: main)
#
# Example:
#   ./scripts/update-forklift.sh           # Uses main branch
#   ./scripts/update-forklift.sh release-2.6
#

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
VERSION="${1:-main}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
TARGET_DIR="$PROJECT_ROOT/src/generated/forklift"
CRD_DIR="$TARGET_DIR/crds"
MODEL_DIR="$TARGET_DIR/models"
CONSTANTS_DIR="$TARGET_DIR/constants"

# Upstream CRD base URL
BASE_URL="https://raw.githubusercontent.com/kubev2v/forklift/${VERSION}/operator/config/crd/bases"

# List of CRD files to download
CRDS=(
  "forklift.konveyor.io_forkliftcontrollers.yaml"
  "forklift.konveyor.io_hooks.yaml"
  "forklift.konveyor.io_hosts.yaml"
  "forklift.konveyor.io_migrations.yaml"
  "forklift.konveyor.io_networkmaps.yaml"
  "forklift.konveyor.io_openstackvolumepopulators.yaml"
  "forklift.konveyor.io_ovirtvolumepopulators.yaml"
  "forklift.konveyor.io_plans.yaml"
  "forklift.konveyor.io_providers.yaml"
  "forklift.konveyor.io_storagemaps.yaml"
  "forklift.konveyor.io_vspherexcopyvolumepopulators.yaml"
)

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Updating Forklift Types${NC}"
echo -e "${BLUE}Version: ${VERSION}${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Step 1: Download CRDs
echo -e "${YELLOW}Step 1: Downloading CRD files...${NC}"
mkdir -p "$CRD_DIR"

for crd in "${CRDS[@]}"; do
  echo -e "  Downloading ${crd}..."
  if ! curl -sfL "${BASE_URL}/${crd}" -o "${CRD_DIR}/${crd}"; then
    echo -e "${RED}  Failed to download ${crd}${NC}"
    echo -e "${RED}  URL: ${BASE_URL}/${crd}${NC}"
    exit 1
  fi
done
echo -e "${GREEN}  ✓ Downloaded ${#CRDS[@]} CRD files${NC}"
echo ""

# Step 2: Generate OpenAPI spec
echo -e "${YELLOW}Step 2: Generating OpenAPI spec from CRDs...${NC}"
cd "$TARGET_DIR"
npx crdtoapi -i "$CRD_DIR" > openapi.yaml
echo -e "${GREEN}  ✓ Generated openapi.yaml${NC}"
echo ""

# Step 3: Generate TypeScript models
echo -e "${YELLOW}Step 3: Generating TypeScript models...${NC}"
rm -rf "$MODEL_DIR"
mkdir -p "$MODEL_DIR"
npx crdtotypes -i "$TARGET_DIR/openapi.yaml" -o "$MODEL_DIR"
echo -e "${GREEN}  ✓ Generated TypeScript models${NC}"
echo ""

# Step 4: Generate UI model constants
echo -e "${YELLOW}Step 4: Generating UI model constants...${NC}"
rm -rf "$CONSTANTS_DIR"
mkdir -p "$CONSTANTS_DIR"
npx crdtomodel -i "$CRD_DIR" -o "$CONSTANTS_DIR"
echo -e "${GREEN}  ✓ Generated model constants${NC}"
echo ""

# Step 5: Fix ObjectMeta imports
echo -e "${YELLOW}Step 5: Fixing ObjectMeta imports...${NC}"
find "$MODEL_DIR" -type f -name "*.ts" -exec sed -i 's/\.\/IoK8sApimachineryPkgApisMetaV1ObjectMeta/\.\.\/\.\.\/kubernetes\/models\/IoK8sApimachineryPkgApisMetaV1ObjectMeta/g' {} +
echo -e "${GREEN}  ✓ Fixed ObjectMeta imports${NC}"
echo ""

# Step 6: Regenerate models index
echo -e "${YELLOW}Step 6: Regenerating models index...${NC}"
MODEL_INDEX_FILE="$MODEL_DIR/index.ts"

# Create index header
echo "// @index(['./*', /IoK8sApimachineryPkgApisMetaV1ObjectMeta/g], f => \`export * from '\${f.path}';\`)" > "$MODEL_INDEX_FILE"

# Generate exports for all models (excluding index.ts and ObjectMeta)
for FILE in "$MODEL_DIR"/*.ts; do
  FILENAME=$(basename "$FILE")
  if [ "$FILENAME" != "index.ts" ] && [ "$FILENAME" != "IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts" ]; then
    echo "export * from './${FILENAME%.*}';" >> "$MODEL_INDEX_FILE"
  fi
done | sort

# Re-sort the exports (excluding the header)
{
  head -1 "$MODEL_INDEX_FILE"
  tail -n +2 "$MODEL_INDEX_FILE" | sort
  echo '// @endindex'
} > "${MODEL_INDEX_FILE}.tmp"
mv "${MODEL_INDEX_FILE}.tmp" "$MODEL_INDEX_FILE"

echo -e "${GREEN}  ✓ Regenerated models index${NC}"
echo ""

# Done
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Forklift types updated successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Review generated files in src/generated/forklift/"
echo -e "  2. Optionally customize colors/abbr in constants/*.ts"
echo -e "  3. Run 'npm run build' to verify no errors"
echo -e "  4. Update the Version Tracking table in MAINTENANCE.md"
echo ""

