/**
 * Serves a pre-built single-page-app (e.g. a Create React App "build"
 * folder) as a standalone site on a fixed port.
 *
 * Why this exists: aurevia-white's build was produced with
 * package.json "homepage": "/aurevia-white", so its compiled
 * index.html references assets as "/aurevia-white/static/...".
 * To run it standalone at http://localhost:3001 (root), those
 * references are rewritten to "/..." before the HTML is served.
 * The physical files under build/static/ are untouched — only the
 * in-memory copy of index.html sent to the browser is rewritten.
 *
 * Usage:
 *   node scripts/serve-static-app.js --dir <buildDir> --port <port> [--strip-prefix </prefix>] [--name <label>]
 */

const path = require('path');
const fs = require('fs');
const express = require('express');

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const value = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true;
      args[key] = value;
      if (value !== true) i += 1;
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

if (!args.dir || !args.port) {
  console.error('Usage: node serve-static-app.js --dir <buildDir> --port <port> [--strip-prefix </prefix>] [--name <label>]');
  process.exit(1);
}

const BUILD_DIR = path.resolve(process.cwd(), args.dir);
const PORT = Number(args.port);
const STRIP_PREFIX = args['strip-prefix'] || null; // e.g. "/aurevia-white"
const NAME = args.name || 'app';
const INDEX_PATH = path.join(BUILD_DIR, 'index.html');

if (!fs.existsSync(INDEX_PATH)) {
  console.error(`[${NAME}] No build found at ${INDEX_PATH}.`);
  console.error(`[${NAME}] Run "npm run build" in this app's directory first.`);
  process.exit(1);
}

function loadIndexHtml() {
  let html = fs.readFileSync(INDEX_PATH, 'utf8');
  if (STRIP_PREFIX) {
    html = html.split(STRIP_PREFIX + '/').join('/');
  }
  return html;
}

const app = express();

// Serve the actual build output (JS/CSS/media) as-is; the files
// themselves already live at /static/..., only index.html's
// references needed rewriting.
app.use(express.static(BUILD_DIR, { index: false }));

// SPA fallback: any other route gets the (rewritten) index.html.
app.get('*', (req, res) => {
  res.type('html').send(loadIndexHtml());
});

app.listen(PORT, () => {
  console.log(`[${NAME}] http://localhost:${PORT}`);
});
