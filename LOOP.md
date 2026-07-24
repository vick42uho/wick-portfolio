# 🔄 Antigravity Loop Instructions for my-portfolio

This document defines the automated loop execution steps for **Antigravity IDE & Antigravity CLI**.

## Loop Trigger & Cadence
- **Trigger**: Run via `/goal` command or Antigravity schedule trigger.
- **Goal**: Maintain portfolio build health, audit MDX articles, check links, and update `STATE.md`.

## Execution Workflow (Step-by-Step)

### Step 1: Health & Build Verification (Verifier)
1. Run `pnpm build` or `npx next build` to check for compilation or TypeScript errors.
2. Check `content/*.mdx` files for frontmatter completeness:
   - `title`, `publishedAt`, `updatedAt`, `author`, `summary`, `image`.

### Step 2: Content Audit
1. Scan for recent `.mdx` articles in `content/`.
2. Verify all internal links (e.g. `/blog/[slug]`) exist and match.

### Step 3: State Update
1. Record current build status, last audit timestamp, and identified issues in `STATE.md`.
2. If errors are found, list them clearly under `## Pending Issues`.

### Step 4: Decision & Escalation (Human Gate)
- **L1 (Report-only)**: Stop after updating `STATE.md`.
- **L2 (Assisted Fixes)**: If simple build/lint fixable errors exist, fix them and run build verification again.
