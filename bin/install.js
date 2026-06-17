#!/usr/bin/env node
// Installs the pyramid-principle skill into a Claude skills directory.
//   npx pyramid-principle-skill            -> ./.claude/skills/pyramid-principle/
//   npx pyramid-principle-skill --global   -> ~/.claude/skills/pyramid-principle/
const fs = require("fs");
const os = require("os");
const path = require("path");

const global = process.argv.includes("--global");
const base = global ? os.homedir() : process.cwd();
const dest = path.join(base, ".claude", "skills", "pyramid-principle");
const src = path.join(__dirname, "..", "SKILL.md");

fs.mkdirSync(dest, { recursive: true });
fs.copyFileSync(src, path.join(dest, "SKILL.md"));

console.log(`Installed pyramid-principle skill -> ${path.join(dest, "SKILL.md")}`);
console.log(global ? "Available in all projects." : "Available in this project. Use --global for all projects.");
