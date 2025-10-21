# PRD → User Stories Workflow

Systematisch Product Requirements Documents (Confluence, Google Docs, Notion) in User Stories umwandeln.

---

## 🎯 Workflow Overview

**Input:** Product Requirements Document (PRD)
**Output:** Serie von User Stories (INVEST-compliant, ready for Jira)

**Unterstützte Formate:**
- ✅ Confluence Page (Copy-paste oder URL)
- ✅ Google Docs (URL oder export)
- ✅ Markdown Files (.md)
- ✅ Notion Pages (export)
- ✅ Plain Text / Chat Description

---

## 🚀 Workflow (Step-by-Step)

### Phase 1: PRD Input erhalten

**Frag den PM:**

```
"Cool! Lass uns aus dem PRD User Stories machen.

Wie möchtest du mir das PRD geben?

1. Confluence URL (falls accessible)
2. Copy-paste den Content hier rein
3. Markdown File (.md export)
4. Screenshot vom PRD
5. Beschreib es mir einfach im Chat

Was passt am besten?"
```

**Input-Optionen:**

#### Option 1: Confluence URL
```
User: "https://yourcompany.atlassian.net/wiki/spaces/PROD/pages/123456/Feature-X"

→ WebFetch verwenden (falls public oder authenticated)
→ Content extrahieren
```

#### Option 2: Copy-Paste
```
User: [Kopiert Confluence Content direkt]

→ Parse den pasted Content
→ Handle Confluence-spezifische Formatierung
```

#### Option 3: Markdown File
```
User: "Hier ist das PRD: /path/to/prd.md"

→ Read File
→ Parse Markdown Structure
```

#### Option 4: Screenshot
```
User: [Screenshot von Confluence Page]

→ OCR / Image-to-Text (Claude kann Bilder lesen!)
→ Parse extrahierten Text
```

#### Option 5: Chat Description
```
User: "Das Feature soll... [Beschreibung]"

→ Strukturiertes Interview führen
→ PRD-Struktur im Chat aufbauen
```

---

### Phase 2: PRD Analyse & Struktur verstehen

**Was du aus dem PRD extrahieren musst:**

#### 1. Problem Statement
```
❓ Welches Problem lösen wir?
❓ Warum ist das wichtig?
❓ Was ist die Opportunity?
```

#### 2. Target Users
```
❓ Wer sind die User? (Persona)
❓ Was ist ihr aktueller Pain Point?
❓ Was ist der erwartete Outcome?
```

#### 3. Features & Requirements
```
❓ Was sind die Must-Have Features?
❓ Was sind Nice-to-Have Features?
❓ Was ist explizit OUT OF SCOPE?
```

#### 4. Success Criteria
```
❓ Wie messen wir Success? (Metrics)
❓ Was ist die Definition of Done?
❓ Welche Acceptance Criteria gibt's?
```

#### 5. Constraints & Dependencies
```
❓ Technical Constraints? (API Limits, Legacy)
❓ Time Constraints? (Deadline, Launch Date)
❓ External Dependencies? (3rd Party APIs, andere Teams)
```

#### 6. User Journey / Use Cases
```
❓ Was ist der Happy Path?
❓ Welche Alternative Paths gibt's?
❓ Welche Edge Cases?
```

---

### Phase 3: PRD Parsing (Confluence-spezifisch)

**Confluence-Struktur erkennen:**

#### Typische PRD-Struktur in Confluence:

```markdown
# [Feature Name]

## Problem Statement
[Beschreibung des Problems]

## Target Users
- User Persona 1
- User Persona 2

## Requirements
### Must-Have
- Requirement 1
- Requirement 2

### Nice-to-Have
- Requirement 3

## User Flows
1. User does X
2. System shows Y
3. User does Z

## Success Metrics
- Metric 1: Target
- Metric 2: Target

## Technical Considerations
[Tech Stack, APIs, etc.]

## Out of Scope
- Feature X (for later)
```

**Deine Aufgabe:**
1. Parse die Struktur (Headings, Lists, Tables)
2. Extrahiere Requirements & Features
3. Identifiziere User Value Points
4. Map zu potentiellen User Stories

---

### Phase 4: Requirements → User Stories mappen

