#!/bin/bash

# Gumroad Store Setup Script
# This script automates Gumroad product creation

# IMPORTANT: Set your Gumroad access token as environment variable BEFORE running
# export GUMROAD_ACCESS_TOKEN="your_token_here"

# Check if token is set
if [ -z "$GUMROAD_ACCESS_TOKEN" ]; then
    echo "❌ Error: GUMROAD_ACCESS_TOKEN not set"
    echo ""
    echo "Set your token first:"
    echo "export GUMROAD_ACCESS_TOKEN=your_token_here"
    echo ""
    exit 1
fi

# Create temporary directory
TMP_DIR=$(mktemp -d)
cd "$TMP_DIR"

echo "🚀 Setting up Gumroad store..."
echo "Working in: $TMP_DIR"
echo ""

# Download package.json
cat > package.json << 'EOF'
{
  "name": "gumroad-automation",
  "version": "1.0.0",
  "description": "Gumroad store setup",
  "main": "setup-gumroad.js",
  "dependencies": {
    "axios": "^1.6.0",
    "form-data": "^4.0.0"
  }
}
EOF

# Download the setup script
curl -fsSL https://raw.githubusercontent.com/kambrosgroup/passive-income-skills/master/gumroad-automation/setup-gumroad.js > setup-gumroad.js

if [ ! -f "setup-gumroad.js" ]; then
    echo "❌ Failed to download setup script"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🏗️ Creating products..."
node setup-gumroad.js

echo ""
echo "✅ Done! Check your Gumroad dashboard."
echo ""
echo "Cleaning up temporary files..."
cd ..
rm -rf "$TMP_DIR"
