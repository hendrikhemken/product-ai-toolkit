# Interview Raw Files

Drop your interview transcripts, notes, and recordings here.

## Structure

```
interviews/
└── [project-name]/
    ├── session-1.txt
    ├── session-2.md
    ├── session-3.pdf
    └── ...
```

## Supported Formats

- ✅ `.txt` - Plain text transcripts
- ✅ `.md` - Markdown notes
- ✅ `.pdf` - PDF documents

## Workflow

1. **After each interview:** Save transcript/notes to `/user_context/raw/interviews/[project-name]/`
2. **When ready to analyze:** Use `interview-analysis` Skill
3. **Output goes to:** `/outputs/interviews/[project-name]/[project]-analysis.md`

## Naming Convention

**Good:**
- `session-1.txt`
- `2025-10-15-participant-3-b2b-pm.md`
- `usability-test-mobile-checkout-p5.txt`

**Bad:**
- `transcript.txt` (not specific)
- `notes (1).md` (auto-generated name)

---

*Part of Product-Toolkit*
*Used by: interview-analysis Skill*
