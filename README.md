# Passive Income Skill Stack — README

## 🌐 Website

**[View Live Website →](https://kambrosgroup.github.io/passive-income-skills-website/)**

## What This Is

A complete business automation suite for OpenClaw consisting of 5 premium skills designed to help freelancers, consultants, and service businesses automate their marketing, sales, and billing workflows.

## The Skills

| Skill | Description | Price |
|-------|-------------|-------|
| **content-repurposer** | Transform long-form content into social posts, newsletters, threads | $25 |
| **seo-content-engine** | End-to-end SEO content workflow: research → outline → draft | $35 |
| **client-intake-bot** | Automated lead qualification and routing | $30 |
| **proposal-generator** | Professional proposals from client briefs | $40 |
| **invoice-tracker** | Complete billing workflow with automated reminders | $30 |

## Bundle Pricing

- **Content Creator Suite** (content-repurposer + seo-content-engine): **$49**
- **Freelancer Revenue Engine** (client-intake-bot + proposal-generator + invoice-tracker): **$79**
- **Complete Stack** (all 5 skills): **$119**

## Installation

### Option 1: ClawHub (Recommended)

```bash
# Install ClawHub CLI
npm i -g clawhub

# Login
clawhub login

# Search and install
clawhub search "content repurposer"
clawhub install content-repurposer
```

### Option 2: Manual Installation

```bash
# Copy .skill files to your OpenClaw skills directory
cp *.skill ~/.openclaw/skills/

# Or install via ClawHub CLI
clawhub install ./content-repurposer.skill
```

## File Structure

```
.
├── content-repurposer.skill      # Content marketing automation
├── seo-content-engine.skill      # SEO content creation
├── client-intake-bot.skill       # Lead qualification
├── proposal-generator.skill      # Proposal creation
├── invoice-tracker.skill         # Billing and payments
├── MONETIZATION.md               # Full monetization guide
└── README.md                     # This file
```

## Usage

Once installed, the skills automatically trigger when you make relevant requests to OpenClaw:

```
"Repurpose this blog post into a Twitter thread..."
→ Triggers content-repurposer

"Create an SEO-optimized article about..."
→ Triggers seo-content-engine

"Create a proposal for this client brief..."
→ Triggers proposal-generator
```

## For Skill Developers

### Source Files

Source SKILL.md files are in `/root/.openclaw/skills/`:
- `content-repurposer/SKILL.md`
- `seo-content-engine/SKILL.md`
- `client-intake-bot/SKILL.md`
- `proposal-generator/SKILL.md`
- `invoice-tracker/SKILL.md`

### Repackaging

```bash
cd /usr/lib/node_modules/openclaw/skills/skill-creator/scripts
python3 package_skill.py /root/.openclaw/skills/content-repurposer /root/.openclaw/workspace
```

## Monetization

See `MONETIZATION.md` for:
- Pricing strategy
- Go-to-market plan
- Revenue projections
- Upsell paths
- Marketing channels

## License

These skills are created for monetization via the ClawHub marketplace or direct sales.

## Support

For issues or questions, open an issue on GitHub or contact the creator.

---

**Ready to automate your business? Install the skills and start saving hours every week.**
