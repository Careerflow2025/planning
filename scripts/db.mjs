#!/usr/bin/env node
/**
 * Supabase Database Management Utility
 * Full SQL execution via Management API (HTTPS, no IPv6 needed, no MCP).
 *
 * Usage:
 *   node scripts/db.mjs "SELECT * FROM assessment_types LIMIT 5"
 *   node scripts/db.mjs --file path/to/query.sql
 *   echo "SELECT 1" | node scripts/db.mjs --stdin
 */

const PROJECT_REF = process.env.SUPABASE_PROJECT_REF ?? 'qhjyfcmwzstmspquoabj';
const ACCESS_TOKEN = process.env.SUPABASE_ACCESS_TOKEN;
if (!ACCESS_TOKEN) {
  console.error('SUPABASE_ACCESS_TOKEN env var is required. Set it in .env.local and rerun.');
  process.exit(1);
}
const API_URL = `https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`;

import fs from 'fs';

async function executeSQL(query) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const text = await res.text();

  if (!res.ok) {
    console.error(`HTTP ${res.status}: ${text}`);
    process.exit(1);
  }

  try {
    const data = JSON.parse(text);
    if (Array.isArray(data) && data.length > 0) {
      console.table(data);
    } else if (Array.isArray(data) && data.length === 0) {
      console.log('(0 rows)');
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
    return data;
  } catch {
    console.log(text);
    return text;
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage:');
    console.log('  node scripts/db.mjs "SELECT * FROM table LIMIT 5"');
    console.log('  node scripts/db.mjs --file path/to/query.sql');
    process.exit(0);
  }

  let query;

  if (args[0] === '--file' && args[1]) {
    query = fs.readFileSync(args[1], 'utf8');
  } else if (args[0] === '--stdin') {
    query = fs.readFileSync(0, 'utf8');
  } else {
    query = args.join(' ');
  }

  await executeSQL(query);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
