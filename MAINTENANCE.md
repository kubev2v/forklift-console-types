# Maintenance Guide for @forklift-ui/types

This document provides comprehensive instructions for maintaining and updating the types in this package.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Updating Types](#updating-types)
   - [Forklift Types](#updating-forklift-types)
   - [Kubernetes Types](#updating-kubernetes-types)
   - [KubeVirt Types](#updating-kubevirt-types)
   - [CDI Types](#updating-cdi-types)
4. [Resolving Export Conflicts](#resolving-export-conflicts)
5. [Local Testing](#local-testing)
6. [Publishing](#publishing)
7. [Troubleshooting](#troubleshooting)
8. [Version Tracking](#version-tracking)

---

## Overview

This package contains TypeScript types from multiple upstream sources:

| Source | Location | Generation Method | Upstream Repository |
|--------|----------|-------------------|---------------------|
| **Forklift** | `src/generated/forklift/` | CRD → OpenAPI → TypeScript | [kubev2v/forklift](https://github.com/kubev2v/forklift) |
| **Kubernetes** | `src/generated/kubernetes/` | Swagger → TypeScript | [kubernetes/kubernetes](https://github.com/kubernetes/kubernetes) |
| **KubeVirt** | `src/generated/kubevirt/` | Swagger → TypeScript | [kubevirt/kubevirt](https://github.com/kubevirt/kubevirt) |
| **CDI** | `src/generated/containerized-data-importer/` | Swagger → TypeScript | [kubevirt/containerized-data-importer](https://github.com/kubevirt/containerized-data-importer) |
| **Manual Types** | `src/types/` | Hand-written | Forklift inventory API |

### Important: Export Conflicts

KubeVirt and CDI both include Kubernetes base types with different naming conventions. To avoid naming conflicts:
- We export **ALL** types from `containerized-data-importer`, `forklift`, and `kubernetes`
- We export **ONLY selected** types from `kubevirt` (those that don't conflict)

This is managed in `src/generated/index.ts`. See [Resolving Export Conflicts](#resolving-export-conflicts) for details.

---

## Prerequisites

Ensure you have the required tools installed:

```bash
# Install project dependencies (includes all required tools)
npm install
```

Key tools (installed as devDependencies):
- `@openapitools/openapi-generator-cli` - Generates TypeScript from Swagger/OpenAPI specs
- `crdtoapi` - Converts Kubernetes CRDs to OpenAPI and TypeScript

---

## Updating Types

We provide scripts to automate the update process for each source.

### Updating Forklift Types

**When to update:** When Forklift CRDs change (new fields, new resources, API version changes)

```bash
# Update from main branch (default)
./scripts/update-forklift.sh

# Update from a specific branch or tag
./scripts/update-forklift.sh release-2.6
```

**What the script does:**
1. Downloads CRD files from the forklift repository
2. Generates `openapi.yaml` from CRDs using `crdtoapi`
3. Generates TypeScript models using `crdtotypes`
4. Generates UI model constants using `crdtomodel`
5. Fixes ObjectMeta imports to use Kubernetes types
6. Regenerates the models index file

**Manual step after running:**
Optionally customize colors and abbreviations in `src/generated/forklift/constants/`:

| File | Suggested Customizations |
|------|-------------------------|
| `PlanModel.v1beta1.ts` | `color: '#00B9E4'`, `abbr: 'PL'` |
| `ProviderModel.v1beta1.ts` | `color: '#B2A3FF'`, `abbr: 'PR'` |
| `StorageMapModel.v1beta1.ts` | `color: '#f7b525'`, `abbr: 'SM'` |
| `NetworkMapModel.v1beta1.ts` | `color: '#f7b525'`, `abbr: 'NM'` |

---

### Updating Kubernetes Types

**When to update:** When you need types for a newer Kubernetes version

```bash
# Update from master branch (latest)
./scripts/update-kubernetes.sh

# Update from a specific version tag
./scripts/update-kubernetes.sh v1.29.0
```

**What the script does:**
1. Downloads the Kubernetes OpenAPI spec (swagger.json)
2. Generates TypeScript using openapi-generator
3. Cleans up unnecessary generated files
4. Fixes runtime imports
5. Recreates the index file

---

### Updating KubeVirt Types

**When to update:** When KubeVirt adds new VM-related types or changes existing ones

```bash
# Update from main branch (default)
./scripts/update-kubevirt.sh

# Update from a specific version tag
./scripts/update-kubevirt.sh v1.2.0
```

**What the script does:**
1. Downloads the KubeVirt OpenAPI spec (swagger.json)
2. Generates TypeScript using openapi-generator
3. Cleans up unnecessary generated files
4. Fixes runtime imports
5. Recreates the index file

**IMPORTANT:** After updating KubeVirt types, you MUST check for and resolve export conflicts. See [Resolving Export Conflicts](#resolving-export-conflicts).

---

### Updating CDI Types

**When to update:** When CDI adds new DataVolume features or changes existing ones

```bash
# Update from main branch (default)
./scripts/update-cdi.sh

# Update from a specific version tag
./scripts/update-cdi.sh v1.58.0
```

**What the script does:**
1. Downloads the CDI OpenAPI spec (swagger.json)
2. Generates TypeScript using openapi-generator
3. Cleans up unnecessary generated files
4. Fixes runtime imports
5. Recreates the index file

**IMPORTANT:** After updating CDI types, check for new export conflicts with KubeVirt.

---

## Resolving Export Conflicts

### Understanding the Problem

KubeVirt and CDI both include Kubernetes base types but with different naming:
- **CDI uses:** `V1Affinity`, `V1NodeSelector`, `V1ResourceRequirements`, etc.
- **KubeVirt uses:** `K8sIoApiCoreV1Affinity`, `K8sIoApiCoreV1NodeSelector`, etc.

Exporting both with `export *` causes TypeScript "duplicate identifier" errors.

### Detecting Conflicts

Use the helper script to identify potential conflicts:

```bash
./scripts/check-conflicts.sh
```

Or check manually by attempting a build:

```bash
npm run build 2>&1 | grep "Duplicate identifier"
```

### Fixing Conflicts

Edit `src/generated/index.ts`:

1. Find the selective export block for KubeVirt:
   ```typescript
   export {
     // ... selected types ...
   } from './kubevirt';
   ```

2. **Remove** any types that now conflict with CDI
3. **Add** any new KubeVirt-specific types you need

**Guidelines for what to include from KubeVirt:**
- ✅ **Include:** `V1VirtualMachine*`, `V1alpha1*`, `V1beta1VirtualMachine*` (KubeVirt-specific)
- ✅ **Include:** Non-conflicting K8s helper types used by KubeVirt types
- ❌ **Exclude:** Types that exist in CDI (e.g., `V1beta1DataVolume*`, `V1beta1StorageSpec`)
- ❌ **Exclude:** Generic K8s types already exported from `kubernetes` or `containerized-data-importer`

---

## Local Testing

Before publishing, always test the package locally in a consuming project.

### Step 1: Build and Pack

```bash
# Clean previous build
npm run clean

# Build and create tarball
npm run build:pack

# This creates a file like: forklift-ui-types-1.0.0.tgz
```

### Step 2: Install in Your Test Project

```bash
# Navigate to your consuming project (e.g., forklift-console-plugin)
cd /path/to/your/project

# Install the local package
npm install /path/to/forklift-console-types/forklift-ui-types-1.0.0.tgz
```

### Step 3: Test Your Code

- Verify TypeScript compilation works
- Check that the types you updated are correct
- Test any new types you added

### Step 4: Clean Up

After testing, reinstall the published version:

```bash
# In your consuming project
npm install @forklift-ui/types
```

### Quick Test Command

For a quick smoke test, you can also check the build output:

```bash
# Build the package
npm run build

# Check that dist/ contains expected files
ls -la dist/
ls -la dist/generated/

# Verify TypeScript declarations were generated
head dist/index.d.ts
```

---

## Publishing

Publishing is **automated via GitHub Actions**. When you create a GitHub release, the package is automatically published to npm.

### Pre-release Checklist

- [ ] All update scripts ran successfully
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes
- [ ] Local testing in a consuming project works
- [ ] Version number bumped in `package.json`
- [ ] [Version Tracking](#version-tracking) table updated
- [ ] Changes committed and pushed to `main`

### Release Steps

1. **Bump version in `package.json`** and commit:
   ```bash
   # Edit package.json: "version": "1.0.1"
   git add package.json
   git commit -m "chore: bump version to 1.0.1"
   git push origin main
   ```

2. **Create a GitHub Release:**
   - Go to https://github.com/kubev2v/forklift-console-types/releases
   - Click **"Create new release"**
   - Tag: `v1.0.1` (must match package.json version with `v` prefix)
   - Title: `v1.0.1`
   - Description: List the changes
   - Click **"Publish release"**

3. **GitHub Actions will automatically:**
   - Build the package
   - Publish to npm with provenance

4. **Verify on npm:**
   - Check https://www.npmjs.com/package/@forklift-ui/types

### Manual Publishing (Fallback)

If automated publishing fails, you can publish manually:

```bash
npm run clean
npm run build
npm run lint
npm publish --access public
```

---

## Troubleshooting

### Build fails with "Duplicate identifier"

**Cause:** Export conflict between KubeVirt and CDI types

**Fix:** Update selective exports in `src/generated/index.ts`. See [Resolving Export Conflicts](#resolving-export-conflicts).

### Generated types have wrong ObjectMeta import

**Cause:** Forklift types reference local ObjectMeta instead of Kubernetes

**Fix:** The update-forklift.sh script should fix this automatically. If not, run:
```bash
cd src/generated/forklift
find ./models -type f -exec sed -i 's/\.\/IoK8sApimachineryPkgApisMetaV1ObjectMeta/\.\.\/\.\.\/kubernetes\/models\/IoK8sApimachineryPkgApisMetaV1ObjectMeta/g' {} +
```

### openapi-generator fails with validation errors

**Cause:** Upstream swagger spec may have issues

**Fix:** The scripts use `--skip-validate-spec` flag to handle this. If errors persist, check if the upstream spec URL is correct.

### Script fails with "command not found: npx"

**Cause:** Node.js/npm not installed or not in PATH

**Fix:** Ensure Node.js is installed and `npm install` has been run.

### curl fails to download spec

**Cause:** Network issues or incorrect URL

**Fix:** 
1. Check your internet connection
2. Verify the upstream repository still exists
3. Check if the branch/tag name is correct

### Types are missing after generation

**Cause:** index.ts wasn't regenerated properly

**Fix:** Ensure the index.ts in each `models/` folder exports all types. Check the update script ran completely.

---

## Version Tracking

Track which upstream versions are currently included. **Update this table after each update.**

| Source | Current Version | Last Updated | Updated By |
|--------|-----------------|--------------|------------|
| Forklift | main | 2026-JAN-21 | |
| Kubernetes | master | YYYY-MM-DD | |
| KubeVirt | main | YYYY-MM-DD | |
| CDI | main | YYYY-MM-DD | |

---

## Scripts Reference

| Script | Description |
|--------|-------------|
| `./scripts/update-forklift.sh [version]` | Update Forklift CRD types |
| `./scripts/update-kubernetes.sh [version]` | Update Kubernetes core types |
| `./scripts/update-kubevirt.sh [version]` | Update KubeVirt VM types |
| `./scripts/update-cdi.sh [version]` | Update CDI DataVolume types |
| `./scripts/check-conflicts.sh` | Detect export conflicts between KubeVirt and CDI |

All scripts accept an optional version argument (branch name or tag). Default is `main` or `master`.

