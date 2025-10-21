# Epic Breakdown Guide

Systematischer Ansatz: EPIC → User Stories (Frontend/Backend/System)

---

## 🎯 Breakdown Philosophy

**Grundprinzip:**
- **Vertikal splitten** (User Value erhalten)
- **NICHT horizontal** (nicht nach Layer: Frontend/Backend/DB)
- **End-to-End Value** (jede Story kann deployed werden)

**Aber:** Wenn Stories zu groß werden, in System-Komponenten aufteilen.

---

## 🚀 Breakdown Process (Step-by-Step)

### Phase 1: Epic verstehen (Discovery)

**Frag den PM:**

1. **Problem/Opportunity**
   - Was ist das Problem?
   - Welche Opportunity?
   - Warum jetzt?

2. **User Context**
   - Wer sind die User? (Persona)
   - Was ist der Use Case?
   - Was ist der erwartete Outcome?

3. **Constraints**
   - Technical Constraints? (API Limits, Legacy Systems)
   - Time Constraints? (Deadline, Runway)
   - Resource Constraints? (Team Size, Budget)

4. **Success Criteria**
   - Welche Metrics verbessern wir?
   - Wie messen wir Success?
   - Was ist die Definition of Done?

**Output:**
```
Epic: [Name]
Problem: [Beschreibung]
User: [Persona]
Outcome: [Erwarteter Impact]
Constraints: [Liste]
Success Criteria: [Metrics]
```

---

### Phase 2: User Journey mappen

**Schritt 1: Happy Path identifizieren**

```
User Journey (Happy Path):
1. User does [Action 1]
   → System shows [Result 1]

2. User does [Action 2]
   → System shows [Result 2]

3. User does [Action 3]
   → System shows [Result 3]

Outcome: [User erreicht Ziel]
```

**Schritt 2: Alternative Paths & Edge Cases**

```
Alternative Paths:
- Was wenn User Error macht?
- Was wenn API offline?
- Was wenn keine Daten vorhanden?
- Was wenn Permission fehlt?
```

**Schritt 3: User Value Points identifizieren**

```
Value Points:
- [Schritt 1]: User kann [X] machen → Value: [Y]
- [Schritt 2]: User kann [X] machen → Value: [Y]
- [Schritt 3]: User kann [X] machen → Value: [Y]

→ Jeder Value Point = potentielle Story!
```

---

### Phase 3: System-Komponenten identifizieren

**Für jeden Value Point → System-Komponenten:**

**Frontend:**
- UI Components (Buttons, Forms, Screens)
- Client-side Logic (Validation, State Management)
- UX Flows (Navigation, Feedback)

**Backend:**
- API Endpoints (REST, GraphQL)
- Business Logic (Calculations, Rules)
- 3rd Party Integrations (Stripe, Twilio, etc.)

**Database:**
- Schema Changes (New Tables, Migrations)
- Data Models (Relationships, Constraints)
- Indexes (Performance)

**Infrastructure:**
- Deployment (Docker, CI/CD)
- Monitoring (Logs, Metrics)
- Scaling (Load Balancer, Caching)

**QA/Testing:**
- Unit Tests
- Integration Tests
- E2E Tests
- Performance Tests

---

### Phase 4: Stories extrahieren

**Approach 1: Vertikal (Standard)**

```
Story: "Als [User] möchte ich [X] um [Y]"

Scope:
- Frontend: [Component A, Component B]
- Backend: [API Endpoint, Business Logic]
- Database: [Schema Change]

→ Story liefert End-to-End Value!
```

**Approach 2: Horizontal (nur wenn Vertical zu groß)**

```
Story 1 (MVP): "Als [User] möchte ich [X] um [Y]" (Basic Version)
  → Frontend + Backend + DB (aber minimal)

Story 2 (Enhancement): "Als [User] möchte ich [X erweitert] um [Y]"
  → Erweitert Story 1

Story 3 (Enhancement): "Als [User] möchte ich [X optimiert] um [Y]"
  → Optimiert Story 1
```

**Approach 3: System-Komponenten (nur bei sehr großen EPICs)**

```
Story 1: "Als [User] möchte ich [X] um [Y]" (Frontend Focus)
  → Frontend + Mock Backend

Story 2: "Als [User] möchte ich [X] um [Y]" (Backend Integration)
  → Real Backend API + Integration

Story 3: "Als [User] möchte ich [X optimiert] um [Y]" (Performance)
  → Caching, Optimization
```

