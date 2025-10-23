---
name: interview-analysis
description: Analyzes user interview sessions against research goals from interview guides. Extracts insights, identifies patterns across multiple sessions, maps findings to original objectives. Use when user mentions 'analyze interviews', 'interview extraction', 'research synthesis', 'interview insights', 'user research analysis', or has interview transcripts/notes to process. Works with .txt, .md, .pdf files in /user_context/raw/interviews/[project-name]/.
---

# Interview Analysis
*Synthesize User Research Insights from Interview Sessions*

## What This Skill Does

Analyzes user interview transcripts and notes to:
- Map findings back to original research goals (from interview guide)
- Identify patterns and themes across multiple sessions
- Extract verbatim quotes as evidence
- Score confidence levels based on frequency
- Generate actionable recommendations

**Perfect for:**
- Discovery Research analysis
- Validation Research synthesis
- Usability Testing insights
- Post-interview pattern detection

---

## Workflow

### Phase 1: Setup & Context

1. **Load Interview Guide**
   - Ask user: "Which project? What's the interview guide location?"
   - Default: `/outputs/interview-guides/[project-name].md`
   - Extract: Research Goals, Key Questions, Success Criteria

2. **Scan Interview Files**
   - Location: `/user_context/raw/interviews/[project-name]/`
   - Supported formats: .txt, .md, .pdf
   - List files found, ask for confirmation

3. **Clarify Context (optional)**
   ```
   "Quick context questions:
   - How many participants? (for frequency analysis)
   - Any segments to track? (e.g., B2B vs. B2C, roles)
   - Which prototype/version tested? (if applicable)"
   ```

### Phase 2: Analysis (per interview file)

For each interview file:

1. **Read & Classify**
   - Identify: Participant info, date, format
   - Quick scan: Topics covered, length

2. **Extract Core Elements**
   - **Goal Mapping:** Which research goals addressed?
   - **Key Insights:** Main takeaways (3-5 per interview)
   - **Pain Points:** Problems mentioned
   - **Jobs to be Done:** What user wants to achieve
   - **Verbatim Quotes:** Best quotes (evidence!)
   - **Unexpected Findings:** Surprises not in guide
   - **UI/Prototype Feedback:** If tested (optional)

3. **Tag & Categorize**
   - Theme tags (e.g., "Navigation", "Pricing", "Onboarding")
   - Sentiment (positive, negative, neutral, mixed)
   - Confidence flag (strong statement vs. hesitant)

### Phase 3: Synthesis (cross-interview)

1. **Pattern Detection**
   - Identify recurring themes
   - Count frequency (how many participants mentioned?)
   - Segment differences (if applicable)

2. **Confidence Scoring**
   Per insight:
   - **High Confidence:** 5+ mentions, clear pattern, consistent sentiment
   - **Medium Confidence:** 2-4 mentions, emerging pattern
   - **Low Confidence:** 1 mention, anecdotal, needs validation

3. **Goal Achievement Check**
   For each goal from interview guide:
   - ✅ **Fully Answered:** Clear findings, high confidence
   - 🟡 **Partially Answered:** Some data, needs more research
   - ❌ **Not Answered:** No coverage, follow-up needed

### Phase 4: Report Generation

Create: `/outputs/interviews/[project-name]/[project-name]-analysis.md`

**Report Structure:**

