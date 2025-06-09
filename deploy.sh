#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Create .nojekyll file
echo "📝 Creating .nojekyll file..."
touch build/.nojekyll

# Copy static files
echo "📋 Copying static files..."
cp public/404.html build/404.html
cp public/robots.txt build/robots.txt
cp public/sitemap.xml build/sitemap.xml

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed successfully!" 