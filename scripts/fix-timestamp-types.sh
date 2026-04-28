#!/bin/bash
#
# Fix ObjectMeta timestamp types after code generation
#
# The openapi-generator maps OpenAPI `date-time` format to TypeScript `Date`,
# but the Kubernetes API returns ISO 8601 strings and the OpenShift Console SDK
# types creationTimestamp/deletionTimestamp as `string`.
#
# This script patches all generated ObjectMeta types to use `string` instead of
# `Date` for these fields, maintaining compatibility with the Console SDK.
#
# Usage: ./scripts/fix-timestamp-types.sh
#
# Safe to run multiple times (idempotent).
#

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
GENERATED_DIR="$PROJECT_ROOT/src/generated"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Fixing ObjectMeta Timestamp Types${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

FIXED_COUNT=0

# Find all files with ObjectMeta in the name that contain Date-typed timestamps
while IFS= read -r -d '' file; do
  relative_path="${file#$PROJECT_ROOT/}"
  changed=false

  # Fix type declarations: creationTimestamp?: Date -> creationTimestamp?: string
  if grep -q 'creationTimestamp?: Date;' "$file"; then
    sed -i '' 's/creationTimestamp?: Date;/creationTimestamp?: string;/g' "$file"
    echo -e "${GREEN}  ✓ ${relative_path}: creationTimestamp type → string${NC}"
    changed=true
  fi

  if grep -q 'deletionTimestamp?: Date;' "$file"; then
    sed -i '' 's/deletionTimestamp?: Date;/deletionTimestamp?: string;/g' "$file"
    echo -e "${GREEN}  ✓ ${relative_path}: deletionTimestamp type → string${NC}"
    changed=true
  fi

  # Fix FromJSON: (new Date(json['creationTimestamp'])) -> json['creationTimestamp']
  if grep -q "(new Date(json\['creationTimestamp'\]))" "$file"; then
    sed -i '' "s/(new Date(json\['creationTimestamp'\]))/json['creationTimestamp']/g" "$file"
    echo -e "${GREEN}  ✓ ${relative_path}: creationTimestamp FromJSON → passthrough${NC}"
    changed=true
  fi

  if grep -q "(new Date(json\['deletionTimestamp'\]))" "$file"; then
    sed -i '' "s/(new Date(json\['deletionTimestamp'\]))/json['deletionTimestamp']/g" "$file"
    echo -e "${GREEN}  ✓ ${relative_path}: deletionTimestamp FromJSON → passthrough${NC}"
    changed=true
  fi

  # Fix ToJSON: ((value['creationTimestamp']).toISOString()) -> value['creationTimestamp']
  if grep -q "((value\['creationTimestamp'\])\.toISOString())" "$file"; then
    sed -i '' "s/((value\['creationTimestamp'\])\.toISOString())/value['creationTimestamp']/g" "$file"
    echo -e "${GREEN}  ✓ ${relative_path}: creationTimestamp ToJSON → passthrough${NC}"
    changed=true
  fi

  if grep -q "((value\['deletionTimestamp'\])\.toISOString())" "$file"; then
    sed -i '' "s/((value\['deletionTimestamp'\])\.toISOString())/value['deletionTimestamp']/g" "$file"
    echo -e "${GREEN}  ✓ ${relative_path}: deletionTimestamp ToJSON → passthrough${NC}"
    changed=true
  fi

  if [ "$changed" = true ]; then
    FIXED_COUNT=$((FIXED_COUNT + 1))
  fi
done < <(find "$GENERATED_DIR" -type f -name "*ObjectMeta*" -print0)

echo ""
if [ "$FIXED_COUNT" -gt 0 ]; then
  echo -e "${GREEN}========================================${NC}"
  echo -e "${GREEN}Fixed timestamp types in ${FIXED_COUNT} file(s)${NC}"
  echo -e "${GREEN}========================================${NC}"
else
  echo -e "${YELLOW}========================================${NC}"
  echo -e "${YELLOW}No fixes needed — timestamps already use string${NC}"
  echo -e "${YELLOW}========================================${NC}"
fi
