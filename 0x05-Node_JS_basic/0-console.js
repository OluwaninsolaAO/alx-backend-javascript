#!/usr/bin/env node
// 0. Executing basic javascript with Node JS

function displayMessage(str) {
  process.stdout.write(`${str}\n`);
}

module.exports = displayMessage;
