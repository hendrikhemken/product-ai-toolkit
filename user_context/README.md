# User Context

This folder contains your company, product, and team context - the **Single Source of Truth** for Claude.

---

## 🚀 Quick Start

### Option 1: Use the Skill (Recommended)

Run the `user-context` skill to create your `COMPANY_CONTEXT.md` through an interactive questionnaire:

```
"Help me setup my company context"
```

The skill will guide you through all sections and generate a complete `COMPANY_CONTEXT.md` file.

### Option 2: Manual Setup

1. Copy the template:
   ```bash
   cp COMPANY_CONTEXT.template.md COMPANY_CONTEXT.md
   ```
2. Edit `COMPANY_CONTEXT.md` with your company/product details
3. Save and you're done!

---

## 📁 Structure

```
user_context/
├── COMPANY_CONTEXT.template.md  # Template (included in repo)
├── COMPANY_CONTEXT.md           # Your context (gitignored, YOU FILL THIS)
└── raw/                         # Raw files (interviews, docs, assets)
    └── (your files here)
```

---

## 💡 Why This Matters

`COMPANY_CONTEXT.md` is automatically loaded via `@import` in `CLAUDE.md`.

This means Claude always has your context available when:
- Creating OKRs
- Writing PRDs
- Breaking down User Stories
- Planning sprints
- Giving strategic advice

**Better context = Better output!**

---

## 📝 What to Put in raw/

The `raw/` folder is for any unstructured files you want to reference:

- Interview transcripts (`.txt`, `.md`)
- Voice notes
- Strategy documents
- Research findings
- Product designs
- Meeting notes
- Anything Claude should know about

Organize in subfolders as needed:
```
raw/
├── interviews/
│   ├── customer-interview-1.txt
│   └── user-research-2025-Q4.md
├── strategy/
│   └── 2025-roadmap-draft.md
└── research/
    └── competitor-analysis.md
```

---

**Ready to get started?** Run the `user-context` skill or copy the template!
