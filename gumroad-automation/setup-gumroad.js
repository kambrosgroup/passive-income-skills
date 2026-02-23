const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Gumroad API configuration
// Store these in environment variables in production
const GUMROAD_ACCESS_TOKEN = process.env.GUMROAD_ACCESS_TOKEN;
const BASE_URL = 'https://api.gumroad.com/v2';

// Product configurations
const PRODUCTS = [
  {
    name: 'Content Creator Suite for OpenClaw',
    slug: 'content-creator-openclaw',
    price: 4900, // cents
    description: `Turn one piece of content into many. The Content Creator Suite includes:

🔄 Content Repurposer - Transform blog posts into Twitter threads, LinkedIn posts, newsletters, and social snippets

🔍 SEO Content Engine - Complete SEO workflow from keyword research to ranking content

Save 10+ hours per week on content creation.`,
    file: 'content-repurposer.skill',
    custom_fields: []
  },
  {
    name: 'Freelancer Revenue Engine for OpenClaw',
    slug: 'freelancer-revenue-openclaw',
    price: 7900, // cents
    description: `Automate your freelance business. The Revenue Engine includes:

🤖 Client Intake Bot - Qualify leads automatically with scoring and routing

📝 Proposal Generator - Create professional proposals from client briefs

💰 Invoice Tracker - Complete billing workflow with automated reminders

Close more deals and get paid faster.`,
    file: null, // Multiple files handled separately
    custom_fields: []
  },
  {
    name: 'Complete Business Stack for OpenClaw',
    slug: 'complete-business-openclaw',
    price: 11900, // cents
    description: `The complete automation suite for service businesses. Includes all 8 skills:

✅ Content Repurposer
✅ SEO Content Engine
✅ Client Intake Bot
✅ Proposal Generator
✅ Invoice Tracker
✅ Simple Proposal Template
✅ Invoice Template
✅ Content Ideas Generator

Best value - save $41 vs buying individually.`,
    file: null, // Bundle - all files
    custom_fields: []
  }
];

// API client
const gumroadAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${GUMROAD_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

// Create a product
async function createProduct(product) {
  try {
    console.log(`Creating product: ${product.name}...`);
    
    const response = await gumroadAPI.post('/products', {
      name: product.name,
      slug: product.slug,
      price: product.price,
      description: product.description,
      custom_fields: product.custom_fields,
      shown_on_profile: true,
      custom_receipt: 'Thank you for your purchase! Download your skills below.',
      custom_summary: 'OpenClaw skills for business automation'
    });
    
    console.log(`✅ Created: ${response.data.product.short_url}`);
    return response.data.product;
  } catch (error) {
    if (error.response?.data?.message?.includes('already exists')) {
      console.log(`⚠️ Product ${product.slug} already exists, updating...`);
      return updateProduct(product);
    }
    console.error(`❌ Failed to create ${product.name}:`, error.response?.data || error.message);
    return null;
  }
}

// Update a product
async function updateProduct(product) {
  try {
    const response = await gumroadAPI.put(`/products/${product.slug}`, {
      name: product.name,
      price: product.price,
      description: product.description
    });
    console.log(`✅ Updated: ${response.data.product.short_url}`);
    return response.data.product;
  } catch (error) {
    console.error(`❌ Failed to update ${product.name}:`, error.response?.data || error.message);
    return null;
  }
}

// Upload file to product
async function uploadFile(productId, filePath) {
  try {
    console.log(`Uploading ${path.basename(filePath)}...`);
    
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));
    
    const response = await axios.post(`${BASE_URL}/products/${productId}/files`, form, {
      headers: {
        ...form.getHeaders(),
        'Authorization': `Bearer ${GUMROAD_ACCESS_TOKEN}`
      }
    });
    
    console.log(`✅ Uploaded: ${path.basename(filePath)}`);
    return response.data;
  } catch (error) {
    console.error(`❌ Failed to upload ${path.basename(filePath)}:`, error.response?.data || error.message);
    return null;
  }
}

// Enable product
async function enableProduct(productId) {
  try {
    await gumroadAPI.post(`/products/${productId}/enable`);
    console.log(`✅ Product enabled`);
  } catch (error) {
    console.error(`❌ Failed to enable product:`, error.response?.data || error.message);
  }
}

// Main automation
async function setupGumroadStore() {
  console.log('🚀 Setting up Gumroad store...\n');
  
  if (!GUMROAD_ACCESS_TOKEN) {
    console.error('❌ GUMROAD_ACCESS_TOKEN not set in environment variables');
    console.log('Set it with: export GUMROAD_ACCESS_TOKEN=your_token');
    process.exit(1);
  }
  
  const results = [];
  
  for (const product of PRODUCTS) {
    // Create/update product
    const created = await createProduct(product);
    if (!created) continue;
    
    // Upload files
    const skillDir = '/root/.openclaw/workspace';
    
    if (product.slug === 'content-creator-openclaw') {
      await uploadFile(created.id, path.join(skillDir, 'content-repurposer.skill'));
      await uploadFile(created.id, path.join(skillDir, 'seo-content-engine.skill'));
    } else if (product.slug === 'freelancer-revenue-openclaw') {
      await uploadFile(created.id, path.join(skillDir, 'client-intake-bot.skill'));
      await uploadFile(created.id, path.join(skillDir, 'proposal-generator.skill'));
      await uploadFile(created.id, path.join(skillDir, 'invoice-tracker.skill'));
    } else if (product.slug === 'complete-business-openclaw') {
      // Upload all 8 skills
      const skills = [
        'content-repurposer.skill',
        'seo-content-engine.skill',
        'client-intake-bot.skill',
        'proposal-generator.skill',
        'invoice-tracker.skill',
        'simple-proposal-template.skill',
        'invoice-template.skill',
        'content-ideas.skill'
      ];
      for (const skill of skills) {
        await uploadFile(created.id, path.join(skillDir, skill));
      }
    }
    
    // Enable product
    await enableProduct(created.id);
    
    results.push({
      name: product.name,
      url: created.short_url,
      price: `$${product.price / 100}`
    });
    
    console.log('');
  }
  
  // Summary
  console.log('\n📊 Setup Complete!\n');
  console.log('Your products:');
  results.forEach(r => {
    console.log(`  • ${r.name} - ${r.price}`);
    console.log(`    ${r.url}`);
  });
  
  console.log('\n📝 Next steps:');
  console.log('  1. Log into Gumroad and verify products');
  console.log('  2. Customize product pages with images');
  console.log('  3. Set up payout method (Settings → Payouts)');
  console.log('  4. Share your product links!');
}

// Run
setupGumroadStore().catch(console.error);
