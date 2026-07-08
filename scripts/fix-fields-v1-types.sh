#!/bin/bash
#
# Fix ManagedFieldsEntry fieldsV1 types after code generation
#
# The openapi-generator maps OpenAPI object schemas to TypeScript `object`,
# but @openshift-console/dynamic-plugin-sdk expects the recursive FieldsV1
# interface from @openshift/api-types.
#
# Usage: ./scripts/fix-fields-v1-types.sh
#
# Safe to run multiple times (idempotent).
#

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
GENERATED_DIR="$PROJECT_ROOT/src/generated"
FIELDS_V1_IMPORT="import type { FieldsV1 } from '../../../types/k8s/FieldsV1';"

sed_inplace() {
  local file="$1"
  shift
  local tmp

  tmp="$(mktemp "${file}.XXXXXX")"
  sed "$@" "$file" > "$tmp"
  mv "$tmp" "$file"
}

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Fixing ManagedFieldsEntry FieldsV1 Types${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

FIXED_COUNT=0

while IFS= read -r -d '' file; do
  relative_path="${file#$PROJECT_ROOT/}"
  changed=false

  if grep -q 'fieldsV1?: object;' "$file"; then
    if ! grep -q "from '../../../types/k8s/FieldsV1'" "$file"; then
      sed_inplace "$file" "/^import { mapValues } from '..\/..\/runtime';/a\\
${FIELDS_V1_IMPORT}
"
      echo -e "${GREEN}  ✓ ${relative_path}: added FieldsV1 import${NC}"
      changed=true
    fi

    sed_inplace "$file" 's/fieldsV1?: object;/fieldsV1?: FieldsV1;/g'
    echo -e "${GREEN}  ✓ ${relative_path}: fieldsV1 type → FieldsV1${NC}"
    changed=true
  fi

  if [ "$changed" = true ]; then
    FIXED_COUNT=$((FIXED_COUNT + 1))
  fi
done < <(find "$GENERATED_DIR" -type f -name '*ManagedFieldsEntry.ts' -print0)

echo ""
if [ "$FIXED_COUNT" -gt 0 ]; then
  echo -e "${GREEN}========================================${NC}"
  echo -e "${GREEN}Fixed FieldsV1 types in ${FIXED_COUNT} file(s)${NC}"
  echo -e "${GREEN}========================================${NC}"
else
  echo -e "${YELLOW}========================================${NC}"
  echo -e "${YELLOW}No fixes needed — fieldsV1 already uses FieldsV1${NC}"
  echo -e "${YELLOW}========================================${NC}"
fi
