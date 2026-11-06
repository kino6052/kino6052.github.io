---
title: "React Hooks + RxJS, or How React Is Meant to Be"
description: "A way to share state in React with RxJS subjects and a small custom hook, without Redux or MobX."
group: web
original: "https://soshace.com/react-hooks-rxjs-or-how-react-is-meant-to-be/"
archived: true
---

In this article I show how React Hooks and RxJS subjects can replace a state management framework. You get shared state that reads like `useState`, with less boilerplate.

I remember when I first got introduced to React. I was stunned by how great it was to handle all the presentation logic with just JavaScript and JSX. It seemed effortless: you pass in props, you update state. Going through the Tic-Tac-Toe tutorial on the React homepage felt so good that I was confident we had finally found the magic bullet, at least for the front end.

But there was a catch. What if you lift the state five floors up, but some of that state and its update logic is still needed on the first floor?

You pass some state one level down, then some of it one level further, and so on until it reaches the component. That is laborious, but fine. Then you need to change the shape of the state on the fifth floor, and the props on the fourth, third, second and first.

Ouch. Is that a mistake or a design? It turns out the state-to-props issue is by design, and this is where Redux steals the show. But five minutes into the Redux tutorial, you start to wonder if your excitement about React was an overreaction.

I know of many attempts to win the show back for React, such as the Context API and various state managers. For me, none of them brought back the excitement I first had for React, until I learned about RxJS.

## What I want to show

My goal is to show that React plus RxJS gives you better readability, less boilerplate and a setup that stays close to React. It does the same job as the popular state management frameworks, and it is not a framework itself. Let's look at it more closely.

## Better readability and less boilerplate

Readability is one of the first things I check when I choose a tool. The main test of my own code is whether I can understand it a week and a month after I wrote it.

Your tool is not always as important for readability as your own habits and choices, but it can still contribute. In my experience, the more verbosity and indirection it takes to build a feature, the less you will understand it later.

This is true of Redux. Before you get to the core of what you are doing, you write actions (some people add action creators on top), create reducers, compose them, and connect dispatch and state to props. Only then do you add the logic, and you still need sagas or thunks for side effects.

Understanding the structure of a Redux app is just as hard. You have to work out which actions trigger which side effects, what happens in the reducers, and how it all fits together. I have always found it a nightmare. Despite many attempts, I never understood my colleagues who were so passionate about Redux. To me, Redux and readability are opposites. Feel free to disagree, but please make an educated argument in the comments so that I and others can learn.

MobX improves readability a lot, because it has none of the verbosity and indirection of Redux. Still, it can be confusing to work out the structure of state that is spread over composed stores, which can turn into a mess of properties and update logic. How does the RxJS hook compare?

You use it much like the familiar `useState` hook, so it is easy to read and understand. Your state lives inside a Subject that you can always retrieve and inspect when you are trying to understand what the application does.

## Close to React

React is elegant. State managers are not. If I can stay with React before bringing in other frameworks, I will. I am convinced you can write complex, elegant application code with React and plain services logic, without giving up readability, maintainability or scalability.

RxJS and React Hooks are the combination I find extremely helpful for this. I have written production code with it, and it was and still is a great ride.

## State management features

I never really understood the popularity of Redux. Don't get me wrong, I always found it interesting, but I never liked writing code with it. I wonder if its popularity comes partly from people like Dan Abramov, who is a great guy and a great engineer. Even so, I don't see why it is still worth biting the bullet.

For me, the main merit of Redux is its three principles:

- Single source of truth
- State is read-only
- Changes are made by pure functions

None of these work for MobX. With MobX you don't have a centralized state object. You have a centralized store object, and that is a different thing. Since your stores and your state are interleaved, it is hard to reason about the application and hard to unravel.

With RxJS subjects and React Hooks, you get one of these principles out of the box: pure functions, since observable streams are pure functions themselves. Unfortunately, the value of a BehaviorSubject is not read-only, and you can change it by hand after you get it with `getValue()`. I plan to ask the community whether it could be made read-only out of the box, so you can't shoot yourself in the foot. It may be something the contributors simply overlooked.

As for the single source of truth, it is not hard to get. You compose all the subjects into one observable, much as you compose reducers:

