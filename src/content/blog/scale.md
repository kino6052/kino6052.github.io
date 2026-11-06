---
title: "The Central Contradiction of Scalable Software"
description: "Why large codebases get hard to change, and how fast feedback and a UI-first design address it, with the claims that could prove me wrong."
group: metaphysics
original: "https://kino6052.github.io/personal-blog/metaphysics-of-code.scale.html"
---

This post names two contradictions behind unscalable software, shows how to resolve them, lists five principles that follow, and states what evidence would prove the approach wrong. It uses the idea from inventive problem-solving (TRIZ) that every unsolved engineering problem contains a contradiction, and that naming it precisely makes the solutions visible.

## The usual answer is wrong

Ask a senior engineer why large codebases become hard to change and you will hear one of these: the team chose the wrong patterns, the architecture was not designed upfront, the developers lacked discipline, or the domain was modeled incorrectly.

All of these look for the problem in the choice of tools. I think it lies deeper, in the physics of feedback.

A system is scalable to the degree that a change to it gives an immediate, unambiguous signal about whether it is correct. It is unscalable to the degree that this signal is delayed, ambiguous or missing. This is a measurable property, like thermal conductivity or tensile strength. Patterns, methodologies and architecture styles all sit downstream of it.

## Two contradictions

**The feedback contradiction.** Software has to change continuously to stay useful. But any change to a large system may silently break parts that were not touched. The bigger the system, the longer it takes to check that a change introduced no error. At some size, checking takes longer than building, and progress stops.

The obvious fix is to test more carefully, which means testing more slowly. The contradiction gets worse: the system needs faster change and more verification.

**The grounding contradiction.** Software has to be organized around concepts so people can understand it. But every concept added to the architecture is a reification, an abstraction treated as a real thing with properties, responsibilities and relationships that exist only in the modeler's mind. The more elaborate the concepts, the harder they are to change, because the parts carry the weight of commitments about what exists, and have lost the lightness of provisional notation.

The obvious fix is to model the concepts more carefully, which means committing more deeply to the reification. Again it gets worse: the system needs clear concepts and flexible structure.

The two reinforce each other. A heavily reified system is the hardest to test, because its behavior passes through layers of abstraction that correspond to nothing you can observe. And a system without feedback cannot be refactored safely toward clarity, because any refactoring might break something that only shows up in production.

The result is the familiar labyrinth: a codebase that resists understanding and resists change, staffed by developers who learned to navigate it and no longer improve it.

## How the field misreads the cause

### Blaming the patterns

When a DDD system becomes unmaintainable, we say the bounded contexts were drawn wrongly. When a microservices architecture collapses under its own weight, we say the service boundaries were wrong. When an event-sourced system becomes incomprehensible, we say the team did not understand event sourcing well enough.

It is the same logical error each time: blaming too little application of the method and never questioning the method. When "it was not executed correctly" explains every failure, the methodology can no longer be falsified. An unfalsifiable claim is a matter of faith, and not of engineering.

DDD, Clean Architecture, Feature-Sliced Design and microservices are unfalsifiable in this sense. No codebase has ever failed because of them. It has always failed despite them, through insufficient purity of implementation. That is theology.

### Mistaking the map for the territory

Domain-Driven Design contains a basic error that its intellectual apparatus hides well: the "domain" it models is the organization's model of its own bureaucracy, and not the user's experience of the software.

When a DDD practitioner draws an "Aggregate Root" or defines a "Ubiquitous Language", the ground truth being modeled is a meeting, a conversation among stakeholders about how the organization thinks about itself. That is an interesting activity with real business value. It is not architecture.

Architecture is the structure of a system with respect to its _observable behavior_. The user does not see domains, bounded contexts, repositories or aggregate roots. The user sees a button, a form, a list, a number, a confirmation message. Those are the primitives of a software application. Everything else is machinery that produces these experiences, and machinery should not carry load.

Once you make "Customer" an architectural entity instead of a convenience label for a cluster of related behaviors, you have reified. You have given your org chart the structural authority of a physical law. Org charts change constantly, arbitrarily and for political reasons. Physical laws do not.

### Infrastructure as architecture

Confusing infrastructure with architecture is one of the most expensive errors in our field.

Architecture is the story the software tells about what it does. Infrastructure is the machinery that runs that story. A book's argument does not change when it is typeset differently, and a play does not change its meaning when it moves to another theater.

Scalable architecture should not care whether it runs on a Raspberry Pi in one Docker container or on a thousand servers across three continents. If changing the deployment topology means changing the architecture, infrastructure has contaminated it. The software knows too much about the world it happens to run in, and that makes it brittle.

## The resolution

TRIZ describes a class of solutions called separation in space, time or structure. They remove a contradiction by separating the conflicting requirements, so both no longer have to be met at once. Both contradictions above yield to this.

### Feedback: separation by structure

