# Confluence Workflows für PRDs
*Confluence MCP Integration - Page Creation, Updates & Jira Linking*

---

## 🛠️ Verfügbare MCP Tools

**Confluence Page Management:**
- `confluence_create_page` - Neue Page erstellen
- `confluence_update_page` - Bestehende Page updaten
- `confluence_get_page` - Page Content lesen
- `confluence_get_page_children` - Child Pages abrufen
- `confluence_search` - Pages suchen
- `confluence_add_label` - Labels hinzufügen
- `confluence_add_comment` - Kommentar hinzufügen
- `confluence_delete_page` - Page löschen (VORSICHT!)

**Jira Integration:**
- `jira_create_issue` - Epic/Story erstellen
- `jira_update_issue` - Issue updaten
- `jira_search` - Issues suchen

**Alle Tools sind native MCP Tools** - direkt nutzbar, keine Python-Skripte nötig!

---

## 📝 Workflow 1: Neues PRD erstellen

### Schritt 1: Markdown Draft vorbereiten

**Input vom PM:**
- Space Key (z.B. "PROD", "DEV", "TEAM")
- Title (z.B. "Multi-Video Upload - PRD")
- Parent Page ID (optional, falls Teil einer größeren Initiative)

**Markdown vorbereiten:**
```markdown
# Multi-Video Upload - PRD

**Status:** Draft
**Owner:** Jane Doe
**Target Release:** Q2 2025

## Problem Statement
[Content...]

## Success Metrics
[Content...]
```

---

### Schritt 2: Markdown → Confluence HTML Conversion

**Wichtig:** Confluence nutzt Storage Format (HTML), nicht Markdown!

**Conversion Rules:**

| Markdown | Confluence HTML |
|----------|-----------------|
| `# Heading` | `<h1>Heading</h1>` |
| `## Heading` | `<h2>Heading</h2>` |
| `**bold**` | `<strong>bold</strong>` |
| `*italic*` | `<em>italic</em>` |
| `[Link](url)` | `<a href="url">Link</a>` |
| Code Block | `<ac:structured-macro ac:name="code">...</ac:structured-macro>` |
| Table | `<table>...</table>` |

**✅ MCP Tool konvertiert automatisch** Markdown → HTML!

**Tipp:** Schreibe in Markdown, das Tool handled die Conversion.

---

### Schritt 3: Confluence Page erstellen

**→ Use the `confluence_create_page` tool**

**Parameters:**
- `space_key`: "PROD" (der Confluence Space Key)
- `title`: "Multi-Video Upload - PRD"
- `content`: Markdown content (wird automatisch zu HTML konvertiert)
- `parent_id`: "123456789" (optional - wenn Teil einer Page Hierarchy)

**Example Content:**
```markdown
# Multi-Video Upload - PRD

**Status:** 🟡 Draft
**Owner:** Jane Doe
**Target Release:** Q2 2025
**Epic:** PROD-123

---

## 📋 Executive Summary

Multi-Video Upload allows creators to batch-upload multiple videos
simultaneously, reducing upload time by 70% and increasing creator
satisfaction.

[... rest of PRD content ...]
```

**Response enthält:**
- `id`: Page ID (für future updates - wichtig speichern!)
- `title`: Page Title
- `_links.webui`: URL zum Teilen mit Team

**→ Speicher die Page ID** für spätere Updates!

---

### Schritt 4: Labels hinzufügen

**→ Use `confluence_add_label` für jedes Label**

**Empfohlene Labels:**

**Kategorie Labels:**
- `prd` (immer!)

**Timeline Labels:**
- `q1-2025`, `q2-2025`, `q3-2025`, `q4-2025`

**Feature Labels:**
- `feature-multi-upload`, `feature-analytics`, etc.

**Status Labels:**
- `status-draft`, `status-in-review`, `status-approved`, `status-archived`

**Team Labels:**
- `team-platform`, `team-growth`, `team-infra`

**Beispiel Label-Set:**
```
→ confluence_add_label(page_id, "prd")
→ confluence_add_label(page_id, "q2-2025")
→ confluence_add_label(page_id, "feature-multi-upload")
→ confluence_add_label(page_id, "status-draft")
→ confluence_add_label(page_id, "team-platform")
```

---

### Schritt 5: Epic in Jira erstellen & verlinken

**Optional: Epic in Jira anlegen**

**→ Use `jira_create_issue` tool**

**Parameters:**
- `project_key`: "PROD"
- `issue_type`: "Epic"
- `summary`: "Multi-Video Upload"
- `description`: Link zum PRD + Summary
- `additional_fields`: Labels, etc.

