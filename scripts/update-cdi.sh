#!/bin/bash
#
# Update CDI (Containerized Data Importer) types from upstream swagger spec
#
# Usage: ./scripts/update-cdi.sh [version]
#   version: Branch or tag name (default: main)
#
# Example:
#   ./scripts/update-cdi.sh           # Uses main branch
#   ./scripts/update-cdi.sh v1.58.0
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
TARGET_DIR="$PROJECT_ROOT/src/generated/containerized-data-importer"

# Upstream swagger URL
SWAGGER_URL="https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${VERSION}/api/openapi-spec/swagger.json"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Updating CDI Types${NC}"
echo -e "${BLUE}Version: ${VERSION}${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Step 1: Download swagger spec
echo -e "${YELLOW}Step 1: Downloading swagger spec...${NC}"
cd "$TARGET_DIR"
if ! curl -sfL "$SWAGGER_URL" -o swagger.json; then
  echo -e "${RED}  Failed to download swagger.json${NC}"
  echo -e "${RED}  URL: ${SWAGGER_URL}${NC}"
  exit 1
fi
echo -e "${GREEN}  ✓ Downloaded swagger.json${NC}"
echo ""

# Step 2: Generate TypeScript
echo -e "${YELLOW}Step 2: Generating TypeScript types...${NC}"
npx openapi-generator-cli generate \
  -g typescript-fetch \
  --skip-validate-spec \
  -o "$TARGET_DIR" \
  -i "$TARGET_DIR/swagger.json"
echo -e "${GREEN}  ✓ Generated TypeScript types${NC}"
echo ""

# Step 3: Clean up unnecessary files
echo -e "${YELLOW}Step 3: Cleaning up generated files...${NC}"
rm -rf "$TARGET_DIR/apis" 2>/dev/null || true
rm -f "$TARGET_DIR/index.ts" 2>/dev/null || true
rm -f "$TARGET_DIR/runtime.ts" 2>/dev/null || true
rm -rf "$TARGET_DIR/.openapi-generator" 2>/dev/null || true
rm -f "$TARGET_DIR/.openapi-generator-ignore" 2>/dev/null || true
rm -f "$TARGET_DIR/.gitignore" 2>/dev/null || true
echo -e "${GREEN}  ✓ Cleaned up unnecessary files${NC}"
echo ""

# Step 4: Fix runtime imports
echo -e "${YELLOW}Step 4: Fixing runtime imports in models...${NC}"
find "$TARGET_DIR/models" -type f -name "*.ts" -exec sed -i 's/\.\.\/runtime/\.\.\/\.\.\/runtime/g' {} +
echo -e "${GREEN}  ✓ Fixed runtime imports${NC}"
echo ""

# Step 5: Recreate index.ts
echo -e "${YELLOW}Step 5: Recreating index.ts...${NC}"
echo "export * from './models';" > "$TARGET_DIR/index.ts"
echo -e "${GREEN}  ✓ Created index.ts${NC}"
echo ""

# Done
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}CDI types updated successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Run './scripts/check-conflicts.sh' to detect conflicts with KubeVirt"
echo -e "  2. Update selective exports in src/generated/index.ts if needed"
echo -e "  3. Run 'npm run build' to verify no errors"
echo -e "  4. Update the Version Tracking table in MAINTENANCE.md"
echo ""

