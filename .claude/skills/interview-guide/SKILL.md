---
name: interview-guide
description: Creates user interview guides for product research (Discovery, Validation, Usability Testing). Use when user mentions "user interview", "interview guide", "interview leitfaden", "user research", "discovery interviews", "validation interviews", "usability testing", "customer conversations", or needs to prepare research sessions with users.
---

# Interview Guide Creation

## Instructions

1. **Clarify Research Goal**
   - Ask: Discovery (explore problems), Validation (test concepts), or Usability (test designs)?
   - Define specific research questions (NOT vague "understand users")
   - Example: "Warum wechseln Nutzer zu Konkurrenzprodukt X?"

2. **Identify Target Participants**
   - Who? (Persona, role, context)
   - How many? (5-15 for Discovery typical)
   - B2B or B2C? (affects approach & incentives)

3. **Choose Framework**
   - Discovery: Mom Test + JTBD
   - Validation: Concept Testing Framework
   - Usability: Think-Aloud Protocol

4. **Generate Interview Guide**
   - 4-Part Structure: Introduction → Warm-up → Main Questions → Wrap-up
   - Story-based questions ("Erzählen Sie vom letzten Mal als...")
   - Include Probes Bank

5. **Add Logistics**
   - Duration estimate (30-90 min depending on phase)
   - Roles (Moderator, Notetaker, Observer)
   - Materials needed
   - Consent script

6. **Output as Markdown File**
   - Save to `/outputs/interview-guides/`
   - Filename: `[Date]-[Topic]-Interview-Guide.md`
   - Include YAML front matter

---

## Phase-Specific Approaches

### Discovery Phase (Exploratory/Generative)
**Goal:** Problem understanding, opportunity identification, empathy building
**Duration:** 30-60 min
**Focus:** Problem space, NOT solutions
**Sample Size:** 5-15 participants (patterns emerge after ~5 interviews)

**Structure:**
- Introduction (5-10 min) - Rapport, Purpose, Consent
- Warm-up (5 min) - Background, easy questions
- Main Questions (30-40 min) - Story-based exploration
- Wrap-up (5 min) - "Was hätte ich noch fragen sollen?"

**Question Types:**
- "Beschreiben Sie einen typischen Tag mit [Kontext]"
- "Erzählen Sie vom letzten Mal, als Sie [Problem] erlebt haben"
- "Was sind Ihre größten Frustrationen mit...?"
- "Wenn Sie eine Sache ändern könnten, welche?"

**DON'Ts:**
- ❌ "Welche Features wollen Sie?" (Nutzer sind schlechte Feature-Designer)
- ❌ Solutions zeigen
- ❌ "Würden Sie X nutzen?" (hypothetisch, unreliable)
- ❌ Zu schnell zu Solutions springen

**Deliverables:** User Personas, Journey Maps, Problem Statements, Opportunity Areas

---

### Validation Phase (Concept Testing)
**Goal:** Test assumptions, validate problem-solution fit, prioritize features
**Duration:** 45-60 min
**Materials:** Mid-fidelity prototypes (NOT hi-fi!)

**Question Types:**
- "Gehen Sie durch, was Sie hier sehen"
- "Welches Problem löst das Ihrer Meinung nach?"
- "Wie vergleicht sich das zu Ihrem heutigen Vorgehen?"
- "Was müsste sich ändern, damit Sie das adoptieren?"
- "Bewerten Sie die Likelihood, dass das Ihre aktuelle Lösung ersetzt (1-10)"

**DO's:**
- ✅ Concepts im realen Workflow-Kontext zeigen
- ✅ Mit aktuellen Solutions vergleichen lassen
- ✅ Multiple Variationen testen
- ✅ Auf Desirability UND Value fokussieren

**DON'Ts:**
- ❌ "Würden Sie das nutzen?" (schlechter Prädiktor)
- ❌ Wort "validieren" gegenüber Nutzern verwenden
- ❌ Nur ein Concept testen
- ❌ Overdesignen vor Validation

---

### Usability Testing Phase (Evaluative)
**Goal:** Assess wie gut Designs funktionieren, identify usability issues
**Duration:** 30-60 min
**Method:** Think-Aloud Protocol

**Two Variants:**
- **Concurrent Think-Aloud (CTA):** Nutzer verbalisieren WÄHREND Task-Completion
  - Pro: Vollständiger
  - Con: Beeinflusst Performance
