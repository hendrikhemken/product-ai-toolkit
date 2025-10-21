# User Stories Best Practices Guide

INVEST Principles, Best Practices, Good vs. Bad Examples, Common Mistakes.

---

## 🎯 INVEST Principles

**Jede User Story MUSS INVEST-compliant sein:**

### **I - Independent** (Unabhängig)

**Regel:** Story kann alleine umgesetzt werden, ohne auf andere Stories zu warten.

**✅ Good:**
```
Story A: "Als User möchte ich mein Profil bearbeiten um meine Daten aktuell zu halten"
Story B: "Als User möchte ich mein Profilbild hochladen um mich zu präsentieren"

→ Beide Stories sind unabhängig voneinander
```

**❌ Bad:**
```
Story A: "Als User möchte ich Schritt 1 der Registrierung machen"
Story B: "Als User möchte ich Schritt 2 der Registrierung machen"

→ Story B hängt komplett von Story A ab!
→ Fix: Eine Story "Als User möchte ich mich registrieren um..."
```

**Ausnahmen:**
- Technical Dependencies sind OK (aber explizit markieren!)
- BLOCKED BY relationships in Jira setzen

---

### **N - Negotiable** (Verhandelbar)

**Regel:** Details der Umsetzung können noch besprochen werden.

**✅ Good:**
```
"Als User möchte ich Benachrichtigungen erhalten um über Updates informiert zu bleiben"

→ WIE die Benachrichtigungen aussehen kann noch diskutiert werden
→ Push? Email? In-App? → Verhandelbar!
```

**❌ Bad:**
```
"Als User möchte ich Push-Benachrichtigungen mit rotem Badge und Sound 'ding.mp3' erhalten"

→ Zu spezifisch! Keine Verhandlungsmöglichkeit mehr.
```

**Rule of Thumb:**
- Story = **WAS** (verhandelbar)
- Acceptance Criteria = **WIE** (konkreter, aber immer noch verhandelbar)
- Implementation = **EXAKT** (nicht verhandelbar)

---

### **V - Valuable** (Wertvoll)

**Regel:** Story liefert User Value oder Business Value.

**✅ Good (User Value):**
```
"Als User möchte ich meine Bestellung stornieren um Fehler zu korrigieren"

→ Clear User Value: User kann Fehler beheben
```

**✅ Good (Business Value):**
```
"Als Admin möchte ich Analytics sehen um datengetriebene Entscheidungen zu treffen"

→ Clear Business Value: Better Decisions
```

**❌ Bad (Activity-based, kein Value):**
```
"Als Developer möchte ich eine REST API implementieren"

→ Das ist KEIN Value, das ist eine Activity!
→ Fix: "Als User möchte ich meine Daten exportieren (via API) um sie in anderen Tools zu nutzen"
```

**Technical Stories:**
- Manchmal gibt es Technical Stories ohne direkten User Value
- Erlaubt für: Refactoring, Tech Debt, Infrastructure
- **ABER:** Immer Business Impact erklären! ("Performance +50%", "Maintainability verbessert")

---

### **E - Estimable** (Schätzbar)

**Regel:** Team kann Story Points schätzen.

**✅ Good:**
```
"Als User möchte ich meine Email-Adresse ändern um bei Anbieterwechsel erreichbar zu bleiben"

Acceptance Criteria:
- Given User ist eingeloggt When User ändert Email Then Bestätigungs-Mail
- Given User klickt Bestätigungs-Link Then Email updated

→ Team kann schätzen: 3-5 Story Points
```

**❌ Bad:**
```
"Als User möchte ich eine bessere Experience haben"

→ Zu vage! Was heißt "besser"?
→ Team kann nicht schätzen!
```

**Wenn nicht schätzbar:**
- **Spike Story erstellen** (Time-boxed Research)
- Nach Spike: Echte Stories schreiben

**Spike Example:**
```
Spike: "Research: Wie integrieren wir Payment Provider X?"
Time-box: 4 Stunden
Output: Technical Approach Doc + Story Points Estimate
```