Feedback can be immediate if and only if the system's correctness can be verified _without external dependencies_. Every IO boundary (a database, an API, a payment gateway, a message queue) multiplies feedback latency. It adds wait times, environment dependencies, infrastructure requirements and non-determinism. It is a tax on iteration speed.

The system obviously needs external dependencies, so the answer is to _separate their interfaces from their implementations_ with strict structural rigor.

Every external dependency must have an in-memory implementation that:

- runs synchronously
- needs no installation, configuration or cloud access
- reproduces the _behavioral contract_ of the real dependency, without its machinery

This is an architectural principle and goes beyond testing convenience. The in-memory implementation is the _primary_ one, and is no mere test double. The production implementation is a swap-in that satisfies the same interface. If the interface is specified correctly, the swap is safe. If the swap is unsafe, the interface was wrong, and finding that out early, while specifying the interface, is exactly the feedback the system needs.

Third-party providers should supply this: a synchronous, in-memory version of their API that covers the necessary and sufficient behavioral scenarios. When they do not, build one yourself. Otherwise their infrastructure controls your feedback latency, and so their architecture sets the speed of your iteration.

### Grounding: separation by direction

The grounding contradiction is resolved by reversing the direction in which the architecture is derived.

The dominant practice starts from the domain model and derives the interface from it: "Here are our entities and how they relate; the UI will show what the model exposes." This produces reification, because models are built from concepts, and concepts drift away from what can be observed.

The right direction is the reverse. Start with what the user perceives: a button, a list, a form, a transition. This is the ground floor. Everything below it is infrastructure, which serves it, is shaped by it, and has no independent architectural standing.

In practice, at every stage of development you must be able to run the whole system using only the simplest implementations of its dependencies. The UI must work against mock data. The business logic must be testable without a database. The integration layer must be checkable without the real third-party service. The architecture must not know whether it runs in a web browser, on a Linux server or in a Docker container. It knows only the primitives of its own language.

This is what it means for software to be _soft_.

## Five structural principles

Five principles follow from this analysis. They are engineering constraints derived from resolving the two contradictions, and are not style preferences.

**1. Perception primacy.** Every architectural element must be traceable to something observable in the running software. If you cannot point to what the user sees that corresponds to a module, layer or entity, it has no right to exist. This is empiricism applied to architecture, and minimalism is a side effect.

**2. Interface stability.** Interfaces are the most durable artifacts in a system. Implementations change all the time, and well-specified interfaces rarely. Put your architectural effort at the interface boundary. An interface states the _minimum necessary contract_: no more than the behavior requires, no less than correctness demands. An over-specified interface is as dangerous as an under-specified one, because it couples you to implementation details that need not be coupled.

**3. Independence from environment.** The core system must not know about HTTP, Docker, the operating system or the cloud. It knows only its own behavioral requirements and the interfaces that satisfy them. Environment-specific knowledge belongs in the outermost layer, which is the one you swap when deployment changes.

**4. Mock primacy.** Development goes from the inside out. Build the UI first, against the simplest possible implementations of its dependencies. Replace mocks with real implementations only when the interface specification is stable and the behavior is verified. This is the correct order of work, and a workaround for missing infrastructure is only a side benefit. Starting from real infrastructure and building inward is the main source of the feedback contradiction.

**5. Proxy at the foreign boundary.** Some third-party systems are highly reified: they expose concepts instead of behaviors and force your architecture to model their internal organization. Put a proxy in front of them. The proxy offers an interface grounded in your system's observable behavior and translates between your behavioral contract and the third party's concepts. The reification stops at the proxy and does not enter your architecture.

## What changes

A system built on these principles behaves differently.

_Correctness can be verified in milliseconds_, because the core runs entirely in memory, synchronously and without external dependencies. Every change can be checked before it leaves the developer's machine.

_Refactoring is safe_, because behavioral contracts live at the interface layer and mock implementations check them without the full stack. Implementation changes do not spread to the interface, and interface changes are detected right away wherever they are used.

_The architecture is honest_, because every element corresponds to something observable. No load-bearing abstraction exists only in the modeler's head. When the business changes, the observable behavior changes, and the architecture, derived from that behavior, changes with it. It does not resist like a structure built on sand that has been allowed to harden.

_Developers can understand the system without initiation_, because its structure follows from what the software visibly does. They do not have to learn a conceptual model before they can read the code.

## Where complexity comes from

We are told that complexity is the price of power: a system able to do something valuable must be hard to understand and change. I think this is false.

The complexity we fight in large codebases is _introduced_ complexity. It comes from reification, infrastructure contamination, feedback latency, and the accumulated weight of concepts that were never grounded in anything visible. Intrinsic complexity is the irreducible difficulty of the problem. Introduced complexity is overhead from how we chose to represent the problem.

A system built outward from perceivable behavior, with interfaces as its main durable artifact, mock-first development and independence from the environment, will contain only intrinsic complexity. It will be as large as the problem requires and no larger, and as hard to understand as what it does.

That is a reachable engineering target, and it follows from two precisely identified contradictions. Name the contradiction, derive the resolution, build accordingly.

