#!/usr/bin/env node
// 4. Create a small HTTP server using Node's HTTP module

const { createServer } = require('http');

const app = createServer((req, resp) => {
  resp.writeHead(200, { 'Content-Type': 'text/plain' });
  resp.end('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1', () => {
  console.log('HTTP server listening on port 1245');
});
