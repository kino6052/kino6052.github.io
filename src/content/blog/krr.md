---
title: "Why Knowledge Representation and Reasoning Is My Favorite Subject in Computer Science"
description: "What I took from my Knowledge Representation and Reasoning course, from Answer Set Programming to the Cyc knowledge base."
group: ml
original: "https://kirill-novik.medium.com/why-knowledge-representation-and-reasoning-is-my-favorite-subject-in-computer-science-978fb8d2c72a"
---

I just finished the "Knowledge Representation and Reasoning" course in my Master's in Computer Science at Arizona State University. Here is what I took from it, what I felt was missing, and where I want to go next.

The course was super interesting, and it confirmed the direction I would like to pursue academically.

If you have read my past articles, you probably know I'm into philosophy, particularly the philosophy of idealism. Examining my own mind excites me far more than studying brains or behavior. I like spotting patterns in how my mind "moves", and formulating or even modeling them. I believe such insights could be valuable for all kinds of problems, especially one of the hardest: modeling artificial general intelligence.

Something closer to reach caught my attention during the course: the tools this field offers. They can help structure personal knowledge, from mathematics to domain-specific knowledge.

## What the course covered

At the start, I thought the course would focus on the theory of how to represent knowledge. It did not. For most of the course we studied how reasoning is used for domain modeling, and in particular the syntax and semantics of Answer Set Programming (ASP). There was a little material on ontology at the very end. To my mind, the course should be called "Reasoning in Knowledge Representation" instead.

Logical inference matters a lot when modeling knowledge. It greatly reduces the amount of information you store, because many intermediate facts can be inferred on demand. But logic is not the only important part of representing knowledge.

There was no real discussion of what makes one representation better than another. For example, there was very little on why a tree is less optimal than a graph. When knowledge is a graph, what are its necessary and sufficient properties? What fundamental entities would simplify the graph and help inference? How do the known knowledge bases compare, and what lessons were learned?

## Cyc

We did cover a little of the known knowledge bases, and one caught my attention: Cyc, pronounced "sike".

For some reason, there isn't much descriptive information about Cyc on the Web. However, [Lex Fridman interviewed Douglas Lenat](https://www.youtube.com/watch?v=3wMKoSRbGVs), the founder of Cyc, and did a good job. Lenat describes the task of capturing common sense knowledge in an ontology, so that a system could mimic how humans reason from a set of innate (default) assumptions about the world.

The interesting part is that the project has run for several decades. The knowledge had to be entered manually by researchers, because no algorithm exists that can infer it automatically. That is very laborious work. In my opinion it is far from nonsensical: at the very least, the project offers a lot of insight into the problem and into human common sense, and it is a source of many lessons.

## What's next

My goal now is to learn as much as I can about Cyc and similar knowledge bases, and to share what I find. My hopes are high. I also hope to start capturing my personal knowledge with the tools I discovered. One stumbling block so far is that the web services around knowledge bases are either missing or not very user friendly. I'm not sure yet why that is.

## Conclusion

Despite its challenges and drawbacks, the course gave me a new vantage point on a domain that fits my interests very well. That is why I consider it my favorite subject, and I highly recommend this course or similar ones to other students.
