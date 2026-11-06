---
title: "I Don't Like GraphQL, So How About JSON and TypeScript?"
description: "Why I think plain JSON and TypeScript could replace GraphQL's query syntax for querying databases."
group: web
original: "https://kirill-novik.medium.com/i-dont-like-graphql-so-how-about-json-and-typescript-69765ca9e620"
---

In this article I explain why GraphQL's syntax bothers me, and why I think JSON and TypeScript could do the same job.

## Introduction

I will be honest with you. When I first saw GraphQL's syntax, I felt the same unpleasant feeling I get from the syntax of PHP, Perl or Bash.

I think JSON is a far more elegant way to represent data than XML, YAML or ProtoBuf. It's minimalist, easy to read and consistent, and it works seamlessly with JS/TS and Python.

So my heart sinks when I see JSON mutilated by query languages that claim to get things out of a database in a "familiar" way.

I know GraphQL services and declarations are meant to be language agnostic, so the problem was "solved" by creating a new language. I find that a bit funny. It reminds me of not wanting to favor anyone in a group, so you favor someone outside the group whom everybody dislikes equally.

JS/TS is the de facto language of the web, and it is what will be used for querying. Doesn't it follow that we should piggyback on it and make everybody's life easier?

## Querying a database with TypeScript and JSON

Enough complaining. I wanted to show you what I mean with concrete examples, based on the official [GraphQL documentation](https://graphql.org/learn/schema/). Here is a small, contrived example of how I would like to query a database. Feel free to disagree.

Schemas and types (`01-schemas-and-types.ts`):

```ts
// Example of how types could be declared using TS interfaces

interface IEpisode {
  title: string;
}

interface ICharacter {
  name: string;
  appearsIn: IEpisode[];
}

interface IHero extends ICharacter {
  name: string;
  friends: ICharacter[];
}

interface IStarship {
  id: string;
  name: string;
  length: {
    unit: "METER" | "FOOT";
    value: number;
  };
}
```

Fields (`02-fields.ts`):

```ts
// An example of querying first hero the DB returns 
const firstHero: IHero = {
  name: "",
  appearsIn: [],
  friends: [
    {
      name: "",
      appearsIn: [],
    },
  ],
};

// An example of getting all heros in the DB
const allHeroes: IHero[] = [
  {
    name: "",
    appearsIn: [],
    friends: [
      {
        name: "",
        appearsIn: [],
      },
    ],
  },
];

// An example of getting a more specific result
const firstHeroWithArguments: IHero = {
    name: "Luke Skywalker",
    appearsIn: [{
        title: 'Return of the Jedi'
    }],
    friends: []
}

// An example of getting a result using regex
const firstHeroWithRegexArguments: IHero = {
    name: "/^luke.*/i",
    appearsIn: [{
        title: '/^return.*/i'
    }],
    friends: []
}
```

Fragments (`03-fragment.ts`):

```ts
// Reusable fragments done with the spread operator
const fragment: IHero = {
    name: '',
    appearsIn: [],
    friends: []
}

const comparison = {
    leftComparison: {
        episode: 'Empire',
        ...fragment
    },
    rightComparison: {
        eposode: 'Jedi',
        ...fragment
    }
}
```

Directives and variables (`04-directives-and-variables.ts`):

```ts
// Example of conditional "directive" using a variable
const shouldIncludeFriends = false;

const heroWithQuery: IHero = {
  name: "",
  appearsIn: [],
  ...(!!shouldIncludeFriends && {
    friends: [],
  }),
};
```

Mutations (`05-mutations.ts`):

```ts
// Example of querying API

// For reading
readEntity(heroWithQuery);

// For mutating 
createEntity(heroWithQuery);
updateEntity(heroWithQuery);
deleteEntity(heroWIthQuery);
```

## Conclusion

I wanted to keep this short, but clear enough for my intentions to be understood.

I think something as simple as what I outlined could work as a way to query databases in a similar fashion to GraphQL. It comes with its own challenges, of course. But it would be much more elegant, because it is nothing more than the client-side TypeScript you would have to write anyway.
