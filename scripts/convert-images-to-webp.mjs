import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const SOURCE_DIRS = [path.join(ROOT, "app"), path.join(ROOT, "hooks")];
const SOURCE_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx", ".css", ".mjs", ".json", ".md"]);
const RASTER_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".avif"]);

function toPosixPath(value) {
  return value.split(path.sep).join("/");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function walkFiles(dir, collector = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkFiles(fullPath, collector);
      continue;
    }
    collector.push(fullPath);
  }
  return collector;
}

async function convertImages() {
  const files = await walkFiles(PUBLIC_DIR);
  const converted = [];
  const skipped = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!RASTER_EXTENSIONS.has(ext)) continue;

    const output = file.slice(0, -ext.length) + ".webp";

    try {
      await sharp(file)
        .webp({ quality: 80, effort: 6 })
        .toFile(output);
    } catch (error) {
      skipped.push({ file, reason: error.message });
      continue;
    }

    const relOld = toPosixPath(path.relative(PUBLIC_DIR, file));
    const relNew = relOld.replace(/\.(png|jpg|jpeg|avif)$/i, ".webp");

    converted.push({ relOld, relNew });
  }

  return { converted, skipped };
}

function buildReplaceMap(converted) {
  const map = new Map();

  for (const { relOld, relNew } of converted) {
    const encodedOld = encodeURI(relOld);
    const encodedNew = encodeURI(relNew);
    const slashEncodedOld = relOld.split("/").map(encodeURIComponent).join("%2F");
    const slashEncodedNew = relNew.split("/").map(encodeURIComponent).join("%2F");

    map.set(`/${relOld}`, `/${relNew}`);
    map.set(`/${encodedOld}`, `/${encodedNew}`);
    map.set(relOld, relNew);
    map.set(encodedOld, encodedNew);
    map.set(`../public/${relOld}`, `../public/${relNew}`);
    map.set(`../public/${encodedOld}`, `../public/${encodedNew}`);
    map.set(slashEncodedOld, slashEncodedNew);
  }

  return map;
}

async function updateSourceReferences(converted) {
  const replaceMap = buildReplaceMap(converted);
  const sourceFiles = [];
  const updatedFiles = [];

  for (const dir of SOURCE_DIRS) {
    try {
      const files = await walkFiles(dir);
      for (const file of files) {
        if (SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase())) {
          sourceFiles.push(file);
        }
      }
    } catch {
      // Skip missing source directories.
    }
  }

  for (const file of sourceFiles) {
    const before = await fs.readFile(file, "utf8");
    let after = before;

    for (const [from, to] of replaceMap) {
      if (!after.includes(from)) continue;
      after = after.replace(new RegExp(escapeRegExp(from), "g"), to);
    }

    if (after !== before) {
      await fs.writeFile(file, after, "utf8");
      updatedFiles.push(toPosixPath(path.relative(ROOT, file)));
    }
  }

  return updatedFiles;
}

async function main() {
  const { converted, skipped } = await convertImages();
  const updatedFiles = await updateSourceReferences(converted);

  console.log(`Converted ${converted.length} images to WebP.`);
  console.log(`Skipped ${skipped.length} images.`);
  if (skipped.length > 0) {
    skipped.forEach(({ file }) => {
      console.log(`Skipped: ${toPosixPath(path.relative(ROOT, file))}`);
    });
  }
  console.log(`Updated ${updatedFiles.length} source files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
