---
title: "From Personal Preference to Precise Language"
description: "How to replace taste-based code debates with a clear vocabulary, and how to organize a codebase around what users perceive."
group: metaphysics
original: "https://kino6052.github.io/personal-blog/meataphysics-of-code.subjectivity.html"
---

This post shows how to move code review debates from personal taste to precise terms, using a folder layout example and a small vocabulary for naming architectural problems.

## Ten developers, ten opinions

Ask ten developers to critique a codebase and you will get ten conflicting opinions. One says a function is "too long." Another argues about spaces versus tabs. A third wants three more abstraction layers because "that's how enterprise software is done."

Software engineering has lacked an empirical foundation, so architecture discussions often turn into **bikeshedding and personal preference**. Developers feel gaslit by framework dogma. They cannot explain _why_ a seven-layer architecture feels wrong when every textbook calls it "best practice."

The exhaustion you feel in modern software development is not a matter of taste. It follows directly from **building software out of entities that do not exist.** The rest of this post gives you words to say so.

## Folder trees as monuments to machinery

The trouble starts before any business logic is written. A developer sets up a repository and arranges the directory tree around **where code executes** and **what frameworks demand**:

```
  TRADITIONAL CODEBASE TOPOLOGY (GROUNDED IN ACCIDENTS)
  src/
  ├── client/                  <-- Split by execution target (Browser)
  │   └── components/
  │       └── OrderCancelModal.tsx
  └── server/                  <-- Split by execution target (Node/OS)
      ├── controllers/         <-- Split by framework layer
      │   └── OrderController.ts
      ├── services/            <-- Split by framework layer
      │   └── OrderService.ts
      └── repositories/        <-- Split by framework layer
          └── OrderRepository.ts

```

In this layout the folder tree is a monument to accidental complexity:

- **client/ vs. server/** is an execution accident.
- **controllers/, services/, and repositories/** are framework accidents.

When a product owner asks to change how an order is canceled, a developer has to open five files spread across four distant folders. The single human intent, _Order Cancellation_, has no home in the codebase. It has been broken up and scattered across the filesystem. I call this **topological reification**.

## Entities without referents

Look at a standard enterprise stack: OrderController, OrderService, OrderManager, OrderDTO, OrderRepository. Then ask: **which of these corresponds to something a person perceives?**

```
   HUMAN PERCEPTION                             FRAMEWORK LABYRINTH
┌──────────────────┐                       ┌─────────────────────────┐
│                  │                       │ OrderController         │
│  "Cancel Order"  │ ────────────────────► │   └── OrderService      │
│                  │                       │       └── OrderManager  │
│                  │                       │           └── OrderRepo │
└──────────────────┘                       └─────────────────────────┘
                                            (Four ghosts invented to
                                             deliver one intent)

```

Only the **Order** and its **Cancellation** exist in reality.

- The Controller exists because an HTTP framework needed an object to attach routing decorators to.
- The Service exists because object-oriented patterns forced functions to pose as classes.
- The Repository exists because we treat an external SQL database as a load-bearing domain concept, when it is a disk-backup detail.

A whole economy of frameworks (Spring, NestJS, Angular, Rails), bootcamps and enterprise architectures exists to manage the overhead of these fake entities. We have built multi-billion-dollar technology stacks to serve machinery that has no referent in human thought.

## Putting accidents in their place

Restructuring does not mean throwing away databases, web servers or UI frameworks. It means **demoting them from landlords to peripheral adapters**.

In a Substance-First Architecture, the directory tree is organized around **perceptual identities**, the things a person can see and name. The core of the software is a pure, synchronous, in-memory state machine. Frameworks, databases and network protocols sit at the edge as swappable accidents.

```
  SUBSTANCE-FIRST TOPOLOGY (GROUNDED IN IDENTITY)
  src/
  └── order/                   <-- Pure Perceptual Identity
      ├── order.ts             <-- Pure State Machine (Zero dependencies)
      ├── order.test.ts        <-- Microsecond test suite
      └── adapters/            <-- Peripheral Execution Accidents
          ├── ui.tsx           <-- Rendered UI projection (React)
          ├── http.ts          <-- Network wire adapter (Express/REST/gRPC)
          └── db.ts            <-- Storage backup adapter (PostgreSQL)

```

If you replace React with Svelte, or swap Express for gRPC, **you touch only the files inside adapters/**. The core order.ts state machine does not recompile, move or care.

## A precise vocabulary

Once you adopt this framework, you can stop arguing about style. You get exact terms for naming architectural problems:

| Vague "Clean Code" Debate | Grounded Metaphysical Vocabulary |
|---|---|
| _"This file feels too messy and long."_ | **Ungrounded Proliferation:** _"You have split a single perceptual identity into five fake classes (DTO, Controller, Service, Repo, Entity)."_ |
| _"I don't like how this project is structured."_ | **Topological Reification:** _"The directory tree is organized by execution targets (client/server) rather than human perceptual identities."_ |
| _"Why are we writing so much boilerplate?"_ | **Framework Landlordism:** _"We built an administrative middleman (Controller) to satisfy a framework instead of mapping intent directly to state."_ |
| _"This architecture is hard to maintain."_ | **Instant-Legacy:** _"By entangling pure state with SQL and HTTP abstractions, you created a system that resists change instead of remaining soft."_ |

## Saying it clearly

Precise terms do more than improve habits. They free developers from vague unease. They let you look at an over-engineered enterprise labyrinth and say, with clarity and authority:

> _"This is not sophisticated engineering. This is a monument built out of ungrounded accidents, and we are going to put the accidents back at the edge where they belong."_
