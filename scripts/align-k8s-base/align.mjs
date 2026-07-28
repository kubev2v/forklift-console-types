#!/usr/bin/env node
/**
 * Align generated K8s base types with @openshift/api-types.
 *
 * 1. Write ObjectMeta / ManagedFieldsEntry shims from templates
 * 2. Convert remaining Date timestamp fields under src/generated to string
 *
 * Usage: node ./scripts/align-k8s-base/align.mjs
 *        npm run align:k8s-base
 *
 * Safe to run multiple times (idempotent). Uses only Node built-ins.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SCRIPT_DIR = __dirname;
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, '../..');
const GENERATED_DIR = path.join(PROJECT_ROOT, 'src', 'generated');
const TEMPLATES_DIR = path.join(SCRIPT_DIR, 'templates');

const OBJECT_META_TEMPLATE = fs.readFileSync(
  path.join(TEMPLATES_DIR, 'ObjectMeta.ts.template'),
  'utf8',
);
const MANAGED_FIELDS_TEMPLATE = fs.readFileSync(
  path.join(TEMPLATES_DIR, 'ManagedFieldsEntry.ts.template'),
  'utf8',
);

const SHIMS = [
  {
    relativePath: 'kubernetes/models/IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts',
    typeName: 'IoK8sApimachineryPkgApisMetaV1ObjectMeta',
    template: OBJECT_META_TEMPLATE,
    kind: 'ObjectMeta',
  },
  {
    relativePath: 'kubernetes/models/IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry.ts',
    typeName: 'IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry',
    template: MANAGED_FIELDS_TEMPLATE,
    kind: 'ManagedFieldsEntry',
  },
  {
    relativePath: 'kubevirt/models/K8sIoApimachineryPkgApisMetaV1ObjectMeta.ts',
    typeName: 'K8sIoApimachineryPkgApisMetaV1ObjectMeta',
    template: OBJECT_META_TEMPLATE,
    kind: 'ObjectMeta',
  },
  {
    relativePath: 'kubevirt/models/K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry.ts',
    typeName: 'K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry',
    template: MANAGED_FIELDS_TEMPLATE,
    kind: 'ManagedFieldsEntry',
  },
  {
    relativePath: 'containerized-data-importer/models/V1ObjectMeta.ts',
    typeName: 'V1ObjectMeta',
    template: OBJECT_META_TEMPLATE,
    kind: 'ObjectMeta',
  },
  {
    relativePath: 'containerized-data-importer/models/V1ManagedFieldsEntry.ts',
    typeName: 'V1ManagedFieldsEntry',
    template: MANAGED_FIELDS_TEMPLATE,
    kind: 'ManagedFieldsEntry',
  },
];

function renderTemplate(template, typeName) {
  return template.split('{{TYPE_NAME}}').join(typeName);
}

function writeShim({ relativePath, typeName, template, kind }) {
  const filePath = path.join(GENERATED_DIR, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, renderTemplate(template, typeName), 'utf8');
  const alias = kind === 'ObjectMeta' ? 'ObjectMetadata' : 'ManagedFieldsEntry';
  console.log(`  ✓ src/generated/${relativePath}: ${kind} shim → ${alias}`);
}

function walkTsFiles(dir, files = []) {
  if (!fs.existsSync(dir)) {
    return files;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkTsFiles(fullPath, files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'runtime.ts') {
      files.push(fullPath);
    }
  }

  return files;
}

function convertDateTimestamps(content) {
  let next = content;

  // Optional fields first, then required (order matters)
  next = next.split('?: Date;').join('?: string;');
  next = next.split(': Date;').join(': string;');
  next = next.split('[key: string]: Date;').join('[key: string]: string;');
  next = next.split('@type {Date}').join('@type {string}');
  next = next.split('@type {{ [key: string]: Date; }}').join('@type {{ [key: string]: string; }}');

  // FromJSON: (new Date(json['FIELD'])) → json['FIELD']
  next = next.replace(/\(new Date\(json\['([^']+)'\]\)\)/g, "json['$1']");

  // ToJSON: ((value['FIELD']).toISOString()) → value['FIELD']
  next = next.replace(/\(\(value\['([^']+)'\]\)\.toISOString\(\)\)/g, "value['$1']");

  return next;
}

function fixTimestampFile(filePath) {
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = convertDateTimestamps(original);

  if (updated === original) {
    return false;
  }

  fs.writeFileSync(filePath, updated, 'utf8');
  console.log(`  ✓ ${relativePath}: Date types → string`);
  return true;
}

console.log('========================================');
console.log('Aligning K8s base types');
console.log('========================================');
console.log('');

console.log('Writing ObjectMeta / ManagedFieldsEntry shims...');
for (const shim of SHIMS) {
  writeShim(shim);
}

console.log('');
console.log('Converting remaining Date timestamp fields to string...');

const tsFiles = walkTsFiles(GENERATED_DIR);
let fixedCount = 0;
for (const filePath of tsFiles) {
  if (fixTimestampFile(filePath)) {
    fixedCount += 1;
  }
}

console.log('');
console.log('========================================');
console.log('Shims written (6 files)');
if (fixedCount > 0) {
  console.log(`Fixed timestamp types in ${fixedCount} file(s)`);
} else {
  console.log('No additional Date→string fixes needed');
}
console.log('========================================');