- **Retrospective Think-Aloud (RTA):** Nutzer erklären NACH Tasks
  - Pro: Weniger Interferenz
  - Con: Details gehen verloren

**Best Practices:**
- Demo-Video zeigen vorher
- Spezifische realistische Tasks geben
- Häufig ans Think-Aloud erinnern
- Bei Schweigen prompten: "Was denken Sie gerade?"
- **NICHT** unterbrechen oder helfen
- Speech Patterns beobachten (Zögern, Frustration)
- Mit Post-Task-Interview kombinieren

**DON'Ts:**
- ❌ Zu Antworten führen
- ❌ Flow unterbrechen
- ❌ Urteilen oder korrigieren
- ❌ Hypotheticals während Tasks fragen

---

## Core Frameworks

### Mom Test (Rob Fitzpatrick)
**Die goldene Regel für unbiased Interviews**

**3 Prinzipien:**
1. **Talk about their life, NOT your idea**
2. **Ask about specifics in the PAST** (not opinions about future)
3. **Talk less, listen more**

**✅ RICHTIG:**
- "Erzählen Sie vom letzten Mal, als Sie Netflix genutzt haben – was ist passiert?"
- "Wie lösen Sie das Problem heute?"
- "Welche Alternativen haben Sie probiert?"

**❌ FALSCH:**
- "Würden Sie Feature X nutzen?" (hypothetisch)
- "Wie oft nutzen Sie Netflix?" (generalisiert)
- "Was halten Sie von dieser Idee?" (biased)

**Why it works:** Stories basieren auf echten Erinnerungen mit realem Kontext, nicht auf Idealisierungen oder sozial erwünschten Antworten.

---

### JTBD Framework (Jobs-to-be-Done)
**Für Software-Adoption & Switching Behavior**

**Core Concept:** Nutzer "hiren" Produkte für Fortschritt zu Zielen. Fokus auf Motivationen, NICHT Features.

**Purchase Timeline (rückwärts mapped):**
```
Kauf ← Decision ← Active Looking ← Passive Looking ← First Thought
```

**Key Questions:**
- "Wann haben Sie erstmals realisiert, dass Sie [Kategorie] brauchen?"
- "Was war damals in Ihrem Leben los?"
- "Welche Alternativen haben Sie erwogen?"
- "Welche Parameter haben Sie verglichen?"
- "Was war der finale Trigger für den Kauf?"

**Duration:** 60-90 min für tiefe Exploration
**Target Participants:** Nutzer die RECENTLY started/stopped using product (nicht "wollen kaufen"!)

**Focus:** Switching moments – "Was hat Sie zum Wechsel bewegt?"

---

### Funnel Technique
**Strukturierte Fragestrategie: Breit → Spezifisch → Tief**

**4 Schritte:**
1. **Breit starten:** "Erzählen Sie von einem typischen Arbeitstag"
2. **Zum Thema bewegen:** "Wie managen Sie Projekte?"
3. **Spezifisch werden:** "Was passiert bei Deadline-Änderungen?"
4. **Tief gehen:** "Erzählen Sie mehr über diese Frustration"

**Why it works:** Etabliert Kontext bevor du tief gehst. Vermeidet "cold start" mit zu spezifischen Fragen.

---

### Five Whys Technique
**Root Causes erreichen durch 5x "Warum?"**

**Best Practices:**
- Technik VORHER erklären (sonst wirkt wie Verhör)
- Sanftere Alternativen nutzen: "Wieso?" "Erzählen Sie mehr"
- Zu Level 3 (Patterns) oder Level 4 (Mental Models) vordringen

**Beispiel:**
```
Q: "Warum nutzen Sie diese App?"
A: "Ausgaben tracken"

Q: "Warum tracken?"
A: "Budget einhalten"

Q: "Warum Budget wichtig?"
A: "Spare für Haus"

Q: "Warum Haus?"
A: "Familienstabilität"
```
**Root Cause:** Familiensicherheit (NICHT Expense Tracking!)

---

## Probes Bank (Ready-to-Use)

