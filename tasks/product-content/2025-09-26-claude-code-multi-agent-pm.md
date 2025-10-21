# Claude Code als Multi-Agent Product Manager
*Gepostet: 26.09.2025*

Wir haben aus Claude Code einen Multi-Agent Product Manager gemacht. Die ersten Steps funktionieren irre gut.

Samstag. Zwei Product Manager (mein Bruder Sören von Sebelin bei Lokalise, ich als AI Nerd). Null Developer. Ein Terminal-Tool.

Was als "lass mal schauen" startete, wird gerade unser neues PM-Betriebssystem.

Claude Code ist offiziell ein Coding-Assistant. Inoffiziell? Der mächtigste Agent-Orchestrator, den niemand kennt.

**Unser Setup: Claude Code in Cursor IDE**
Das Geniale: Wir sehen links unsere Ordnerstruktur wie gewohnt. 
Rechts läuft Claude Code im Terminal. Aber wir tippen keine Commands. Wir reden mit ihm wie mit Claude Desktop.

"Hey, committe mal die Änderungen" → macht er. 
"Setz einen neuen Agent für User Research auf" → done. 
"Check mal ob die PRDs konsistent sind" → läuft.

Terminal-Power mit Chat-Interface. Das Beste aus beiden Welten.

**Was wir gebaut haben: Subagents für alles.**

🤖 Vision-Guard Agent (Läuft)
Ändere ich die Product Vision? Agent checkt automatisch Strategy-Alignment, flaggt Inkonsistenzen, schlägt Updates vor.

🤖 Kanban-Manager Agent (In Progress)
PRD fertig? Agent verschiebt zu "Ready for Refinement". Refinement done? Ab in "Ready for Development". Das Board pflegt sich selbst.

🤖 Consistency-Checker Agent (Not Started)
Neue Feature-Idee? Agent prüft gegen Roadmap, findet Überschneidungen, warnt vor Konflikten.

**Was passiert unter der Haube?**: Die Agents triggern sich gegenseitig (bzw. der Haupt-Agent triggert alle anderen).

Ich: "Feature X ist ready for refinement"
→ Kanban Agent: Updated Board
→ Doc Agent: Archiviert Decisions 
→ Consistency Agent: Prüft Dependencies
→ Git Agent: Committed alles

**Git ohne Git-Kenntnisse**: Alles läuft über GitHub. Auch PRDs und Product Docs. Versionierung für alles. Ich verstehe Git nicht. Muss ich auch nicht. Sage einfach "push das mal zu GitHub" und Claude Code macht.

**Das Überraschende**: Es fühlt sich nicht nach Tool an. Es fühlt sich nach Kollege an. Ein sehr, sehr kompetenter Kollege (gut, vielleicht mit ADHS), der nie müde wird, perfekte Dokumentation liebt und Befehle in natürlicher Sprache versteht.

**Der Bonus**: Wenn wir doch mal prototypen wollen? 
Claude Code ist auch das beste "Vibe Coding" Tool ever. Aber mit Struktur. Mit Guardrails. Mit schrittweisem Aufbau. Kein wildes Rumhacken, sondern geführte Entwicklung, die tatsächlich zu Production-Ready Code führt.

**Warum ist das alles relevant?**: Product Manager verbringen 60% ihrer Zeit mit Admin-Arbeit. Board-Updates, Doku-Sync, Status-Alignment (zusätzlich zu den 40% Stakeholder Management, 20% Competitor Research und 25% User Research). 

Was wäre, wenn diese 60% einfach... verschwinden?

**Status: Work in Progress** Wir bauen noch. Experimentieren täglich. Jeder Tag bringt neue "wait, das geht auch?"-Momente.

Die Zukunft ist nicht "AI ersetzt PMs". Die Zukunft ist "PMs mit Agent-Teams".

Und sie hat schon begonnen.

P.S.: Wer experimentiert auch mit Claude Code für Non-Dev-Usecases? Lasst uns austauschen! 🧪