---

### **S - Small** (Klein)

**Regel:** Story passt in einen Sprint (max 8 Story Points).

**✅ Good:**
```
"Als User möchte ich mein Profilbild hochladen um mich zu präsentieren"

→ 3 Story Points (0.5-1 Tag)
→ Passt locker in einen Sprint
```

**❌ Bad:**
```
"Als User möchte ich ein vollständiges Social Network nutzen"

→ Das ist ein EPIC, keine Story!
→ 100+ Story Points!
```

**Sizing Guide:**
- **1-2 Points:** Trivial (Stunden)
- **3-5 Points:** Standard (0.5-2 Tage) ← Sweet Spot!
- **8 Points:** Maximum (2-3 Tage)
- **13+ Points:** TOO BIG! Split!

**Wenn zu groß:**
- Split in kleinere Stories
- Vertikal splitten (User Value erhalten!)
- Nicht horizontal (Layer-basiert)

---

### **T - Testable** (Testbar)

**Regel:** Klare Acceptance Criteria = testbar.

**✅ Good:**
```
Acceptance Criteria:
- [ ] Given User uploaded 5MB image When submit Then success
- [ ] Given User uploaded 20MB image When submit Then "File too large" error
- [ ] Given User uploaded .exe file When submit Then "Invalid format" error

→ 100% testbar! QA weiß exakt was zu testen ist.
```

**❌ Bad:**
```
Acceptance Criteria:
- [ ] Upload soll funktionieren

→ Nicht testbar! WAS heißt "funktionieren"?
→ Welche Edge Cases?
```

**Given-When-Then Format:**
```
Given [Vorbedingung]
When [User-Aktion]
Then [Erwartetes Ergebnis]
```

---

## 🚫 Common Mistakes (und wie du sie vermeidest)

### ❌ Mistake 1: Activity-based Stories

**Bad:**
```
"Als Developer möchte ich eine API bauen"
"Implement User Authentication"
"Create Database Schema"
```

**Why Bad:**
- Kein User Value
- Kein Outcome
- Developer-Sicht, nicht User-Sicht

**Fix:**
```
"Als User möchte ich mich mit Email & Passwort anmelden um sicher auf mein Konto zuzugreifen"

Technical Notes:
- Backend: JWT Authentication
- Database: Users Table mit hashed passwords
- Frontend: Login Form
```

---

### ❌ Mistake 2: Zu große Stories

**Bad:**
```
"Als User möchte ich alle Social Features nutzen"

→ 50+ Story Points
→ Mehrere Sprints
```

**Fix:**
```
Split in kleinere Stories:
- Story 1: "Als User möchte ich Freunde hinzufügen"
- Story 2: "Als User möchte ich Posts erstellen"
- Story 3: "Als User möchte ich Posts liken"
- Story 4: "Als User möchte ich kommentieren"
```

---

### ❌ Mistake 3: Vage Acceptance Criteria

**Bad:**
```
Acceptance Criteria:
- [ ] Funktion soll gut funktionieren
- [ ] Performance soll OK sein
- [ ] User soll zufrieden sein
```

**Fix:**
```
Acceptance Criteria:
- [ ] Given User lädt Dashboard When <1000 records Then page loads in <2s
- [ ] Given User lädt Dashboard When >1000 records Then pagination (50/page)
- [ ] Given API offline When load Then "Connection Error" + Retry button
```

---

### ❌ Mistake 4: Horizontal Splitting (Layer-basiert)

**Bad:**
```
Story 1: "Frontend für User Registration"
Story 2: "Backend für User Registration"
Story 3: "Database für User Registration"

→ Keine Story liefert eigenständigen Value!
→ User kann erst nutzen wenn alle 3 Stories fertig sind!
```

**Fix (Vertical Splitting):**
```
Story 1: "Als User möchte ich mich registrieren um ein Konto zu erstellen"
  → Enthält: Frontend + Backend + Database
  → Liefert kompletten User Value!
```

