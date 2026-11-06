---
title: "A Million Patterns Versus One Codebase"
description: "Why software architecture keeps failing, and how a few ideas from empirical philosophy offer a way to ground it in what users see."
group: metaphysics
original: "https://kino6052.github.io/personal-blog/meataphysics-of-code.intro.html"
---

This post explains why so many carefully designed codebases turn into labyrinths. It introduces the philosophical diseases behind that, and a framework called Empirically Grounded Software that I use to avoid them.

## Software lives inside thought

Every program that has ever run started as an idea. Operating systems, databases, compilers, browsers and the interface you are reading this on were all thought into being by people. Unlike a bridge or an engine, software has no weight, no temperature and no position in space. It is philosophy that happens to be executable.

You would expect that to make software development a very philosophically careful field. It is not.

## The trial and error of architecture

Imagine a new team that has to build a large application. The technical lead searches for "best practices" and finds Clean Architecture, Domain-Driven Design, microservices, SOLID, Feature-Sliced Design, event sourcing and CQRS. She reads respected engineers, watches talks and picks an approach. Say she picks DDD, because it sounds serious and the business domain is complex.

Entities get names. Bounded contexts are drawn on a whiteboard. Repositories are defined. The team starts building.

Eighteen months later the codebase is a labyrinth. Adding a feature means touching seven layers. Tests are brittle. New developers need weeks to understand what anything does. The business domain turns out to have been modeled wrongly, but the abstractions now hold up the whole building and cannot be moved.

What went wrong?

The usual answer is execution: the pattern was applied badly, the contexts were drawn wrongly, the wrong aggregate roots were chosen. If only the team had been more disciplined.

I think the approach itself was wrong in principle, and no amount of discipline could have saved it. The failure was philosophical before it was technical.

## Programming is already applied philosophy

Every decision a developer makes is a philosophical one. Naming a function, drawing a boundary, deciding what a class represents, organizing a file: each is a claim about what exists, what is true and what matters.

Most of us make these decisions by trial and error, the way Goodyear mixed rubber with salt and soup, hoping persistence would eventually produce something that works. Our field has piled up patterns, principles and paradigms like geological layers, each one trying to fix the failures of the one below. SOLID was meant to fix procedural chaos. Design patterns were meant to fix repetition in object-oriented code. Clean Architecture was meant to fix the entanglement design patterns created. Domain-Driven Design was meant to close the gap between code and business. Microservices were meant to fix the rigidity of monoliths. After each revolution the basic problems are still there in new clothes.

Individual practitioners do collect real wisdom, and some best practices help. But without a framework underneath, nobody can say why something helps, so nobody can say when it will stop helping. The same pattern solves one problem and creates three more, and no one can explain why.

We are Goodyear. We invented rubber that works in summer and cracks in winter, and we congratulate ourselves on the breakthrough.

## Two diseases of the thinking mind

The Enlightenment empiricists, Bacon, Hume, Berkeley and Kant, spent their best effort on the diseases of human reason. They studied the ways minds go wrong because of their own habits, even when they have the facts. Their work was to examine how we think about facts, and to expose errors so familiar we had stopped noticing them.

Software development has exactly these diseases, and they show up strongly in a field that looks purely technical.

The first is **reification**: treating abstractions as if they were real things. The mind is good at forming concepts, and when it goes unchecked it produces entities with no grounding in experience and treats them as solid as the chair you are sitting on. In software this gives us the "Customer" object, the "Repository", the "Service" and the "Domain". They are meant to be shorthand for patterns in observable behavior. We treat them as things that exist, with properties, responsibilities and relationships, as if they were found in the wild rather than invented in a meeting.

Berkeley showed that unexamined abstraction causes most philosophical confusion. Kant showed that the mind imposes its categories on experience instead of deriving them from it. Together they say that we should ruthlessly check whether our concepts are grounded in what can be perceived and verified. Software architecture culture has largely ignored that.