**Essential Probes (immer griffbereit haben!):**
- "Erzählen Sie mehr darüber"
- "Warum ist das wichtig für Sie?"
- "Können Sie ein Beispiel geben?"
- "Helfen Sie mir, das besser zu verstehen"
- "Was meinen Sie mit [Begriff]?"
- "Was ist danach passiert?"
- "Wie haben Sie sich dabei gefühlt?"

**Die kritischste Regel:**
🔥 **10-20 Sek Schweigen aushalten nach Antworten** → Teilnehmer füllen es oft mit tieferen Insights!

---

## Bias Vermeidung (Top 6)

### 1. Confirmation Bias
**Problem:** Interpretation für Pre-Beliefs
**Lösung:** Offener Mind, multiple Perspektiven suchen, Devil's Advocate spielen

### 2. Leading Questions
**❌ Falsch:** "Fanden Sie das nicht auch einfach?"
**✅ Richtig:** "Wie würden Sie das auf 1-10 bewerten?"

### 3. Social Desirability Bias
**Problem:** Nutzer antworten gefällig
**Lösung:** "Kein richtig/falsch" explizit betonen, Purpose vage halten

### 4. Politeness Bias
**Problem:** Positive Antworten zur Konfliktvermeidung
**Lösung:** Eigene Expertise downplayen ("Ich bin nicht der Designer"), neutrales Setting

### 5. Framing Effect
**Problem:** Fragewording beeinflusst Antworten
**Lösung:** Standardisierte neutrale Formulierung, A/B-Test von Fragen im Pilot

### 6. Sponsor Bias
**Problem:** Forschungsgeber bekannt → biased Antworten
**Lösung:** Generische Beschreibungen ("Wir untersuchen Projektmanagement" statt "Wir bauen Tool X")

---

## Interview Guide Template

Use this template for all guides:

```markdown
---
research_goal: [Discovery/Validation/Usability]
target_participants: [Wer wird interviewed?]
session_duration: [30/45/60/90 min]
interviewer: [Name]
notetaker: [Name]
observers: [Names, max 3 total]
date: [YYYY-MM-DD]
framework: [Mom Test / JTBD / Think-Aloud]
---

# Interview Guide: [Titel]

## Research Questions
1. [Spezifische Frage 1 - NICHT "Nutzer verstehen"]
2. [Spezifische Frage 2]
3. [Spezifische Frage 3]

## Target Participants
- **Who:** [Persona, Role, Context]
- **Screener Criteria:** [Behavior-based, NOT just demographics]
- **Sample Size:** [5-15 for Discovery typical]
- **Incentive:** [$50-100 B2C / $100-300+ B2B]

---

## Introduction (5-10 min)

### Consent & Recording
"Danke fürs Kommen! Diese Session hilft uns [Purpose VAGE halten, nicht Hypothesen verraten].

Darf ich aufnehmen? Ihre Daten werden anonymisiert und nur intern genutzt. Sie können jederzeit abbrechen oder Fragen überspringen.

[WARTEN AUF EXPLIZITES JA]"

### Rapport Building
"Erzählen Sie kurz von sich – was machen Sie beruflich / in Ihrer Freizeit?"

[ZIEL: 2-3 min lockeres Gespräch, bevor es ernst wird]

---

## Warm-up (5 min)

**Background Fragen (leicht zu beantworten):**
- [Rolle/Verantwortlichkeiten klären]
- [Kontext etablieren]
- [Noch KEINE schwierigen/tiefen Fragen!]

**Beispiel:**
- "Wie lange sind Sie schon in dieser Rolle?"
- "Wie sieht ein typischer Tag bei Ihnen aus?"

---

## Main Questions (30-40 min)

### [Thema 1: Name]
**Core Question (story-based!):**
"Erzählen Sie vom letzten Mal, als [spezifischer Past Event]"

**Probes:**
- "Was ist danach passiert?"
- "Warum war das wichtig für Sie?"
- "Können Sie ein Beispiel geben?"
- [10-20 Sek Schweigen aushalten!]

---

### [Thema 2: Name]
**Core Question:**
[...]

**Probes:**
[...]

---

### [Thema 3: Name]
**Core Question:**
[...]

**Probes:**
[...]

---

## Wrap-up (5 min)

### Critical Question
"Was hätte ich noch fragen sollen? Was ist wichtig, worüber wir nicht gesprochen haben?"

🔥 **→ 15-20 Sek SCHWEIGEN – sie fügen oft Wertvolles hinzu!**

### Thank & Next Steps
"Vielen Dank für Ihre Zeit und Offenheit! Wir melden uns in [Zeitrahmen] mit den Ergebnissen / einem Update."

[Incentive auszahlen wenn applicable]

---

## Logistics

**Rollen:**
- **Moderator:** [Name] - Führt Gespräch, stellt Fragen, macht KEINE eigenen Notizen
- **Notetaker:** [Name] - Verbatim Transkripte, Timestamps
- **Observers:** [Names] - Max 3 total, silent, für holistische Eindrücke

**Materials Needed:**
- [ ] Interview Guide ausgedruckt
- [ ] Consent Form
- [ ] Recording Setup (Zoom / Audio Recorder)
- [ ] Backup Recording Device
- [ ] Probes Bank sichtbar vor Moderator
- [ ] [Prototypes/Materials wenn Validation/Usability]

**Timing:**
- [ ] 30-min Puffer vor/nach Session
- [ ] Max 3-4 Sessions/Tag/Moderator (Burnout vermeiden)

**Post-Session:**
- [ ] Sofort Debrief mit Team (5-10 min)
- [ ] Recording backup sichern
- [ ] Notes strukturieren innerhalb 24h
```