```markdown
---
project: [Name]
interview_guide: /outputs/interview-guides/[name].md
sessions_analyzed: [X]
participants: [Y]
date: [YYYY-MM-DD]
confidence: High/Medium/Low
---

# User Interview Analysis: [Project Name]

## 📊 Executive Summary
[2-3 sentences: Top 3 insights, biggest surprises, clear direction]

## 🎯 Goal Achievement
[Per goal from interview guide]

**Goal 1: [Original Research Goal]**
- Status: ✅ Fully / 🟡 Partial / ❌ Not Answered
- Confidence: High/Medium/Low
- Finding: [1-2 sentences summary]
- Evidence:
  > "Quote 1" - P3, B2B User
  > "Quote 2" - P7, Scale-up PM

## 💡 Key Insights (Ranked by Confidence)

1. **[Insight Title]** (High Confidence)
   - **Frequency:** 7/10 participants
   - **Context:** [What's the situation?]
   - **Evidence:**
     > "Quote 1" - P2
     > "Quote 2" - P5
   - **Implication:** [What does this mean for product?]
   - **Recommendation:** [Concrete next step]

2. **[Insight Title]** (Medium Confidence)
   ...

## 🚨 Pain Points (Severity Ranked)

1. **[Pain Point]** - Severity: High
   - Mentioned by: 8/10 participants
   - Context: [When does this occur?]
   - Current workaround: [How do they cope?]
   - Impact: [Business/user impact]
   - Quote: "[...]" - P4

## 🎨 UI/Prototype Feedback
[If prototype/UI tested - organize by feature/screen]

**Feature X:**
- ✅ **Positive:** [What worked well]
- ❌ **Negative:** [What didn't work]
- ❓ **Confusion:** [What was unclear]
- Quotes: "[...]"

## 🔍 Cross-Cutting Themes

**Theme: [Name]**
- Observed in: 6/10 sessions
- Description: [Pattern across interviews]
- Segments: [Any differences? B2B vs. B2C?]
- Quotes:
  > "[...]" - P1, Corporate PM
  > "[...]" - P9, Startup Founder

## 💬 Best Verbatim Quotes
[Grouped by theme - these are your evidence!]

**Theme: Current Workflow Pain**
> "I spend 2 hours daily just sorting Jira comments. It's insane." - P3
> "We lose context between Confluence PRDs and Jira tickets." - P7

## ❓ Open Questions & Research Gaps

**Unanswered Questions:**
- [ ] Question from guide not covered - needs follow-up
- [ ] Conflicting data - need clarification (3 said X, 2 said opposite)

**Emerging Questions:**
- [ ] New question discovered during interviews
- [ ] Unexpected behavior needs investigation

## 📋 Actionable Recommendations

1. **[Recommendation Title]**
   - **Why:** [Insight-based reasoning]
   - **What:** [Concrete action]
   - **Impact:** High/Medium/Low
   - **Effort:** High/Medium/Low
   - **Priority:** P0/P1/P2

2. **[Recommendation Title]**
   ...

## 🔜 Next Steps

**Immediate Actions:**
- [ ] Validate Finding X with quantitative data (analytics)
- [ ] Prototype Solution Y based on Insight Z
- [ ] Follow-up interviews for Gap A (3-5 participants)

**Longer-Term:**
- [ ] Consider Feature B (mentioned by 6/10, medium effort)
- [ ] Monitor Metric M (baseline for future comparison)

---

## 📎 Appendix: Sessions Overview

| # | Date | Participant | Role/Segment | Duration | Notes File |
|---|------|-------------|--------------|----------|------------|
| 1 | 2025-10-15 | P1 | CPO, Scale-up | 45min | session-1.txt |
| 2 | 2025-10-16 | P2 | PM, Corporate | 30min | session-2.md |
| 3 | ... | ... | ... | ... | ... |

**Total Sessions:** [X]
**Total Participants:** [Y]
**Date Range:** [Start] - [End]

**Interview Guide:** [Link]
**Raw Files:** /user_context/raw/interviews/[project]/
```

### Phase 5: Review & Iterate

1. **Show Report to User**
   - Highlight: Top 3 insights, confidence levels, gaps

2. **Feedback Loop**
   ```
   "Questions:
   - Do these insights match your gut feel?
   - Any surprises or misinterpretations?
   - Want deeper analysis on specific theme?
   - Need different format (e.g., presentation slides)?"
   ```

3. **Iterate if Needed**
   - Refine findings
   - Add missing context
   - Reframe recommendations

---

## Examples

### Example 1: Discovery Research

**Input:**
```
User: "Analyze my PM Tool interviews"
- Interview Guide: /outputs/interview-guides/pm-tool-discovery.md
- Files: 10 transcripts in /user_context/raw/interviews/pm-tool/
- Context: B2B SaaS, Scale-up PMs (50-200 employees)
```

**Process:**
1. Load guide → Goals: Understand Jira pain points, workflow inefficiencies
2. Analyze 10 transcripts → Extract insights per goal
3. Find patterns:
   - 8/10 mentioned "Jira comment chaos"
   - 6/10 mentioned "Confluence → Jira manual work"
4. Score confidence: High (frequent + consistent)
5. Generate report with quotes, recommendations

**Output:**
- `/outputs/interviews/pm-tool/pm-tool-analysis.md`
- Executive Summary: "Scale-up PMs waste 2-3h daily on Jira/Confluence manual work"
- Top Insight: "Comment management is #1 pain point (High Confidence, 8/10)"
- Recommendation: "Build Jira Comment Digest tool (High Impact, Medium Effort)"

