# PRD Creation Workflow
*Detailed 6-Phase Process (Phase 0 → Phase 5)*

This document contains the detailed step-by-step workflow for creating PRDs. For overview, see [SKILL.md](SKILL.md).

---

## 🧭 6-Phase PRD Creation Process

### Phase 0: Check for PRD Starter Briefs (Optional)

**BEFORE asking questions, check if user has existing PRD Starter Briefs.**

PRD Starter Briefs are created by the `interview-analysis` Skill and contain:
- Problem Statement (from user research)
- User Personas (from interviews)
- Success Metrics (proposed)
- Initial Scope
- Supporting Evidence (quotes, insights)

**Workflow:**

1. **Ask User:**
   ```
   "Quick check: Do you have a PRD Starter Brief from interview analysis?

   If yes, give me the path (e.g., /outputs/interviews/[project]/[feature]-starter-brief.md)
   and I'll load it for an 80% head start!

   If no, no worries - we'll gather context together."
   ```

2. **If User provides path:**
   - Load Starter Brief using Read tool
   - Extract from YAML Front Matter:
     - `feature`: Feature Name
     - `analysis_ref`: Link to original analysis
     - `insight_refs`: Which insights support this
     - `priority`: P0/P1/P2
     - `impact/effort`: Quick assessment
     - `participants`: Frequency data
   - Extract from Content:
     - Problem Statement
     - User Personas
     - Success Metrics
     - Scope (In/Out)
     - Constraints & Context (user-added!)
     - Supporting Evidence

3. **Show Loaded Info:**
   ```
   "✅ Loaded Starter Brief: [Feature Name]

   Here's what we have:
   - Problem: [from brief]
   - Personas: [from brief]
   - Metrics: [proposed from brief]
   - Scope: [initial from brief]
   - Evidence: [X/Y participants mentioned this]

   This gives us an 80% head start!

   I'll still ask a few clarifying questions, but we're way ahead already."
   ```

4. **Proceed to Phase 1:**
   - Skip questions already answered in Starter Brief
   - Focus on gaps: Technical constraints, Confluence/Jira setup, PRD Type
   - Validate/refine what's in brief with user

**If no Starter Brief:**
- Proceed directly to Phase 1 (Context & Discovery)
- Gather all information conversationally

**Hint to User:**
If user is about to create PRD without research, suggest:
```
"💡 Pro Tip: Have you done user interviews yet?

The `interview-analysis` Skill can create PRD Starter Briefs
from research insights - saves a ton of time and ensures
data-driven feature definition!

Want to proceed anyway? (Yes/No)"
```

---

### Phase 1: Context & Discovery (Conversational)

**Ask the PM:**

1. **Was bauen wir?** (Feature Name & High-Level Description)
   - "Beschreib das Feature in 1-2 Sätzen"
   - Beispiel: "Multi-Video Upload mit Batch-Processing"

2. **Warum bauen wir das?** (Problem Statement)
   - "Welches Problem lösen wir?"
   - "Für wen?"
   - "Was ist der Impact wenn wir es NICHT bauen?"
   - → Quantitativ (Metrics) + Qualitativ (User Quotes)

3. **Wer nutzt das?** (User Personas)
   - Primäre User (1-2 Personas max)
   - Use Cases / User Stories
   - Pain Points

4. **Wie messen wir Erfolg?** (Success Metrics)
   - SMART Metrics (Specific, Measurable, Attainable, Relevant, Time-bound)
   - Baseline vs. Target
   - Beispiel: "Upload Success Rate von 85% auf 95% in Q1"

5. **Was ist Scope?** (In/Out of Scope)
   - Must-Have Features (P0)
   - Nice-to-Have (P1/P2)
   - Explizit OUT of Scope (Scope Creep Prevention!)

6. **Technische Constraints?**
   - API Limits, Legacy Systems, Performance Requirements
   - Dependencies (andere Features, Teams)

7. **Confluence & Jira Setup:**
   - **Confluence Space:**
     - Check COMPANY_CONTEXT.md → "Tools & Workflow" → "Confluence Spaces"
     - If found: Use listed spaces (ask which one if multiple)
     - If empty: Ask "Welcher Confluence Space? (z.B. 'PROD', 'DEV')"
   - **Jira Project:**
     - Check COMPANY_CONTEXT.md → "Tools & Workflow" → "Jira Projects"
     - If found: Use listed projects (ask which one if multiple)
     - If empty: Ask "Jira Project Key? (z.B. 'PROD', 'DEV')"
   - **Parent Page:** (Optional) "Parent Page? (falls Teil einer größeren Initiative)"

---

### Phase 2: PRD Type Selection

**Frag: "Welchen PRD-Typ brauchen wir?"**

Basierend auf Context, empfehle einen Typ:

**1. Lean PRD** ✅ (DEFAULT für Agile Teams)
- ✅ Agile/Scrum Environment
- ✅ Small-Medium Feature (2 Wochen - 3 Monate)
- ✅ Startup oder kleines Team (2-20 Personen)
- ✅ MVP oder Early-Stage
- ✅ Schnelle Iteration gewünscht
- **Format:** 1-3 Seiten, Focus auf Warum/Was, minimal Wie
- **Template:** [TEMPLATES.md](TEMPLATES.md) → Lean PRD

