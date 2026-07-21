const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../storybook-static');
const dest = path.join(__dirname, '../public/storybook');

try {
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  fs.cpSync(src, dest, { recursive: true });
  console.log('Successfully copied storybook-static to public/storybook');
} catch (err) {
  console.error('Error copying storybook:', err);
  process.exit(1);
}
