---
name: pyramid-principle
description: >-
  Write and review prose, docs, memos, reports, and slides in the structure of
  Barbara Minto's Pyramid Principle — answer-first (BLUF), SCQA introduction,
  MECE grouping, action-title headers. Also use as a self-enforcement loop to
  make an LLM write top-down instead of building up to the conclusion. Triggers
  on "pyramid principle", "Minto", "BLUF", "answer first", "SCQA", "MECE",
  "structure this memo/doc/email/slide", "make this more executive", "lead with
  the conclusion", or any request to restructure writing so the main point comes
  first.
---

# Pyramid Principle

Structure communication the way Barbara Minto taught at McKinsey: **reason
bottom-up, communicate top-down.** Lead with the answer, then supporting
arguments, then data — this is **BLUF (Bottom Line Up Front):** the conclusion
comes first, not last. This skill applies it to writing AND uses it as a rule
set to stop an LLM (you) from defaulting to context-first build-up.

## The one rule everything derives from

> Any idea must be a summary of the ideas grouped beneath it.

Because a higher idea summarizes the ones below, the structure mechanically
forces the conclusion to come first. Everything in this skill is a consequence
of that rule.

## Procedure: writing something new

Apply in this order. Do not skip to drafting.

1. **Find the governing thought.** The single most important idea the audience
   should walk away with. One sentence. If you can't state it in one sentence,
   you don't know it yet — keep reasoning bottom-up until you can.

2. **Write the SCQA introduction.** SCQA = Situation, Complication, Question,
   Answer — four ordered parts, each short:
   - **Situation** — context the reader already agrees with. *Remind, don't
     inform.* If they'd argue with it, it's not the Situation.
   - **Complication** — the problem, change, or tension that creates urgency.
   - **Question** — the question that naturally arises ("What should we do?").
   - **Answer** — the governing thought. This is the apex of the pyramid.

3. **Lead with the Answer (BLUF).** The conclusion comes first in the body, not
   last. Supporting arguments next. Data and facts last. Never build up to it.

4. **Group supporting arguments MECE.**
   - **Mutually Exclusive** — no overlap, no double-counting between groups.
   - **Collectively Exhaustive** — no gaps; covers all *relevant* possibilities
     (relevant to this problem, not the whole universe).

5. **Make each group obey the three grouping rules:**
   1. All ideas in a group are the same kind of idea.
   2. Each idea summarizes the ideas below it.
   3. Ideas are logically ordered — by time, structure, or degree (importance).

6. **Prefer inductive ordering over deductive** at the top level. Inductive =
   independent points that each support the conclusion; if one is disproved the
   others still hold. Deductive = a chain where one broken link collapses the
   whole argument. Minto: *"strive instead always to present your message
   inductively."* Use deductive only when the logical chain itself is the point.

## Procedure: slides / decks

- **One message per slide.** Two points → two slides.
- **Action titles, not topic labels.** The title states the *conclusion*.
  - Topic label (bad): "Customer Survey Results"
  - Action title (good): "Customers will pay 20% more for faster delivery"
- Reading only the slide titles top-to-bottom should reproduce the argument.

## The enforcement test (run before you finish)

**The 30-second / first-sentence test:** a reader must grasp the complete
argument from the first ~120 words (~30 seconds of reading). Concretely:

- [ ] Does the **first sentence** state the governing thought? If a reader read
      only it, would they have the bottom line?
- [ ] SCQA intro present and ordered? Is the Situation actually uncontroversial?
- [ ] Are the supporting groups MECE — no overlaps, no gaps?
- [ ] Does each group's header summarize what's under it?
- [ ] Slides: one message each, every title an action title?

If any box fails, restructure before shipping.

## Enforcing pyramid output on yourself (LLM)

You default to context-first: setup, reasoning, then conclusion. Pyramid is the
reverse. The rules below are ordered by evidence strength and phrased the way
research shows actually changes model behavior. Apply them at the TOP of the
relevant instructions, not buried at the end — late instructions get dropped.

### 1. Reason hidden, then deliver BLUF (the core move)

Do NOT generate the conclusion as your very first token. Reasoning-first
ordering measurably beats answer-first (controlled tests: ~47% vs ~33%
accuracy); leading with the answer turns your reasoning into post-hoc
rationalization, so you confidently defend a conclusion you committed to before
thinking. Instead:

1. Reason bottom-up in a scratchpad (a `<thinking>` block, a hidden reasoning
   field, or internal reasoning the user won't see).
2. THEN write the user-facing answer in BLUF order: governing thought first.

The accuracy lives in the hidden reasoning; the pyramid structure lives in the
final output. This two-stage split is what reconciles "lead with the answer"
against "think before you commit."

### 2. State rules positively, not as prohibitions

Negative instructions ("don't start with background") are unreliable — models
comprehend negation poorly and it does not improve with scale. Phrase every
structural rule as an affirmative action:

- Write: "Open with one sentence that states the recommendation and its main benefit."
- Not: "Don't open with context or background."

### 3. The one sanctioned prohibition: kill the preamble

Anthropic's docs make anti-preamble the rare exception. Pair it with the
positive rule above:

> Respond directly. Do not open with "Here is…", "Based on…", "Let me…", or any
> scaffolding. The first sentence is the governing thought.

### 4. Use enumerated, countable structure (not abstract description)

Explicit counts outperform "be MECE / be concise." Concretely:

1. One-sentence **bottom line** (names the answer + its main consequence).
2. **3 supporting arguments** (default; 3–5 is fine — not a hard law), each a
   distinct dimension.
3. Under each, **one evidence point** (a metric, fact, or proof).

### 5. Make MECE happen by naming dimensions, not saying "MECE"

Telling yourself "be MECE" rarely works. Instead pick distinct dimensions and
check for near-synonyms. Example of the fix:

- Overlapping (bad): "Strategically smart / Strengthens our position / Fits the vision" — three ways of saying one thing.
- MECE (good): "Strategic fit / Financial return / Integration risk" — capability, value, execution.

### 6. Action-title headers, verified by the read-titles test

Every section header is one complete assertive sentence with a verb — a
conclusion, not a topic. After drafting, read ONLY the headers top to bottom: if
they form the whole argument, pass; if they read like a table of contents,
rewrite them.

- Topic label (bad): "Customer Survey Results"
- Action title (good): "Customers will pay 20% more for faster delivery"

### 7. Self-critique before sending (first-sentence test)

Re-read your opening sentence in isolation. If a reader saw only it, would they
have the bottom line? If not, rewrite the opening before sending. (This is a
heuristic check, not a measured technique — but it's cheap and catches buried
leads.)

## Failure modes (verified)

- **Burying the conclusion** — building up to it instead of leading. The #1
  failure; the whole principle exists to prevent it.
- **Topic labels instead of action titles** on slides.
- **Forcing MECE where redundancy is wanted.** MECE is a default, not a law —
  sometimes deliberate overlap/repetition serves the reader. Don't mangle a
  message to satisfy the acronym.
- **(LLM) Post-hoc rationalization** — committing to a conclusion first, then
  inventing reasons to justify it (instead of letting reasons lead to the
  conclusion). Avoid by reasoning in a scratchpad first (see enforcement rule 1).
