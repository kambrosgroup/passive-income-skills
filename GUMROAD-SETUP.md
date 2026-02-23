# Gumroad Manual Setup Guide

Since API automation is having issues, here's the fastest manual setup process.

## Step 1: Log Into Gumroad

Go to: https://gumroad.com/dashboard

## Step 2: Create Product 1 - Content Creator Suite

**Click "New Product"**

**Basic Info:**
- Name: `Content Creator Suite for OpenClaw`
- URL: `content-creator-openclaw`
- Price: `$49`

**Description:**
```
Turn one piece of content into many. The Content Creator Suite includes:

🔄 Content Repurposer - Transform blog posts into Twitter threads, LinkedIn posts, newsletters, and social snippets

🔍 SEO Content Engine - Complete SEO workflow from keyword research to ranking content

✅ Works with OpenClaw
✅ Lifetime updates included
✅ Instant download

Save 10+ hours per week on content creation.
```

**Files to Upload:**
1. `/root/.openclaw/workspace/content-repurposer.skill`
2. `/root/.openclaw/workspace/seo-content-engine.skill`

**Settings:**
- ✅ Allow customers to choose quantity: No
- ✅ Require shipping address: No
- ✅ Show on profile: Yes

**Custom Receipt:**
```
Thank you for purchasing the Content Creator Suite!

Your skills are ready for download. Install them with:
clawhub install content-repurposer
clawhub install seo-content-engine

Questions? Email kambrosgroup@gmail.com
```

---

## Step 3: Create Product 2 - Freelancer Revenue Engine

**Click "New Product"**

**Basic Info:**
- Name: `Freelancer Revenue Engine for OpenClaw`
- URL: `freelancer-revenue-openclaw`
- Price: `$79`

**Description:**
```
Automate your freelance business. The Revenue Engine includes:

🤖 Client Intake Bot - Qualify leads automatically with scoring and routing

📝 Proposal Generator - Create professional proposals from client briefs

💰 Invoice Tracker - Complete billing workflow with automated reminders

✅ Works with OpenClaw
✅ Lifetime updates included
✅ Instant download

Close more deals and get paid faster.
```

**Files to Upload:**
1. `/root/.openclaw/workspace/client-intake-bot.skill`
2. `/root/.openclaw/workspace/proposal-generator.skill`
3. `/root/.openclaw/workspace/invoice-tracker.skill`

---

## Step 4: Create Product 3 - Complete Business Stack

**Click "New Product"**

**Basic Info:**
- Name: `Complete Business Stack for OpenClaw`
- URL: `complete-business-openclaw`
- Price: `$119` (was $160)

**Description:**
```
The complete automation suite for service businesses. Includes all 8 skills:

✅ Content Repurposer ($25 value)
✅ SEO Content Engine ($35 value)
✅ Client Intake Bot ($30 value)
✅ Proposal Generator ($40 value)
✅ Invoice Tracker ($30 value)
✅ Simple Proposal Template (Free)
✅ Invoice Template (Free)
✅ Content Ideas Generator (Free)

💰 Best value - save $41 vs buying individually!
✅ Works with OpenClaw
✅ Lifetime updates included
✅ Priority support
✅ Instant download

Everything you need to automate your freelance business.
```

**Files to Upload:**
1. `/root/.openclaw/workspace/content-repurposer.skill`
2. `/root/.openclaw/workspace/seo-content-engine.skill`
3. `/root/.openclaw/workspace/client-intake-bot.skill`
4. `/root/.openclaw/workspace/proposal-generator.skill`
5. `/root/.openclaw/workspace/invoice-tracker.skill`
6. `/root/.openclaw/workspace/simple-proposal-template.skill`
7. `/root/.openclaw/workspace/invoice-template.skill`
8. `/root/.openclaw/workspace/content-ideas.skill`

---

## Step 5: Customize Product Pages

For each product, add:

### Cover Image
- Size: 1280x720 or 1920x1080
- Design: Gradient background with skill icons
- Text: Product name + price

### Thumbnail
- Size: 600x600
- Simple icon or logo

### Tags
- openclaw
- automation
- freelancer
- productivity
- business

---

## Step 6: Set Up Payouts

1. Go to **Settings → Payout Settings**
2. Connect:
   - **Stripe** (US, instant) OR
   - **PayPal** (global, instant) OR
   - **Payoneer** (international)
3. Verify your identity
4. Set payout schedule (weekly recommended)

---

## Step 7: Publish Products

1. Click **"Publish"** on each product
2. Copy the product URLs:
   - `https://gumroad.com/l/content-creator-openclaw`
   - `https://gumroad.com/l/freelancer-revenue-openclaw`
   - `https://gumroad.com/l/complete-business-openclaw`

---

## Step 8: Add to Your Website

Edit `/root/.openclaw/workspace/website/index.html`:

Find the bundle cards and update the buttons:

```html
<a href="https://gumroad.com/l/content-creator-openclaw" class="btn btn-primary">
  Buy Now - $49
</a>

<a href="https://gumroad.com/l/freelancer-revenue-openclaw" class="btn btn-primary">
  Buy Now - $79
</a>

<a href="https://gumroad.com/l/complete-business-openclaw" class="btn btn-primary">
  Buy Now - $119
</a>
```

Then commit and push:
```bash
cd /root/.openclaw/workspace/website
git add -A
git commit -m "Add Gumroad buy links"
git push
```

---

## Step 9: Launch!

Post on:
- Twitter/X
- LinkedIn
- IndieHackers
- Reddit r/freelance

Use content from `ANNOUNCEMENTS.md`

---

## Expected Timeline

- Setup: 30 minutes
- First sale: 24-48 hours
- First payout: 7 days (weekly schedule)

---

## Support

Gumroad help: https://help.gumroad.com
Email: kambrosgroup@gmail.com

---

**Ready? Start at https://gumroad.com/dashboard**
