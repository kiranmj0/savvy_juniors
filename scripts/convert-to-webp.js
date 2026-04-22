import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

const imageFiles = [
  '45Days.png',
  '6months.png', 
  'AboutUs.png',
  'AboutUScreenPic.png',
  'AdmissionPic.png',
  'AdmissionScreenPic.png',
  'contactPic.png',
  'fiveyear.png',
  'HomePic.png',
  'oneyear.png',
  'programsPic.png',
  'twoyear.png'
];

async function convertToWebP() {
  console.log('Converting images to WebP format...');
  
  for (const filename of imageFiles) {
    const inputPath = path.join(publicDir, filename);
    const webpPath = path.join(publicDir, filename.replace('.png', '.webp'));
    
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${filename} - file not found`);
      continue;
    }

    try {
      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;

      // Convert to WebP
      await sharp(inputPath)
        .webp({ 
          quality: 85,
          effort: 6
        })
        .toFile(webpPath);

      // Get new file size
      const newStats = fs.statSync(webpPath);
      const newSize = newStats.size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

      console.log(`✓ ${filename} → ${filename.replace('.png', '.webp')}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB (${reduction}% reduction)`);

    } catch (error) {
      console.error(`Error converting ${filename}:`, error.message);
    }
  }
  
  console.log('\nWebP conversion complete!');
  console.log('Note: Update your image references to use .webp files for modern browsers');
}

convertToWebP().catch(console.error);