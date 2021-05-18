# Redux Fundamentals

## Setup

- Run `npm install` to install all the dependencies, then:
- Run `npm test` to run tests in one terminal tab
- Open another terminal tab, and run `npm start` to run the project in the
  browser

In the tab that is running tests, you can press the `p` key to select a specific
test file to run. For example, hitting `p` and then typing `reducer` will run
the first test.

## Instructions

The `src` directory has two folders: one for the solution code, and one for the
exercises. You'll be working in the `exercises` folder.

Each deliverable in the `exercises` folder has comments to guide your work!

There are some emojis to let you know what to do:

- ✅ Write some code!
- 📃 Check out some documentation for help!

> All credit to [Kent C Dodds](https://kentcdodds.com/) for the emoji guide
> idea!

The main code that will run our app is in `src/index.js`. If you want to see a
working solution, change the code to use import from the `solutions` folder
instead of `exercises`.

## Deliverables

### 01 - Create a Reducer Function

Reducers are at the heart of any Redux application. The Redux documentation does
a great job describing reducer functions - make sure to read this section on
reducers before moving ahead:

[https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers)

This reducer function will be used to update our state.

Every time we want to update state, we'll call the reducer function with the
_current state_ and an _action object_ that describes how we want state to be
updated.

Update this function so that it returns a new value based on the state and action.

- _state_ will be a number representing the current count
- _action_ will be an object with a type (string) and payload (number)

Example:

```js
reducer(0, { type: "counter/add", payload: 10 });
// => 10

reducer(10, { type: "counter/add", payload: 10 });
// => 20
```

Use some control flow (such as if-else, or switch) to return a different value
based on the action type.

You must _always_ return some new state from this function!

### 02 - Set up the Store

All of our Redux state is held in a special object known as the `store`. The
store will give us the ability to:

- access (read) state
- update (write) state
- subscribe to changes in state

To set up the store, we need to use the `createStore` function from Redux,
and pass in a reducer function (we can use the one we created in the first exercise):

```js
const store = createStore(myReducer);
```

Don't overthink this one - you shouldn't have to write much code here!

### 03 - Dispatching Actions to Update State

Any time we want to _update_ state, we can do so by **dispatching an action** to
the store.

An **action** is an object with a type, and optionally a payload:

```js
const action = {
  type: "todos/add",
  payload: "Learn Redux",
};
```

When we dispatch an action to the store, the store will call our reducer
function to get the new state.

```js
store.getState();
// { todos: [] }
store.dispatch(action);
store.getState();
// { todos: ["Learn Redux"] }
```

Your job is to dispatch actions using the `store.dispatch()` method when the
buttons are clicked.

### 04 - Reading State from the Store

We can 'listen' to changes in the state using the `store.subscribe()` method.
This will run any time a new action is dispatched to the store.

When the store is updated, we can update the DOM with changes!

> This step will look a bit different in React, so don't worry so much about the
> subscribe method.

Inside the callback for subscribe, we can access the state any time a new action
is dispatched:

```js
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});
```

You can try this in the browser by adding a `console.log` in the subscribe
method, and dispatching actions using the button click events from the previous
exercise.

Use the `store.getState()` method to get the current count from the store, and
update the DOM!

### 05 - Action Creators

One common pattern in Redux to make it easier to dispatch actions is to create
special functions known as **action creators**. The purpose of an action creator
is to return an **action object** that is formatted in the way that our reducer
expects.

For example, instead of this:

```js
const action = { type: "counter/incrementedBy", payload: 10 };
store.dispatch(action);
```

I can generate the action using an action creator:

```js
// action creator!
function incrementedBy(10) {
  return { type: "counter/incrementedBy", payload: 10 }
}

const action = incrementedBy(10)
store.dispatch(action)
```

Typically, you'll write the action creator in the same file as your reducer, and
any time you add a new case to your reducer, you can write the corresponding
action. This helps ensure that we don't accidentally make typos when writing the
action type that we're dispatching, and provides a more consistent interface
than making the action objects by hand.

## Takeaways

In your own words, write one or two sentences that describe each of these key terms:

- Redux
- reducer
- action
- store
- dispatch