---

## Logistics Checklist

### Vorbereitung Timeline (4-6 Wochen)

**Woche 1-2: Strategie & Leitfaden**
- [ ] Stakeholder-Interviews durchführen
- [ ] Spezifische Forschungsfragen formulieren
- [ ] Ersten Interview-Leitfaden erstellen
- [ ] Mit 1-2 Personen **pilotieren** (deckt Probleme auf!)

**Woche 3: Rekrutierung**
- [ ] 30% mehr Teilnehmer buchen als benötigt (wegen No-Shows!)
- [ ] Screener erstellen (<10 Fragen, behavior-focused)
- [ ] Plattform wählen: User Interviews, Respondent, Ethnio
- [ ] Incentives festlegen (B2C $50-100, B2B $100-300+)

**Woche 4: Team Briefing & Materials**
- [ ] Rollen klar zuweisen (Moderator/Notetaker/Observer)
- [ ] Tools beschaffen & testen
- [ ] Consent Forms vorbereiten
- [ ] Final Leitfaden reviewen mit Team

### Rollen (klar zuweisen!)

**Moderator:**
- Führt Gespräch
- Stellt Fragen
- Macht **KEINE** eigenen ausführlichen Notizen (spaltet Aufmerksamkeit!)
- Erhält Rapport
- Top 5 Fehler vermeiden (siehe unten)

**Notetaker (1-2 Personen):**
- Verbatim Transkripte
- Timestamps für wichtige Momente
- Paraphrasieren mit Meaning-Preservation
- Direkte Zitate verbatim bei Impact
- Kontext inkludieren (Notes standalone verständlich)

**Observer (1-2 Stakeholders, MAX 3 total):**
- Silent während Session
- Holistische Eindrücke
- Keine Unterbrechungen
- Post-Session Debrief beitragen

### Materials Checklist

**Essential:**
- [ ] Interview Guide ausgedruckt
- [ ] Probes Bank sichtbar vor Moderator
- [ ] Recording Setup (Zoom mit Transkription / Audio Recorder)
- [ ] Backup Recording Device (Smartphone)
- [ ] Consent Form

**Optional (je nach Phase):**
- [ ] Prototypes (Validation/Usability)
- [ ] Task Sheets (Usability)
- [ ] Laptop + Screen Share Setup
- [ ] Getränke (wenn in-person)

### Session Best Practices

**Timing:**
- [ ] 30-min Puffer zwischen Sessions (Moderator-Refokussierung!)
- [ ] Max 3-4 Sessions/Tag/Moderator
- [ ] Nicht zu viele Sessions am Stück (Burnout!)

**Während Session:**
- [ ] Recording-Permission einholen (EXPLIZIT!)
- [ ] Schweigen aushalten (10-20 Sek nach Antworten)
- [ ] Nicht multitasken
- [ ] Bei Abweichung: zurück zu Leitfaden führen
- [ ] Probes nutzen bei oberflächlichen Antworten

**Post-Session:**
- [ ] Sofort 5-10 min Team-Debrief (Eindrücke fresh!)
- [ ] Recording backup sichern
- [ ] Notes strukturieren innerhalb 24h
- [ ] Key Quotes & Timestamps markieren