**Wenn Story zu groß für vertical split:**
- MVP-Version erst (Basic Registration)
- Dann Enhancement-Stories (Social Login, Email Verification, etc.)

---

### ❌ Mistake 5: Tech Stack in Story Title

**Bad:**
```
"Als User möchte ich via GraphQL API meine Daten abrufen"
```

**Why Bad:**
- Tech Stack ist Implementation Detail
- Soll verhandelbar sein!

**Fix:**
```
Title: "Als User möchte ich meine Daten exportieren um sie in anderen Tools zu nutzen"

Technical Notes:
- Implementation: GraphQL API (oder REST, to be decided)
```

---

### ❌ Mistake 6: Missing Dependencies

**Bad:**
```
Story A: "Als User möchte ich Payments machen"
Story B: "Als User möchte ich Stripe als Payment Provider nutzen"

→ Story A kann nicht umgesetzt werden ohne B!
→ Aber keine explizite Dependency!
```

**Fix:**
```
Story B: "Als User möchte ich Stripe als Payment Provider nutzen"
  → BLOCKS: Story A

Story A: "Als User möchte ich Payments machen"
  → BLOCKED BY: Story B
```

---

## ✅ Best Practices

### 1. User Value First

**Frag immer:** "Welchen Value hat der User davon?"

```
❌ "Implement Caching"
✅ "Als User möchte ich schnelle Ladezeiten (<2s) um nicht zu warten"

Technical Notes:
- Solution: Redis Caching
```

---

### 2. Vertikal splitten (nicht horizontal)

**Vertical Slicing:**
- Jede Story liefert End-to-End Value
- Frontend + Backend + Database in einer Story (falls nötig)

**Horizontal Slicing (VERMEIDEN):**
- Story pro Layer (Frontend, Backend, DB)
- Keine Story liefert eigenständigen Value

---

### 3. Definition of Done (DoD) definieren

**Team-weites DoD:**
```
- [ ] Code geschrieben & reviewed
- [ ] Unit Tests (>80% Coverage)
- [ ] Acceptance Criteria erfüllt
- [ ] Deployed auf Staging
- [ ] QA Sign-off
- [ ] PO Acceptance
```

**Jede Story muss DoD erfüllen um als "Done" zu gelten!**

---

### 4. Personas nutzen

**Generic:**
```
"Als User möchte ich Notifications erhalten"
```

**Mit Persona:**
```
"Als Power User (30-45 Jahre, täglich aktiv) möchte ich konfigurierbare Notifications erhalten um nicht von unwichtigen Updates gestört zu werden"

→ Gibt mehr Context!
→ Hilft bei Design Decisions!
```

---

### 5. Outcome über Output

**Output-focused (BAD):**
```
"Ship 5 Features"
"Deploy to Production"
```

**Outcome-focused (GOOD):**
```
"Increase User Engagement by 20%"
"Reduce Support Tickets by 30%"
"Improve NPS from 7 to 8"
```

---

### 6. Technical Spikes bei Unsicherheit

**Wenn Team nicht schätzen kann:**
- Spike Story erstellen
- Time-box (z.B. 4 Stunden)
- Output: Technical Approach Doc

**Spike Example:**
```
Spike: "Research: How to integrate Payment Provider X?"

Acceptance Criteria:
- [ ] Technical Approach documented
- [ ] Risks identified
- [ ] Story Points estimate for implementation

Time-box: 4 hours
```

**Nach Spike:** Echte Implementation Stories schreiben

---

## 🎨 Good vs. Bad Examples

### Example 1: User Registration

**❌ BAD:**
```
Title: "Implement User Authentication"

Description:
- Create JWT tokens
- Hash passwords
- Store in database
```

**Why Bad:**
- Activity-based (nicht user-centric)
- Kein User Value sichtbar
- Tech Stack im Vordergrund

