---
title: "The Pragmatism Fallacy"
description: "Why \"it works, it's in production\" is a weak defense of tangled code, and what taking pride in design looks like."
group: metaphysics
original: "https://kino6052.github.io/personal-blog/meataphysics-of-code.pargmatism-fallacy.html"
---

This post looks at the most common defense of over-engineered code, "it works", and explains why it falls short as an engineering argument.

## The shield of false pragmatism

Challenge an over-engineered labyrinth of ghosts (seven layers of abstraction, ORM magic, framework rituals) and a developer will often raise this shield:

> _"It works, it's in production, and at the end of the day, that's all that matters."_

That is not pragmatism. It gives up the real work and mistakes execution for engineering.

If you do not preserve structure and refuse to take pride in your design, you do not ship a solution. You ship **instant-legacy**.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        THE INSTANT-LEGACY TRAP                         │
├──────────────────────────────────┬─────────────────────────────────────┤
│ MEDIOCRE ENGINEERING             │ TOP-NOTCH ENGINEERING               │
├──────────────────────────────────┼─────────────────────────────────────┤
│ • Driven by "It works for now"   │ • Driven by Structural Preservation │
│ • Ships instant-legacy           │ • Ships software built to last      │
│ • Becomes a source of problems   │ • Becomes a source of learning      │
│ • Degrades under every change    │ • Remains soft and adaptable        │
└──────────────────────────────────┴─────────────────────────────────────┘

```

## A car that works versus a car that is well made

Think about how we judge physical engineering.

A team can put together a mediocre car with cheap shortcuts and brittle routing. The engine starts and the car drives off the lot. In a narrow sense, it works. But when it needs maintenance, the design flaw shows: replacing a headlight means removing the whole front bumper, and the wiring is a tangled nest of hidden dependencies. Every mechanic who touches that car has a hard time.

Now take a precision-engineered car built to last. When you open the hood, the layout is clear and deliberate. Every part is reachable, its purpose is obvious and its boundaries are respected. It works today, and it also teaches good engineering to whoever opens the hood tomorrow.

## A source of problems or a source of learning

Software is no different.

If you build without preserving the essence, if you mix machinery with meaning and bury simple state transitions under layers of accidental complexity, your codebase becomes a **source of problems**:

- Every new feature means finding a path through an ungrounded labyrinth.
- Every bug fix risks side effects in accidental layers.
- Every new engineer meets fatigue instead of clarity.

A well-structured, Substance-First system does the opposite. It becomes a **source of learning**. It shows how to keep software soft, how to isolate accidents, and how to model human intent without noise.

## Taking pride in the design

Making code run is the minimum a beginner can do. Keeping a system soft, clear and elegant as it changes over time is what marks a software engineer.

Hiding behind "it works" is negligence dressed up as business wisdom, and it gives up your craft.

Taking pride in your architecture is not ivory-tower perfectionism. It is a basic obligation to build systems that last, that inspire, and that stay soft.
