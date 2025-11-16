const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment to GitHub Pages...\n');

// Build output directory
const distDir = path.join(__dirname, 'dist/bos-meubels/browser');
const publicDir = path.join(__dirname, 'public');

// Step 1: Build the application
console.log('📦 Building application for production...\n');
try {
  execSync('npm run build:gh-pages', { stdio: 'inherit' });
  console.log('\n✅ Build completed successfully!\n');
} catch (error) {
  console.error('\n❌ Build failed. Please fix the errors and try again.');
  process.exit(1);
}

// Check if dist directory exists after build
if (!fs.existsSync(distDir)) {
  console.error('❌ Build directory not found after build. Build may have failed.');
  process.exit(1);
}

// Copy 404.html to dist directory for GitHub Pages routing
const source404 = path.join(publicDir, '404.html');
const dest404 = path.join(distDir, '404.html');

if (fs.existsSync(source404)) {
  fs.copyFileSync(source404, dest404);
  console.log('✅ Copied 404.html for GitHub Pages routing');
} else {
  console.warn('⚠️  404.html not found in public directory');
}

// Check if gh-pages branch exists
try {
  execSync('git ls-remote --heads origin gh-pages', { stdio: 'ignore' });
  console.log('✅ gh-pages branch exists');
} catch (error) {
  console.log('📝 Creating gh-pages branch...');
}

// Get current branch
let currentBranch;
try {
  currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
} catch (error) {
  console.error('❌ Not a git repository. Please initialize git first.');
  process.exit(1);
}

// Switch to gh-pages branch or create it
try {
  execSync('git checkout gh-pages 2>/dev/null || git checkout -b gh-pages', { stdio: 'inherit', shell: true });
} catch (error) {
  console.log('📝 Creating gh-pages branch...');
  try {
    execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });
  } catch (e) {
    // Branch might already exist
  }
}

// Remove all files except .git
try {
  execSync('git rm -rf .', { stdio: 'inherit' });
} catch (error) {
  // Ignore if already clean
}

// Copy dist files to root
console.log('📦 Copying build files...');
const files = fs.readdirSync(distDir);
files.forEach(file => {
  const sourcePath = path.join(distDir, file);
  const destPath = path.join(__dirname, file);
  
  if (fs.statSync(sourcePath).isDirectory()) {
    copyRecursiveSync(sourcePath, destPath);
  } else {
    fs.copyFileSync(sourcePath, destPath);
  }
});

console.log('✅ Files copied');

// Add all files
execSync('git add .', { stdio: 'inherit' });

// Check if there are changes
try {
  const status = execSync('git status --porcelain', { encoding: 'utf-8' });
  if (!status.trim()) {
    console.log('ℹ️  No changes to deploy');
    execSync(`git checkout ${currentBranch}`, { stdio: 'inherit' });
    process.exit(0);
  }
} catch (error) {
  // Continue with commit
}

// Commit
const commitMessage = process.env.COMMIT_MESSAGE || 'Deploy to GitHub Pages';
try {
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  console.log('✅ Changes committed');
} catch (error) {
  console.log('⚠️  No changes to commit');
}

// Push to gh-pages branch
console.log('📤 Pushing to GitHub Pages...');
try {
  execSync('git push origin gh-pages --force', { stdio: 'inherit' });
  console.log('\n✅ Successfully deployed to GitHub Pages!');
  console.log('🌐 Your site should be live in a few minutes at:');
  console.log('   https://[your-username].github.io/[repository-name]/');
} catch (error) {
  console.error('❌ Failed to push to GitHub. Make sure you have push access.');
  process.exit(1);
}

// Switch back to original branch
execSync(`git checkout ${currentBranch}`, { stdio: 'inherit' });
console.log(`\n✅ Switched back to ${currentBranch} branch`);

// Helper function to copy directories recursively
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

