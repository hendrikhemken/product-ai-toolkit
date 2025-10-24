# Product-Toolkit

**AI-Powered Product Management Assistant for Claude Code**

*Created by [Hendrik Hemken](https://linkedin.com/in/hendrikhemken)*

---

A lean, Claude Code-based toolkit that helps Product Managers with their daily work:
- Create OKRs (with best practices from Wodtke + Klau)
- Write User Stories & break down EPICs
- Create PRDs in Confluence
- Weekly OKR check-ins (Monday commitments, Friday celebrations)

**Target Audience:** Solo PMs & PM Teams in Startups, Scale-ups & Corporates

---

## 🚀 Quick Start

**1. Prerequisites**

- [Claude Code](https://docs.claude.com/en/docs/claude-code) installed
- MCP Servers configured (Confluence, Jira - optional but recommended)

**2. Setup**

```bash
# Clone this repo
git clone https://github.com/1800Terran/product-ai-toolkit.git
cd product-ai-toolkit

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

---

## 🛠️ MCP Server Setup (Optional but Recommended)

**For full functionality, configure these MCP servers:**

### Confluence & Jira MCP (mcp_docker)

The toolkit integrates with Confluence (PRDs) and Jira (User Stories) via the `mcp_docker` MCP server.

**Setup:**
1. Follow [MCP Docker installation guide](https://github.com/QuantGeekDev/mcp-atlassian)
2. Configure with your Atlassian credentials
3. Restart Claude Code

**What you get:**
- ✅ Create PRDs directly in Confluence
- ✅ Create Jira tickets from User Stories
- ✅ Link PRDs ↔ Epics bidirectionally
- ✅ Search & read existing Confluence pages

**Need help with MCP setup?** → [Book a session](#-need-help)

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

---

## 📂 Repository Structure

```
product-ai-toolkit/
├── README.md                    # You are here
├── CLAUDE.md                    # Main instructions for Claude Code
├── LICENSE                      # MIT License
├── .gitignore                   # Protects your personal data
├── .claude-plugin/              # Plugin manifests for distribution
│   ├── marketplace.json         # Product-Toolkit Marketplace
│   └── plugin.json              # Plugin metadata
├── .claude/
│   └── skills/                  # Agent skills (okr-expert, prd-creator, user-stories)
│       ├── okr-expert/          # OKR creation & weekly check-ins
│       ├── okr-monday/          # Monday commitments skill
│       ├── okr-friday/          # Friday celebration skill
│       ├── prd-creator/         # PRD creation in Confluence
│       ├── user-stories/        # Epic breakdown & story creation
│       └── skill-creator/       # Meta-skill for creating new skills
├── user_context/
│   ├── COMPANY_CONTEXT.template.md   # Fill this out for your company
│   └── COMPANY_CONTEXT.md            # Your personalized context (gitignored)
├── examples/                    # Best practice examples
│   └── okrs/                    # Example OKRs from real companies (anonymized)
├── best-practices/              # Deep-dive guides & workflows
└── outputs/                     # Your generated deliverables (gitignored)
    ├── okrs/                    # Your OKR files
    └── prd/                     # Your PRD drafts
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

- **Issues:** [github.com/1800Terran/product-ai-toolkit/issues](https://github.com/1800Terran/product-ai-toolkit/issues)
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

**Created by [Hendrik Hemken](https://linkedin.com/in/hendrikhemken)**

*Open Source PM Toolkit - Help PMs leverage AI for better product work*

👉 [linkedin.com/in/hendrikhemken](https://linkedin.com/in/hendrikhemken)

---

**Product-Toolkit - Because PMs deserve better tools.**
