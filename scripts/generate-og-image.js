import sharp from 'sharp';
import fs from 'fs';

try {
  console.log('Converting SVG to PNG...');
  
  // Read the SVG file
  const svgBuffer = fs.readFileSync('./public/og-image.svg');
  
  // Convert SVG to PNG with exact dimensions
  await sharp(svgBuffer)
    .resize(1200, 630)
    .png()
    .toFile('./public/og-image.png');
    
  console.log('✅ Successfully converted og-image.svg to og-image.png');
  console.log('📐 Dimensions: 1200x630');
  console.log('🎯 Ready for Open Graph sharing!');
  
} catch (err) {
  console.error('❌ Error converting SVG to PNG:', err.message);
  process.exit(1);
}