---

### Phase 5: Dependencies & Sequencing

**Dependency Types:**

1. **Hard Dependency (BLOCKS)**
   - Story A muss fertig sein bevor Story B starten kann
   - Beispiel: API muss existieren bevor Frontend integriert

2. **Soft Dependency (RELATES TO)**
   - Stories hängen zusammen, aber keine harte Blockierung
   - Beispiel: Login & Registration (ähnliche Flows)

3. **Technical Dependency**
   - Infrastructure/Tech-Stack muss ready sein
   - Beispiel: Stripe Integration muss setup sein

**Dependency Mapping:**

```
Story A: [Title]
  → BLOCKS: Story B, Story C
  → BLOCKED BY: (none)

Story B: [Title]
  → BLOCKS: Story D
  → BLOCKED BY: Story A

Story C: [Title]
  → BLOCKS: (none)
  → BLOCKED BY: Story A

Story D: [Title]
  → BLOCKS: (none)
  → BLOCKED BY: Story B
```

**Sequencing:**

```
Sprint 1:
- Story A (Foundation)

Sprint 2:
- Story B (depends on A)
- Story C (depends on A, parallel zu B)

Sprint 3:
- Story D (depends on B)
```

---

## 🎯 Breakdown Patterns

### Pattern 1: CRUD Features

**Epic:** "User Account Management"

**Breakdown:**

```
Story 1: "Als User möchte ich mich registrieren um ein Konto zu erstellen"
  → CREATE (3 Points)

Story 2: "Als User möchte ich mein Profil bearbeiten um meine Daten aktuell zu halten"
  → UPDATE (3 Points)

Story 3: "Als User möchte ich mein Profilbild hochladen um mich zu präsentieren"
  → UPDATE + File Upload (5 Points)

Story 4: "Als User möchte ich mein Konto löschen um nicht mehr Teil der Plattform zu sein"
  → DELETE (3 Points)

Story 5: "Als User möchte ich mein Profil sehen um meine Daten zu überprüfen"
  → READ (2 Points)
```

**Total:** 16 Story Points

---

### Pattern 2: Complex User Flow

**Epic:** "Checkout Flow"

**Breakdown:**

```
Story 1 (MVP): "Als User möchte ich ein Produkt in den Warenkorb legen um es später zu kaufen"
  → Cart Management (3 Points)

Story 2: "Als User möchte ich meinen Warenkorb sehen um zu prüfen was ich kaufe"
  → Cart View (2 Points)

Story 3: "Als User möchte ich meine Lieferadresse eingeben um das Produkt zu erhalten"
  → Address Form (3 Points)

Story 4: "Als User möchte ich mit Kreditkarte zahlen um den Kauf abzuschließen"
  → Payment Integration (Stripe) (8 Points)

Story 5: "Als User möchte ich eine Bestellbestätigung per Email erhalten um meinen Kauf zu bestätigen"
  → Email Integration (5 Points)

Story 6: "Als User möchte ich meine Bestellhistorie sehen um vergangene Käufe einzusehen"
  → Order History (3 Points)
```

**Total:** 24 Story Points (2 Sprints)

**Dependencies:**
- Story 4 BLOCKED BY Story 3 (need address before payment)
- Story 5 BLOCKED BY Story 4 (need completed order)

---

### Pattern 3: Integration Feature

**Epic:** "Slack Integration"

**Breakdown:**

```
Story 1 (Technical): "Slack OAuth Setup um User zu authentifizieren"
  → OAuth Flow (5 Points)

Story 2: "Als User möchte ich Slack Workspace verbinden um Notifications zu erhalten"
  → Connection Flow (3 Points)
  → BLOCKED BY Story 1

Story 3: "Als User möchte ich Notifications in Slack erhalten um Updates zu bekommen"
  → Send Notifications (5 Points)
  → BLOCKED BY Story 2

Story 4: "Als User möchte ich wählen welche Notifications ich erhalte um nicht gestört zu werden"
  → Notification Settings (3 Points)
  → BLOCKED BY Story 3

Story 5: "Als User möchte ich Slack disconnecten um keine Notifications mehr zu erhalten"
  → Disconnect Flow (2 Points)
```

