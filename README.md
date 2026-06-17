# pyramid-principle-skill

A Claude skill that makes Claude write and review prose, docs, memos, reports,
and slides in the structure of Barbara Minto's **Pyramid Principle**:
answer-first (BLUF), SCQA introduction, MECE grouping, and action-title headers.
It doubles as a self-enforcement loop that stops the model from building up to
the conclusion.

## Install

Into the current project (`./.claude/skills/`):

```bash
npx pyramid-principle-skill
```

Into all projects (`~/.claude/skills/`):

```bash
npx pyramid-principle-skill --global
```

## Use

Once installed, ask Claude things like "structure this memo with the pyramid
principle", "make this more executive / lead with the conclusion", "is this
BLUF?", or just mention Minto / SCQA / MECE. The skill activates automatically.

## What it enforces

- **Governing thought first** — the single main idea as the opening sentence.
- **SCQA intro** — Situation, Complication, Question, Answer.
- **MECE groups** — no overlap, no gaps.
- **Three grouping rules** — same kind, summarizing parent, logical order.
- **Inductive > deductive** ordering at the top level.
- **Action titles** on slides — one message per slide, title states the conclusion.
- **30-second / first-sentence test** before shipping.

Derived from Minto, *The Minto Pyramid Principle* (1985/1987).

## License

MIT
