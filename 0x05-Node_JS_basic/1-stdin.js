#!/usr/bin/env node
// 1. Using Process stdin

process.stdin.setEncoding('utf-8');
process.stdout.write('Welcome to Holberton School,what is your name?\n');

process.stdin.on('readable', () => {
  process.stdout.write(`Your name is: ${process.stdin.read()}`);
  process.exit();
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
