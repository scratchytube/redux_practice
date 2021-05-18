# Redux Intro

- [Redux Docs](https://redux.js.org/introduction/getting-started)

## Global State

What are some challenges you've encountered when working with state?

- example
- example
- example

## Core Concepts

Redux helps solve problems related to _state_ and _data flow_ in our applications.

In React, we can define state at the component level, and then pass it down via
props to any child components that need access to it. In order to _update_ state,
we can also pass down a callback function as a prop.

There's nothing inherently wrong with this approach; however, for larger/more
complex applications, there are some useful patterns that have emerged over time
to simplify managing state.

The Redux library is one popular tool to help implement these patterns.

In a nutshell, this is how Redux works:

- We keep all our _global state_ in a special object, the Redux store. This
  store is the _single source of truth_ for global state in our components.
- Whenever we need to _access_ state, we can read it _directly from the store_,
  without the need to pass down props.
- Whenever we need to _update_ state, we do so by _dispatching an action_, which
  is an object that describes how we are changing state.

Here's what the data flow looks like in Redux:

![Redux data flow diagram](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

And here's what passing data in a React application using Redux looks like:

![React Redux data flow](https://blog.codecentric.de/files/2017/12/Bildschirmfoto-2017-12-01-um-08.53.32.png)

## Learning Redux

We're going to approach learning Redux by first covering some of the core
concepts that are specific to Redux, before connecting to React.

First, we'll learn about these **Redux Fundamentals** concepts:

- store
- reducers
- actions
- dispatch

Then, we'll learn some useful tools from **Redux Toolkit** to make it easier to
get up and running with Redux.

Finally, we'll implement Redux in a **React Redux** application, and see how it
changes how we think about data flow in React.

One of the biggest challenges in learning Redux is keeping track of the
different terminology, and knowing what code is coming from what library. It's
strongly suggested that you take notes on terminology, and refer to the Redux
documentation often!
