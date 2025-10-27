# Product Toolkit v0.1.0 - Initial Release 🚀

**First public release of the Product Manager Toolkit for Claude Code!**

Created by the **Product Brothers** - [Hendrik Hemken](https://linkedin.com/in/hendrikhemken) & [Sören von Sebelin](https://linkedin.com/in/soeren-von-sebelin)

---

## 🎉 What's New

This is the **first public release** of the Product Toolkit - your AI-powered daily PM assistant built on Claude Code.

**Built by PMs for PMs** - because we got tired of context-switching between 47 different tools.

---

## ✨ Features

### 🎯 OKR Creation & Management
- **Adaptive approach:** Wodtke (Startup) vs Klau (Corporate) based on your company context
- **Weekly cadence:** Monday Commitments, Friday Celebrations
- **Quality enforcement:** Outcomes > Outputs, catches gameable metrics
- **Skills:** `okr-expert`, `okr-monday`, `okr-friday`

### 📝 User Stories & Epic Breakdown
- **PRD → Stories:** Extract User Stories from requirements
- **INVEST compliance:** Independent, Negotiable, Valuable, Estimable, Small, Testable
- **Jira integration:** Auto-create tickets with links & dependencies
- **Skill:** `user-stories`

### 📄 PRD Creation
- **Modern, lean PRDs:** Feature-level docs, not 150-page monsters
- **AI-assisted drafting:** 80% draft, 20% human refinement
- **Confluence integration:** Direct publishing via MCP
- **Jira Epic linking:** Bidirectional PRD ↔ Epic connections
- **Skill:** `prd-creator`

### 🎤 User Research
- **Interview guides:** Discovery, Validation, Usability Testing
- **Interview analysis:** Extract insights, identify patterns
- **Skills:** `interview-guide`, `interview-analysis`

### 🔧 Utilities
- **Context setup:** Interactive company/product/team context collection
- **Jira helpers:** Comment digest, ticket summaries
- **Skill creator:** Meta-skill for building custom skills
- **Skills:** `user-context`, `jira-comment-digest`, `skill-creator`

---

## 📦 Installation

### Option A: Git Clone (Recommended)

```bash
git clone https://github.com/hendrikhemken/product-ai-toolkit.git
cd product-ai-toolkit
claude
```

### Option B: Download ZIP

1. Download the ZIP from this release (see Assets below)
2. Extract to your preferred location
3. Open in Claude Code: `cd /path/to/product-ai-toolkit && claude`

**Full installation guide:** [INSTALLATION.md](https://github.com/hendrikhemken/product-ai-toolkit/blob/main/INSTALLATION.md)

---

## 🎬 Quick Start

**First-time users:**

1. Open the toolkit in Claude Code
2. Claude will auto-detect first session and guide you through context setup (5 min)
3. Start using skills by mentioning keywords:
   - "Let's create my Q4 OKRs" → `okr-expert` activates
   - "Write a PRD for Feature X" → `prd-creator` activates
   - "Break down this Epic" → `user-stories` activates

**Your context stays local!** All data saved to `user_context/COMPANY_CONTEXT.md` (gitignored).

---

## 🔌 Optional: MCP Server Integration

For full functionality (Confluence PRDs, Jira tickets, Figma imports):

- **Confluence & Jira:** [mcp_docker](https://github.com/QuantGeekDev/mcp-atlassian)
- **Figma:** Official Figma MCP server
- **YouTube:** YouTube transcript MCP server

See [INSTALLATION.md](https://github.com/hendrikhemken/product-ai-toolkit/blob/main/INSTALLATION.md#-optional-mcp-server-setup) for setup details.

---

## 📚 What's Included

### Skills (`.claude/skills/`)
- `okr-expert` - OKR creation & review
- `okr-monday` - Monday commitment check-in
- `okr-friday` - Friday celebration check-in
- `prd-creator` - Confluence PRD creation
- `user-stories` - Epic breakdown & Jira tickets
- `interview-guide` - User research guides
- `interview-analysis` - Research synthesis
- `jira-comment-digest` - Ticket discussion summaries
- `user-context` - Interactive context setup
- `skill-creator` - Create custom skills

### Documentation
- `README.md` - Overview & features
- `INSTALLATION.md` - Step-by-step setup guide
- `CLAUDE.md` - Full system instructions
- `best-practices/` - Deep-dive guides (Figma MCP, Plugin Development)
- `examples/` - Real-world OKR examples

### Templates
- `user_context/COMPANY_CONTEXT.md` - Your personalized context
- `outputs/okrs/CURRENT_WEEK.md` - Weekly OKR tracking
- Example OKRs & PRDs

---

## 📖 Credits & Methodology

**This toolkit teaches best practices from:**

### OKR Frameworks
- **Christina Wodtke** - "Radical Focus" (Weekly cadence, 5/10 confidence)
- **Rick Klau** - Google's OKR approach (Quarterly grading, 0.6-0.7 = success)
- **Marty Cagan** - "INSPIRED" (Product Teams critique, OKR prerequisites)

### User Stories & Agile
- **Mike Cohn** - "User Stories Applied" (INVEST principles)

**We teach these frameworks with full attribution. All content is original.**

👉 **Want to learn properly? Buy their books - they're amazing!**

---

## 🛠️ Technical Details

**Built with:**
- [Claude Code](https://claude.com/claude-code) by Anthropic
- [MCP (Model Context Protocol)](https://docs.claude.com/en/docs/build-with-claude/mcp) for integrations
- Markdown & YAML (LLM-friendly, version-control friendly)

**Requirements:**
- Claude Code >= 0.10.0
- macOS, Linux, or Windows with WSL
- (Optional) Git for easy updates
- (Optional) MCP servers for Confluence/Jira/Figma

---

## 🐛 Known Issues

**v0.1.0 is our MVP release.** Things that need improvement:

- [ ] MCP setup documentation could be more detailed
- [ ] Some skills may need fine-tuning based on user feedback
- [ ] Examples folder could use more content
- [ ] No automated tests yet (manual testing only)

**Found a bug?** [Open an issue](https://github.com/hendrikhemken/product-ai-toolkit/issues/new)!

---

## 🔮 What's Next (v0.2.0 Roadmap)

Based on user feedback, we're planning:

- **More Skills:** Sprint Planning, Roadmap Creation, Stakeholder Updates
- **Better Templates:** More example OKRs, PRDs, User Stories
- **Enhanced MCP Integration:** Deeper Jira/Confluence workflows
- **Community Contributions:** Your ideas & pull requests!
- **Documentation:** Video walkthroughs, interactive tutorials

**Want to influence the roadmap?** [Start a discussion](https://github.com/hendrikhemken/product-ai-toolkit/discussions)!

---

## 🤝 Contributing

We welcome contributions!

- **Issues:** Bug reports, feature requests
- **Discussions:** Share workflows, ask questions, help others
- **Pull Requests:** Code improvements, new skills, documentation

See [README.md](https://github.com/hendrikhemken/product-ai-toolkit#-contributing) for guidelines.

---

## 📜 License

**MIT License** - Free to use, modify, and distribute.

Copyright (c) 2025 Hendrik Hemken & Sören von Sebelin

See [LICENSE](https://github.com/hendrikhemken/product-ai-toolkit/blob/main/LICENSE) for details.

---

## 🙏 Thank You!

**To the PM community:**
- Everyone who gave feedback during development
- Early testers who helped shape the toolkit
- Christina Wodtke, Rick Klau, Marty Cagan, Mike Cohn for the frameworks

**To Anthropic:**
- For building Claude Code and making this possible
- For the MCP protocol enabling powerful integrations

---

## 🚀 Get Started Now

**Installation:**
```bash
git clone https://github.com/hendrikhemken/product-ai-toolkit.git
cd product-ai-toolkit
claude
```

**Or download the ZIP from Assets below** ⬇️

**Questions? Reach out:**
- 👉 [Hendrik on LinkedIn](https://linkedin.com/in/hendrikhemken)
- 👉 [Sören on LinkedIn](https://linkedin.com/in/soeren-von-sebelin)

---

**Product Toolkit v0.1.0 - Because PMs deserve better tools. 🚀**

*Created by the Product Brothers - Built by PMs for PMs*