## What would disprove this

A methodology that cannot be falsified is a creed. The principles above make specific, empirical claims, and each has a condition that would require me to revise or drop it. If you believe I am wrong, you are invited to produce the evidence. If you cannot, update your priors.

### Claim 1: synchronous in-memory substitution is necessary for adaptability

**The claim:** A system cannot be adapted quickly (refactored, extended, debugged under change) unless all its dependencies can be replaced by synchronous, in-memory implementations that run without external infrastructure. This is the mechanism that makes feedback fast enough for iteration at scale.

**What would falsify it:** A system that is demonstrably more adaptable than a grounded system, measured by time-to-change, defect rate after refactoring or onboarding speed, without substituting its dependencies this way. Its developers would iterate quickly, changes would not cascade unpredictably, and correctness would be checked only against live infrastructure. It would have to be at scale, under active development, with a changing team, and its adaptability could not be explained by other factors such as a very small team, a very stable domain or a very low rate of change.

A system that works despite lacking substitutable dependencies does not falsify the claim. The claim is that such systems cannot be adapted quickly. A system that is stable because nothing changes is not evidence of adaptability.

### Claim 2: a grounded system must be derived starting from the UI

**The claim:** The right order runs outward from the perceptible: from what the user observes, through the behavior that produces it, to the infrastructure that supports it. Concepts developed away from what can be perceived drift. Starting from a domain model, a data layer or a service contract and working toward the UI produces reification, because nothing observable constrains the concepts as they form.

**What would falsify it:** A demonstrably grounded system, with no unnecessary entities, abstractions traceable to observable behavior and easy changes as requirements shift, that was designed from the data layer or domain model outward, without UI-first derivation. Or a UI-first system with the same reification problems as domain-first ones: load-bearing abstractions, entities that resist change, concepts that exist for modeling reasons instead of behavioral ones. Either result would require revising the claim that derivation direction determines grounding quality.

A partial falsification would also be useful. It might show that UI-first derivation is necessary for interactive applications, while systems with no user-facing interface (data pipelines, embedded firmware, background services) reach the same grounding through another perceptual anchor, such as logged output or measurable physical state. That would narrow the claim without removing it.

### Claim 3: grounded systems have fewer unnecessary entities

**The claim:** Reification, the growth of abstractions with no counterpart in observable behavior, is a structural result of organizing code around concepts instead of percepts, and discipline alone does not prevent it. A system derived from observable behavior will, because of how it is derived, contain fewer non-behavioral entities than a conceptually organized system solving the same problem. This is a prediction, not a style preference.

**What would falsify it:** Either (a) a grounded system, derived outward from perceivable behavior, that contains about as many non-behavioral entities as a typical DDD or Clean Architecture system of equal scope (Repositories, Aggregates, Factories, Service objects that satisfy the pattern and produce no observable output), or (b) a heavily patterned, domain-modeled system in which, on inspection, every entity could not be removed without changing some observable behavior. Option (b) would hurt more. It would suggest that conventional methodologies, applied with enough rigor, already remove unnecessary entities, which would make this claim redundant.

### Claim 4: perceptual entry points orient developers faster than domain models

**The claim:** If a codebase's entry points match things visible in the running software, developers who are new to it can find the relevant code, trace dependencies and identify where to change things much faster than in a system organized around a conceptual domain model. Anyone who has used the software already knows its visible features, while a domain model has to be learned before it can be navigated.

**What would falsify it:** A controlled orientation study. Take developers with no prior exposure to two systems of equal scope, one grounded and one domain-modeled. Give both groups the same task: find the code behind a specific user-visible behavior and say where a described change would be made. Measure the time to a correct answer. If the grounded-system developers are not measurably faster, the claim is weakened. If the domain-model developers are faster, perhaps because explicit domain names guide developers who already know the business better than behavioral entry points do, the claim is falsified.

The experiment can be run, and it has not been. That is an honest gap, and the claim should be weighted accordingly until the data exists.

### What these conditions reveal

Each condition points at a real weakness. Some claims may be false for certain kinds of systems. A pure data pipeline has no UI, so the in-memory substitution claim may hold while UI-first derivation does not apply. A small team with unusual discipline may produce a clean domain model with no unnecessary entities, which weakens the third claim there. Developers who know a business domain deeply may navigate a well-named domain model faster than a behavioral one, which partly falsifies the fourth.

The methodology does not need to be right everywhere. It needs to be right in the cases it claims: large, actively developed, multi-developer systems with changing requirements and external integrations. That is where the two contradictions bite hardest, and where the resolution has the most force.

If you produce real counterevidence, a system that passes a falsification condition, you are holding something more valuable than agreement. You are holding a refinement. I would rather be refined than believed.

## What comes next

The practical techniques are how to specify interfaces, build mock implementations, order the development work and handle third-party integration. They depend on the argument above, and a technique applied without understanding where it comes from is just another pattern. A pattern is a temporary solution to a problem that has not been solved.
