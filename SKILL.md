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
arguments, then data. This skill applies it to writing AND uses it as a rule set
to stop an LLM (you) from defaulting to context-first build-up.

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

2. **Write the SCQA introduction.** Four ordered parts, each short:
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

## Using this to enforce pyramid output on yourself (LLM)

You default to context-first: setup, then reasoning, then conclusion. That is
the opposite of pyramid structure. To counteract it:

1. **Reason in scratch, deliver in reverse.** Do the bottom-up thinking
   internally. The user-facing output starts with the conclusion.
2. **Emit the governing thought as literally the first sentence.** Not a
   preamble, not "Let me explain." The answer.
3. **Self-critique with the first-sentence test before sending.** Re-read your
   draft's opening. If it doesn't carry the bottom line, rewrite the opening.
4. **Headers are action titles.** Section headers state conclusions, not topics.

## Failure modes (verified)

- **Burying the conclusion** — building up to it instead of leading. The #1
  failure; the whole principle exists to prevent it.
- **Topic labels instead of action titles** on slides.
- **Forcing MECE where redundancy is wanted.** MECE is a default, not a law —
  sometimes deliberate overlap/repetition serves the reader. Don't mangle a
  message to satisfy the acronym.

## Sources

Minto, *The Minto Pyramid Principle* (1985/1987). Framework corroborated across
McKinsey teaching materials, Wikipedia (MECE), and practitioner write-ups
(strategyu.co, think-cell.com, thinkinsights.net, modelthinkers.com).