### Example 2: Usability Testing

**Input:**
```
User: "Extract insights from prototype tests"
- Interview Guide: /outputs/interview-guides/checkout-flow-usability.md
- Files: 5 session notes in /user_context/raw/interviews/checkout-flow/
- Context: E-commerce checkout redesign, mobile users
```

**Process:**
1. Load guide → Test: New 3-step checkout vs. old 5-step
2. Analyze 5 sessions → UI feedback per screen
3. Find patterns:
   - 4/5 confused by payment screen layout
   - 5/5 loved progress indicator
   - 3/5 missed "Save for later" button
4. Map to goals: "Reduce cart abandonment" → Partially Answered

**Output:**
- Report with screen-by-screen feedback
- High Confidence: Progress indicator = win (keep!)
- Medium Confidence: Payment layout needs iteration (4/5 struggled)
- Recommendation: A/B test payment layout variants

---

## Configuration (Optional)

If user wants custom output format, check for:
`/outputs/interview-guides/[project-name].md` → Analysis Template section

Example template customization:
```markdown
## Analysis Configuration
focus_areas:
  - Pain Points (High Priority)
  - Jobs to be Done (Medium Priority)
  - Feature Requests (Low Priority)

confidence_threshold: Medium
quote_limit: 3 per insight
segment_analysis: true
segments: [B2B, B2C, Enterprise]
```

---

## Integration with Other Skills

**Upstream:**
- `interview-guide` Skill creates the research plan this Skill references

**Downstream:**
- `prd-creator` Skill can use insights for feature definition
- `user-stories` Skill can create tickets based on recommendations

**Cross-Reference:**
When creating interview guide, remind user:
> "After interviews, use `interview-analysis` Skill to synthesize insights!"

When analyzing interviews, reference original guide:
> "Interview Guide: /outputs/interview-guides/[project].md"

---

## Tips & Best Practices

**✅ DO:**
- **Verbatim Quotes are Evidence** → Always include for top insights
- **Frequency = Confidence** → "7/10 said X" > "Someone mentioned X"
- **Segment Analysis** → If data exists (B2B vs. B2C, roles, etc.)
- **Map to Goals** → Always tie findings back to original research goals
- **Actionable Recommendations** → "Prototype X" not "Consider exploring X maybe"
- **Highlight Gaps** → What you DIDN'T learn is as important as what you did

**❌ DON'T:**
- Ignore minority opinions (1/10 can be valid edge case!)
- Cherry-pick quotes that confirm bias
- Over-interpret anecdotal data (1 mention ≠ pattern)
- Skip confidence scoring (user needs to know certainty)
- Forget context (B2B PM ≠ B2C User, different needs!)

---

## File Structure

```
Product-Toolkit/
├── outputs/
│   └── interviews/
│       └── [project-name]/
│           └── [project-name]-analysis.md
└── user_context/
    └── raw/
        └── interviews/
            └── [project-name]/
                ├── session-1.txt
                ├── session-2.md
                ├── session-3.pdf
                └── ...
```

---

## Troubleshooting

**Issue: Files not found**
→ Check: `/user_context/raw/interviews/[project-name]/` exists?
→ Ask user to confirm project name & file location

**Issue: No interview guide**
→ Can proceed without (create ad-hoc goals)
→ OR use `interview-guide` Skill to create one first

**Issue: Mixed formats hard to parse**
→ Ask user: "Can you provide .txt/.md versions? PDFs are trickier."
→ Use Read tool for PDFs (works but less reliable)

**Issue: Conflicting insights**
→ Flag in report: "3 said X, 2 said opposite → needs clarification"
→ Confidence: Medium or Low (uncertainty noted)

**Issue: Too many quotes**
→ Limit to 2-3 per insight (best/most representative)
→ More quotes in Appendix if needed

---

## Success Criteria

**Analysis complete when:**
- ✅ All interview files processed
- ✅ Goals from guide mapped to findings (or flagged as gaps)
- ✅ Patterns identified with frequency counts
- ✅ Confidence scored per insight
- ✅ Verbatim quotes included as evidence
- ✅ Actionable recommendations generated
- ✅ Report saved to `/outputs/interviews/[project]/`

**User should have:**
- Clear understanding of what was learned
- Confidence in findings (backed by frequency + quotes)
- Concrete next steps (recommendations)
- Awareness of gaps (what needs more research)

---

*Created with Product-Toolkit*
*Companion Skill: interview-guide*
