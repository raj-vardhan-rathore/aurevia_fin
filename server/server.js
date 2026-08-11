/**
 * Landing page server.
 *
 * Serves the static Aurevia landing page.
 */

const path = require('path');
const net = require('net');
const express = require('express');

const PORT = process.env.PORT || 3000;

const IS_PRODUCTION =
  process.env.NODE_ENV === 'production' ||
  process.env.AUREVIA_ENV === 'production';

const WHITE_PORT = process.env.WHITE_PORT || 3001;
const BLACK_PORT = process.env.BLACK_PORT || 3002;
const HEALTH_TIMEOUT_MS = 800;

const app = express();

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
  if (IS_PRODUCTION) {
    return res.json({
      ok: true,
      production: true,
      white: true,
      black: true,
    });
  }

  const [white, black] = await Promise.all([
    isPortOpen(WHITE_PORT),
    isPortOpen(BLACK_PORT),
  ]);

  return res.json({
    ok: true,
    production: false,
    white,
    black,
  });
});

app.get('/api/work-list', (req, res) => {
  res.json([]);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[landing] running on port ${PORT}`);
});