#!/usr/bin/env node

/**
 * Smart dev script that detects OS and runs appropriate command
 * Windows: uses dev:windows (excludes problematic services)
 * Other: uses standard dev
 */

const { spawn } = require("child_process");
const process = require("process");

const isWindows = process.platform === "win32";
const command = isWindows ? "dev:windows" : "dev:default";

console.log(`🖥️  Detected OS: ${process.platform}`);
console.log(`🚀 Running: bun ${command}\n`);

const child = spawn("bun", [command], {
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code);
});
