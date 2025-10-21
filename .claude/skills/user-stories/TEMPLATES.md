# User Stories Templates

Ready-to-use Templates für User Stories, EPICs, Acceptance Criteria & Technical Stories.

---

## 📝 User Story Template

```markdown
# [Story Title - kurz & prägnant]

**Als** [Rolle/Persona]
**möchte ich** [Funktion/Feature]
**um** [Nutzen/Ziel/Outcome]

---

## Acceptance Criteria

- [ ] **Given** [Context/Vorbedingung] **When** [Action/User-Aktion] **Then** [Expected Outcome]
- [ ] **Given** [Context] **When** [Action] **Then** [Outcome]
- [ ] **Given** [Context] **When** [Action] **Then** [Outcome]

---

## Technical Notes

**Frontend:**
- Component: [z.B. UserProfileScreen.tsx]
- UI Libraries: [z.B. React, Tailwind]
- API Calls: GET /api/users/{id}

**Backend:**
- Endpoint: POST /api/...
- Business Logic: [Beschreibung]
- Database: [Tables/Collections]

**Infrastructure:**
- Deployment: [z.B. Docker, Vercel]
- Environment Variables: [z.B. API_KEY]

---

## Edge Cases & Error Handling

- [ ] Was passiert bei Netzwerk-Fehler?
- [ ] Was bei ungültigen Daten?
- [ ] Was bei Timeout?
- [ ] Was bei fehlenden Permissions?

---

## Dependencies

**Blocked by:**
- [STORY-123]: [Beschreibung warum]

**Blocks:**
- [STORY-456]: [Beschreibung warum]

**Relates to:**
- [STORY-789]: [Beschreibung]

---

## Story Points

**Estimate:** [1, 2, 3, 5, 8, 13]

**Rationale:**
- [Warum diese Schätzung?]
- [Was ist komplex?]
- [Welche Unknowns gibt es?]

---

## Labels

- `user-story`
- `frontend` / `backend` / `fullstack`
- `q4-2025` (Quarter)
- `high-priority` / `medium-priority` / `low-priority`

---

## Definition of Done

- [ ] Code geschrieben & reviewed
- [ ] Unit Tests geschrieben (>80% Coverage)
- [ ] Integration Tests (falls relevant)
- [ ] Acceptance Criteria erfüllt
- [ ] UI/UX reviewed (falls Frontend)
- [ ] Performance akzeptabel (<3s Load Time)
- [ ] Dokumentation aktualisiert
- [ ] Deployed auf Staging
- [ ] QA Sign-off
- [ ] PO Acceptance

```

---

## 🗂️ Epic Template

```markdown
# [Epic Name]

**Vision:**
[Was ist das große Ziel dieses Epics? Welches Problem lösen wir?]

**Business Value:**
[Warum ist das wichtig? Welche Metrics verbessern wir?]

**Target Users:**
- [Persona 1: Beschreibung]
- [Persona 2: Beschreibung]

---

## Success Criteria (Outcomes)

- [ ] [Metric 1: z.B. "User Engagement +20%"]
- [ ] [Metric 2: z.B. "Conversion Rate +10%"]
- [ ] [Metric 3: z.B. "Support Tickets -30%"]

---

## Scope (High-Level)

**In Scope:**
- [Feature 1]
- [Feature 2]
- [Feature 3]

**Out of Scope:**
- [Was machen wir NICHT?]
- [Was kommt später?]

---

## User Journey

**Happy Path:**
1. User does [Action 1]
2. System shows [Result 1]
3. User does [Action 2]
4. System shows [Result 2]
5. **Outcome:** [User erreicht Ziel]

**Alternative Paths:**
- [Edge Case 1]
- [Edge Case 2]

---

## Technical Approach

**Architecture:**
- [Frontend Approach]
- [Backend Approach]
- [Database Changes]
- [3rd Party Integrations]

**Tech Stack:**
- Frontend: [React, Vue, Native, etc.]
- Backend: [Node.js, Python, Ruby, etc.]
- Database: [PostgreSQL, MongoDB, etc.]

---

## Dependencies & Risks

**External Dependencies:**
- [3rd Party API: z.B. Stripe, Twilio]
- [Other Teams: z.B. Platform Team]

**Risks:**
- [Risk 1: z.B. "API Rate Limits"]
- [Risk 2: z.B. "Legacy System Constraints"]

**Mitigation:**
- [Wie mitigieren wir Risk 1?]
- [Wie mitigieren wir Risk 2?]

---

## Timeline (High-Level)

- **Start:** [Date]
- **Target Completion:** [Date]
- **Estimated Sprints:** [2-4 Sprints]
- **Story Points (total):** [50-100 Points]

---

## Stakeholders

- **Product Owner:** [Name]
- **Engineering Lead:** [Name]
- **Designer:** [Name]
- **QA Lead:** [Name]

---

## Related Epics

- [EPIC-123]: [Beschreibung]
- [EPIC-456]: [Beschreibung]

```

