---
name: user-context
description: Guides users through setting up or updating company, product, and team context via interactive questions. Use when user mentions "getting started", "setup", "onboarding", "initialize", "update context", "new job", "team changed", "configure my context", "meine Infos updaten", or "Context ändern".
---

# User Context Setup

Guides Product Managers through collecting comprehensive context about their company, product, and team. This context enables all other Product-Toolkit skills (OKRs, PRDs, User Stories, etc.) to provide tailored recommendations.

## When to Use

**Init Mode (New User):**
- User is new to Product-Toolkit
- Mentions: "getting started", "setup", "onboarding", "initialize"
- No existing COMPANY_CONTEXT.md or context is incomplete

**Update Mode (Context Refresh):**
- User has changed companies, roles, or teams
- Mentions: "update context", "refresh context", "new job", "team changed"
- Generic update requests: "meine Infos updaten", "Infos aktualisieren", "Daten ändern"
- Existing context needs updating

## Instructions

### 1. Detect Mode

Check if `/user_context/COMPANY_CONTEXT.md` exists and has content:
- **If empty or missing:** Init Mode (collect all context)
- **If exists:** Update Mode (ask what changed, update specific sections)

### 2. Progressive Question Flow

Ask questions ONE AT A TIME in conversational style. Guide the user through the process. Don't overwhelm with too many questions at once.

**Core Questions (Must-Have):**

1. **Company Name & Industry**
   - "What's your company name and industry?"
   - Example: "Beyond 7, AI Consulting & Training"

2. **Company Type**
   - "What type of company? Startup (5-50), Scale-up (50-200), or Corporate (200+)?"
   - This determines OKR approach (Wodtke vs. Klau)

3. **Team Size**
   - "How many people total in the company?"
   - Example: "1 (Solo)" or "150"

4. **Your Role**
   - "What's your role? PM, Senior PM, Head of Product, CPO, Founder?"
   - Important for understanding scope of responsibilities

5. **Product Name & Type**
   - "What's your product name and type (SaaS, Platform, Mobile App, etc.)?"
   - Example: "Acme CRM, B2B SaaS Platform"

6. **Customer Type**
   - "Who are your customers? B2C, B2B, or B2B2C?"
   - Affects metric recommendations

7. **Website URL**
   - "What's your company website?"
   - Enables future research agents

8. **Tech Stack** (Optional)
   - "What's your tech stack? (Optional - skip if you don't know)"
   - Example: "React, Node.js, PostgreSQL"

9. **Dev Team Size & Structure**
   - "How big is your dev team and how is it structured?"
   - Example: "3 developers - 1 frontend, 1 backend, 1 fullstack"
   - If solo: "N/A (no dev team)"

9.5. **Team Members & Jira Roles** (Optional - only if Jira is available)
   - "Soll ich deine Jira Team Members abrufen und ihre Rollen erfassen?"
   - If yes:
     - Use `jira_search` to find recent tickets (last 30 days)
     - Extract unique comment authors from tickets
     - For each team member: Ask "Was macht [Name]?" (role/function)
     - Example roles: "Frontend Dev", "Product Designer", "Engineering Lead"
     - Write to COMPANY_CONTEXT.md "Team Members & Jira Roles" section
   - If no Jira access or user skips: Continue without blocking
   - Solo users: Offer to add just themselves

10. **Portfolio Structure** (Optional - ask ONLY if Head of Product or managing multiple products)
    - "Do you manage a single product or a portfolio?"
    - If portfolio: "List your products and mention if they roll up into one main product"
    - Keep it freetext, don't overcomplicate

11. **North Star Metric** (Optional)
    - "Do you have a defined North Star Metric? (Optional)"
    - Example: "Active Monthly Users" or "MRR Growth"
    - If not defined: Skip

12. **Current Quarter Focus**
    - "What are your top 2-3 priorities this quarter?"
    - Example: "Launch feature X, improve retention by 20%, hire 2 engineers"

### 3. Validate & Summarize

After collecting all info:
- Show a summary of what was collected
- Ask: "Does this look correct? Anything to adjust?"
- Give user chance to correct before writing to file

### 4. Write to File

