---
title: "Test-Driven Development and React"
description: "How to build a React app test-first by moving state and event handling out of React and into one pure reduce function."
group: web
original: "https://kirill-novik.medium.com/test-driven-development-and-react-347487c9610a"
---

In this article I share an approach to building React applications in a test-driven way. The idea is to keep the app logic in a pure function that is easy to test. You can see the result in this [sandbox](https://codesandbox.io/s/tdd-and-react-4g98i).

## Introduction

I like React a lot, except for one thing: it is often very laborious to test thoroughly. Writing it test-first is even less fun.

But I don't give up easily, and I really like testing my code. At work, almost nothing gets me more pumped than seeing green in my terminal. Well, that and the paycheck.

Test-driven development with React is a powerful but neglected art. Think of it as the unicorn of programming paradigms: it makes a lot of sense, yet it doesn't seem to exist in real life. Or does it?

## Thinking in React

I share [the way of thinking that React proposes](https://reactjs.org/docs/thinking-in-react.html):

- Break the UI into a component hierarchy
- Build a static version in React
- Identify the minimal but complete representation of UI state

I'm skipping the fourth step, because here the state will live outside React and arrive through props.

I'm also leaving out the step about inverse data flow. I've always had mixed feelings about it. I realize it is necessary, but I have always felt there must be a better way. Up to that point, we have elegant views with data passed around. Then the code fills up with callbacks and closures, and the elegant view code turns into spaghetti.

What if I take the inverse data flow outside React and keep React's data flow one-directional, as it should be?

## The EventWrapper component

Here is the `EventWrapper` component (`EventWrapper.tsx`):

```tsx
import React from "react";
import { Subject } from "rxjs";

export type EventType = "click" | "change" | "focus";
export type Id = string;
export type IEvent = [EventType, Id, string | undefined];

export const EventSubject = new Subject<IEvent>();

export const EventWrapper: React.FC<{ id: string }> = (props) => {
  const { children, id } = props;
  const childrenWithProps = React.Children.map<
    React.ReactNode,
    React.ReactNode
  >(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        id,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          EventSubject.next(["click", id, ""]);
        },
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          EventSubject.next(["change", id, e?.target?.value]);
        },
        onFocus: (e: React.FocusEvent) => {
          e.preventDefault();
          EventSubject.next(["focus", id, ""]);
        }
      });
    }
    return child;
  });
  return <>{childrenWithProps}</>;
};
```

Now we can safely take the data flow inversion outside React by subscribing to the `EventSubject`. This wrapper is just one example. You can extend and optimize it to suit your needs, and for this article it is good enough.

When a component should react to user input, you wrap it in `EventWrapper` and give it a unique id:

```tsx
<EventWrapper id=”input-01">
   <input />
</EventWrapper>
```

## State

Now that event processing is decoupled from React, we can get to the fun part. Events arrive through the `EventSubject` in a form like this:

```js
[“change”, “input-01”, “test”]
[“click”, “input-01”, “”]
[“focus”, “input-01”, “”]
```

To save time, let's assume we have done the first three steps of the ["thinking in React" section of the documentation](https://reactjs.org/docs/thinking-in-react.html). So we already know what our state looks like and which inputs update it. These steps don't need a TDD approach. You can still test the result by passing various states to the top component and checking that it updates the way it should.

This is how the state looks (`InitialState.ts`):

```ts
const initialState: IState = {
  input: "",
  isInStockOnly: false,
  products: [
    {
      id: "0",
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      id: "1",
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      id: "2",
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      id: "3",
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      id: "4",
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    {
      id: "5",
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    }
  ],
  productsToDisplay: ["0", "1", "2", "3", "4", "5"]
};
```

I added a `productsToDisplay` field to the state. It moves the decision about what to display from React into a simple JSON object, which is much easier to test.

## What about TDD?

Now we know what state the app expects and which events will be triggered. That means we can represent the app as a pure function:

```js
const newState = reduce(event, state);
```

Here `reduce` is an abstraction of our application logic, and all of the logic lives inside it.

The coolest part is that, unlike with Redux, our application isn't a function from actions to state. It is a function from IO to a new state. That is how applications really work: user input, device responses and network responses change the app state.

Because the app is a pure function, it is easy to test. All we need to know is the input and the output, and nothing about the internal logic.

## TDD example

**Red phase.** This is the first failing test that we write:

```ts
expect(reduce(['change', 'input-01', 'ball'], initialState)).toEqual({
  input: "ball",
  isInStockOnly: false,
  products: [
    {
      id: "0",
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      id: "1",
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      id: "2",
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      id: "3",
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      id: "4",
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      id: "5",
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ],
  productsToDisplay: ["0", "1", "2"],
});
```

**Green phase.** We have to make it pass:

```ts
const reduce = (
  event: IEvent,
  state: typeof initialState
): typeof initialState => {
  if (event[0] === "change" && event[1] === "input-01") {
    const value = event[2];
    const filteredProducts = state.products
      .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
      .map(({ id }) => id);
    return {
      ...state,
      input: value,
      productsToDisplay: filteredProducts,
    };
  } else {
    return state;
  }
};
```

**Blue phase (optional).** Time for refactoring. This is the **coolest thing about TDD**. You don't have to worry about code architecture, and you are free to **choose the architecture that suits you, as long as your tests pass**. The logic inside `reduce` can be anything. It doesn't have to be pure functional programming, and it can be object-oriented. As far as `reduce` is concerned, the abstraction it gives is a pure function. I hope to write an article about the blue phase in the future.

In this example I just move all the code inside the `if` block into a function called `filterProducts`:

```ts
const filterProducts = (event: IEvent, state: IState) => {
  const value = event[2] || "";
  const filteredProducts = state.products
    .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
    .map(({ id }) => id);
  return {
    ...state,
    input: value,
    productsToDisplay: filteredProducts
  };
};

export const update = (event: IEvent, state: IState) => {
  const isInputUpdated =
    event[0] === "change" &&
    event[1] === "input-01" &&
    filterProducts(event, state);
  return isInputUpdated || state;
};
```

Now that the test passes, we can switch the test to an inline snapshot. This lets us anticipate changes to the state and update tests quickly:

```js
expect(
reduce([“change”, “input-01”, “ball”], initialState))
.toMatchInlineSnapshot();
```

## Connecting the dots

Let's fast-forward to the point where we tie the logic of `reduce` back to React. We already have a pub-sub for events, and now we add one for state. The `StateSubject` is updated every time something is published to the `EventSubject`. Then we just re-render the app with the new state:

```tsx
StateSubject.subscribe((state) => render(<App state={state} />, rootElement));
```

That's it.

## Conclusion

This is how I do TDD with React in a nutshell, and I have barely scratched the surface. I hope I showed how powerful the method is. With some practice, you will see that the promise of React, that it makes creating UIs painless, can actually be fulfilled.

## A note on asynchronicity

You probably noticed that all the code inside `reduce` is synchronous. So how do you deal with asynchronicity? That is what events are for. Asynchronous means IO, and IO means events. You just need a separate event for the asynchronous response, whether it comes from a timer, the network or something similar. I'm going to do a deep dive into asynchronous TDD use cases in the next article.

## P.S.

Yes, I was able to do what Redux does, and even take it up a notch, with just a handful of lines of code.
