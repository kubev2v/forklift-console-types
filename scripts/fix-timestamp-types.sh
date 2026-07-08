#!/bin/bash
#
# Fix timestamp types after code generation
#
# The openapi-generator maps OpenAPI `date-time` format to TypeScript `Date`,
# but the Kubernetes API returns ISO 8601 strings and the OpenShift Console SDK
# types these fields as `string`.
#
# This script patches all generated types under src/generated to use `string`
# instead of `Date`, including ObjectMeta, ManagedFieldsEntry, and condition
# timestamps, maintaining compatibility with the Console SDK.
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
echo -e "${BLUE}Fixing Generated Timestamp Types${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

FIXED_COUNT=0

fix_timestamp_file() {
  local file="$1"
  local relative_path="${file#$PROJECT_ROOT/}"
  local changed=false

  if grep -q '?: Date;' "$file"; then
    sed -i '' 's/?: Date;/?: string;/g' "$file"
    echo -e "${GREEN}  ✓ ${relative_path}: Date types → string${NC}"
    changed=true
  fi

  if grep -q "(new Date(json\\[" "$file"; then
    sed -i '' "s/(new Date(json\\['\\([^']*\\)'\\]))/json['\\1']/g" "$file"
    echo -e "${GREEN}  ✓ ${relative_path}: FromJSON Date parsing → passthrough${NC}"
    changed=true
  fi

  if grep -q "toISOString()" "$file"; then
    sed -i '' "s/((value\\['\\([^']*\\)'\\])\\.toISOString())/value['\\1']/g" "$file"
    echo -e "${GREEN}  ✓ ${relative_path}: ToJSON toISOString → passthrough${NC}"
    changed=true
  fi

  if [ "$changed" = true ]; then
    FIXED_COUNT=$((FIXED_COUNT + 1))
  fi
}

while IFS= read -r -d '' file; do
  fix_timestamp_file "$file"
done < <(find "$GENERATED_DIR" -type f -name '*.ts' -print0)

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