**Epic Description Example:**
```markdown
Product Requirements Document:
https://company.atlassian.net/wiki/spaces/PROD/pages/987654321

## Summary
Batch video upload feature enabling creators to upload multiple
videos simultaneously.

## Success Metrics
- Upload Success Rate: 85% → 95%
- Avg Upload Time: 45s → <15s

See PRD for full details.
```

**→ Response enthält:**
- `key`: Epic Key (z.B. "PROD-123")

---

### Schritt 6: PRD updaten mit Epic Link

**→ Use `confluence_update_page` tool**

**Parameters:**
- `page_id`: Die Page ID aus Schritt 3
- `title`: "Multi-Video Upload - PRD" (kann gleich bleiben)
- `content`: Updated content mit Epic Link
- `version_comment`: "Added Epic Link" (wichtig für Changelog!)

**Updated Content Example:**
```markdown
# Multi-Video Upload - PRD

**Status:** 🟡 Draft
**Owner:** Jane Doe
**Target Release:** Q2 2025
**Epic:** [PROD-123](https://company.atlassian.net/browse/PROD-123)

[... rest of content ...]
```

**→ Version Comment dokumentiert Changes** (erscheint im Page History)

---

### Schritt 7: Output für PM

```
✅ PRD erfolgreich in Confluence erstellt!

📄 PRD: https://company.atlassian.net/wiki/spaces/PROD/pages/987654321
🎯 Epic: PROD-123 (https://company.atlassian.net/browse/PROD-123)

Labels:
- prd
- q2-2025
- feature-multi-upload
- status-draft
- team-platform

Nächste Schritte:
1. PRD mit Stakeholders teilen (Design, Engineering)
2. Feedback sammeln & iterieren
3. Status updaten: Draft → In Review → Approved
4. User Stories aus PRD ableiten (via user-stories Skill)
```

---

## 🔄 Workflow 2: Bestehendes PRD updaten

### Use Case: Stakeholder Feedback einarbeiten

**Schritt 1: Page lesen**

**→ Use `confluence_get_page` tool**

**Parameters:**
- `page_id`: "987654321"
- `convert_to_markdown`: true (für einfacheres Editing)
- `include_metadata`: true (für Labels, Version, etc.)

**Response enthält:**
- `markdown`: Page content als Markdown
- `version.number`: Current version (z.B. 3)
- `metadata.labels`: Aktuelle Labels

---

**Schritt 2: Content updaten**

**→ Use `confluence_update_page` tool**

**Parameters:**
- `page_id`: "987654321"
- `title`: "Multi-Video Upload - PRD" (kann gleich bleiben)
- `content`: Updated content mit Stakeholder Feedback
- `version_comment`: "Added Design Feedback: Updated wireframes, clarified edge cases"

**Important:**
- `version_comment` dokumentiert Changes (Changelog!)
- Version Number auto-increments
- Page History tracked automatisch

---

## 🔍 Workflow 3: PRD suchen (wenn Page ID unbekannt)

### Use Case: User sagt "Update das Multi-Upload PRD"

**Schritt 1: Suchen**

**→ Use `confluence_search` tool**

**Parameters:**
- `query`: "Multi-Video Upload PRD"
- `limit`: 5 (max results)

**Response enthält:**
- `results`: Array von gefundenen Pages
  - `id`: Page ID
  - `title`: Page Title
  - `space.key`: Space Key
  - `url`: Page URL

**Schritt 2: PM fragen welche Page gemeint**

```
Ich habe 2 PRDs gefunden:

1. Multi-Video Upload - PRD (PROD Space)
2. Video Upload Optimization - PRD (TECH Space)

Welche möchtest du updaten?
```

---

## 🏗️ Workflow 4: Hierarchische Struktur (Parent/Child Pages)

### Use Case: PRD mit Sub-Pages (z.B. Design Spec, Tech Spec)

**Struktur:**
```
📄 Multi-Video Upload - PRD (Parent)
  ├─ 🎨 Design Spec (Child)
  ├─ 🛠️ Technical Spec (Child)
  └─ 📊 User Research Findings (Child)
```

**Parent Page erstellen:**

**→ Use `confluence_create_page` für Parent**

**Parameters:**
- `space_key`: "PROD"
- `title`: "Multi-Video Upload - PRD"
- `content`: [PRD Content]

**→ Speicher die `parent_id` aus der Response!**

**Child Pages erstellen:**

**→ Use `confluence_create_page` für jedes Child**

**Design Spec:**
- `space_key`: "PROD"
- `title`: "Multi-Video Upload - Design Spec"
- `content`: [Design Content]
- `parent_id`: [Parent Page ID from above]

**Technical Spec:**
- `space_key`: "PROD"
- `title`: "Multi-Video Upload - Technical Spec"
- `content`: [Tech Content]
- `parent_id`: [Parent Page ID from above]