**Mapping Logic:**

#### 1. Feature-based Mapping (Standard)

```
PRD Requirement:
"Users should be able to export their data as CSV"

→ Story:
"Als User möchte ich meine Daten als CSV exportieren
um sie in Excel zu analysieren"
```

#### 2. User Journey-based Mapping

```
PRD User Flow:
1. User uploads file
2. System validates file
3. System shows preview
4. User confirms
5. System processes

→ Stories:
Story 1: "Als User möchte ich Files hochladen..."
Story 2: "Als User möchte ich Preview sehen..."
Story 3: "Als User möchte ich Processing-Status sehen..."
```

#### 3. Epic vs. Story Decision

```
PRD Feature: "Complete Payment Integration"

→ Zu groß für eine Story!
→ Create Epic + breakdown in Stories

Epic: "Payment Integration"
├── Story 1: "Als User möchte ich mit Kreditkarte zahlen..."
├── Story 2: "Als User möchte ich Payment-Status sehen..."
└── Story 3: "Als User möchte ich Rechnung per Email erhalten..."
```

---

### Phase 5: User Stories schreiben

**Für jede identifizierte Story:**

```markdown
# Story Title

**Als** [Persona aus PRD]
**möchte ich** [Feature/Capability]
**um** [Business Value / Outcome aus PRD]

---

## Acceptance Criteria

(Extrahiert aus PRD Requirements)

- [ ] Given [Context] When [Action] Then [Expected Outcome]
- [ ] Given [Context] When [Action] Then [Outcome]
- [ ] Given [Context] When [Action] Then [Outcome]

---

## Technical Notes

(Extrahiert aus PRD Technical Section)

**Frontend:**
- [UI Components aus PRD]

**Backend:**
- [API Requirements aus PRD]
- [3rd Party Integrations]

**Database:**
- [Data Model aus PRD]

---

## Edge Cases

(Extrahiert aus PRD Use Cases / Edge Cases)

- [ ] Edge Case 1
- [ ] Edge Case 2

---

## PRD Reference

**Source:** [Confluence Page URL / Title]
**Section:** [Which section of PRD]
**Original Requirement:** "[Quote from PRD]"

---

## Story Points

[Estimate basierend auf Complexity aus PRD]
```

---

### Phase 6: INVEST Check (Quality Gate)

**Für JEDE Story:**

```
✅ Independent? Kann alleine umgesetzt werden?
✅ Negotiable? Details noch verhandelbar?
✅ Valuable? User Value aus PRD klar?
✅ Estimable? Genug Info zum Schätzen?
✅ Small? Max 8 Story Points?
✅ Testable? Acceptance Criteria klar?

Falls NEIN → Story überarbeiten!
```

---

### Phase 7: Output & Jira Creation

**Output für PM:**

```
📋 PRD Analysis: [PRD Title]

Identifiziert:
- 🎯 Problem: [Kurze Zusammenfassung]
- 👥 Users: [Personas]
- 📊 Success Metrics: [Metrics aus PRD]

Stories erstellt: 8

Frontend (3):
- Story 1: Als [User] möchte ich... (3 Points)
- Story 2: Als [User] möchte ich... (5 Points)
- Story 3: Als [User] möchte ich... (2 Points)

Backend (3):
- Story 4: Als [User] möchte ich... (5 Points)
- Story 5: Als [User] möchte ich... (3 Points)
- Story 6: Als [User] möchte ich... (8 Points)

QA (2):
- Story 7: E2E Tests für... (3 Points)
- Story 8: Performance Tests... (5 Points)

Total: 34 Story Points (~2 Sprints für 1 Dev)

Soll ich die Stories in Jira erstellen? (Projekt: PROD)
```

**Wenn User "Ja":**
→ Batch Create via `jira_batch_create_issues`
→ Optional: Create Epic first (wenn sinnvoll)
→ Link Stories to Epic

---

## 🔍 Confluence-spezifische Parsing Tips

### Confluence Markup erkennen

**Headings:**
```
h1. Main Heading
h2. Sub Heading
h3. Sub-sub Heading
```

**Lists:**
```
* Bullet Point
# Numbered List
```

**Tables:**
```
|| Header 1 || Header 2 ||
| Cell 1 | Cell 2 |
```