**✅ GOOD:**
```
Title: "Als User möchte ich mich registrieren um ein Konto zu erstellen"

Description:
Als neuer User möchte ich mich mit Email & Passwort registrieren,
um meine Daten zu speichern und später wieder darauf zuzugreifen.

Acceptance Criteria:
- [ ] Given User auf /register When Email + PW eingegeben Then Account erstellt
- [ ] Given Email bereits existiert When submit Then "Email bereits registriert"
- [ ] Given Passwort <8 Zeichen When submit Then "Passwort zu kurz"
- [ ] Given erfolgreiche Registration When submit Then Auto-Login + Redirect zu Dashboard

Technical Notes:
- Backend: JWT Authentication, bcrypt für Passwords
- Database: Users Table (email, hashed_password, created_at)
- Frontend: Registration Form mit Validation

Story Points: 5
```

---

### Example 2: Export Feature

**❌ BAD:**
```
Title: "Build Export API"

Description:
- Create REST endpoint
- Support CSV format
```

**Why Bad:**
- Developer-Sicht
- Kein User Value
- Zu vage (welche Daten? Welche Use Cases?)

**✅ GOOD:**
```
Title: "Als User möchte ich meine Daten als CSV exportieren um sie in Excel zu analysieren"

Description:
Als User möchte ich alle meine Daten (Transaktionen der letzten 12 Monate)
als CSV-File exportieren, um sie in Excel oder anderen Tools zu analysieren.

Acceptance Criteria:
- [ ] Given User auf /export When klick "Export CSV" Then Download CSV file
- [ ] Given 1000+ records When export Then async job + email mit Download-Link
- [ ] Given <1000 records When export Then immediate download
- [ ] Given CSV downloaded When open Then all fields included (date, amount, category, notes)

Technical Notes:
- Backend: GET /api/export?format=csv
- Async Job für >1000 records (Bull Queue)
- CSV Format: date,amount,category,notes
- Email Template: "Your export is ready!"

Edge Cases:
- [ ] User hat 0 records → Empty CSV mit Headers
- [ ] User hat Sonderzeichen in notes → CSV escaping

Story Points: 5
```

---

### Example 3: Performance Improvement

**❌ BAD:**
```
Title: "Implement Caching"

Description:
- Add Redis
- Cache API responses
```

**Why Bad:**
- Tech Solution, nicht Problem
- Kein messbarer Outcome

**✅ GOOD:**
```
Title: "Als User möchte ich schnelle Ladezeiten (<2s) um nicht zu warten"

Description:
Aktuell: Dashboard lädt in 8-10s bei 1000+ records.
Target: Dashboard lädt in <2s.

Problem: N+1 Queries + keine Caching.

Acceptance Criteria:
- [ ] Given User lädt Dashboard When <1000 records Then page loads in <2s
- [ ] Given User lädt Dashboard When >1000 records Then page loads in <3s
- [ ] Given Cache hit When load Then <500ms response time

Technical Notes:
- Solution: Redis Caching (TTL: 5 min)
- Fix N+1 queries (use JOIN)
- Add pagination (50 records/page)

Story Points: 8
```

---

## 🧪 INVEST Check Cheatsheet

**Vor dem Commit in Jira:**

```
Story: "Als [Rolle] möchte ich [Funktion] um [Nutzen]"

✅ Independent? Kann Story alleine umgesetzt werden?
✅ Negotiable? Details noch verhandelbar?
✅ Valuable? User oder Business Value klar?
✅ Estimable? Team kann Story Points schätzen?
✅ Small? Max 8 Story Points?
✅ Testable? Acceptance Criteria klar & testbar?

Falls NEIN bei einem Punkt → Story überarbeiten!
```

---

## 📚 Further Reading

### Empfohlene Bücher
- **"User Story Mapping"** - Jeff Patton
- **"User Stories Applied"** - Mike Cohn
- **"The Lean Startup"** - Eric Ries (Outcome-focused Thinking)

### Empfohlene Artikel
- Atlassian Guide to User Stories
- Martin Fowler: UserStory
- Roman Pichler: 10 Tips for Writing Good User Stories

---

**INVEST is not negotiable. Quality first. User Value first.**

---

*User Stories Best Practices Guide für Product-Toolkit*
*Hendrik Hemken, 2025*