**Total:** 18 Story Points

---

### Pattern 4: Performance/Optimization

**Epic:** "Dashboard Performance Improvement"

**Breakdown:**

```
Story 1 (Technical): "Als User möchte ich schnelle Ladezeiten (<2s) um nicht zu warten"
  → Implement Caching (Redis) (8 Points)

Story 2 (Technical): "Als User möchte ich große Datenmengen sehen ohne Performance-Probleme"
  → Implement Pagination (3 Points)

Story 3 (Technical): "Als Developer möchte ich N+1 Queries eliminieren um DB-Load zu reduzieren"
  → Fix N+1 Queries (5 Points)

Story 4 (Technical): "Als User möchte ich optimierte Bilder sehen um Ladezeiten zu verbessern"
  → Image Optimization (CDN) (5 Points)
```

**Total:** 21 Story Points

---

## 🛠️ System-Komponenten Breakdown

### Frontend Stories

**Trigger:** UI-heavy Features, Client-side Logic

**Breakdown:**

```
Story: "Als User möchte ich [UI Feature] um [Nutzen]"

Components:
- UI Component(s): [Button, Form, Modal]
- State Management: [Redux, Context API]
- API Integration: [REST Calls]
- Validation: [Client-side]
- Error Handling: [User Feedback]

Technical Notes:
- Framework: React / Vue / Native
- Styling: Tailwind / CSS Modules
- Testing: Jest, React Testing Library
```

---

### Backend Stories

**Trigger:** API, Business Logic, Integrations

**Breakdown:**

```
Story: "Als User möchte ich [Feature] um [Nutzen]"

Backend Components:
- API Endpoint: POST /api/... (REST or GraphQL)
- Business Logic: [Calculations, Rules]
- Database: [Queries, Transactions]
- 3rd Party: [Stripe, Twilio, etc.]
- Error Handling: [Status Codes, Messages]

Technical Notes:
- Framework: Node.js / Python / Ruby
- Database: PostgreSQL / MongoDB
- Testing: Jest, Supertest
```

---

### Database Stories

**Trigger:** Schema Changes, Migrations

**Breakdown:**

```
Story (Technical): "Database Migration: [Beschreibung]"

Changes:
- New Tables: [users, orders]
- New Columns: [email, created_at]
- Indexes: [email_idx for performance]
- Constraints: [UNIQUE, NOT NULL]

Migration Plan:
- Step 1: Create migration file
- Step 2: Test on Staging
- Step 3: Deploy to Production (zero-downtime)

Rollback Plan:
- Revert migration if issues
```

---

### QA/Testing Stories

**Trigger:** Complex Features, Critical Paths

**Breakdown:**

```
Story (QA): "Als QA möchte ich [Feature] testen um Qualität sicherzustellen"

Test Coverage:
- Unit Tests: [Functions, Components]
- Integration Tests: [API Endpoints]
- E2E Tests: [User Flows]
- Performance Tests: [Load Time, Stress Tests]

Acceptance Criteria:
- [ ] Unit Test Coverage >80%
- [ ] All E2E Tests passing
- [ ] Performance <3s page load
```

---

## 📊 Story Sizing nach Komponenten

### Frontend (UI-focused)

| Size | Beschreibung | Beispiel |
|------|--------------|----------|
| **2** | Simple UI Change | Text ändern, Button hinzufügen |
| **3** | New Component | Simple Form, Modal |
| **5** | Complex Component | Multi-step Form, Chart |
| **8** | Feature + State Mgmt | Dashboard mit API Integration |

### Backend (API-focused)

| Size | Beschreibung | Beispiel |
|------|--------------|----------|
| **2** | Simple Endpoint | GET /api/users |
| **3** | CRUD Endpoint | POST /api/users mit Validation |
| **5** | Complex Logic | Payment Processing, Business Rules |
| **8** | 3rd Party Integration | Stripe, Twilio, Complex APIs |

### Fullstack (End-to-End)

| Size | Beschreibung | Beispiel |
|------|--------------|----------|
| **5** | Simple Feature | Login Form (Frontend + Backend + DB) |
| **8** | Standard Feature | Registration Flow mit Email Verification |
| **13** | Complex Feature | **TOO BIG! Split!** |

---

## 🧩 Splitting Strategies