Update `/user_context/COMPANY_CONTEXT.md`:
- **Init Mode:** Fill in all sections based on template
- **Update Mode:** Update only changed sections, preserve rest
- **Team Members:** If collected in Step 9.5, update "Team Members & Jira Roles" section in COMPANY_CONTEXT.md

**Important:**
- Update `last_updated` field to current date
- Keep existing content that wasn't changed (Update Mode)
- Follow template structure from `/user_context/COMPANY_CONTEXT.md`
- Team members go in Body (NOT YAML front matter!) under "## Team Structure" section

**Team Members Format:**
```markdown
### Team Members & Jira Roles
*For Jira Comment Digest context mapping*

**[Name]**
- Email: [email]
- Role: [role/function]
- Jira Active: Yes/No
- Notes: [optional context]
```

### 5. Confirm & Next Steps

After writing:
- "✅ Context saved! You're all set up."
- If Team Mapping done: "✅ Team Member mapping set up! Comment Digest will now show roles."
- Suggest logical next step based on role:
  - "Want to create your first OKRs?" (if no OKRs exist)
  - "Ready to create a PRD?" (if context complete)
  - "Need help with anything else?"

## Examples

**Example 1: New User (Init Mode)**

```
User: "I'm new here, how do I get started?"

Claude: "Welcome to Product-Toolkit! 🎯

I'll help you set up your context so I can give you tailored recommendations. This takes about 5 minutes.

Let's start simple:

**What's your company name and industry?**

Example: 'Acme Corp, FinTech'"

User: "TechFlow, SaaS for project management"

Claude: "Got it! TechFlow in Project Management SaaS. 👍

**What type of company are you?**
- Startup (5-50 people)
- Scale-up (50-200 people)
- Corporate (200+ people)"

[... continues progressively through all questions ...]

Claude: "Perfect! Here's what I've got:

📋 Summary:
- Company: TechFlow (Project Management SaaS)
- Type: Startup (25 people)
- Your Role: Head of Product
- Product: FlowApp (B2B SaaS)
- Customers: B2B
- Website: https://techflow.com
- Dev Team: 5 developers (2 frontend, 2 backend, 1 QA)
- North Star: Active Teams using FlowApp weekly
- Q4 Focus: Launch mobile app, improve onboarding, grow to 100 teams

Does this look correct?"

User: "Yes!"

Claude: "✅ Context saved to /user_context/COMPANY_CONTEXT.md!

You're all set up. 🎉

**Next step:** Want me to help you create your Q4 OKRs? Since you're a Startup, I'd recommend Wodtke's weekly rhythm approach."
```

**Example 2: Update Mode**

```
User: "I need to update my context - I changed companies"

Claude: "Sure! Let me help you update your context.

What changed? New company, new role, or both?"

User: "Both - I'm now CPO at a bigger company"

Claude: "Nice move! 🎉 Let me update that.

**New company name and industry?**"

[... asks only relevant questions ...]

Claude: "✅ Updated! Your context now reflects:
- Company: BigCorp (Enterprise Software)
- Your Role: CPO (was: Head of Product)
- Company Type: Corporate 200+ (was: Startup)

Since you're now at a larger company, you might want to switch from weekly to quarterly OKR rhythm (Klau approach). Want help with that?"
```

## Edge Cases

**User doesn't know something:**
- "No problem! You can skip this or come back later."
- Mark as "TBD" in the file if important
- Don't block progress on optional fields

**Solo Consultant / Freelancer:**
- Many fields will be "N/A" or "1 (Solo)" - that's fine!
- Adjust questions accordingly (skip dev team structure if solo)

**Multi-Product Portfolio (Head of Product):**
- Ask about portfolio structure
- Keep it simple - freetext description of products
- Don't overcomplicate with nested structures

## Notes

**KISS Principle:**
- Start simple, don't overwhelm
- Progressive disclosure (one question at a time)
- Skip optional fields if user doesn't know
- Can always update later

**Conversational Tone:**
- Friendly, helpful, German & duzen
- Examples for every question
- Explain WHY we need certain info (e.g., "Company type determines OKR approach")

**Context is King:**
- This context powers ALL other skills
- Worth taking time to get it right
- But don't make it a burden - keep it light!

---

*Part of Product-Toolkit - Your daily PM assistant*
