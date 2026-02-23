#!/bin/bash

# Gumroad Store Setup Script
# This script automates Gumroad product creation

# IMPORTANT: Set your Gumroad access token as environment variable
# export GUMROAD_ACCESS_TOKEN="your_token_here"

# Check if token is set
if [ -z "$GUMROAD_ACCESS_TOKEN" ]; then
    echo "❌ Error: GUMROAD_ACCESS_TOKEN not set"
    echo ""
    echo "Set your token with:"
    echo "export GUMROAD_ACCESS_TOKEN=your_token_here"
    echo ""
    echo "Then run this script again."
    exit 1
fi

echo "🚀 Setting up Gumroad store..."
echo ""

# Navigate to automation directory
cd "$(dirname "$0")"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run setup
echo "🏗️ Creating products..."
node setup-gumroad.js

echo ""
echo "✅ Done! Check your Gumroad dashboard."