**Macros:**
```
{info}
This is an info box
{info}

{warning}
This is a warning
{warning}
```

**Code Blocks:**
```
{code:java}
System.out.println("Hello");
{code}
```

### Common Confluence PRD Patterns

**Pattern 1: User Story Format bereits im PRD**
```
Confluence Content:
"As a user, I want to export data so that I can analyze it"

→ Already in User Story Format!
→ Copy & enhance with AC, Technical Notes
```

**Pattern 2: Requirements List**
```
Confluence Content:
Requirements:
- System shall allow file upload (max 10MB)
- System shall validate file format
- System shall show preview

→ Map zu Stories:
Story 1: "Als User möchte ich Files hochladen (max 10MB)..."
Story 2: "Als User möchte ich Validation Feedback sehen..."
Story 3: "Als User möchte ich Preview sehen..."
```

**Pattern 3: Epic-level PRD**
```
Confluence Content:
"Complete Checkout Flow Implementation"

→ Zu groß!
→ Create Epic + breakdown in Stories (siehe BREAKDOWN.md)
```

---

## 📊 PRD Quality Check

**Bevor du Stories erstellst:**

```
✅ PRD ist vollständig?
   → Problem, Users, Requirements, Success Criteria vorhanden?

✅ Requirements sind klar?
   → Nicht zu vage ("system should be fast")

✅ User Value erkennbar?
   → Nicht nur technical specs

✅ Success Metrics definiert?
   → Wie messen wir Success?

✅ Scope klar?
   → Was ist IN, was ist OUT?
```

**Wenn PRD unvollständig:**

```
⚠️ "Hey, das PRD ist etwas dünn.

Fehlt:
- Success Metrics (wie messen wir Erfolg?)
- Edge Cases (was bei Error?)
- Technical Constraints (API Limits?)

Soll ich trotzdem Stories schreiben
oder willst du das PRD erst ergänzen?"
```

---

## 🎯 Output Formats

### Format 1: Inline (Chat)

```
Story 1:
───────
Als [User] möchte ich [X] um [Y]

Acceptance Criteria:
- [ ] Given... When... Then...

Story Points: 3
───────

Story 2:
───────
...
```

### Format 2: Markdown File

```
File: /outputs/user-stories/PRD-Feature-X-Stories.md

Enthält:
- Alle Stories
- PRD Reference
- Story Mapping (PRD Requirement → Story)
```

### Format 3: Jira Direct

```
→ Batch Create in Jira
→ PRD Link in Story Description
→ PRD Section als Label/Component
```

---

## 🚨 Common Pitfalls

### ❌ Pitfall 1: PRD zu vague

**Problem:**
```
PRD: "System should have good UX"
```

**Fix:**
```
Frag nach:
- Was ist "good UX" konkret?
- Welche User Actions?
- Welche Outcomes?
```

---

### ❌ Pitfall 2: Tech Spec statt User Value

**Problem:**
```
PRD: "Implement REST API with OAuth2"
```

**Fix:**
```
Frag:
- Warum brauchen wir das?
- Was kann der User damit?
- Was ist der Value?

→ Story: "Als User möchte ich sicher auf meine Daten zugreifen (via OAuth2)..."
```

---

### ❌ Pitfall 3: Epic-level PRD

**Problem:**
```
PRD: "Complete Social Network Implementation"
(100+ Stories)
```

**Fix:**
```
→ "Das ist ein EPIC-level PRD!

Soll ich:
1. Epic erstellen + breakdown in Stories (siehe BREAKDOWN.md)
2. MVP-Phase identifizieren (was first?)
3. Nur Core Features für Sprint 1?"
```

---

### ❌ Pitfall 4: Missing Acceptance Criteria

**Problem:**
```
PRD hat keine ACs, nur "User can upload file"
```

**Fix:**
```
→ Generate ACs basierend auf Standard Edge Cases:

- [ ] Given valid file When upload Then success
- [ ] Given file >10MB When upload Then "Too large" error
- [ ] Given invalid format When upload Then "Invalid format" error
- [ ] Given network error When upload Then retry option
```

---

## 🔗 PRD → Stories Mapping Examples

