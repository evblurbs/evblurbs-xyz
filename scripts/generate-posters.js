import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Grabs a frame from each clip to use as its <video poster>. Without one,
// browsers paint a black box until the user hits play.
const clipDirs = [
  './public/blog/made-baskets/clips',
  './public/blog/ignore-everything-else/clips',
];

// Far enough in that the first frame has decoded, early enough to still be
// the opening shot.
const SEEK = '0.1';
const MAX_WIDTH = 960;

try {
  for (const dir of clipDirs) {
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.mp4'))) {
      const mp4 = path.join(dir, file);
      const jpg = mp4.replace(/\.mp4$/, '.jpg');
      console.log(`Extracting ${mp4} → ${jpg} ...`);
      execFileSync('ffmpeg', [
        '-y',
        '-v', 'error',
        '-ss', SEEK,
        '-i', mp4,
        '-frames:v', '1',
        '-vf', `scale='min(${MAX_WIDTH},iw)':-2`,
        '-q:v', '4',
        jpg,
      ]);
      console.log(`✅ ${jpg}`);
    }
  }

  console.log('🎬 Posters regenerated. Requires ffmpeg on PATH.');
} catch (err) {
  console.error('❌ Error extracting poster frames:', err.message);
  process.exit(1);
}
