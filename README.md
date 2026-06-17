# pyramid-principle-skill

A Claude skill that makes Claude write and review prose, docs, memos, reports,
and slides in the structure of Barbara Minto's **Pyramid Principle**:
answer-first (BLUF), SCQA introduction, MECE grouping, and action-title headers.
It doubles as a self-enforcement loop that stops the model from building up to
the conclusion.

## Install

Use [`npx skills`](https://github.com/vercel-labs/skills) (the open agent-skills
CLI). It fetches `SKILL.md` and drops it into `.claude/skills/` (or the right
directory for whichever agent you use):

```bash
# into the current project
npx skills add escherize/pyramid-principle-skill

# into all projects (user-level)
npx skills add escherize/pyramid-principle-skill --global
```

### Without the skills CLI

Run this repo's own installer straight from GitHub:

```bash
npx github:escherize/pyramid-principle-skill            # current project
npx github:escherize/pyramid-principle-skill --global   # all projects
```

Or clone and run it directly:

```bash
git clone https://github.com/escherize/pyramid-principle-skill
node pyramid-principle-skill/bin/install.js --global
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

## Provenance

The framework rests on Minto's book, corroborated by McKinsey materials,
Wikipedia (MECE), and practitioner write-ups (strategyu.co, think-cell.com,
thinkinsights.net, modelthinkers.com).

The LLM-enforcement rules are grounded in: Anthropic prompt-engineering docs
(positive framing, anti-preamble, structured outputs), the reasoning-first vs
answer-first ordering result (dylancastillo.co; OpenAI structured-output docs),
negation-unreliability research (NeQA inverse-scaling; "Pink Elephant"
arXiv:2503.22395), and prompt-ordering effects ("A Taxonomy of Prompt Defects",
arXiv:2509.14404). The reason-hidden-then-BLUF two-stage pattern is a synthesis
of two verified findings, not a directly measured pattern.

## License

MIT