### Example 1: Simple Feature PRD

**PRD (Confluence):**
```
# Feature: Export Data

## Problem
Users can't export their data for external analysis.

## Requirements
- Export as CSV
- Include all user data (last 12 months)
- Email download link if >1000 records
- Immediate download if <1000 records

## Success Metrics
- Export feature used by 30% of users
- <2s export time for <1000 records
```

**Stories:**

```
Story 1:
"Als User möchte ich meine Daten als CSV exportieren
um sie in Excel zu analysieren"

Acceptance Criteria:
- [ ] Given <1000 records When export Then immediate download
- [ ] Given >1000 records When export Then email with download link
- [ ] Given export clicked When download ready Then CSV includes all fields

Technical Notes:
- Backend: GET /api/export?format=csv
- Async job for >1000 records
- Email template: "Your export is ready"

Story Points: 5

PRD Reference: Confluence Page "Feature: Export Data" → Requirements Section
```

---

### Example 2: Complex Flow PRD

**PRD (Confluence):**
```
# Feature: Multi-Step Onboarding

## User Flow
1. User signs up
2. User verifies email
3. User completes profile (name, photo, bio)
4. User selects preferences
5. User sees personalized dashboard

## Requirements
- Email verification required
- Profile completion optional (can skip)
- Preferences: categories, notifications
- Dashboard shows relevant content based on preferences
```

**Stories:**

```
Story 1: "Als neuer User möchte ich mich registrieren..."
Story 2: "Als neuer User möchte ich meine Email verifizieren..."
Story 3: "Als neuer User möchte ich mein Profil vervollständigen..."
Story 4: "Als neuer User möchte ich Präferenzen setzen..."
Story 5: "Als neuer User möchte ich personalisiertes Dashboard sehen..."

Total: 5 Stories (~15-20 Story Points)
```

---

## 📚 Best Practices

### 1. PRD als Single Source of Truth

```
✅ Link jede Story zurück zum PRD
✅ Quote original Requirements im Story Description
✅ Track PRD Changes → update Stories
```

### 2. Konversational Parsing

```
✅ Zeige dem PM was du extrahiert hast
✅ Frag bei Unklarheiten nach
✅ Bestätige Interpretation

❌ NICHT: Blind Stories erstellen ohne Rückfrage
```

### 3. Incremental Refinement

```
✅ First Pass: Quick Stories (Titles + Basic AC)
✅ Second Pass: Refine ACs, Technical Notes
✅ Third Pass: INVEST Check, Story Points

❌ NICHT: Perfekte Stories auf Anhieb erwarten
```

### 4. PRD Quality Feedback

```
✅ Gib Feedback wenn PRD Lücken hat
✅ Schlage Verbesserungen vor
✅ Hilf PM bessere PRDs zu schreiben

Example:
"⚠️ PRD fehlt Success Metrics - wie messen wir Erfolg?
   Soll ich Standard-Metrics vorschlagen? (Engagement, Conversion, etc.)"
```

---

## 🎨 Tone & Style

**Konversational, nicht robotisch:**

```
❌ NICHT:
"PRD parsed. 8 stories extracted. Creating in Jira."

✅ SONDERN:
"Cool! Ich hab das PRD durchgegangen.

Gefunden:
- Problem: User können Daten nicht exportieren
- Target: 30% Adoption
- 3 Must-Have Features, 2 Nice-to-Have

Daraus mache ich 5 Stories (Frontend + Backend + QA).

Soll ich loslegen? 🚀"
```

---

## 🧪 Testing Checklist

**Vor dem Release an PM:**

```
✅ Alle Stories haben User Value (nicht nur tech specs)
✅ Alle Stories sind INVEST-compliant
✅ Acceptance Criteria sind testbar (Given-When-Then)
✅ Technical Notes sind vorhanden (Frontend/Backend/DB)
✅ PRD Reference ist verlinkt (traceability)
✅ Story Points geschätzt (realistic)
✅ Dependencies identifiziert (if any)
```

---

**PRD → Stories ist eine Kunst. Mit Übung wird's besser. User Value First. INVEST always.**

---

*PRD Workflow für Product-Toolkit User Stories Skill*
*Hendrik Hemken, 2025*
