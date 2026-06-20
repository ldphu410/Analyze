const fs = require('fs').promises;
const path = require('path');

async function readModuleGroups(mdPath) {
  const txt = await fs.readFile(mdPath, 'utf8');
  const lines = txt.split(/\r?\n/);
  const modules = {};
  let current = null;
  for (const l of lines) {
    const m = l.match(/^- \*\*(.+)\*\*/);
    if (m) { current = m[1].trim(); modules[current] = {pages: []}; continue; }
    const p = l.match(/- Pages: (.+)/);
    if (p && current) {
      const pages = p[1].split(',').map(s=>s.trim().replace(/Page\s*/i,'')).filter(Boolean);
      modules[current].pages = pages;
    }
  }
  return modules;
}

async function extractImagesFromPage(pageNum, pagesDir) {
  const p = path.join(pagesDir, `page-${pageNum}-ui.md`);
  try {
    const txt = await fs.readFile(p, 'utf8');
    const m = txt.match(/## Image references[\s\S]*?##/);
    let section = '';
    if (m) section = m[0];
    else {
      const idx = txt.indexOf('## Image references');
      if (idx >= 0) section = txt.slice(idx);
    }
    const images = [];
    const re = /^-\s*(.+)$/gm;
    let mm;
    while ((mm = re.exec(section)) !== null) {
      const val = mm[1].trim();
      if (val && !val.startsWith('(')) images.push(val);
    }
    return images;
  } catch (e) { return []; }
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const groupsPath = path.join(root, 'Result', 'module-groups.md');
  const pagesDir = path.join(root, 'Result', 'pages');
  const modulesDir = path.join(root, 'Result', 'modules');

  const modules = await readModuleGroups(groupsPath);

  for (const [modName, info] of Object.entries(modules)) {
    const imagesMap = {};
    for (const page of info.pages) {
      const imgs = await extractImagesFromPage(page, pagesDir);
      if (imgs.length) imagesMap[page] = imgs;
    }

    // prepare markdown block
    const lines = [];
    lines.push('## Image Analysis (auto-generated)');
    lines.push('');
    if (Object.keys(imagesMap).length === 0) {
      lines.push('- No image markers found for pages in this module.');
    } else {
      for (const [page, imgs] of Object.entries(imagesMap)) {
        lines.push(`- Page ${page}:`);
        for (const img of imgs) lines.push(`  - ${img}`);
      }
    }
    lines.push('');
    lines.push('> Note: review each image and fill UI Elements / Visual cues accordingly.');
    lines.push('');

    // write into module file (append if not present)
    const safeName = modName.toLowerCase().replace(/[^a-z0-9]+/g,'-');
    // find module file by scanning modulesDir for file whose first lines contain module title
    const files = await fs.readdir(modulesDir);
    let targetFile = null;
    for (const f of files) {
      const fp = path.join(modulesDir, f);
      const txt = await fs.readFile(fp, 'utf8');
      if (txt.includes(`# Module: ${modName}`) || f.toLowerCase().includes(safeName)) { targetFile = fp; break; }
    }
    if (!targetFile) {
      console.warn('Module file not found for', modName);
      continue;
    }

    let moduleTxt = await fs.readFile(targetFile, 'utf8');
    if (moduleTxt.includes('## Image Analysis (auto-generated)')) {
      // replace existing block
      moduleTxt = moduleTxt.replace(/## Image Analysis \(auto-generated\)[\s\S]*?> Note:[\s\S]*?(?=##|$)/, lines.join('\n'));
    } else {
      // append after Page liên quan section if exists
      const marker = '## Page liên quan';
      const idx = moduleTxt.indexOf(marker);
      if (idx >= 0) {
        // find end of that section (next '##')
        const rest = moduleTxt.slice(idx);
        const nextIdx = rest.indexOf('\n## ');
        if (nextIdx >= 0) {
          const insertPos = idx + nextIdx;
          moduleTxt = moduleTxt.slice(0, insertPos) + '\n' + lines.join('\n') + '\n' + moduleTxt.slice(insertPos);
        } else {
          moduleTxt = moduleTxt + '\n' + lines.join('\n');
        }
      } else {
        moduleTxt = moduleTxt + '\n' + lines.join('\n');
      }
    }

    await fs.writeFile(targetFile, moduleTxt, 'utf8');
    console.log('Updated module file:', targetFile);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
