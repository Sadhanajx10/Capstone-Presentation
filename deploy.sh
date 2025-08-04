#!/bin/bash

echo "🚀 Starting deployment process..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Build the project
echo "🔨 Building project..."
npm run build

# Add cache-busting timestamp to index.html
echo "⏰ Adding cache-busting timestamp..."
TIMESTAMP=$(date +%s)
sed -i '' "s/<\/head>/<meta name=\"cache-bust\" content=\"$TIMESTAMP\"><\/head>/" dist/index.html

# Create a .nojekyll file to bypass GitHub Pages Jekyll processing
echo "📝 Creating .nojekyll file..."
touch dist/.nojekyll

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npx gh-pages -d dist --force

echo "✅ Deployment complete!"
echo "📅 Build timestamp: $TIMESTAMP"
echo "🔗 Your site should be available at: https://[your-username].github.io/Capstone-Presentation/"
echo ""
echo "💡 If changes don't appear immediately:"
echo "   1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)"
echo "   2. Clear browser cache"
echo "   3. Wait 5-10 minutes for GitHub Pages to update"
echo "   4. Check the Network tab in DevTools to ensure new files are loaded" 