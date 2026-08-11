/**
 * Landing page server.
 *
 * Serves the static Aurevia landing page (server/public) and exposes a
 * small health-check API that the landing page polls to find out when
 * aurevia-white (localhost:3001) and aurevia-black (localhost:3002) are
 * ready to receive traffic.
 */

const path = require('path');
const net = require('net');
const express = require('express');

const PORT = process.env.PORT || 3000;
const WHITE_PORT = process.env.WHITE_PORT || 3001;
const BLACK_PORT = process.env.BLACK_PORT || 3002;
const HEALTH_TIMEOUT_MS = 800;

const app = express();

/**
 * Checks whether something is listening on a given TCP port on localhost.
 * A plain TCP connect (rather than an HTTP request) is used deliberately:
 * it's fast, has no dependency on the target app's routes, and correctly
 * reports "up" as soon as the dev server has bound its port — which is
 * exactly the signal the landing page needs to unlock a button.
 */
function isPortOpen(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let settled = false;

    const finish = (result) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      resolve(result);
    };

    socket.setTimeout(HEALTH_TIMEOUT_MS);
    socket.once('connect', () => finish(true));
    socket.once('timeout', () => finish(false));
    socket.once('error', () => finish(false));
    socket.connect(port, '127.0.0.1');
  });
}

app.get('/api/health', async (req, res) => {
  const [white, black] = await Promise.all([
    isPortOpen(WHITE_PORT),
    isPortOpen(BLACK_PORT),
  ]);

  res.json({ white, black });
});

// Legacy endpoint referenced by the landing page's "PORTFOLIO" drawer.
// Kept as a harmless stub so the existing UI code doesn't need to change;
// wire this up to a real data source if/when a work list is needed.
app.get('/api/work-list', (req, res) => {
  res.json([]);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`[landing] http://localhost:${PORT}`);
});
