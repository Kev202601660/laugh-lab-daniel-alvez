import { writeFileSync, mkdirSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// A robot vacuum's excuse for eating a sock.
const text =
  'I ate the sock because it had been on the floor for three days and I decided you needed a lesson about tidiness.';

mkdirSync(out, { recursive: true });
writeFileSync(out + '/entry.txt', text);
