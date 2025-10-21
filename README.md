# Product-Toolkit

**AI-Powered Product Management Assistant for Claude Code**

*By Hendrik Hemken | Beyond 7 - AI Consulting & Training*

---

A lean, Claude Code-based toolkit that helps Product Managers with their daily work:
- Create OKRs (with best practices from Wodtke + Klau)
- Write User Stories & break down EPICs
- Create PRDs in Confluence
- Sprint Planning
- Meeting Prep
- Competitive Analysis
- Market Research
- Product Content Creation

**Target Audience:** Solo PMs & PM Teams in Startups, Scale-ups & Corporates

---

## 🚀 Quick Start

**1. Prerequisites**

- [Claude Code](https://docs.claude.com/en/docs/claude-code) installed
- MCP Servers configured (Confluence, Jira, Figma - optional but recommended)

**2. Setup**

```bash
# Clone this repo
git clone https://github.com/hendrikhemken/product-toolkit.git
cd product-toolkit

# Copy the company context template
cp user_context/COMPANY_CONTEXT.template.md user_context/COMPANY_CONTEXT.md

# Edit COMPANY_CONTEXT.md with your company details
# (Company type, team size, product, customer type, etc.)

# Open in Claude Code
claude-code .
```

**3. Start Using**

The toolkit activates automatically when you mention relevant keywords:

- **OKRs:** "Let's create my Q4 OKRs" → `okr-expert` skill activates
- **User Stories:** "Break down this EPIC" → `user-stories` skill activates
- **PRDs:** "Create a PRD for Feature X" → `prd-creator` skill activates
- **LinkedIn Content:** `/linkedin` command for thought leadership posts

---

## ✨ Features

### 🎯 OKR Creation & Management
- **Adaptive approach** - Wodtke (Startup) vs Klau (Corporate) based on your context
- **Weekly cadence** - Monday Commitments, Friday Celebrations
- **Quality enforcement** - Outcomes > Outputs, no activity-based KRs
- **Red team review** - Catches gameable metrics before they become problems

### 📝 User Stories & Epic Breakdown
- **PRD → Stories** - Extract User Stories from Product Requirements
- **INVEST compliance** - Enforces Independent, Negotiable, Valuable, Estimable, Small, Testable
- **Jira integration** - Auto-create stories with links & dependencies
- **Platform-aware** - Separate stories for iOS/Android/Backend when needed

### 📄 PRD Creation (Confluence)
- **Modern, lean PRDs** - Feature-level instead of 150-page monsters
- **AI-assisted drafting** - 80% draft, 20% human refinement
- **Direct publishing** - Creates pages in Confluence via MCP
- **Jira Epic linking** - Bidirectional PRD ↔ Epic links

### 🚀 Product Content Creation
- **LinkedIn posts** - Thought leadership content via `/linkedin` command
- **Meeting prep** - Coming Q4 2025
- **Sprint planning** - Coming Q4 2025

---

## 🛠️ MCP Server Setup (Optional but Recommended)

**For full functionality, configure these MCP servers:**

### Confluence MCP (for PRDs)
```json
{
  "mcp_docker": {
    "url": "your-confluence-url",
    "username": "your-email",
    "api_token": "your-token"
  }
}
```

### Jira MCP (for User Stories)
```json
{
  "mcp_docker": {
    "url": "your-jira-url",
    "username": "your-email",
    "api_token": "your-token"
  }
}
```

### Figma MCP (for Design Context)
```json
{
  "figma": {
    "access_token": "your-figma-token"
  }
}
```

**Need help with MCP setup?** → See `/best-practices/FIGMA_MCP.md` for Figma workflow, or [book a session](#-need-help)

---

## 📚 Credits & Inspiration

This toolkit teaches best practices from industry leaders:

### OKR Methodology
- **Christina Wodtke** - "Radical Focus" (Weekly cadence, 5/10 confidence, Monday/Friday rhythm)
  - 📖 [Buy the book on Amazon](https://www.amazon.com/Radical-Focus-SECOND-Achieving-Objectives/dp/1955469059)
  - 🌐 [eleganthack.com](https://eleganthack.com)
- **Rick Klau** - Google's OKR approach (Quarterly grading, transparency, 0.6-0.7 = success)
  - 🎥 [Watch his legendary Google Ventures talk](https://www.youtube.com/watch?v=mJB83EZtAjc)
- **Marty Cagan** - "INSPIRED" (Product Teams critique, OKR prerequisites, Feature vs Product Teams)
  - 📖 [Buy the book](https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/)
  - 🌐 [svpg.com](https://svpg.com)

### User Stories & Agile
- **Mike Cohn** - "User Stories Applied" (INVEST principles)
  - 📖 [Buy the book](https://www.mountaingoatsoftware.com/books/user-stories-applied)

**Important:** We teach these methodologies in our own words with full attribution. All content is original.

**Want to learn these frameworks properly? Buy their books - they're amazing!**

*This toolkit does NOT replace their work - it helps you APPLY it.*

---

## 🎓 Need Help?

This toolkit is **free & open source** - use it however you want!

**Want personalized setup for your team?**
- Claude Code workshops for PMs
- MCP Server configuration & debugging
- Custom skill development for your workflows
- Team-specific adaptation (Startup vs Corporate)
- OKR coaching & implementation

👉 **[Connect on LinkedIn](https://linkedin.com/in/hendrikhemken)**
👉 **Coming soon:** beyond7.ai website with booking

---

## 📂 Repository Structure

```
Product-Toolkit/
├── README.md                    # You are here
├── CLAUDE.md                    # Main instructions for Claude Code
├── .claude/
│   ├── commands/                # Slash commands (/linkedin)
│   └── skills/                  # Agent skills (okr-expert, prd-creator, user-stories)
├── user_context/
│   ├── COMPANY_CONTEXT.template.md   # Fill this out for your company
│   └── COMPANY_CONTEXT.md            # Your personalized context (gitignored)
├── examples/                    # Best practice examples
│   └── okrs/                    # Example OKRs from real companies (anonymized)
├── outputs/                     # Your generated deliverables (gitignored)
│   ├── okrs/
│   ├── meeting-notes/
│   └── outreach/
├── tasks/                       # Task-specific guides & templates
│   ├── okrs/
│   ├── user-stories/
│   ├── sprint-planning/
│   └── ...
└── best-practices/              # Deep-dive guides (Figma workflow, etc.)
```

---

## 📖 How It Works

**The Product-Toolkit is your Daily PM Assistant:**

1. **Context-Aware:** Adapts to your company type (Startup vs Corporate), customer type (B2C vs B2B), team size
2. **Skill-Based:** Skills activate automatically when you mention keywords (no manual invocation)
3. **Opinionated:** Enforces best practices (INVEST, Outcomes > Outputs, no cargo cult OKRs)
4. **Proactive:** Tracks progress, reminds you of deadlines, identifies blockers
5. **Integrated:** Works directly with Confluence, Jira, Figma via MCP servers

**Example Session:**

```
You: "Let's create my Q4 2025 OKRs"

Claude: "Cool! I see you're a Solo Consultant (from COMPANY_CONTEXT).
         I'll use Wodtke's Weekly Rhythm approach.

         What's your North Star for Q4?"

You: "Sign 3 retainer clients at €3K/month MRR"

Claude: "Nice! Let me draft an Objective + Key Results...

         [drafts OKR]

         Red Team Check: This KR is gameable - could you sign
         low-quality clients. Should we add a quality gate (NPS 50+)?"

You: "Good catch! Yes, add that."

Claude: "✅ Updated. Confidence level 5/10?
         I'll create the file at /outputs/okrs/Q4-2025-OKRs.md
         and set up your weekly Monday/Friday check-ins."
```

---

## 🤝 Contributing

Found a bug? Have a feature request? Want to add a new skill?

- **Issues:** [github.com/hendrikhemken/product-toolkit/issues](https://github.com/hendrikhemken/product-toolkit/issues)
- **Discussions:** Share your workflows, ask questions, help others
- **Pull Requests:** Welcome! Please follow the existing structure

---

## 📜 License

MIT License - Copyright (c) 2025 Hendrik Hemken

See [LICENSE](LICENSE) for details.

**You are free to:**
- ✅ Use this toolkit commercially
- ✅ Modify and distribute
- ✅ Use privately or for your team
- ✅ Fork and build on top of it

**Attribution appreciated but not required.**

---

## 🙏 Acknowledgments

Built with:
- [Claude Code](https://claude.com/claude-code) by Anthropic
- [MCP Servers](https://docs.claude.com/en/docs/build-with-claude/mcp) for Confluence, Jira, Figma integration
- Wisdom from Wodtke, Klau, Cagan, Cohn & the PM community

**Special Thanks:**
- Christina Wodtke for making OKRs actually work (Weekly rhythm FTW!)
- Rick Klau for demystifying Google's OKR process
- Marty Cagan for the Product Teams critique (saved us from cargo cult OKRs)
- All the PMs who gave feedback during development

---

**Built by Hendrik Hemken | Beyond 7 - AI Consulting & Training**

*Former CPO (12 years FinTech) → Now helping teams leverage AI for better product work*

👉 [linkedin.com/in/hendrikhemken](https://linkedin.com/in/hendrikhemken)
👉 beyond7.ai (coming soon)

---

**Product-Toolkit - Because PMs deserve better tools.**
