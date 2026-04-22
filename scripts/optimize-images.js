import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const backupDir = path.join(publicDir, 'original-images');

// Create backup directory if it doesn't exist
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

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

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  for (const filename of imageFiles) {
    const inputPath = path.join(publicDir, filename);
    const backupPath = path.join(backupDir, filename);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${filename} - file not found`);
      continue;
    }

    try {
      // Backup original
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(inputPath, backupPath);
        console.log(`Backed up ${filename}`);
      }

      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;

      // Optimize image
      await sharp(inputPath)
        .png({ 
          quality: 80,
          compressionLevel: 9,
          progressive: true
        })
        .toFile(inputPath + '.tmp');

      // Replace original with optimized
      fs.renameSync(inputPath + '.tmp', inputPath);

      // Get new file size
      const newStats = fs.statSync(inputPath);
      const newSize = newStats.size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

      console.log(`✓ ${filename}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB (${reduction}% reduction)`);

    } catch (error) {
      console.error(`Error optimizing ${filename}:`, error.message);
    }
  }
  
  console.log('\nImage optimization complete!');
}

optimizeImages().catch(console.error);