**Vorteil:**
- Hierarchische Organization
- PRD bleibt "Landing Page"
- Details in Sub-Pages
- Navigation einfacher

---

## 📊 Workflow 5: Child Pages abrufen

### Use Case: "Zeig mir alle Sub-Docs zum PRD"

**→ Use `confluence_get_page_children` tool**

**Parameters:**
- `parent_id`: "987654321"
- `include_content`: false (nur Titles, keine Full Content)
- `limit`: 25 (max results)

**Response enthält:**
- `results`: Array von Child Pages
  - `id`: Page ID
  - `title`: Page Title

**Example Output:**
```
Found 2 child pages:
1. Multi-Video Upload - Design Spec (ID: 111111111)
2. Multi-Video Upload - Technical Spec (ID: 222222222)
```

---

## 💬 Workflow 6: Kommentare hinzufügen

### Use Case: Stakeholder Feedback als Kommentar

**→ Use `confluence_add_comment` tool**

**Parameters:**
- `page_id`: "987654321"
- `content`: Comment text (Markdown supported)

**Example Comment:**
```markdown
**Engineering Feedback:**

The proposed upload architecture looks good, but we need to clarify:
- Max file size per video?
- Total batch size limit?
- Concurrent upload streams (sequential vs. parallel)?

Please add to Technical Considerations section.
```

**Wann nutzen:**
- Stakeholder Feedback dokumentieren
- Open Questions tracken
- Review Comments
- @Mentions für Notifications

---

## 🔗 Integration: Confluence ↔ Jira

### Best Practice: Two-Way Linking

**Confluence PRD:**
```markdown
**Epic:** [PROD-123](https://company.atlassian.net/browse/PROD-123)
```

**Jira Epic Description:**
```markdown
📄 **Product Requirements Document:**
https://company.atlassian.net/wiki/spaces/PROD/pages/987654321

## Summary
[Brief Summary from PRD]

See PRD for full details, metrics, and requirements.
```

**Vorteil:**
- Single Source of Truth (PRD in Confluence)
- Easy Navigation (Jira → PRD, PRD → Jira)
- Context für Developers
- PRD bleibt "Landing Page" für Feature

---

## 📁 Confluence Space Organization

### Empfohlene Struktur

```
📁 PROD (Space)
  ├─ 📂 Product Requirements (Parent Page)
  │   ├─ 📄 Multi-Video Upload - PRD
  │   ├─ 📄 Advanced Search - PRD
  │   └─ 📄 User Profile V2 - PRD
  ├─ 📂 User Research
  │   └─ [Research Docs]
  ├─ 📂 Design
  │   └─ [Design Specs]
  └─ 📂 Technical Specs
      └─ [Tech Docs]
```

**Warum:**
- Klare Hierarchie
- Easy Discovery
- Consistent Naming
- Team weiß wo was liegt

---

## 🚨 Common Mistakes & How to Avoid

### Mistake 1: Version Comment fehlt

**Problem:**
```
→ confluence_update_page ohne version_comment
```

**Impact:**
- Kein Changelog
- Unklar was geändert wurde
- Schlechte Nachvollziehbarkeit

**Solution:**
```
→ IMMER version_comment nutzen:
  "Added Success Metrics section per stakeholder feedback"
  "Updated wireframes based on Design review"
  "Clarified edge cases from Engineering feedback"
```

---

### Mistake 2: Labels vergessen

**Problem:**
PRD ohne Labels → schwer zu finden, kategorisieren

**Solution:**
Immer mindestens:
- `prd`
- `status-[x]` (draft/in-review/approved)
- `q[x]-202[x]` (timeline)

---

### Mistake 3: Jira Link fehlt oder broken

**Problem:**
```markdown
**Epic:** PROD-123
```

**Impact:**
- Kein Clickable Link
- Schlechte UX

**Solution:**
```markdown
**Epic:** [PROD-123](https://company.atlassian.net/browse/PROD-123)
```

**→ Immer full URL mit Markdown Link!**

---

### Mistake 4: Space Key falsch oder nicht existiert

**Problem:**
```
→ confluence_create_page mit space_key="PRODUKTMANAGEMENT"
→ Space existiert nicht → ERROR
```

**Solution:**
1. Frag PM: "Welcher Space? (z.B. 'PROD', 'DEV')"
2. Bei Unsicherheit: Search existing Pages zum Identifizieren
3. Confirm bevor du createst

---

### Mistake 5: Page ID verloren

**Problem:**
```
→ confluence_create_page aufgerufen
→ Page ID NICHT gespeichert
→ Später: "Wie war nochmal die Page ID?" 😱
```

