# Gumroad Automation

Automated Gumroad store setup for Passive Income Skills.

## ⚠️ Security Warning

**Never commit API credentials to Git.** This script uses environment variables.

## Setup

### 1. Set Environment Variable

```bash
export GUMROAD_ACCESS_TOKEN="LEwqzYzQgIXo9VTjw_El_rlecD4kGtRRryCC6jqVT5Q"
```

To make it permanent, add to `~/.bashrc` or `~/.zshrc`:
```bash
echo 'export GUMROAD_ACCESS_TOKEN="LEwqzYzQgIXo9VTjw_El_rlecD4kGtRRryCC6jqVT5Q"' >> ~/.bashrc
source ~/.bashrc
```

### 2. Run Setup

```bash
cd /root/.openclaw/workspace/gumroad-automation
./setup.sh
```

Or manually:
```bash
export GUMROAD_ACCESS_TOKEN="your_token"
npm install
node setup-gumroad.js
```

## What It Does

Creates 3 products on Gumroad:

1. **Content Creator Suite** ($49)
   - content-repurposer.skill
   - seo-content-engine.skill

2. **Freelancer Revenue Engine** ($79)
   - client-intake-bot.skill
   - proposal-generator.skill
   - invoice-tracker.skill

3. **Complete Business Stack** ($119)
   - All 8 skills

## After Setup

1. Log into https://gumroad.com/dashboard
2. Verify products created
3. Add product images
4. Set up payout method
5. Publish products

## API Reference

Uses Gumroad API v2:
- https://gumroad.com/api

## Files

- `setup-gumroad.js` - Main automation script
- `setup.sh` - Convenience runner
- `.env` - Not committed, for local use

## Troubleshooting

**"Token not set" error:**
- Make sure you exported the token
- Run `echo $GUMROAD_ACCESS_TOKEN` to verify

**"Product already exists" error:**
- Script will update existing products
- Or delete from Gumroad first

**Upload fails:**
- Check file paths exist
- Verify token has write permissions
