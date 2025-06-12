#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the source .tasker directory from the package installation
const packageDir = path.dirname(__dirname);
const sourceDotTasker = path.join(packageDir, '.tasker');
const targetDotTasker = path.join(process.cwd(), '.tasker');

function copyFileSync(src, dest) {
  // Create destination directory if it doesn't exist
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Copy the file
  fs.copyFileSync(src, dest);
}

function copyDirectorySync(src, dest) {
  // Check if source exists
  if (!fs.existsSync(src)) {
    console.error(`Source directory does not exist: ${src}`);
    process.exit(1);
  }

  // Create destination directory
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read directory contents
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  console.log('🚀 Initializing AI Tasker...');

  // Check if .tasker already exists
  if (fs.existsSync(targetDotTasker)) {
    console.log('⚠️  .tasker directory already exists in this project.');
    console.log('   Remove it first if you want to reinitialize, or manually merge changes.');
    process.exit(0);
  }

  try {
    // Copy the .tasker directory
    copyDirectorySync(sourceDotTasker, targetDotTasker);
    
    console.log('✅ Successfully initialized AI Tasker!');
    console.log('');
    console.log('📁 Created .tasker/ directory with:');
    console.log('   • Configuration files');
    console.log('   • Workflow rules');  
    console.log('   • Document templates');
    console.log('');
    console.log('🎯 You can now use AI assistants with the .tasker rules for:');
    console.log('   • Creating PRDs');
    console.log('   • Analyzing codebases');
    console.log('   • Generating tasks');
    console.log('   • Implementing features');
    console.log('');
    console.log('📖 Check .tasker/README.md for more information.');
    
  } catch (error) {
    console.error('❌ Error initializing AI Tasker:', error.message);
    process.exit(1);
  }
}

// Show help message
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log('AI Tasker - Initialize AI-powered workflow assistant');
  console.log('');
  console.log('Usage:');
  console.log('  npx ai-tasker          Initialize .tasker folder in current directory');
  console.log('  npx ai-tasker --help   Show this help message');
  console.log('');
  console.log('This will create a .tasker directory with workflow rules and templates');
  console.log('for AI-assisted project management and development.');
  process.exit(0);
}

main(); 