---

## ✅ Acceptance Criteria Template (Given-When-Then)

### Standard Format

```markdown
**Given** [Vorbedingung / Context]
**When** [User-Aktion / Trigger]
**Then** [Erwartetes Ergebnis / Outcome]
```

### Beispiele

**Good:**
```
✅ Given User ist eingeloggt
   When User klickt auf "Profil bearbeiten"
   Then User sieht Formular mit aktuellen Daten

✅ Given User hat 0 Freunde
   When User lädt Freunde-Liste
   Then User sieht "Noch keine Freunde" Message

✅ Given API ist offline
   When User speichert Änderungen
   Then User sieht Error "Verbindung fehlgeschlagen" + Retry Button
```

**Bad:**
```
❌ "Formular soll funktionieren"
   → Zu vage! WAS soll funktionieren?

❌ "User kann Daten ändern"
   → Nicht testbar! WELCHE Daten? WIE ändern?

❌ "Performance soll gut sein"
   → Nicht messbar! WAS ist "gut"? <3s? <5s?
```

### Edge Cases explizit machen

```markdown
**Happy Path:**
- [ ] Given valid input When submit Then success

**Edge Cases:**
- [ ] Given empty input When submit Then validation error
- [ ] Given invalid email When submit Then "Invalid email" error
- [ ] Given network timeout When submit Then "Timeout" error + Retry
- [ ] Given 1000+ records When load Then pagination (max 50 per page)
```

---

## 🛠️ Technical Story Template

Für Stories die KEINEN direkten User Value haben (z.B. Refactoring, Tech Debt, Infrastructure).

```markdown
# [Technical Story Title]

**Problem:**
[Was ist das technische Problem?]

**Solution:**
[Was ist die Lösung?]

**Impact:**
[Warum ist das wichtig? Performance? Maintainability? Security?]

---

## Acceptance Criteria

- [ ] [Technical Requirement 1]
- [ ] [Technical Requirement 2]
- [ ] [Tests passing]
- [ ] [Performance benchmark met]

---

## Technical Details

**Current State:**
- [Beschreibung des Ist-Zustands]

**Target State:**
- [Beschreibung des Soll-Zustands]

**Approach:**
- [Step 1]
- [Step 2]
- [Step 3]

---

## Story Points

**Estimate:** [3, 5, 8]

---

## Labels

- `tech-debt`
- `refactoring`
- `infrastructure`
- `backend` / `frontend`

```

---

## 🏷️ Labels & Components Guide

### Components (System-Bereiche)

- `Frontend` - UI, Client-side Logic, UX
- `Backend` - API, Business Logic, Integrations
- `Database` - Schema Changes, Migrations
- `Infrastructure` - DevOps, CI/CD, Monitoring
- `QA` - Testing, E2E, Performance Tests
- `Documentation` - Docs, API Specs, Guides

### Labels (Zusätzliche Kategorisierung)

- `user-story` / `technical-story` / `bug` / `spike`
- `high-priority` / `medium-priority` / `low-priority`
- `q4-2025` / `q1-2026` (Quarter)
- `mobile` / `web` / `api` (Platform)
- `mvp` / `nice-to-have` (Scope)

---

## 📊 Story Status Workflow

```
📝 Backlog
  ↓
📋 Ready for Dev (Refinement done, AC clear)
  ↓
👨‍💻 In Progress (Dev working)
  ↓
🧪 In Review (Code Review / QA)
  ↓
✅ Done (Deployed, Accepted by PO)
```

---

## 🎨 Jira-spezifische Felder

### Pflichtfelder
- `project_key` - z.B. "PROD", "DEV", "TECH"
- `summary` - Story Title
- `issue_type` - "Story" / "Task" / "Bug"

### Optionale Felder
- `description` - Full Story (mit ACs, Technical Notes)
- `assignee` - Email, Name, oder Account ID
- `components` - ["Frontend", "Backend"]
- `labels` - ["user-story", "q4-2025"]
- `priority` - {"name": "High"} / "Medium" / "Low"
- `parent` - Epic Key (z.B. "PROD-100")

### Custom Fields (Story Points)
- Meist `customfield_10016` oder ähnlich
- Check via `jira_search_fields "story points"`

---

**Diese Templates sind ready-to-use. Copy, paste, adapt!**

---

*Templates für Product-Toolkit User Stories Skill*
*Hendrik Hemken, 2025*
