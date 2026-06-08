import sharp from 'sharp';
import fs from 'fs';

// Each entry renders an SVG card to a 1200x630 PNG for Open Graph sharing.
const images = [
  { svg: './public/og-image.svg', png: './public/og-image.png' },
  {
    svg: './public/blog/made-baskets/og-image.svg',
    png: './public/blog/made-baskets/og-image.png',
  },
];

try {
  for (const { svg, png } of images) {
    console.log(`Converting ${svg} → ${png} ...`);
    const svgBuffer = fs.readFileSync(svg);
    await sharp(svgBuffer).resize(1200, 630).png().toFile(png);
    console.log(`✅ ${png}`);
  }

  console.log('📐 Dimensions: 1200x630');
  console.log('🎯 Ready for Open Graph sharing!');
} catch (err) {
  console.error('❌ Error converting SVG to PNG:', err.message);
  process.exit(1);
}