### Strategy 1: MVP → Enhancement

**Wenn Story zu groß:**

```
Story 1 (MVP): "Als User möchte ich [Basic X] um [Y]"
  → Minimal funktionsfähige Version (5 Points)

Story 2 (Enhancement): "Als User möchte ich [X erweitert] um [besseres Y]"
  → Enhanced Version (3 Points)

Story 3 (Optimization): "Als User möchte ich [X optimiert] um [noch besseres Y]"
  → Optimized Version (3 Points)
```

**Example:**

```
Story 1: "Als User möchte ich Suchergebnisse sehen um Produkte zu finden"
  → Basic Search (Text-Match) (5 Points)

Story 2: "Als User möchte ich Filter nutzen um Suchergebnisse zu verfeinern"
  → Add Filters (Category, Price) (5 Points)

Story 3: "Als User möchte ich intelligente Suggestions sehen um schneller zu finden"
  → Add Auto-Complete (3 Points)
```

---

### Strategy 2: Path-based Splitting

**Wenn komplexe User Journey:**

```
Story 1: "Als User möchte ich [Happy Path] um [Y]"
  → Happy Path (3 Points)

Story 2: "Als User möchte ich [Edge Case 1] um [Y]"
  → Edge Case 1 (2 Points)

Story 3: "Als User möchte ich [Edge Case 2] um [Y]"
  → Edge Case 2 (2 Points)
```

**Example:**

```
Story 1: "Als User möchte ich mich mit Email/PW anmelden um Zugang zu erhalten"
  → Happy Path (3 Points)

Story 2: "Als User möchte ich 'Passwort vergessen' nutzen um wieder Zugang zu bekommen"
  → Reset Password Flow (5 Points)

Story 3: "Als User möchte ich Social Login nutzen um schneller Zugang zu erhalten"
  → Google/Facebook Login (8 Points)
```

---

### Strategy 3: Component-based Splitting

**Nur bei sehr großen EPICs:**

```
Story 1: "Als User möchte ich [X] um [Y]" (Frontend)
  → UI + Mock Data (3 Points)

Story 2: "Als User möchte ich [X] um [Y]" (Backend Integration)
  → Real API Integration (5 Points)

Story 3: "Als User möchte ich [X optimiert] um [Y]" (Performance)
  → Caching, Optimization (3 Points)
```

**⚠️ Achtung:** Nur verwenden wenn Vertical Splitting nicht möglich!

---

## ✅ Breakdown Checklist

**Vor dem Finalisieren:**

```
✅ Jede Story hat klaren User Value
✅ Jede Story ist INVEST-compliant
✅ Story Points geschätzt (max 8 Points)
✅ Dependencies identifiziert & markiert
✅ Acceptance Criteria definiert (Given-When-Then)
✅ Technical Notes hinzugefügt
✅ Labels & Components gesetzt
✅ Epic Link gesetzt
```

---

## 🚀 Jira Batch Creation

**Nach Breakdown → Jira:**

```javascript
// Batch Create via jira_batch_create_issues
{
  "issues": [
    {
      "project_key": "PROD",
      "summary": "Als User möchte ich...",
      "issue_type": "Story",
      "description": "...",
      "assignee": "user@example.com",
      "components": ["Frontend"],
      "additional_fields": {
        "parent": "PROD-100",  // Epic Link
        "customfield_10016": 5  // Story Points
      }
    },
    // ... more stories
  ]
}
```

**Output für PM:**

```
✅ Created 8 Stories in Jira (Epic: PROD-100)

Frontend (3 Stories):
- PROD-123: Als User möchte ich... (3 Points)
- PROD-124: Als User möchte ich... (5 Points)
- PROD-125: Als User möchte ich... (2 Points)

Backend (3 Stories):
- PROD-126: API Endpoint für... (5 Points)
- PROD-127: Integration mit... (8 Points)
- PROD-128: Validation... (3 Points)

QA (2 Stories):
- PROD-129: E2E Tests (3 Points)
- PROD-130: Performance Tests (5 Points)

Total: 34 Story Points (~2 Sprints für 1 Dev)
```

---

**Breakdown ist eine Kunst. Mit Übung wird's besser. INVEST always.**

---

*Epic Breakdown Guide für Product-Toolkit*
*Hendrik Hemken, 2025*