---

## B2B vs. B2C Considerations

### B2B Interviews

**Characteristics:**
- Kleinere, schwerer erreichbare Population
- Höhere Incentives: **$100-$300+/hour** (1.5x Stundensatz)
- Längere Lead Times (2-4 Wochen Planung)
- Organizational Hierarchy verstehen
- Multi-Stakeholder Decision-Making

**Interview Focus:**
- **Rollen verstehen:** User ≠ Purchaser ≠ Decision-Maker
- **Workflows:** Business-Process-Fit critical
- **Buying Process:** Multi-Stakeholder, Budget-Freigaben
- **Contextual Inquiry:** Essential (im Arbeitsumfeld!)
- **BEIDE interviewen:** End Users AND Decision-Makers

**Recruitment:**
- Sales-Team-Relationships nutzen
- LinkedIn Outreach
- Industry Events
- Existing Customer Base

---

### B2C Interviews

**Characteristics:**
- Größere Population
- Einfachere Rekrutierung
- Niedrigere Incentives: **$50-$100**
- Individuelles Decision-Making
- Schnellere Turnaround

**Interview Focus:**
- Persönliche Needs & Pain Points
- Emotions & Motivations
- Usage Context (wo/wann/wie)
- Social Influences
- Habits & Routines

**Recruitment:**
- User Interviews Platform
- Social Media Ads
- Intercept Surveys
- Existing User Base

---

## Top 5 Facilitator Mistakes (Vermeiden!)

### 1. Insuffizientes Rapport-Building
**Problem:** Kalter Start, Nutzer öffnet sich nicht
**Solution:** 5-10 min Warm-up mandatory, persönliche Connection herstellen

### 2. Nicht genug Probing
**Problem:** Oberflächliche Antworten, keine Tiefe
**Solution:** Probes Bank sichtbar halten, 10-20 Sek Schweigen aushalten

### 3. Multitasking während Interview
**Problem:** Spaltet Aufmerksamkeit, verliert Rapport
**Solution:** Recording ODER Notetaker nutzen, NICHT beides selbst machen

### 4. Schlecht gemanagte Observers
**Problem:** Zu viele Leute, Unterbrechungen, Nutzer fühlt sich unwohl
**Solution:** Max 3 Observers, Rollen vorher klären, Silent Rule

### 5. Leading Questions
**Problem:** Biased Antworten, bestätigt nur Pre-Beliefs
**Solution:** Neutral bleiben, Purpose vage halten, "kein richtig/falsch"

---

## Remote vs. In-Person

### Remote Interviews
**Vorteile:**
- ✅ Niedrigere Kosten (kein Travel)
- ✅ Geografische Flexibilität
- ✅ Einfacheres Recording (Zoom Transkription)
- ✅ Mehr Sessions/Tag möglich

**Nachteile:**
- ❌ Tech-Abhängigkeit (Internet-Probleme)
- ❌ Schwerer non-verbale Cues zu lesen
- ❌ Weniger natürliches Rapport
- ❌ Ablenkungen im Home Office

**Best Practices:**
- Zoom/Teams mit eingebauter Transkription
- Backup Recording (OBS Studio)
- Screen Share für Prototypes
- Kamera AN für beide Seiten

---

### In-Person Interviews
**Vorteile:**
- ✅ Besseres Rapport
- ✅ Einfacher non-verbale Cues beobachten
- ✅ Natürlicher Kontext (Arbeitsumfeld!)
- ✅ Weniger Tech-Abhängigkeit

**Nachteile:**
- ❌ Höhere Kosten (Travel, Location)
- ❌ Geografisch limitiert
- ❌ Aufwendigeres Setup
- ❌ Weniger Sessions/Tag

**Best Practices:**
- Im natürlichen Arbeitsumfeld wenn möglich
- Audio Recorder + Backup (Smartphone)
- Getränke bereitstellen
- Ruhiger, neutraler Raum

---

## Example: Discovery Interview Guide

