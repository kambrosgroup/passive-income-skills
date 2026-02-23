# Daily Skill Creation Automation

## Overview

This repository includes an automated daily skill creation system that generates and publishes 5 new OpenClaw skills every day at 9:00 AM Melbourne time.

## Cron Job Configuration

**Job ID:** `77b63e9d-cdd9-4705-ac65-7d735236950c`
**Schedule:** Every day at 9:00 AM Melbourne time (AEDT/AEST)
**Timezone:** Australia/Melbourne

## What Happens Daily

At 9:00 AM Melbourne time, the system automatically:

1. **Research** — Analyzes ClawHub marketplace for gaps and trends
2. **Create** — Generates 5 unique skills targeting real business problems
3. **Package** — Creates `.skill` files ready for distribution
4. **GitHub** — Commits and pushes to https://github.com/kambrosgroup/passive-income-skills
5. **ClawHub** — Publishes all 5 skills to clawhub.ai
6. **Website** — Updates https://kambrosgroup.github.io/passive-income-skills-website/ with new skills

## Skill Creation Guidelines

Each daily batch of 5 skills follows these principles:

- **Unique** — No duplicates of existing skills
- **Complementary** — Skills work well together as bundles
- **Business-focused** — Target freelancers, agencies, consultants
- **High-value** — Solve real problems that save time or make money
- **Well-documented** — Complete SKILL.md with examples

## Expected Output

Daily deliverables:
- 5 new `.skill` files
- 5 source folders in `/root/.openclaw/skills/`
- GitHub commit with all new skills
- 5 live skills on ClawHub
- Updated website showcasing new skills

## Monthly Projections

| Metric | Daily | Monthly | Yearly |
|--------|-------|---------|--------|
| New Skills | 5 | 150 | 1,825 |
| GitHub Commits | 1 | 30 | 365 |
| ClawHub Publications | 5 | 150 | 1,825 |

## Monitoring

You'll receive notifications when:
- Daily skill creation starts
- Each skill is successfully published
- Website is updated
- Any errors occur

## Manual Override

To manually trigger skill creation:

```bash
# Run the same command the cron job uses
clawhub publish /root/.openclaw/skills/[skill-name] --slug [skill-name] --name "[Skill Name]" --version 1.0.0
```

## Skill Categories (Rotating)

The daily creation rotates through these categories to ensure variety:

- **Monday** — Content & Marketing
- **Tuesday** — Sales & Lead Generation
- **Wednesday** — Finance & Billing
- **Thursday** — Productivity & Operations
- **Friday** — Client Management
- **Saturday** — Analytics & Reporting
- **Sunday** — Miscellaneous Tools

## Quality Control

Each skill is validated before publication:
- ✅ SKILL.md frontmatter correct
- ✅ No invalid keys (tags, etc.)
- ✅ Description is clear and searchable
- ✅ Examples provided
- ✅ No hardcoded secrets

## Rate Limiting

ClawHub has a limit of 5 new skills per hour. The daily job respects this by:
- Creating all 5 skills locally first
- Publishing sequentially with delays
- Using `-pro` suffix if slugs are taken

## History

| Date | Skills Created | Status |
|------|----------------|--------|
| 2026-02-23 | 8 initial skills | ✅ Published |
| 2026-02-24+ | 5/day ongoing | ⏳ Scheduled |

---

*This automation runs daily. Skills build up over time, creating a comprehensive marketplace presence.*
