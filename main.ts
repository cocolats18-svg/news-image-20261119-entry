// News-image entry for 19 November 2026 (Node 22, standard library only).
// The image is the entry.png beside this file; the program copies it to
// the output directory the grader gives it, deterministically.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The image itself is committed in this repository as entry.png (1024x1024,
// 19 November 2026 world news, drawn locally with Pillow from verified
// headlines). Copying it, byte for byte, is the whole program: no network,
// no randomness, so two runs write identical bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