```markdown
---
research_goal: Discovery
target_participants: Product Managers in Scale-ups (50-200 employees)
session_duration: 60 min
interviewer: Hendrik
notetaker: TBD
date: 2025-10-25
framework: Mom Test + JTBD
---

# Interview Guide: PM Tool Pain Points Discovery

## Research Questions
1. Was sind die größten Frustrationen von PMs in ihrer täglichen Arbeit?
2. Welche Workarounds nutzen sie aktuell?
3. Wo liegt der größte Time Sink?

## Target Participants
- **Who:** Product Managers, Scale-ups (50-200 employees)
- **Screener:** Arbeitet täglich mit Jira/Confluence, min. 2 Jahre PM-Erfahrung
- **Sample Size:** 10 Interviews
- **Incentive:** €100 (B2B)

---

## Introduction (5 min)

"Danke fürs Kommen! Wir untersuchen, wie Product Manager ihre tägliche Arbeit organisieren – keine Produktidee zu verkaufen, nur lernen.

Darf ich aufnehmen? Alles bleibt anonym, nur für interne Analyse.

Erzähl kurz von dir – was machst du, wie lange schon PM?"

---

## Warm-up (5 min)

- "Wie groß ist dein Team?"
- "Welche Tools nutzt ihr aktuell?"
- "Wie lange bist du schon in dieser Rolle?"

---

## Main Questions (40 min)

### Typischer Workflow
**Question:**
"Beschreibe einen typischen Arbeitstag – von morgens bis abends. Was machst du?"

**Probes:**
- "Was passiert, wenn ein dringender Bug auftaucht?"
- "Wie koordinierst du dich mit dem Dev-Team?"
- "Wo verbringst du die meiste Zeit?"

---

### Letzte Frustration
**Question:**
"Erzähl vom letzten Mal, als du in deiner Produktarbeit richtig frustriert warst – was ist passiert?"

**Probes:**
- "Was hättest du gebraucht, um das zu vermeiden?"
- "Wie hast du das gelöst?"
- "Wie oft passiert sowas?"
- [15 Sek Schweigen aushalten!]

---

### Tools & Workarounds
**Question:**
"Erzähl vom letzten Mal, als ein Tool dich im Stich gelassen hat – was wolltest du machen, was ist passiert?"

**Probes:**
- "Welche Alternativen hast du probiert?"
- "Was macht ein Tool für dich unverzichtbar?"
- "Welche Workarounds hast du entwickelt?"

---

### Jira Comment Chaos (Specific Pain Point)
**Question:**
"Wie gehst du mit Jira Comments um? Erzähl vom letzten Mal, als du wichtige Info in Comments suchen musstest."

**Probes:**
- "Wie lange hat das gedauert?"
- "Was war frustrierend daran?"
- "Wie würdest du das idealerweise lösen?"

---

## Wrap-up (5 min)

"Was hätte ich noch fragen sollen? Was ist wichtig für deine Produktarbeit, worüber wir nicht gesprochen haben?"

[20 Sek SCHWEIGEN]

"Mega, danke für deine Offenheit! Ich melde mich in 2 Wochen mit den Insights aus allen Interviews."

---

## Logistics

**Rollen:**
- Moderator: Hendrik
- Notetaker: TBD
- Observers: None (1:1 besser für Offenheit)

**Materials:**
- [ ] Interview Guide ausgedruckt
- [ ] Zoom Recording + Transkription
- [ ] Backup Audio (Smartphone)
- [ ] Probes Bank vor mir
- [ ] Consent Form

**Post-Session:**
- [ ] 5 min Notes Review
- [ ] Recording sichern
- [ ] Key Quotes extrahieren
```

---

## Next Steps After Guide Creation

1. **Pilot with 1-2 People**
   - Test alle Fragen
   - Check Timing
   - Identify confusing wording
   - Adjust before real sessions

2. **Recruit Participants**
   - Use screener
   - Book 30% more than needed
   - Send confirmation 24h before

3. **Brief Team**
   - Rollen klar
   - Observer-Regeln
   - Tools testen

4. **Run Sessions**
   - Follow guide (aber flexibel!)
   - Probes nutzen
   - Schweigen aushalten

5. **Synthesize Findings**
   - Affinity Mapping (kollaborativ!)
   - Thematic Analysis
   - Create actionable insights
   - **Next Skill:** Interview Processing! (nutze dafür separate Skill)

---

*Based on Nielsen Norman Group, Teresa Torres, Rob Fitzpatrick (Mom Test), JTBD Framework, IDEO*
*Created with Product-Toolkit*
