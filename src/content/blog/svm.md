---
title: "Dissecting My Confusion: Support-Vector Machine"
description: "A walk through SVM, kernel functions and the kernel trick, and why their names confused me more than the math."
group: ml
original: "https://medium.com/codex/dissecting-my-confusion-svm-6a793cc378c0"
---

In this article I work through SVM, kernel functions and the kernel trick, with a small example of how points in 1D become separable in 2D. I found that the terminology confused me more than the math did.

In science, I find that terminology full of colloquialisms rarely makes things clearer and usually causes confusion. Biology has terms like knock-out, knock-down, knock-in and junk DNA, and you can find plenty more if you are patient. It happens even more in Computer Science and related fields. Here I want to play with SVM, examine the confusion it caused me, and hopefully use that to clarify the concept.

## The name

SVM is an absolutely confusing term. I find it hard to believe that the word "machine" was chosen for this algorithm. Why not "support-vectors assisted classification", with "support-vectors" as one hyphenated word? It would have made a world of difference.

## The math

[This article](https://medium.com/@sathvikchiramana/svm-dual-formulation-7535caa84f17) does a good job of explaining the math behind SVM.

SVM is a constrained optimization problem. Here is the definition of the objective:

![The SVM objective, a constrained optimization problem](/images/blog/svm-1.png)

![The constraints of the SVM optimization problem](/images/blog/svm-2.png)

It is equivalent to the dual form:

![The dual form of the SVM objective](/images/blog/svm-3.png)

It may not be obvious from the objective, but the bottom line of this problem is to find the optimal Lagrange multiplier (a). That is done through *gradient descent*, just like in deep learning. You can learn more [in this video](https://www.youtube.com/watch?v=UX0f9BNBcsY).

So far so good. The math needs serious mathematical knowledge, but I would still say it is fairly straightforward compared to the choice of terminology.

## Kernel functions

Now for kernel functions. Sorry for complaining so much, but I don't understand why they are called "kernel" functions. They could be called [*transformation nucleus* functions](https://en.wikipedia.org/wiki/Integral_transform), or *transformation core* functions. That makes infinitely more sense, because "transformation" is the keyword here.

The problem then becomes optimizing a function with some transformation applied, so that we can separate the data with a line, albeit in more dimensions. As a side note, I find it cool that the equivalent of a line in 1D is a dot, in 3D a plane, in 4D a 3D space, in 5D a 4D space, and so on.

Still, it is hard for me to imagine how points in one space can be linearly separated in a space with more dimensions. This example helped me.

Say the x values [-3, -2, 2, 3] have the label 1, and the values [-1, 1] have the label -1. Now transform them into two dimensions with this rule:

![The rule that maps each x to a point in two dimensions](/images/blog/svm-4.png)

The points become (-3, 9), (-2, 4), (2, 4), (3, 9), (1, 1) and (-1, 1):

![The transformed points plotted in two dimensions](/images/blog/svm-5.png)

Clearly, the line where the second dimension equals 2 separates these points correctly. Now let's transform this line back into the original 1D space with the reverse rule:

![The reverse rule that maps the line back to one dimension](/images/blog/svm-6.png)

It gives us -√2 and √2. Essentially these are just two dots on the line:

![The two dots at -√2 and √2 on the original number line](/images/blog/svm-7.png)

So two dots in 1D correspond to a line in 2D, which I find really interesting and almost mind-blowing.

## The kernel trick

Back to kernel functions and the term "kernel trick", which I also don't like. As I said at the beginning, colloquialisms in scientific terminology usually take away from clarity.

The kernel trick is explained really well in [this article](https://medium.com/@zxr.nju/what-is-the-kernel-trick-why-is-it-important-98a98db0961d). Let me take a step back, though. The kernel trick means that instead of transforming data to higher dimensions with a mapping function and then taking dot products, we can compute the kernel function directly. That can greatly simplify the calculation. To my mind, "kernel simplification" would have been a better name.

## Conclusion

The math behind SVM is pretty advanced, but it was the choice of terminology, more than the math, that caused me a great deal of confusion. Analyzing my confusion helped me grasp the concept better, and I hope it helped you too.
