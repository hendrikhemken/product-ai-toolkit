---
name: skill-creator
description: Create new Claude Code Skills efficiently. Use when user says "create a skill", "new skill for...", "skill that does...", or asks how to structure a skill. Focuses on lean, core workflow only.
---

# Skill Creator
*Create focused, minimal Claude Code Skills*

## When to Use
- User wants to create a new Skill
- User asks "how do I create a skill for..."
- User mentions "skill" + specific use case

---

## 📚 Official Documentation

**Must-Read:**
- 🔥 **Skills Documentation:** https://docs.claude.com/en/docs/claude-code/skills.md
- 🔥 **Best Practices Guide:** https://docs.claude.com/en/docs/agents-and-tools/agent-skills/best-practices

**Read these FIRST before creating any Skill!**

---

## 🎯 Key Learnings Summary

**Context is a Public Good:**
- Keep SKILL.md **< 500 lines** (split into files if bigger)
- Every token competes with conversation history
- Only add what Claude doesn't already know

**Description is Critical:**
- ALWAYS write in **third person** ("Processes Excel files", not "I can help...")
- Include **what it does + when to use it**
- List **specific trigger keywords** (file types, scenarios, terms)

**Progressive Disclosure:**
- Keep references **one level deep** from SKILL.md (no nested references!)
- Claude reads files on-demand (no context penalty until accessed)
- Use forward slashes in paths (Unix-style: `reference/guide.md`)

**Workflows & Examples:**
- Complex tasks → provide **checklist** Claude can copy & check off
- Show **input → output examples** (like regular prompting)
- Use **feedback loops** for quality-critical tasks (validate → fix → repeat)

**Anti-Patterns to Avoid:**
- ❌ Vague descriptions ("helps with stuff")
- ❌ Windows-style paths (`scripts\helper.py`)
- ❌ Nested references (SKILL.md → advanced.md → details.md)
- ❌ Time-sensitive info ("before August 2025...")
- ❌ Inconsistent terminology (mix "field", "box", "element")
- ❌ Too many options without clear default

---

## Core Workflow

### 1. Clarify Use Case
Ask user:
- **What's the core task?** (1 sentence)
- **When should it trigger?** (specific keywords/scenarios)
- **Supporting files needed?** (templates, scripts, references)

### 2. Design Skill Structure
**Minimal by default:**
```
.claude/skills/[skill-name]/
└── SKILL.md
```

**Add only if needed:**
- Reference docs (if complex domain knowledge)
- Templates (if user creates repeated structures)
- Scripts (if external tooling required)

### 3. Create SKILL.md
```yaml
---
name: [skill-name]
description: [What it does + When to use it. THIRD PERSON. Specific triggers!]
---

# [Skill Name]

## Instructions
[Step-by-step workflow - keep it to 3-7 steps max]

## Examples
[1-2 concrete examples showing input → output]
```

**Description Requirements:**
- ✅ **Third person** ("Processes PDFs", not "I can help process PDFs")
- ✅ **Specific triggers** (file types, keywords, scenarios)
- ✅ **What + When** (functionality + use cases)
- ✅ **Max 1024 chars** (concise!)

### 4. Test Trigger Description

**✅ Good Examples:**

*Example 1 - PRD Creation:*
"Create Product Requirements Documents (PRDs) in Confluence for Features/Epics. Use when user mentions 'PRD erstellen', 'Product Requirements', 'Confluence PRD', 'Feature Document', or 'Epic dokumentieren'."

*Example 2 - PDF Processing:*
"Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when the user mentions PDFs, forms, or document extraction."

*Example 3 - Git Commits:*
"Generate descriptive commit messages by analyzing git diffs. Use when the user asks for help writing commit messages or reviewing staged changes."

**❌ Bad Examples:**
- "Helps with documents." (too vague)
- "I can help you process Excel files." (first person, not third!)
- "Processes data." (what data? when?)

### 5. Validate & Iterate
- Test: Ask Claude a question matching the description
- Debug: If not triggering → check description specificity
- Refine: Remove unnecessary steps, keep it lean

---

## Best Practices

**✅ DO:**
- **One capability per Skill** (focused scope)
- **Third-person descriptions** with specific trigger keywords
- **Keep SKILL.md < 500 lines** (split into files if needed)
- **One-level-deep references** (SKILL.md → reference.md, NOT SKILL.md → advanced.md → details.md)
- **3-7 step workflows** (digestible, with checklists for complex tasks)
- **Concrete input → output examples** (show don't tell)
- **Consistent terminology** throughout (pick one term, stick with it)
- **Unix-style paths** (`reference/guide.md`, not `reference\guide.md`)
- **Feedback loops** for quality-critical tasks (validate → fix → repeat)
- **Build evaluations first** (test before extensive documentation)
- **Iterate with Claude** (use one instance to create, another to test)

**❌ DON'T:**
- Bundle multiple unrelated tasks in one Skill
- Use **first person** in descriptions ("I can help...")
- Use **second person** in descriptions ("You can use this to...")
- Vague descriptions ("helps with stuff")
- 20-step workflows with edge cases everywhere
- **Nested references** (keep one level deep from SKILL.md!)
- **Windows-style paths** (`scripts\helper.py`)
- **Time-sensitive information** ("before August 2025...")
- **Inconsistent terminology** (don't mix "field", "box", "element")
- Offer **too many options** without clear default
- Over-engineer before validation
- Create supporting files "just in case"

---

## Template: New Skill

When creating a new Skill, start with this:

```yaml
---
name: [kebab-case-name]
description: [THIRD PERSON. What it does + when to use it. Specific triggers. Max 1024 chars.]
---

# [Title Case Name]

## Instructions

1. [First step]
2. [Second step]
3. [Third step]

## Examples

**Example 1:**
Input: [User request]
Output: [What Skill produces]
```

**Description Template:**
```
[What the Skill does]. Use when user mentions '[keyword 1]', '[keyword 2]',
'[file type]', '[scenario]', or [specific context].
```

**Example:**
```
Extract text and tables from PDF files, fill forms, merge documents.
Use when working with PDF files or when the user mentions PDFs, forms,
or document extraction.
```

---

## Project Context

**Aligned with Product-Toolkit CLAUDE.md:**
- 🎯 START SIMPLE Principle (minimal by default)
- 🎯 Add complexity ONLY when proven need
- 🎯 One focused task per Skill
- 🎯 No over-engineering

---

## References

**Official Anthropic Docs:**
- 🔥 [Claude Code Skills Documentation](https://docs.claude.com/en/docs/claude-code/skills.md)
- 🔥 [Skill Authoring Best Practices](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/best-practices)

**Project-Specific:**
- `/CLAUDE.md` (Minimalismus-Prinzip)
- `.claude/skills/` (existing Skills for examples)

---

*Created with Product-Toolkit | Beyond 7*