**Solution:**
```
→ IMMER Page ID aus Response speichern!
→ Output an PM: "Page ID: 987654321 (für future updates)"
```

---

## 💡 Pro Tips

### Tip 1: Nutze Version History

Confluence tracked automatisch Versions.

**Check Version History:**
→ Page → "..." Menu → "Page History"

**Restore alte Version:**
→ Page History → "Restore" bei gewünschter Version

**→ Deshalb sind version_comments so wichtig!**

---

### Tip 2: @Mentions für Notifications

**In Comments:**
```markdown
@jane.doe Can you review the Success Metrics section?
@john.smith Engineering feasibility check needed for Phase 2.
```

**Impact:**
- Email Notification an Mentioned Person
- Increases Visibility
- Faster Feedback Loop

---

### Tip 3: Confluence Macros für Rich Content

**Table of Contents:**
```html
<ac:structured-macro ac:name="toc" />
```

**Status Badge:**
```html
<ac:structured-macro ac:name="status">
  <ac:parameter ac:name="title">Draft</ac:parameter>
  <ac:parameter ac:name="colour">Yellow</ac:parameter>
</ac:structured-macro>
```

**Jira Issue Macro:**
```html
<ac:structured-macro ac:name="jira">
  <ac:parameter ac:name="key">PROD-123</ac:parameter>
</ac:structured-macro>
```

**→ Frag mich wenn du spezifische Macros brauchst!**

---

### Tip 4: Search nutzt CQL (Confluence Query Language)

**Advanced Search Examples:**

**Simple Text Search:**
```
query: "Multi-Video Upload PRD"
```

**CQL Search:**
```
query: 'space="PROD" AND label="prd" AND label="q2-2025"'
```

**Common CQL Patterns:**
- `title ~ "Upload"` → Title contains "Upload"
- `label = "prd"` → Has Label "prd"
- `space = "PROD"` → In Space PROD
- `created >= "2025-01-01"` → Created after Date
- `type = "page"` → Only Pages (not Blog Posts)

**→ CQL ist powerful für Complex Queries!**

---

### Tip 5: Markdown wird automatisch konvertiert

**Du schreibst:**
```markdown
# Heading
**Bold** and *italic*
- Bullet points
[Links](https://example.com)
```

**MCP Tool konvertiert automatisch zu:**
```html
<h1>Heading</h1>
<p><strong>Bold</strong> and <em>italic</em></p>
<ul><li>Bullet points</li></ul>
<p><a href="https://example.com">Links</a></p>
```

**→ Schreib einfach Markdown, das Tool handled den Rest!**

---

## 📋 Confluence PRD Checklist

**Bevor du publishst:**

- [ ] **Title:** Clear & Descriptive (Feature Name - PRD)
- [ ] **Space:** Richtig gewählt (z.B. PROD, DEV)
- [ ] **Parent Page:** Gesetzt (falls Teil größerer Initiative)
- [ ] **Content:** Vollständig & formatiert
- [ ] **Labels:** Mindestens `prd`, `status-[x]`, `q[x]-202[x]`
- [ ] **Epic Link:** In PRD inkludiert (Jira Epic URL)
- [ ] **Jira Epic:** Erstellt & verlinkt zurück zum PRD
- [ ] **Version Comment:** Beschreibt Changes (bei Updates)
- [ ] **Status Badge:** Draft / In Review / Approved (optional)
- [ ] **Stakeholders:** Notified (via @Mentions oder Share)
- [ ] **Page ID:** Gespeichert für future updates

---

## 🔄 Complete PRD Creation Flow (Summary)

**Step-by-Step:**

1. **Prepare Markdown Content** (PRD draft)
2. **→ confluence_create_page** (space_key, title, content)
3. **→ Save Page ID** from response
4. **→ confluence_add_label** (multiple calls für alle Labels)
5. **→ jira_create_issue** (Epic mit PRD Link) [optional]
6. **→ confluence_update_page** (add Epic Link to PRD)
7. **→ Output URL & Page ID** to PM
8. **→ Notify Stakeholders** (share URL oder @mentions)

**Das war's! PRD ist live, verlinkt, labeled & ready. 🚀**

---

**Du bist jetzt bereit, PRDs in Confluence wie ein Pro zu managen!**

**Key Takeaways:**
- ✅ MCP Tools sind native
- ✅ Markdown wird automatisch konvertiert
- ✅ Page ID immer speichern
- ✅ Version Comments sind Pflicht
- ✅ Labels für Discoverability
- ✅ Two-Way Linking (Confluence ↔ Jira)

---

*Confluence Workflows für Product-Toolkit*
*Hendrik Hemken, 2025*