**2. Traditional PRD** (für komplexe/regulierte Projekte)
- ⚠️ Waterfall oder stark regulierte Industrie (Finance, Healthcare)
- ⚠️ Large Feature (3+ Monate)
- ⚠️ High Risk, High Investment
- ⚠️ >50 Stakeholders
- ⚠️ Compliance/Legal Requirements
- **Format:** 10-30 Seiten, comprehensive Documentation
- **Template:** [TEMPLATES.md](TEMPLATES.md) → Traditional PRD

**3. Amazon PR/FAQ** (für Strategic Initiatives)
- 🚀 Major Strategic Initiative
- 🚀 Customer Obsession Culture
- 🚀 Multiple Solution Approaches evaluieren
- 🚀 Executive-Level Decision nötig
- **Format:** Press Release + FAQ (5-10 Seiten)
- **Template:** [TEMPLATES.md](TEMPLATES.md) → PR/FAQ

**4. Hybrid Agile PRD** (Balance für Scale-Ups)
- 🔄 Medium-Large Team (10-50 Personen)
- 🔄 Complex Feature mit Cross-Functional Collaboration
- 🔄 Agile Methodik, aber mehr Struktur nötig
- 🔄 Remote/Distributed Teams
- **Format:** 5-10 Seiten, Living Document
- **Template:** [TEMPLATES.md](TEMPLATES.md) → Hybrid PRD

**💡 Empfehlung aussprechen:**
```
"Basierend auf deinem Context empfehle ich:
→ Lean PRD (1-3 Seiten)

Warum:
✅ Agile Team
✅ Feature-Scope (2-3 Monate)
✅ Schnelle Iteration gewünscht

Alternative wäre Hybrid PRD falls mehr Struktur nötig.
Was denkst du?"
```

---

### Phase 3: PRD Drafting (AI-Assisted)

**Create an 80% draft based on:**

1. **Gesammelten Informationen** aus Phase 1
2. **Gewähltem Template** aus Phase 2
3. **Best Practices** aus [GUIDE.md](GUIDE.md)
4. **Company Context** aus `/user_context/COMPANY_CONTEXT.md`

**Struktur (für Lean PRD - häufigster Fall):**

```markdown
---
title: [Feature Name] - PRD
space_key: [PROD]
status: Draft
author: [PM Name]
created: [Date]
last_updated: [Date]
epic_link: [JIRA-XXX]
---

# [Feature Name] - Product Requirements Document

**Status:** 🟡 Draft | In Review | Approved | Shipped
**Owner:** [PM Name]
**Target Release:** Q[X] 202[X]
**Epic:** [JIRA-XXX](link)

---

## 📋 Executive Summary

[2-3 Sätze: Was bauen wir, warum, für wen]

---

## 🎯 Problem Statement

**Problem:** [Spezifisches Problem]

**Impact:**
- Quantitativ: [Metrics, Daten]
- Qualitativ: [User Quotes, Feedback]

**Evidence:**
- [Metric 1]: Baseline → Target
- [User Quote]: "..."

**Vision:** [Wie sieht die Welt aus wenn Problem gelöst?]

---

## 👥 User Personas & Use Cases

### Primary Persona: [Name]
- **Role:** [z.B. Content Creator]
- **Goals:** [Was will der User erreichen?]
- **Pain Points:** [Aktuelle Frustrationen]
- **Quote:** "[Direktes Zitat aus Research]"

### Use Case: [Titel]
**Als** [User Type]
**möchte ich** [Aktion]
**damit** [Benefit]

**Happy Path:**
1. [Schritt 1]
2. [Schritt 2]
3. [Schritt 3]

---

## 📊 Success Metrics

| Metric | Baseline | Target | Timeframe | Method |
|--------|----------|--------|-----------|--------|
| [KPI 1] | [Wert] | [Ziel] | Q[X] 202[X] | [Wie messen?] |
| [KPI 2] | [Wert] | [Ziel] | Q[X] 202[X] | [Wie messen?] |

---

## ⚙️ Features & Requirements

### Must-Have (P0)
- ✅ [Feature 1]: [Beschreibung]
- ✅ [Feature 2]: [Beschreibung]

### Should-Have (P1)
- 🔵 [Feature 3]: [Beschreibung]

### Nice-to-Have (P2)
- 🟢 [Feature 4]: [Beschreibung]

### OUT of Scope ❌
- ❌ [Feature X]: [Warum out of scope?]

---

## 🛠️ Technical Considerations

**Architecture:**
- [High-Level Tech Approach]

**Dependencies:**
- [System/Team Dependencies]

**Constraints:**
- Performance: [z.B. "<2s Load Time"]
- Security: [Requirements]
- Scalability: [z.B. "100k concurrent users"]

**Assumptions:**
- [Key Assumptions]

**Risks:**
- [Risk 1]: Mitigation: [Plan]

---

## 📅 Timeline & Milestones

**Phase 1 - MVP** (Q[X] 202[X])
- [Core Features]

**Phase 2 - Enhancement** (Q[X] 202[X])
- [Additional Features]

**Phase 3 - Scale** (Q[X] 202[X])
- [Optimization]

---

## 🔗 Related Links

- **Epic:** [JIRA-XXX](link)
- **Design:** [Figma Link]
- **Research:** [User Research Doc]
- **Roadmap:** [Product Roadmap]

---

## 📝 Open Questions

- [ ] [Question 1]
- [ ] [Question 2]

---

## 📜 Changelog

| Date | Author | Changes |
|------|--------|---------|
| 202[X]-[MM]-[DD] | [Name] | Initial Draft |

```

