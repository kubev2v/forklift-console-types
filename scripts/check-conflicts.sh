#!/bin/bash
#
# Check for export conflicts between KubeVirt and CDI types
#
# This script compares the type names exported from KubeVirt and CDI
# to identify potential naming conflicts that need to be resolved
# in src/generated/index.ts
#
# Usage: ./scripts/check-conflicts.sh
#

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

CDI_INDEX="$PROJECT_ROOT/src/generated/containerized-data-importer/models/index.ts"
KV_INDEX="$PROJECT_ROOT/src/generated/kubevirt/models/index.ts"
MAIN_INDEX="$PROJECT_ROOT/src/generated/index.ts"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Checking for Export Conflicts${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if files exist
if [ ! -f "$CDI_INDEX" ]; then
  echo -e "${RED}Error: CDI index not found at $CDI_INDEX${NC}"
  exit 1
fi

if [ ! -f "$KV_INDEX" ]; then
  echo -e "${RED}Error: KubeVirt index not found at $KV_INDEX${NC}"
  exit 1
fi

# Extract type names from index files
# CDI format: export * from './TypeName';
# KubeVirt format: export * from './TypeName';
CDI_TYPES=$(grep "^export \* from" "$CDI_INDEX" | sed "s/export \* from '\.\/\(.*\)';/\1/" | sort)
KV_TYPES=$(grep "^export \* from" "$KV_INDEX" | sed "s/export \* from '\.\/\(.*\)';/\1/" | sort)

# Count types
CDI_COUNT=$(echo "$CDI_TYPES" | wc -l)
KV_COUNT=$(echo "$KV_TYPES" | wc -l)

echo -e "${CYAN}CDI types:${NC} $CDI_COUNT"
echo -e "${CYAN}KubeVirt types:${NC} $KV_COUNT"
echo ""

# Find conflicts (types in both CDI and KubeVirt)
echo -e "${YELLOW}=== Potential Conflicts ===${NC}"
echo -e "${YELLOW}(Types present in BOTH CDI and KubeVirt)${NC}"
echo ""

CONFLICTS=$(comm -12 <(echo "$CDI_TYPES") <(echo "$KV_TYPES"))
CONFLICT_COUNT=$(echo "$CONFLICTS" | grep -c . || true)

if [ "$CONFLICT_COUNT" -gt 0 ]; then
  echo -e "${RED}Found $CONFLICT_COUNT conflicting types:${NC}"
  echo ""
  echo "$CONFLICTS" | while read -r type; do
    echo -e "  ${RED}✗${NC} $type"
  done
  echo ""
  echo -e "${YELLOW}These types should NOT be exported from KubeVirt in src/generated/index.ts${NC}"
else
  echo -e "${GREEN}No conflicts found!${NC}"
fi

echo ""

# Find KubeVirt-only types (safe to export)
echo -e "${YELLOW}=== KubeVirt-Only Types ===${NC}"
echo -e "${YELLOW}(Safe to export - not in CDI)${NC}"
echo ""

KV_ONLY=$(comm -23 <(echo "$KV_TYPES") <(echo "$CDI_TYPES"))
KV_ONLY_COUNT=$(echo "$KV_ONLY" | grep -c . || true)

echo -e "${GREEN}Found $KV_ONLY_COUNT KubeVirt-only types${NC}"
echo ""

# Show categories
echo -e "${CYAN}V1VirtualMachine* types:${NC}"
echo "$KV_ONLY" | grep "^V1VirtualMachine" | head -10 | while read -r type; do
  echo "  $type"
done
echo "  ..."
echo ""

echo -e "${CYAN}V1alpha1* types:${NC}"
echo "$KV_ONLY" | grep "^V1alpha1" | head -10 | while read -r type; do
  echo "  $type"
done
echo "  ..."
echo ""

echo -e "${CYAN}V1beta1* types (KubeVirt-specific):${NC}"
echo "$KV_ONLY" | grep "^V1beta1" | head -10 | while read -r type; do
  echo "  $type"
done
echo "  ..."
echo ""

# Check current exports in main index
echo -e "${YELLOW}=== Current KubeVirt Exports ===${NC}"
echo ""

if [ -f "$MAIN_INDEX" ]; then
  CURRENT_EXPORTS=$(grep -A 500 "from './kubevirt'" "$MAIN_INDEX" | grep -B 500 "^}" | head -n -1 | tail -n +2 | wc -l || echo "0")
  echo -e "Currently exporting ${CYAN}~$CURRENT_EXPORTS${NC} types from KubeVirt"
else
  echo -e "${RED}Main index not found at $MAIN_INDEX${NC}"
fi

echo ""
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Summary${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo -e "  CDI types:        ${CYAN}$CDI_COUNT${NC}"
echo -e "  KubeVirt types:   ${CYAN}$KV_COUNT${NC}"
echo -e "  Conflicts:        ${RED}$CONFLICT_COUNT${NC}"
echo -e "  KubeVirt-only:    ${GREEN}$KV_ONLY_COUNT${NC}"
echo ""

if [ "$CONFLICT_COUNT" -gt 0 ]; then
  echo -e "${YELLOW}Action required:${NC}"
  echo -e "  Edit src/generated/index.ts to ensure conflicting types"
  echo -e "  are NOT exported from KubeVirt."
  echo ""
  echo -e "  Run 'npm run build' to verify there are no duplicate identifier errors."
fi

