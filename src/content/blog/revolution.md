---
title: "The Gaslighting of Software Engineering"
description: "A speech about how complexity gets used as status in software teams, and why the user's screen is a clearer ground for judging tools."
group: metaphysics
original: "https://kino6052.github.io/personal-blog/meataphysics-of-code.speech.revolution.html"
---

This post is a speech. It describes how complexity is used as a weapon in software teams, explains why it happens, and offers a way to stay clear-headed about it.

## The question

Have you ever had a colleague who, when you asked a simple question or said a system was needlessly complex, made you feel like _you_ were the problem?

Not the system. Not the complexity. You.

"You just don't understand."
"This is how we've always done it."
"It's more complicated than you think."
"Maybe you're not senior enough to see the bigger picture."

This is gaslighting, and it is everywhere in software engineering.

## An example with Webpack

I once told a colleague that I hated working with Webpack. You waste all day fighting it to set things up the way you want. You can hardly do it without debugging Webpack itself and learning how it processes its config.

They said: "That's because you don't understand it." Or: "I don't think it's hard at all. I never had this problem."

That is not true. Webpack is notoriously picky about getting tools to work together. With CSS, TypeScript and PostCSS there will be friction, and you will have to debug it.

My colleague would not admit this. They made me feel that the problem was me, that I was not smart enough, not experienced enough, not serious enough.

## An example with React

It is not only build tools. It is the frameworks too.

React started as a declarative view library. It promised simplicity: "just render the UI."

Today React needs a careful understanding of lifecycle, hooks, dependencies, memoization and reconciliation. Expertise is measured by how well you manage React's internals, and not by how clearly and cleanly you build. I find that absurd.

React went against common sense. It could have been a plain declarative view library, with reactive state and side effects managed outside it. Instead it put everything inside. State management is internal. Side effects are internal. The lifecycle is internal.

You cannot use React as a simple view layer. You have to understand React itself, master its internals and fight its abstractions. And when you say "this is unnecessarily complex," they say: "You just don't understand React."

## The pattern

This repeats everywhere.

- You say: "This system is unnecessarily complex."
  They say: "You just don't understand the bigger picture."
- You say: "Why do we need seven layers of abstraction?"
  They say: "This is how we maintain separation of concerns."
- You say: "Can we simplify this?"
  They say: "It's more complicated than you think."
- You say: "React should be a dumb view layer."
  They say: "You just don't understand the React way."

The message is always the same: _Your confusion is your fault. Your wish for clarity is a weakness. Your sense that something is wrong shows you don't belong._

## The toxicity

I have met this in many forms:

- The backend engineer who looks down on frontend work as "lesser."
- The architect who dismisses your simplification as "naive."
- The senior developer who uses obscure jargon to prove superiority.
- The manager who asks why you can't "just get it done."

This toxicity is one of the reasons our industry is so hard. The code is not the cause, and neither are the deadlines or the complexity. The cause is people who use complexity as a weapon, a culture that rewards obscurity over clarity, and a status trap that makes us compete when we could help each other.

## The root problem

What if this toxicity is the root problem behind software being "hard"?

What if the complexity we fight is the deliberate creation of a priesthood that wants to keep you out, and not the natural cost of real work?

When someone says "Webpack isn't hard, you just don't understand it," they are defending their status, and Webpack is only the occasion. The same goes for "React isn't complicated, you just don't understand hooks."

They have mastered the labyrinth. They spent years learning its twists and turns and became the expert. When you say "this is unnecessarily complex," you threaten their identity. If Webpack is a bad tool, their expertise is in a bad tool. If React is a bad abstraction, their mastery is of a bad abstraction. If the labyrinth is a waste, so is the time they spent in it.

They will not admit this, and perhaps they cannot. Their self-worth is tied to the complexity they have mastered.

## What makes these systems so complex?

Webpack is overcomplicated and lacks empirical grounding. It is grounded in the machinery of building, and not in what the user perceives. It solves a problem that should not exist: bundling, transpiling and managing dependencies in a fragmented ecosystem.

React is overcomplicated too. It puts lifecycle, state and side effects inside itself, and all of them require you to master React.

Why do we accept this? Because we are gaslit into believing it is normal, that it is "real work", and that this is what a serious engineer does.

## The screen is the ground

Here is the truth they do not want you to know:

**The screen is the ground.**

What the user perceives is the only reality that matters. The code, the architecture, the database, the infrastructure, the Webpack config and the React internals all exist to serve that screen.

The user does not see your Webpack config, your React lifecycle or your architecture. The user sees buttons, text, images, status messages, forms, lists and results.

That is the software, and that is the substance. Everything else is machinery.

## The status trap

Software developers constantly flex on each other:

- Backend over frontend.
- Systems over applications.
- Algorithms over UI.
- Infrastructure over user experience.
- Complexity over clarity.

We have built a status hierarchy based on _distance from the user_. The farther you are from the screen, the more "serious" you are considered.

The gaslighting about Webpack is one example and the gaslighting about React is another. The tools are hard and needlessly complex, and admitting it would threaten the status of those who have mastered them.

This is a status game and not a technical truth. It signals superiority and keeps others out.

## Liberation

When you understand this, you are free of the gaslighting, the status trap and the hierarchy.

You know the screen is the ground. You know the user's experience is the substance. You know Webpack is an accident and React is an accident.

You no longer have to pretend that fighting a build tool is "real work," that mastering a framework's internals is "expertise," or that complexity is a sign of seriousness.

## What to do when it happens

Stop gaslighting yourself. Stop accepting the hierarchy. Stop believing that complexity is competence, and stop treating machinery as if it were the substance.

The screen is the software, the substance and the ground. Everything else is machinery, support and accident.

When someone makes you feel small for wanting clarity and simplicity, and for wanting to focus on what matters, remember:

_They are not defending Webpack. They are defending their status._

_They are not defending React. They are defending their status._

## The truth

**Software is the communicated idea.** It is what the user perceives and understands.

The code, the frameworks, the databases, Webpack and React are machinery. The screen is the substance, and the user is the ground. Everything else is an accident.

## Join the movement

I am building a movement called **Empirical Software**.

Its core is this: **ground everything in perception, treat everything else as swappable, refuse the status trap, and build soft software.**

### What we stand for

- **The screen is the substance.** What the user perceives is the only reality that matters.
- **The user is the ground.** Their experience is our guide.
- **The code is machinery.** Frameworks and tools are machinery, and everything else is an accident.
- **Complexity is not competence.** Simplicity is not naivety.
- **Clarity is strength.** Obscurity is weakness.

### What you can do

**Join the community.**
We are building a movement of developers who refuse the gaslighting, demand clarity and ground everything in perception.

**Learn Empirical Software.**
Study the principles, apply them to your work and see the difference.

**Start building substance.**
Stop building ghosts and labyrinths. Build what the user actually sees and experiences.

**Challenge the status quo.**
When someone gaslights you, push back. When someone defends complexity, question it. When someone makes you feel small, remember that _they are protecting their status, and the system is not what they are protecting_.

**Spread the word.**
Share this philosophy with your colleagues, your team, your company and the industry.

[https://empiricalsoftware.com/community](https://empiricalsoftware.com/community)

The time for gaslighting is over. The time for clarity has come. The truth is on your side.
