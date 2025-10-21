# CLAUDE.md - Product Content

## 🎯 Was ist Product Content?

**Content Creation für Product Marketing & Thought Leadership**

Product Manager müssen ihr Produkt auch promoten! Dieser Task hilft dir dabei:
- **LinkedIn Posts** für Product Marketing
- **Thought Leadership** Content
- **Blog Posts** & Social Media
- **Platform-agnostic** (LinkedIn, Twitter, Medium, etc.)

**Use Cases:**
- Workshop-Anbieter die ihre Expertise zeigen wollen
- PMs die ihr Produkt bekannt machen müssen
- B2B SaaS PMs die Community aufbauen
- Startup PMs die Sichtbarkeit brauchen

---

## 📍 Navigation & Wichtige Files

### Guidelines & Strategie
- **LINKEDIN_POST_GUIDELINES.md** - Writing Style, Tonalität, Struktur (Hendrik's Voice)
- **THOUGHT_LEADERSHIP_STRATEGY.md** - Thought Leadership Positionierung
- **linkedin_posts_latest_50.txt** - Referenz: Beispiel-Posts

### Content Files Struktur
- **Dateiname:** `YYYY-MM-DD-topic-name.md`
- **WICHTIG - Festes Format für Length Checker:**
  ```markdown
  # Content Post: "Titel"

  **Meta-Informationen:**
  - Datum: YYYY-MM-DD
  - Thema: ...
  - Platform: LinkedIn / Blog / Twitter

  ---

  ## DRAFT v1

  [HIER KOMMT DER EIGENTLICHE CONTENT - wird vom Length Checker gezählt]

  ---

  ## CONTENT ANALYSIS

  [Analyse, Stärken, etc.]
  ```
- **Format-Regel:** Content MUSS zwischen `## DRAFT` und `## CONTENT ANALYSIS` stehen
- **Warum:** Das `check-post-length.js` Skript sucht genau diese Sections

## 📝 Writing für Hendrik

### DER Hendrik-Flow (SO klingt Hendrik!)
- **Sachlich-enthusiastisch** - begeistert aber nicht überdreht
- **Persönlich aber präzise** - "Ich hab ein Demo gebaut" statt "Man könnte"
- **Kurze Sätze. Dann längere.** - Rhythmus!
- **Flow-Darstellung:** → Pfeile für Prozesse
- **Metaphern aus dem Alltag** - "Research Team im Raum. Kein Chatbot der vergisst."
- **Konkrete Szenarien** - "Du sitzt alleine vor einem leeren Doc"

### Hendriks Lieblingswörter
✅ "richtig fix" / "richtig gespannt"
✅ "irre wichtig"
✅ "der flow"
✅ "Die große Frage"
✅ "das wäre ein Durchbruch"
✅ "shoutout an [Name]"

### Was Hendrik NIEMALS sagt
❌ "Game Changer"
❌ "Revolutionär"
❌ "Let that sink in"
❌ "Thoughts?"
❌ Übertriebene Corporate-Sprache

## 🔨 Workflow

### Neuer Content erstellen
1. Check Guidelines in LINKEDIN_POST_GUIDELINES.md
2. Check Strategy in THOUGHT_LEADERSHIP_STRATEGY.md
3. Erstelle File: `YYYY-MM-DD-topic-name.md`
4. Meta-Section + Draft (für Hendrik: in seinem Voice)
5. **Length Check:** `node check-post-length.js DATEINAME.md`

### Content überarbeiten
1. Guidelines laden
2. Prüfen: Klingt das authentisch?
3. Buzzwords raus, persönlicher Flow rein
4. Rhythm: Kurz. Länger. Mix.
5. **Length Check:** `node check-post-length.js DATEINAME.md`

### Content finalisieren (IMMER vor Fertigstellung!)
1. **Zeichenlimit prüfen:** `node check-post-length.js DATEINAME.md`
2. **MAX 3000 Zeichen** - LinkedIn Limit
3. Falls zu lang: Kürzen, nicht über Limit gehen
4. Bei Drafts schon beachten - nicht erst am Ende!

## ⚠️ WICHTIG
- **Immer** Guidelines checken vor dem Schreiben
- **Thought Leadership** statt Sales-Pitch (siehe THOUGHT_LEADERSHIP_STRATEGY.md)
- **Authentische Voice** > formale Struktur
- **Product Content ist Marketing** - aber ehrlich & wertvoll

---
*Product Content - Your Voice, Not Generic Marketing*