```js
const subject001 = new BehaviorSubject({});
const subject002 = new BehaviorSubject({});
const subject003 = new BehaviorSubject({});
 
// Only for listening
const globalObservable = combineLatest(subject001, subject002, subject003);
```

### Single source of truth

The RxJS hook approach is not very different from Flux. You have:

- Dispatcher/action: `subject.next()` or `setSharedState()`
- Store: `globalObservable`
- View: your view

## TL;DR

**So here is your shared state.**

```js
const subject = new BehaviorSubject({ message: '' });
 
const AwesomeComponent = () => {
 const [{ message }, setState] = useSharedState(subject); // Custom Hook
 return <div>{message}</div>;
};
```

We get a tuple of a value and a `setState` function, nothing unusual.

**Do you want to use it like `useState`?** Easy.

```js
const AwesomeComponent = () => {
 const [{ message }, setState] = useSharedState(subject);
 return <div
   onClick={() => setState({ message: 'test' })} // One way
   onClick={() => subject.next({ message: 'test' })} // Another way
 >{message}</div>;
};
```

`subject.next` is another way to update the state, but I think `setState` from the tuple is more readable and easier to understand.

**Do you want it shared between components at the top of the tree and at the bottom?** Easy.

```js
const First = () => {
 const [{ message }, setState] = useSharedState(subject);
 return <div>First: {message}</div>
}
const Second = () => <div><First/></div>
const Third = () => <div><Second/></div>
const Fourth = () => <div><Third/></div>
 
const Fifth = () => {
 const [{ message }, setState] = useSharedState(subject);
 return <div><div>Fifth: {message}<div><Fourth/></div>
}
```

You can use the same state in both places, where in the past you would pass everything through props.

**Do you want both local and shared state?** Easy.

```js
// Single shared and local states
const AwesomeComponent = () => {
 const [sharedState, setSharedState] = useSharedState(subject);
 const [state, setState] = useState(‘’);
 return <div>{/* That was easy */}</div>;
};
 
// Multiple shared and local states
const AwesomeComponent = () => {
 const [sharedState001, setSharedState001] = useSharedState(subject001);
 const [sharedState002, setSharedState002] = useSharedState(subject002);
 const [sharedState003, setSharedState003] = useSharedState(subject003);
 const [state001, setState001] = useState('test');
 const [state002, setState002] = useState('test');
 const [state003, setState003] = useState('test');
 return <div>{/* That was easy */}</div>;
};
```

You can have several small states as part of your component state.

**What if you want to update the state outside the component?** Easy.

```js
subject.next({ message: 'I know Kung Fu' });
```

You can update it from anywhere in the application with `subject.next`. This is extremely useful, and MobX and Redux never gave me this much freedom.

**Still not convinced?** I rewrote the Redux tutorial with the RxJS hooks approach, so you can compare two codebases that do the same thing. Here is [the original Redux Reddit tutorial](https://codesandbox.io/embed/reddit-api-react-redux-wllb6) and here is [the React + RxJS Reddit tutorial](https://codesandbox.io/s/how-react-should-be-50wp0).

## A side note

Someone pointed out that using components with subjects makes them tightly coupled. That is true in the sense that importing anything from an external library creates a hard dependency. But a hard dependency doesn't stop you from making something highly reusable. A styled component inside my custom component is a hard dependency too, but it is hidden when I import my component. The same goes for this approach.

## Conclusion

Behind the custom hook is a pretty little eight-liner:

```js
const useSharedState = subject => {
 const [value, setState] = useState(subject.getValue());
 useEffect(() => {
   const sub = subject.pipe(skip(1)).subscribe(s => setState(s));
   return () => sub.unsubscribe();
 });
 const newSetState = state => subject.next(state);
 return [value, newSetState];
};
```

Is this really new? Not really. There are many blog posts about similar ideas, but in my opinion people tend to slide into the complexity trap and introduce new frameworks. (Sorry, Akita, but you fell into that trap.)

This article is almost a mirror of [this one](https://github.com/leandrohsilveira/reactjs-hooks-rxjs). I didn't know it existed, and I assure you I came up with the idea independently. That doesn't matter much, though. What matters is being faithful to React's promise that it makes creating interactive UIs painless, and avoiding the unnecessary complexity of a new state manager or framework.