The second disease is the **corruption of value**. Knowing the errors is not enough, we also need to see why we are rewarded for making them. In software, value goes to the appearance of rare and powerful knowledge, and not to clarity. A developer who says "let's use a simple flat structure, because it makes behavior obvious and testable" looks unsophisticated. A developer who says "we need to redesign the bounded contexts and check whether our aggregate roots reflect the ubiquitous language of the domain" looks like an expert. The first statement is more likely to be right. The second is more likely to earn respect.

This follows from how status works. Obscurity earns status, and complexity signals sophistication. The person who can navigate a labyrinth looks better than the person who asks why it was built. Tools become first-class citizens and developers become second-class. Root directories fill with configuration for machines, while the story of what the software does is buried six folders deep, where only the initiated can find it.

The result is a profession that has built a priesthood around its confusion and calls it expertise.

## The framework that was almost found

The empirical tradition came closer than any other school to solving these problems. Kant and Berkeley built precise tools for telling real knowledge from metaphysical fantasy, and for finding the exact point where a concept loses its grounding in experience and becomes a ghost in the machinery of thought.

They stopped at the edge of application, though. Their work stayed in epistemology and the foundations of science. Nobody carried their tools into the practical work of building systems, where they are needed even more.

I want to do that. The framework I use is called Empirically Grounded Software, and its central claim is simple: _every element of a software system must be traceable to something that can be seen, tested, or explained to a person looking at the running software_. If it cannot be, it has no right to exist. This is a standard, and Berkeley applied the same one with his pear: if you remove every perceiver, does it still make sense to say the pear exists? I apply it to the entities, layers, boundaries and patterns of a software architecture.

## What this series covers

The series builds a real application step by step with this framework, keeping every decision traceable to observable behavior. Along the way it looks at the dominant paradigms of our field as critically as the empiricists looked at the philosophies of their day.

**Domain-Driven Design** is ontology more than architecture. It builds conceptual maps of business domains, which is interesting work, but it keeps mistaking the map for the territory. The "Domain" in DDD is the organization's model of its own bureaucracy, encoded as load-bearing structure. I think it is the deepest form of reification our field has produced.

**Feature-Sliced Design** looks pragmatic, but it organizes code by conceptual category instead of by observable behavior. Its boundaries make sense on a whiteboard and resist every real-world change.

The current obsession with **infrastructure as architecture** (microservices, Kubernetes clusters, distributed systems, event buses) confuses means with ends. Good architecture lets software run on one Raspberry Pi in a Docker container, or across a thousand servers on three continents, _without changing the architecture_. Infrastructure is machinery. Architecture is the story of what the software does. Mixing them up is like believing a book's printing press is part of its argument.

**Object-oriented programming and design patterns** are the most elaborate reification in the history of computing: a zoo of named entities (Factories, Strategies, Observers, Decorators) treated as natural kinds that were discovered, when they are shorthand that was invented. Many of them add more complexity than they remove.

Even **Clean Code and Clean Architecture**, the best of the mainstream, are philosophically incomplete. Their intuitions are right and their foundations are not. Without a theory of what makes an abstraction legitimate, "clean" becomes a matter of taste, and the most carefully cleaned code can still sit on a swamp of unexamined assumptions.

Finally, **frontend development is no lesser discipline than backend development**. It is the more primary one, in the sense of knowledge. The user's screen is the only empirical ground truth in any software system. Databases, services, APIs and queues all exist to serve what appears there. An architecture built outward from what can be perceived is more honest, easier to maintain and test, and more likely to do what was intended.

## An invitation

Plato taught by asking questions. Descartes rebuilt knowledge from a single point of certainty. Kant performed his "Copernican revolution" by asking what the mind contributes to experience, instead of what experience contributes to the mind. Berkeley cleared up three centuries of confusion by asking whether "matter" meant anything at all without any possible experience of it.

You do not need to be a genius to do this. You only need to ask the basic questions seriously and without embarrassment: _What is actually here? What can I see? What can I verify? What am I assuming that I have never checked?_

Software development has never seriously asked these questions of itself. I want to start.

Your mind can reach the truth as well as any researcher's, whatever you have been told and whatever you are afraid to believe. The patterns in this series are not commandments from an authority. You will see them emerge from the requirements of honest thinking, and you can check each step yourself.

That is the only kind of knowledge worth having.
