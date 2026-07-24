---
name: portfolio-triage
description: Antigravity Skill for auditing, building, and maintaining the my-portfolio Next.js & MDX codebase.
---

# Portfolio Triage & Audit Skill for Antigravity

Use this skill when running a maintenance check or executing a Loop on `my-portfolio`.

## Audit Checklist
1. **Build Health Check**:
   - Run `npx next build` or inspect build logs.
2. **MDX Content Audit**:
   - Ensure all files in `content/` have valid YAML frontmatter.
   - Verify `publishedAt` and `updatedAt` formats (`YYYY-MM-DD`).
3. **State Report**:
   - Update `STATE.md` with timestamp, build health, and backlog items.