**Show the PM the draft:**
```
"Hier ist ein 80%-Draft basierend auf unserem Gespräch.

Key Highlights:
✅ Problem Statement mit Metrics
✅ 2 User Personas mit Use Cases
✅ 4 Success Metrics (SMART)
✅ Features priorisiert (P0/P1/P2)
✅ Out of Scope explizit definiert

Was fehlt oder muss angepasst werden?"
```

---

### Phase 4: Refinement & Review

**Iteriere mit PM:**

1. **Content Review:**
   - "Ist das Problem Statement klar?"
   - "Fehlen wichtige User Personas?"
   - "Sind die Success Metrics SMART?"
   - "Stimmt die Priorisierung?"

2. **Technical Review:**
   - "Passen die Technical Constraints?"
   - "Fehlen Dependencies?"
   - "Sind Non-Functional Requirements vollständig?"

3. **Stakeholder Alignment:**
   - "Wer muss das reviewen?"
   - "Welche Teams sind betroffen?"
   - "Gibt es Legal/Compliance Considerations?"

**Quality Gates enforced:**

✅ **Problem Statement:**
- Quantitative Evidence? (Metrics)
- Qualitative Evidence? (User Quotes)
- Impact Statement? (Was passiert wenn wir es NICHT bauen?)

✅ **Success Metrics:**
- SMART? (Specific, Measurable, Attainable, Relevant, Time-bound)
- Baseline vs. Target definiert?
- Messbar mit true/false?

✅ **Scope Clarity:**
- Must-Have vs. Nice-to-Have klar?
- OUT of Scope explizit genannt?
- Scope Creep Prevention?

✅ **User-Zentrierung:**
- Personas basierend auf echten Usern?
- User Quotes inkludiert?
- Use Cases konkret?

---

### Phase 5: Confluence Publishing

**Wenn PM zufrieden:**

1. **Create Page in Confluence:**

   **→ Use the `confluence_create_page` tool**

   **Parameters:**
   - `space_key`: "[SPACE]" (z.B. "PROD", "DEV")
   - `title`: "[Feature Name] - PRD"
   - `content`: Markdown content (wird automatisch zu HTML konvertiert)
   - `parent_id`: [optional] - Parent Page ID falls Teil größerer Initiative

   **→ Speicher die Page ID** aus der Response für spätere Updates!

2. **Add Labels:**

   **→ Use `confluence_add_label` für jedes Label:**

   - `prd` (immer!)
   - `feature-[name]` (Feature-spezifisch)
   - `q[x]-202[x]` (Timeline)
   - `status-draft` (Status)

   **Beispiel:**
   ```
   → confluence_add_label(page_id, "prd")
   → confluence_add_label(page_id, "feature-multi-upload")
   → confluence_add_label(page_id, "q2-2025")
   → confluence_add_label(page_id, "status-draft")
   ```

3. **Create Epic in Jira (optional):**

   **→ Use the `jira_create_issue` tool**

   **Parameters:**
   - `project_key`: "[PROJ]" (z.B. "PROD")
   - `issue_type`: "Epic"
   - `summary`: "[Feature Name]"
   - `description`: PRD Link + Summary
   - `additional_fields`: Labels, etc.

   **Epic Description Example:**
   ```markdown
   📄 Product Requirements Document:
   https://[company].atlassian.net/wiki/spaces/[SPACE]/pages/[ID]

   ## Summary
   [Brief Summary from PRD]

   See PRD for full details.
   ```

   **→ Speicher den Epic Key** (z.B. "PROD-123") aus der Response!

4. **Link PRD ↔ Epic:**
   - PRD enthält Epic Link
   - Epic Description enthält PRD Link

**Output für PM:**
```
✅ PRD erstellt in Confluence!

📄 PRD: https://[company].atlassian.net/wiki/spaces/[SPACE]/pages/[ID]
🎯 Epic: [JIRA-XXX] (optional)

Nächste Schritte:
1. PRD mit Stakeholders teilen (Design, Engineering)
2. Feedback sammeln & iterieren
3. Status updaten: Draft → In Review → Approved
4. User Stories aus PRD ableiten (via user-stories Skill)
```

---

*Detailed PRD Workflow for PRD Creator Skill*
*Part of Product-Toolkit*
