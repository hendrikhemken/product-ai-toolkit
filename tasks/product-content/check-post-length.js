#!/usr/bin/env node

/**
 * LinkedIn Post Length Checker
 * Zählt nur den eigentlichen Post-Content (ohne Meta/Frontmatter)
 * Max: 3000 Zeichen
 */

const fs = require('fs');
const path = require('path');

// Post-Datei als Argument
const filePath = process.argv[2];

if (!filePath) {
  console.error('❌ Bitte Post-Datei angeben:');
  console.error('   node check-post-length.js 2025-10-15-topic.md');
  process.exit(1);
}

if (!fs.existsSync(filePath)) {
  console.error(`❌ Datei nicht gefunden: ${filePath}`);
  process.exit(1);
}

// Datei lesen
const content = fs.readFileSync(filePath, 'utf-8');

// Post-Content extrahieren (zwischen ## DRAFT und ## CONTENT ANALYSIS)
const draftMatch = content.match(/## DRAFT.*?\n\n([\s\S]*?)(?=\n##|$)/);

if (!draftMatch) {
  console.error('❌ Kein DRAFT-Section gefunden in der Datei');
  console.error('   Erwartet: ## DRAFT v1 oder ## DRAFT');
  process.exit(1);
}

const postContent = draftMatch[1].trim();
const charCount = postContent.length;
const limit = 3000;

// Output
console.log('📊 LinkedIn Post Length Check');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📄 Datei: ${path.basename(filePath)}`);
console.log(`📝 Zeichen: ${charCount} / ${limit}`);

if (charCount <= limit) {
  const remaining = limit - charCount;
  console.log(`✅ Post ist OK! (${remaining} Zeichen übrig)`);
  process.exit(0);
} else {
  const excess = charCount - limit;
  console.log(`❌ Post ist ZU LANG! (${excess} Zeichen zu viel)`);
  console.log(`\n💡 Tipp: Kürzen um ~${Math.ceil(excess / 50)} Absätze`);
  process.exit(1);
}
