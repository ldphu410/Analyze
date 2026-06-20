const fs = require('fs').promises;
const path = require('path');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const res = path.resolve(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(res));
    else files.push(res);
  }
  return files;
}

function extractImages(text) {
  const re = /<<\[(.+?)\]>>/g;
  const images = [];
  let m;
  while ((m = re.exec(text)) !== null) images.push(m[1]);
  return images;
}

function pageNumberFromPath(p) {
  const m = p.match(/Page\s*(\d+)/i);
  return m ? m[1] : null;
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const req = path.join(root, 'Requirement');
  const outDir = path.join(root, 'Result', 'pages');
  await fs.mkdir(outDir, { recursive: true });

  const all = await walk(req).catch(() => []);
  const contentFiles = all.filter(f => f.endsWith('content.text'));

  for (const f of contentFiles) {
    const raw = await fs.readFile(f, 'utf8');
    const images = extractImages(raw);
    const pageNum = pageNumberFromPath(f) || 'unknown';
    const preview = raw.split('\n').slice(0, 20).join('\n');

    const relReqPath = path.relative(root, f).replace(/\\/g, '/');
    const md = [];
    md.push(`# Page ${pageNum} - UI Analysis (auto-generated)`);
    md.push('');
    md.push(`Source: ${relReqPath}`);
    md.push('');
    md.push('## Content preview');
    md.push('```text');
    md.push(preview);
    md.push('```');
    md.push('');
    md.push('## Image references');
    if (images.length === 0) md.push('- (no image markers found)');
    else {
      for (const img of images) md.push(`- ${img}`);
    }
    md.push('');
    md.push('## UI Elements (to fill)');
    md.push('- Buttons:');
    md.push('- Tables / columns:');
    md.push('- Side panels / modals shown:');
    md.push('- Fields / forms:');
    md.push('- Visual cues (badges, colors):');
    md.push('');
    md.push('## Hidden requirements & edge cases (to fill)');
    md.push('- ');
    md.push('');
    md.push('## Suggested FE tasks (to fill)');
    md.push('- [UI][..] Component: ... Est: ..d');
    md.push('');
    md.push('## Notes');
    md.push('- Use images under the same `Page` folder for visual reference.');

    const outPath = path.join(outDir, `page-${pageNum}-ui.md`);
    await fs.writeFile(outPath, md.join('\n'));
  }

  console.log('Generated per-page UI analysis files in Result/pages');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
