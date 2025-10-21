# PRD Creation Workflow
*Detailed 5-Phase Process*

This document contains the detailed step-by-step workflow for creating PRDs. For overview, see [SKILL.md](SKILL.md).

---

## 🧭 5-Phase PRD Creation Process

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
   - "Welcher Confluence Space? (z.B. 'PROD', 'DEV')"
   - "Parent Page? (falls Teil einer größeren Initiative)"
   - "Jira Project Key? (z.B. 'PROD-123' für Epic)"

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
   ```
   confluence_create_page(
     space_key: "[SPACE]",
     title: "[Feature Name] - PRD",
     content: [Markdown → HTML converted],
     parent_id: [optional]
   )
   ```

2. **Add Labels:**
   - `prd`
   - `feature-[name]`
   - `q[x]-202[x]`
   - `status-draft`

3. **Create Epic in Jira (optional):**
   ```
   jira_create_issue(
     project_key: "[PROJ]",
     issue_type: "Epic",
     summary: "[Feature Name]",
     description: "PRD: [Confluence Link]",
     additional_fields: {
       labels: ["feature-[name]"]
     }
   )
   ```

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
*Part of Product-Toolkit | Beyond 7*
